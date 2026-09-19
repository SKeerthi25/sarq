import { BlogPost } from '../types';

export const blogData: BlogPost[] = [
  {
    id: 'london-extension-cost-guide-2025-2026',
    slug: 'london-extension-cost-guide-2025-2026',
    title: 'London Home Extension Costs: 2025/2026 Comprehensive Price Guide',
    excerpt: 'An authoritative breakdown of real building costs for side-return, rear, wrap-around, and double-storey extensions in South West London, including structural steel and finishes.',
    date: '15 January 2025',
    readTime: '8 min read',
    author: 'SARQ Technical Estimating Team',
    category: 'Cost Guides',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'Current Market Rates for London Domestic Extensions',
        paragraphs: [
          'Budgeting for a domestic extension in London requires understanding the difference between shell-only costs and full turnkey completion. In 2025/2026, typical turnkey building costs across South West London (Battersea, Wandsworth, Clapham, Fulham) range between £2,200 and £3,200 per square metre of new internal area, excluding VAT.',
          'For a standard 25 m² side-return or rear extension on a Victorian terraced home, baseline construction costs typically start from £55,000 to £75,000 for standard finishes, rising to £90,000 – £125,000 for architectural glazing, bespoke underfloor heating, and high-end kitchen fit-out.'
        ],
        callout: 'Rule of thumb: Always budget a 10% contingency for older period properties to account for unforeseen sub-floor drainage or joist remedial works during strip-out.'
      },
      {
        heading: 'Key Cost Drivers to Factor Into Your Budget',
        paragraphs: [
          'Structural Steelwork: Creating wide, unbroken open-plan spaces requires substantial fabricated steel goalposts. Depending on crane access and span length (e.g. 6–8m), steel packages range between £6,000 and £16,000 installed.',
          'Glazing Systems: Crittall-style steel doors and ultra-slim sliding aluminium patio doors (such as Cortizo or Schuco) represent a significant portion of the budget, typically costing £1,200 – £2,000 per linear metre.',
          'Groundworks & Thames Water: Soil condition in South West London (predominantly London clay) dictates foundation depth. Deep trench-fill footings or screw piling near trees can add £4,000 – £9,000 compared to standard footings.'
        ]
      },
      {
        heading: 'Statutory Fees and Professional Costs',
        paragraphs: [
          'In addition to the physical build cost, homeowners must budget for statutory fees: Building Regulations application (£800 – £1,500), Party Wall Surveyor awards (£1,000 – £2,500 per adjoining neighbour if dissenting), Thames Water Build-Over agreement (£350 – £1,300), and Structural Engineer calculation packages (£1,200 – £2,500).'
        ]
      }
    ]
  },
  {
    id: 'party-wall-act-guide-homeowners',
    slug: 'party-wall-act-guide-homeowners',
    title: 'The Party Wall etc. Act 1996: A Plain English Guide for London Homeowners',
    excerpt: 'Everything you need to know about serving valid notices, managing dissenting neighbours, avoiding costly delays, and securing Party Wall Awards for extensions and lofts.',
    date: '28 November 2024',
    readTime: '6 min read',
    author: 'SARQ Compliance Directorate',
    category: 'Planning & Permits',
    coverImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'When Does the Party Wall Act Apply?',
        paragraphs: [
          'The Party Wall etc. Act 1996 is a legal framework designed to prevent and resolve disputes relating to party walls, boundary walls, and excavations near neighbouring buildings. It is not an alternative to planning permission, but a statutory requirement that must be fulfilled before construction commences.',
          'You must serve notice under Section 1 (new walls on boundary line), Section 2 (works directly affecting an existing party wall, such as inserting steel padstones or raising party parapets), or Section 6 (excavating within 3m or 6m of an adjacent structure to a depth lower than their foundations).'
        ],
        callout: 'Notices must be served at least 2 months prior to wall works, and at least 1 month prior to excavation works.'
      },
      {
        heading: 'Navigating Neighbour Consent or Dissent',
        paragraphs: [
          'Once notice is served, adjoining neighbours have 14 days to respond. If they consent in writing, works may proceed without surveyor fees, though a Schedule of Condition is strongly recommended to protect both parties.',
          'If a neighbour dissents or fails to respond within 14 days, a dispute is deemed to have arisen. You can either appoint an Agreed Surveyor to represent both properties impartially, or each party appoints their own surveyor to negotiate a formal Party Wall Award.'
        ]
      }
    ]
  },
  {
    id: 'loft-conversion-types-compared',
    slug: 'loft-conversion-types-compared',
    title: 'Rear Dormer vs Mansard vs Hip-to-Gable: Choosing the Right Loft Conversion',
    excerpt: 'Compare floor space gains, planning requirements, aesthetic impact, and structural complexities for London terraced and semi-detached properties.',
    date: '10 October 2024',
    readTime: '7 min read',
    author: 'SARQ Architectural Team',
    category: 'Design & Architecture',
    coverImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'Rear Dormer Conversions',
        paragraphs: [
          'The classic rear dormer is the most cost-effective and popular method for Victorian and Edwardian terraced properties. By extending vertically from the rear slope, it creates square, box-like rooms with full head height across the entire floorplate.',
          'Most rear dormers fall under Permitted Development (up to 40m³ volume allowance for terraced homes), meaning you do not usually require full planning permission unless located in a designated conservation area.'
        ]
      },
      {
        heading: 'Mansard Loft Conversions',
        paragraphs: [
          'A Mansard conversion replaces the rear roof pitch with a near-vertical (70-degree) slate or tile slope, finished with a flat roof and small dormer windows or French doors with Juliet balconies. Mansards are architecturally elegant and are frequently mandated by local councils (such as Wandsworth and Lambeth) in conservation areas.',
          'Mansards almost always require a formal Householder Planning Application, but offer the highest aesthetic value and maximum internal headroom.'
        ]
      }
    ]
  }
];
