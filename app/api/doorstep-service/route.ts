import { DoorStepService } from '@/lib/models';
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
      serviceType,
      address,
      preferredDate,
      preferredTime,
      additionalNotes
    } = body;

    // Validate required fields
    if (!customerName || !customerPhone || !serviceType || !address || !preferredDate || !preferredTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate service ID
    const serviceId = `DS-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Save to MongoDB
    const doorStepServiceData = {
      customerName,
      customerPhone,
      customerEmail: customerEmail || '',
      serviceType,
      address,
      preferredDate,
      preferredTime,
      additionalNotes: additionalNotes || '',
      timestamp: new Date(),
      status: 'pending'
    };

    const savedDoorStepService = await DoorStepService.create(doorStepServiceData);

    return NextResponse.json({
      success: true,
      data: savedDoorStepService,
      message: 'Door-step service request submitted successfully and saved to database',
      nextSteps: [
        'Our team will contact you within 2 hours to confirm your appointment',
        'Please keep your ID proof and gold items ready',
        'Our expert will visit your location at the scheduled time',
        'Service will be completed at your doorstep'
      ]
    });

  } catch (error) {
    console.error('Door-step service error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Door-step Service API - Use POST method to request door-step service',
    requiredFields: ['customerName', 'customerPhone', 'serviceType', 'address', 'preferredDate', 'preferredTime'],
    optionalFields: ['customerEmail', 'additionalNotes'],
    serviceTypes: ['gold-check', 'gold-sell', 'loan']
  });
}
