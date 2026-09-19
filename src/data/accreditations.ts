import { TeamMember, Accreditation } from '../types';

export const teamData: TeamMember[] = [
  {
    name: 'Sami Al-Qadi',
    role: 'Managing Director & Founder',
    experience: '18+ Years Experience',
    qualifications: ['BSc (Hons) Construction Management', 'CIOB Member', 'SMSTS Certified'],
    bio: 'Oversees company strategy, client procurement, and high-value project delivery. Passionate about engineering rigor, transparent client communication, and punctual execution on every London project.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Marcus Vance',
    role: 'Senior Contracts & Operations Manager',
    experience: '15+ Years Experience',
    qualifications: ['NVQ Level 7 Construction Senior Management', 'NEBOSH Construction', 'First Aid at Work'],
    bio: 'Responsible for daily site operations, procurement logistics, sub-trade programming, and strict adherence to JCT contract milestones across all active South West London sites.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Eleanor Davies',
    role: 'Lead Project Quantity Surveyor & Estimator',
    experience: '12+ Years Experience',
    qualifications: ['MRICS Chartered Quantity Surveyor', 'BSc Commercial Management'],
    bio: 'Guarantees transparent, comprehensive itemised schedules of work, manages supply chain procurement, and ensures fixed-budget certainty with zero hidden variations.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'David O’Connor',
    role: 'Head of Structural Works & Heavy Groundworks',
    experience: '20+ Years Experience',
    qualifications: ['CPCS Appointed Person', 'CITB Temporary Works Coordinator', 'Deep Underpinning Specialist'],
    bio: 'Directs complex structural steel installations, basement underpinning, heavy retaining walls, and precision foundation engineering.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
  }
];

export const accreditationsData: Accreditation[] = [
  {
    name: 'CHAS Advanced Contractor',
    code: 'CHAS-UK-17460532',
    type: 'trade',
    description: 'Contractors Health and Safety Assessment Scheme accreditation demonstrating strict compliance with UK safety legislation and CDM 2015 regulations.',
    benefitToHomeowner: 'Ensures your residential project is executed under the highest UK health, safety, and site hygiene standards.',
    iconName: 'ShieldCheck'
  },
  {
    name: 'Building Regulations Certified',
    code: 'LABC / Approved Inspectors',
    type: 'statutory',
    description: 'Seamless coordination with Local Authority Building Control (Wandsworth, Lambeth, Merton) and licensed private approved inspectors.',
    benefitToHomeowner: 'Guarantees every structural steel, thermal envelope, and fire escape detail receives statutory final sign-off.',
    iconName: 'FileCheck2'
  },
  {
    name: 'Gas Safe Register Compliance',
    code: 'Registered Partner Trades',
    type: 'trade',
    description: 'All domestic boiler, unvented Megaflo cylinder, and gas pipeline works are installed and tested by certified Gas Safe engineers.',
    benefitToHomeowner: 'Official Gas Safe Building Regulations certificate provided on practical completion.',
    iconName: 'Flame'
  },
  {
    name: 'NICEIC / NAPIT Certified Electrical',
    code: 'Part P Registered',
    type: 'trade',
    description: 'Complete domestic rewires, consumer unit replacements, and smart home lighting installations carried out by certified competent persons.',
    benefitToHomeowner: 'Part P Electrical Safety certificate and 6-year warranty on workmanship.',
    iconName: 'Zap'
  },
  {
    name: '£5,000,000 Public Liability Insurance',
    code: 'Policy No. UK-SARQ-PL5M',
    type: 'insurance',
    description: 'Substantial insurance protection covering third-party liability, neighbouring properties, and contractor works.',
    benefitToHomeowner: 'Total peace of mind during structural excavations, party wall works, and heavy steel crane operations.',
    iconName: 'Umbrella'
  },
  {
    name: 'Environment Agency Waste Carrier',
    code: 'Reg No. CBDU491028',
    type: 'statutory',
    description: 'Registered Upper Tier Waste Carrier ensuring all site rubble, timber, and excavated spoil are recycled through licensed UK transfer stations.',
    benefitToHomeowner: 'Guarantees zero illegal fly-tipping liability with complete duty of care waste transfer notes.',
    iconName: 'Recycle'
  },
  {
    name: '10-Year Structural Defect Warranty Partner',
    code: 'Premier / ICW Compatible',
    type: 'warranty',
    description: 'Insurance-backed 10-year latent defects structural warranties available on all major new builds, basements, and extensions.',
    benefitToHomeowner: 'Fully transferable policy accepted by all major UK mortgage lenders for future property resale.',
    iconName: 'Award'
  }
];
