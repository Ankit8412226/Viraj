import mongoose from 'mongoose';

// User Inquiry Schema
const userInquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  inquiryType: { type: String, required: true },
  message: { type: String },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, default: 'new' }
});

// Gold Check Schema
const goldCheckSchema = new mongoose.Schema({
  transactionId: { type: String, required: true, unique: true },
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  customerEmail: { type: String },
  goldType: { type: String, required: true },
  weight: { type: Number, required: true },
  purity: { type: Number, required: true },
  currentPrice: { type: Number, required: true },
  goldValue: { type: Number, required: true },
  marketValue: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, default: 'completed' }
});

// Gold Sale Schema
const goldSaleSchema = new mongoose.Schema({
  transactionId: { type: String, required: true, unique: true },
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  customerEmail: { type: String },
  customerAddress: { type: String },
  goldType: { type: String, required: true },
  weight: { type: Number, required: true },
  purity: { type: Number, required: true },
  currentPrice: { type: Number, required: true },
  sellingPrice: { type: Number, required: true },
  goldValue: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, default: 'pending' }
});

// Loan Application Schema
const loanApplicationSchema = new mongoose.Schema({
  transactionId: { type: String, required: true, unique: true },
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  customerEmail: { type: String },
  goldWeight: { type: Number, required: true },
  goldPurity: { type: Number, required: true },
  currentGoldPrice: { type: Number, required: true },
  loanAmount: { type: Number, required: true },
  interestRate: { type: Number, required: true },
  tenureMonths: { type: Number, required: true },
  goldValue: { type: Number, required: true },
  ltvRatio: { type: Number, required: true },
  emi: { type: Number, required: true },
  totalInterest: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, default: 'pending' }
});

// Door Step Service Schema
const doorStepServiceSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  customerEmail: { type: String },
  serviceType: { type: String, required: true },
  address: { type: String, required: true },
  preferredDate: { type: String, required: true },
  preferredTime: { type: String, required: true },
  additionalNotes: { type: String },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, default: 'pending' }
});

// Create and export models
let UserInquiry: any;
let GoldCheck: any;
let GoldSale: any;
let LoanApplication: any;
let DoorStepService: any;

try {
  UserInquiry = mongoose.models.UserInquiry || mongoose.model('UserInquiry', userInquirySchema);
  GoldCheck = mongoose.models.GoldCheck || mongoose.model('GoldCheck', goldCheckSchema);
  GoldSale = mongoose.models.GoldSale || mongoose.model('GoldSale', goldSaleSchema);
  LoanApplication = mongoose.models.LoanApplication || mongoose.model('LoanApplication', loanApplicationSchema);
  DoorStepService = mongoose.models.DoorStepService || mongoose.model('DoorStepService', doorStepServiceSchema);
} catch (error) {
  // Models already exist
}

export { DoorStepService, GoldCheck, GoldSale, LoanApplication, UserInquiry };

