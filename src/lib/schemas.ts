import { z } from 'zod';

export const quoteStep1Schema = z.object({
  projectType: z.enum([
    'Rear / Side Return Extension',
    'Wrap-around Extension',
    'Dormer Loft Conversion',
    'Mansard Loft Conversion',
    'Basement & Structural Underpinning',
    'Full House Refurbishment',
    'New Build Residential',
    'Kitchen & Bathroom Fit-out',
    'Groundworks & External Works'
  ], {
    required_error: 'Please select a project type',
  }),
  propertyType: z.enum([
    'Victorian / Edwardian Terraced',
    'Semi-Detached',
    'Detached',
    'Maisonette / Flat',
    'Commercial to Residential Conversion',
    'Vacant Plot'
  ], {
    required_error: 'Please select your property type',
  }),
  approximateAreaSqM: z.number().min(10, 'Minimum area is 10 m²').max(1000, 'Maximum area is 1000 m²'),
});

export const quoteStep2Schema = z.object({
  postcode: z.string().min(5, 'Please enter a valid UK postcode (e.g. SW11 3TB)').max(10),
  propertyAddress: z.string().min(5, 'Please enter the street address'),
  planningStatus: z.enum([
    'Architectural drawings ready & Planning Approved',
    'Planning Application in Progress',
    'Permitted Development (No planning needed)',
    'Need architectural & planning support',
    'Just seeking initial budget feasibility'
  ]),
  partyWallRequired: z.enum(['Yes', 'No', 'Unsure']),
  targetStartDate: z.enum([
    'Immediate (Next 4 weeks)',
    '1–3 months',
    '3–6 months',
    '6+ months (Planning stage)'
  ]),
});

export const quoteStep3Schema = z.object({
  budgetRange: z.enum([
    '£40k – £75k',
    '£75k – £150k',
    '£150k – £250k',
    '£250k – £500k',
    '£500k+'
  ]),
  finishLevel: z.enum(['Builder Standard', 'Premium Architectural', 'Bespoke Luxury']),
  projectNotes: z.string().optional(),
  honeypot: z.string().max(0, 'Spam detected').optional(),
});

export const quoteStep4Schema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid UK contact number (e.g. 07448492982)'),
  preferredContact: z.enum(['Phone Call', 'WhatsApp', 'Email']),
  siteVisitPreferredDays: z.array(z.string()).min(1, 'Please select at least one preferred day for site survey'),
  consentToContact: z.literal(true, {
    errorMap: () => ({ message: 'You must consent to SARQ LTD contacting you regarding your enquiry' }),
  }),
});

export const fullQuoteSchema = quoteStep1Schema
  .merge(quoteStep2Schema)
  .merge(quoteStep3Schema)
  .merge(quoteStep4Schema);

export type FullQuoteFormData = z.infer<typeof fullQuoteSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  serviceRequired: z.string().min(1, 'Please select a service'),
  postcode: z.string().min(4, 'Please enter your project postcode'),
  message: z.string().min(10, 'Please describe your project (minimum 10 characters)'),
  honeypot: z.string().max(0, 'Spam detected').optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const subcontractorFormSchema = z.object({
  companyOrName: z.string().min(2, 'Name / Company is required'),
  trade: z.string().min(2, 'Trade / Specialism is required'),
  utrOrCompanyNo: z.string().min(4, 'UTR or Company Number is required'),
  cisRegistered: z.enum(['Yes (Gross)', 'Yes (20% Deduction)', 'Yes (30% Deduction)', 'No']),
  publicLiabilityInsured: z.enum(['Yes (£5M+)', 'Yes (£2M+)', 'In Progress']),
  phone: z.string().min(10, 'Phone is required'),
  email: z.string().email('Valid email is required'),
  experienceYears: z.number().min(1, 'Experience in years required'),
  londonBoroughsOperated: z.string().min(2, 'Boroughs covered required'),
});

export type SubcontractorFormData = z.infer<typeof subcontractorFormSchema>;
