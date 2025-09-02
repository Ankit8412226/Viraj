import { UserInquiry } from '@/lib/models';
import connectDB from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const {
      name,
      email,
      phone,
      subject,
      message,
      preferredContact,
      inquiryType
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Generate contact ID
    const contactId = `CT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Create contact record
    const contactData = {
      contactId,
      customerInfo: {
        name,
        email,
        phone,
        preferredContact: preferredContact || 'email',
        inquiryType: inquiryType || 'general'
      },
      message: {
        subject,
        message,
        timestamp: new Date()
      },
      status: 'new',
      priority: inquiryType === 'urgent' ? 'high' : 'normal'
    };

    // Save to MongoDB
    const userInquiryData = {
      name,
      phone,
      email,
      inquiryType: inquiryType || 'general',
      message: `${subject}: ${message}`,
      timestamp: new Date(),
      status: 'new'
    };

    const savedUserInquiry = await UserInquiry.create(userInquiryData);

    return NextResponse.json({
      success: true,
      data: savedUserInquiry,
      message: 'Contact form submitted successfully and saved to database',
      nextSteps: [
        'We will respond within 24 hours',
        'For urgent inquiries, please call our helpline',
        'Check your email for confirmation'
      ]
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Contact API - Use POST method to submit contact form',
    requiredFields: ['name', 'email', 'phone', 'subject', 'message'],
    optionalFields: ['preferredContact', 'inquiryType'],
    inquiryTypes: ['general', 'gold-check', 'gold-sell', 'loan', 'urgent']
  });
}
