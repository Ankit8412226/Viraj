import { GoldCheck } from '@/lib/models';
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
      currentPrice
    } = body;

    // Validate input
    if (!customerName || !customerPhone || !goldType || !weight || !purity || !currentPrice) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Calculate gold value
    const purityMultiplier = purity / 100;
    const goldValue = weight * purityMultiplier * currentPrice;

    // Calculate market value (with some margin for business)
    const marketValue = goldValue * 0.95; // 5% margin

    // Generate unique transaction ID
    const transactionId = `GC-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Create gold check data
    const goldCheckData = {
      transactionId,
      customerName,
      customerPhone,
      customerEmail: customerEmail || '',
      goldType,
      weight,
      purity,
      currentPrice,
      goldValue,
      marketValue,
      timestamp: new Date(),
      status: 'completed'
    };

    // Save to MongoDB
    const savedGoldCheck = await GoldCheck.create(goldCheckData);

    return NextResponse.json({
      success: true,
      data: savedGoldCheck,
      message: 'Gold check completed successfully and saved to database'
    });

  } catch (error) {
    console.error('Gold check error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Gold Check API - Use POST method to check gold',
    requiredFields: ['customerName', 'customerPhone', 'goldType', 'weight', 'purity', 'currentPrice'],
    optionalFields: ['customerEmail']
  });
}
