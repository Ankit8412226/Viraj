import { LoanApplication } from '@/lib/models';
import connectDB from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const {
      customerName,
      customerPhone,
      customerEmail,
      goldWeight,
      goldPurity,
      currentGoldPrice,
      loanAmount,
      interestRate,
      tenureMonths
    } = body;

    // Validate input
    if (!customerName || !customerPhone || !goldWeight || !goldPurity || !currentGoldPrice || !loanAmount || !interestRate || !tenureMonths) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Calculate gold value
    const purityMultiplier = goldPurity / 100;
    const goldValue = goldWeight * purityMultiplier * currentGoldPrice;

    // Calculate loan to value ratio (LTV)
    const ltvRatio = (loanAmount / goldValue) * 100;

    // Check if LTV is within acceptable range (typically 60-75%)
    const maxLTV = 75;
    const isLTVValid = ltvRatio <= maxLTV;

    // Calculate EMI
    const monthlyInterestRate = interestRate / (12 * 100);
    const emi = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureMonths) /
                (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);

    // Calculate total interest and amount
    const totalInterest = (emi * tenureMonths) - loanAmount;
    const totalAmount = emi * tenureMonths;

    // Generate loan application ID
    const loanId = `GL-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    const loanData = {
      loanId,
      goldDetails: {
        weight: goldWeight,
        purity: goldPurity,
        currentPrice: currentGoldPrice,
        goldValue: Math.round(goldValue * 100) / 100
      },
      loanDetails: {
        requestedAmount: loanAmount,
        approvedAmount: isLTVValid ? loanAmount : Math.round(goldValue * 0.75 * 100) / 100,
        interestRate,
        tenureMonths,
        emi: Math.round(emi * 100) / 100,
        totalInterest: Math.round(totalInterest * 100) / 100,
        totalAmount: Math.round(totalAmount * 100) / 100
      },
      analysis: {
        ltvRatio: Math.round(ltvRatio * 100) / 100,
        maxLTV,
        isLTVValid,
        recommendation: isLTVValid ? 'Loan approved' : 'Loan amount exceeds LTV limit'
      },
      timestamp: new Date()
    };

    // Save to MongoDB
    const loanApplicationData = {
      transactionId: loanId,
      customerName,
      customerPhone,
      customerEmail: customerEmail || '',
      goldWeight,
      goldPurity,
      currentGoldPrice,
      loanAmount,
      interestRate,
      tenureMonths,
      goldValue: Math.round(goldValue * 100) / 100,
      ltvRatio: Math.round(ltvRatio * 100) / 100,
      emi: Math.round(emi * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
      totalAmount: Math.round(totalAmount * 100) / 100,
      timestamp: new Date(),
      status: isLTVValid ? 'approved' : 'pending'
    };

    const savedLoanApplication = await LoanApplication.create(loanApplicationData);

    return NextResponse.json({
      success: true,
      data: savedLoanApplication,
      message: isLTVValid ? 'Loan calculation completed successfully and saved to database' : 'Loan amount adjusted based on LTV and saved to database'
    });

  } catch (error) {
    console.error('Loan calculator error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Gold Loan Calculator API - Use POST method to calculate loan',
    requiredFields: ['customerName', 'customerPhone', 'goldWeight', 'goldPurity', 'currentGoldPrice', 'loanAmount', 'interestRate', 'tenureMonths'],
    optionalFields: ['customerEmail'],
    maxLTV: '75%',
    note: 'Loan amount cannot exceed 75% of gold value'
  });
}
