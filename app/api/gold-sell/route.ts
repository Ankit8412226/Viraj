import { GoldSale } from '@/lib/models';
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
      goldType,
      weight,
      purity,
      currentPrice,
      sellingPrice,
      customerAddress,
      idProof,
      idNumber
    } = body;

    // Validate required fields
    if (!customerName || !customerPhone || !goldType || !weight || !purity || !currentPrice || !sellingPrice) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Calculate gold value
    const purityMultiplier = purity / 100;
    const goldValue = weight * purityMultiplier * currentPrice;

    // Generate unique transaction ID
    const transactionId = `GS-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Create customer record
    const customerData = {
      transactionId,
      customerInfo: {
        name: customerName,
        phone: customerPhone,
        email: customerEmail || '',
        address: customerAddress || '',
        idProof: idProof || '',
        idNumber: idNumber || ''
      },
      goldDetails: {
        type: goldType,
        weight,
        purity,
        currentPrice,
        goldValue,
        sellingPrice
      },
      transaction: {
        status: 'pending',
        timestamp: new Date(),
        estimatedCompletion: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
      }
    };

    // Save to MongoDB
    const goldSaleData = {
      transactionId,
      customerName,
      customerPhone,
      customerEmail: customerEmail || '',
      customerAddress: customerAddress || '',
      goldType,
      weight,
      purity,
      currentPrice,
      sellingPrice,
      goldValue,
      timestamp: new Date(),
      status: 'pending'
    };

    const savedGoldSale = await GoldSale.create(goldSaleData);

    return NextResponse.json({
      success: true,
      data: savedGoldSale,
      message: 'Gold selling request submitted successfully and saved to database',
      nextSteps: [
        'Our team will contact you within 24 hours',
        'Please keep your ID proof ready',
        'Gold will be tested at our facility',
        'Payment will be processed after verification'
      ]
    });

  } catch (error) {
    console.error('Gold sell error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Gold Sell API - Use POST method to submit gold selling request',
    requiredFields: ['customerName', 'customerPhone', 'goldType', 'weight', 'purity', 'currentPrice', 'sellingPrice'],
    optionalFields: ['customerEmail', 'customerAddress', 'idProof', 'idNumber']
  });
}
