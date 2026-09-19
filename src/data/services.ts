import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'new-build',
    slug: 'new-build',
    title: 'New Build Residential Construction',
    shortTitle: 'New Build',
    tagline: 'Precision residential construction from vacant plot to turnkey handover.',
    description: 'We undertake bespoke new build construction for private clients, self-builders, and boutique developers across South West London. From engineered reinforced groundworks and steel frame superstructures to final architectural joinery and EPC A-rated energy efficiency standards.',
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Building2',
    durationAvg: '36 – 52 Weeks',
    startingCost: '£2,400 / m²',
    keyFeatures: [
      'Turnkey project management under standard JCT Minor Works or Intermediate Contracts',
      'Engineered reinforced concrete slab & deep piled foundations',
      'Air source heat pump (ASHP) & MVHR heat recovery mechanical integration',
      '10-Year Insurance-Backed Structural Defects Warranty'
    ],
    scope: [
      'Site clearance, topographical survey & soil testing',
      'Structural calculations, steel fabrication & installation',
      'Passivhaus-standard airtight insulation and triple-glazed envelopes',
      'Smart home automated lighting, zoned underfloor heating & audio wiring',
      'Full Building Control sign-off and Final Practical Completion certification'
    ],
    processSteps: [
      { title: '01. Pre-Construction & Site Logistics', desc: 'Party wall agreements, site hoarding, tree protection orders (TPO) and Thames Water build-over approvals.' },
      { title: '02. Groundworks & Substructure', desc: 'Engineered excavation, piling, reinforced ring beams, foul drainage and damp-proof membrane installation.' },
      { title: '03. Superstructure & Weathertight Envelope', desc: 'Masonry or ICF/timber-frame erection, steel beam insertion, roof trusses, slating and high-performance glazing.' },
      { title: '04. First & Second Fix Trades', desc: 'Mechanical, electrical, plumbing, acoustic insulation, drylining, screeding, bespoke cabinetry and micro-cement finishes.' },
      { title: '05. Commissioning, Snagging & Handover', desc: 'Full testing of services, Building Control completion certificate, O&M manuals and 12-month defect liability period.' }
    ],
    complianceNotes: [
      'Full compliance with Part L (Conservation of fuel and power), Part P (Electrical safety), and Part B (Fire safety) of Building Regulations.',
      '10-Year structural warranty provided via leading UK providers (Premier Guarantee / ICW).'
    ],
    typicalTimelineWeeks: 44
  },
  {
    id: 'extensions',
    slug: 'extensions',
    title: 'House Extensions & Open-Plan Living',
    shortTitle: 'Extensions',
    tagline: 'Single, double-storey and wrap-around extensions that transform London homes.',
    description: 'Specialists in unlocking rear and side-return potential in Victorian, Edwardian and modern London properties. We merge engineered structural steelwork with architectural glazing, flush patio transitions, and sun-lit vaulted roofs.',
    heroImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Maximize2',
    durationAvg: '12 – 18 Weeks',
    startingCost: '£55,000',
    keyFeatures: [
      'Side-return, rear infill, double-storey & wraparound configurations',
      'Structural box frame steelwork creating clear unbroken spans up to 8 metres',
      'Crittall-style steel doors, ultra-slim aluminium bi-folds and frameless roof lanterns',
      'Seamless level-threshold transitions to landscaped gardens'
    ],
    scope: [
      'Permitted Development (LDC) or Full Planning application support',
      'Party Wall surveyor liaisons and Schedule of Condition reports',
      'Thames Water Section 106 / Build-Over agreements',
      'Underfloor heating (water/electric) with smart multi-zone thermostats',
      'Polished concrete, engineered oak or large-format porcelain floor screeding'
    ],
    processSteps: [
      { title: '01. Feasibility & Survey', desc: 'Detailed laser survey, boundary checks, structural engineer review and fixed lump-sum quotation.' },
      { title: '02. Party Wall & Ground Preparation', desc: 'Party wall award execution, dust-sealed site setup, excavation and concrete footings.' },
      { title: '03. Steelwork & Knock-Through', desc: 'Propping existing brickwork with Acrow props and Strongboys, hoisting goalpost steels, and knockout.' },
      { title: '04. Glazing & Weathertight Shell', desc: 'Fitting structural glazed rooflights, aluminium sliding doors, parapet coping and flat roof membranes.' },
      { title: '05. Fit-Out & Decoration', desc: 'Insulation, plastering, kitchen installation, second-fix electrics and exterior patio junction finishes.' }
    ],
    complianceNotes: [
      'Class A Permitted Development compliance where applicable (up to 3m/6m rear projection for terraced, 4m/8m for detached under prior approval).',
      'Building Regs structural calculations signed off by a chartered MIStructE engineer.'
    ],
    typicalTimelineWeeks: 14
  },
  {
    id: 'loft-conversions',
    slug: 'loft-conversions',
    title: 'Master Bedroom & En-Suite Loft Conversions',
    shortTitle: 'Loft Conversions',
    tagline: 'Maximise square footage with Dormer, Mansard, and Hip-to-Gable conversions.',
    description: 'Transform unutilised roof space into luxury master bedroom suites, walk-in dressing rooms, dedicated home offices, and spa bathrooms. Engineered to seamlessly match your existing roofline while adhering strictly to London conservation and planning guidelines.',
    heroImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Home',
    durationAvg: '8 – 12 Weeks',
    startingCost: '£45,000',
    keyFeatures: [
      'Rear Dormer, Mansard, Hip-to-Gable and Velux rooflight designs',
      'Reinforced steel ridge beam insertion with minimal internal disruption',
      'Zinc, slate, or traditional clay tile external cladding to match local vernacular',
      'Acoustic insulation between floors for complete sound isolation'
    ],
    scope: [
      'Structural ridge beam and floor joist upgrading',
      'Bespoke hardwood or softwood staircase matched to existing period balustrades',
      'Full en-suite bathroom plumbing, pressurised unvented water cylinder upgrades',
      'Fire-rated doors, hardwired smoke interlink detectors and 30-minute fire barriers'
    ],
    processSteps: [
      { title: '01. Scaffold & External Access', desc: 'Independent scaffold tower erected; trades access through the roof to keep home disruption to an absolute minimum.' },
      { title: '02. Structural Floor & Steels', desc: 'New steel beams slotted in place; timber floor joists hung independently of existing ceiling below.' },
      { title: '03. Dormer Framing & Weatherproofing', desc: 'Timber carcase constructed, breathable membrane installed, flat roof GRP/EPDM laid, and windows fitted.' },
      { title: '04. Staircase Installation', desc: 'Precision stair opening cut and custom-made stairs fitted to mirror the existing property layout.' },
      { title: '05. Internal Fit-Out', desc: 'Celotex insulation boards, drylining, bathroom tiling, sanitaryware fitment, and final decoration.' }
    ],
    complianceNotes: [
      'Compliant with Part K (Staircase headroom minimum 2.0m), Part B (Protected fire escape routes), and Permitted Development 40m³ (terraced) / 50m³ (semi-detached) volume limits.'
    ],
    typicalTimelineWeeks: 10
  },
  {
    id: 'basement-structural',
    slug: 'basement-structural',
    title: 'Basements & Complex Structural Alterations',
    shortTitle: 'Basement & Structural',
    tagline: 'Engineered subterranean expansions, loadbearing wall removals and underpinning.',
    description: 'Heavy domestic engineering for London homeowners requiring subterranean square footage or radical internal reconfigurations. We handle sequential concrete underpinning, waterproof cavity drain membrane systems, sump pump stations, and massive steel goalpost installations.',
    heroImage: '/photos/image copy 4.png',
    iconName: 'ShieldAlert',
    durationAvg: '20 – 36 Weeks',
    startingCost: '£110,000',
    keyFeatures: [
      'Sequential concrete underpinning (Pin-by-pin method under strict engineering supervision)',
      'Type C Cavity Drain Membrane waterproofing systems with dual battery-backup sump pumps',
      'Heavy structural steel frame designs for open-concept floor removals',
      'Lightwell excavation with walk-on structural glass panels'
    ],
    scope: [
      'Hydrogeological & geotechnical site investigations',
      'Structural temporary propping and monitoring using precision electronic tilt sensors',
      'Reinforced concrete retaining walls and retrofitted damp proofing',
      'Mechanical ventilation with heat recovery (MVHR) designed for subterranean comfort',
      'Delta Membrane certified waterproofing installation with 10-year warranty'
    ],
    processSteps: [
      { title: '01. Engineering & Approvals', desc: 'Basement Impact Assessment (BIA), Construction Management Plan (CMP), and Party Wall Awards with adjoining owners.' },
      { title: '02. Excavation & Underpinning', desc: 'Hand-dug or mini-excavator spoil removal in sequential 1-metre pins with dry-pack mortar packing.' },
      { title: '03. Concrete Slab & Drainage Channels', desc: 'Steel mesh reinforced slab poured over waterproof membrane; perimeter drainage channels embedded.' },
      { title: '04. Dual Sump Station & Cavity Lining', desc: 'Installation of dual submersible pumps with telemetric alert system and dimpled cavity membrane.' },
      { title: '05. Luxury Internal Fit-Out', desc: 'Cinema rooms, wine cellars, home gymnasiums, guest suites and wellness spas.' }
    ],
    complianceNotes: [
      'Fully adheres to BS 8102:2022 (Code of practice for protection of below ground structures against water from the ground).',
      'Backed by insurance guarantees and approved third-party waterproofing surveyor sign-offs.'
    ],
    typicalTimelineWeeks: 28
  },
  {
    id: 'refurbishment',
    slug: 'refurbishment',
    title: 'Full House Refurbishment & Restoration',
    shortTitle: 'Refurbishment',
    tagline: 'Complete internal and external turnkey transformations of London period residences.',
    description: 'From stripping back to bare brick to reinstating ornate period cornicing, modernising electrical networks, replumbing, and installing bespoke joinery. We manage every single trade in-house to guarantee flawless execution, punctuality, and consistent quality.',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Wrench',
    durationAvg: '14 – 24 Weeks',
    startingCost: '£70,000',
    keyFeatures: [
      'Complete strip-out, structural rectification, damp-proofing, and rewiring',
      'Period restoration: sash window overhaul, plaster mouldings, ceiling roses, and cast iron radiators',
      'Modern updates: smart heating controls, unvented Megaflo water cylinders, acoustic floor insulation',
      'Turnkey handover with professional deep clean and comprehensive warranties'
    ],
    scope: [
      'Demolition, asbestos testing and certified disposal',
      '100% full rewiring (Part P certified, Consumer unit upgrade, Ethernet cat6 cabling)',
      'New central heating, designer radiators, multi-zone underfloor heating',
      'Drylining, skimming, micro-cement walls, bespoke fitted wardrobes and kitchen cabinetry',
      'External facade cleaning, repointing in lime mortar, and timber sash repair'
    ],
    processSteps: [
      { title: '01. Strip-out & Structural Inspection', desc: 'Non-loadbearing partition removal, floorboards lifted, full timber rot and damp inspection.' },
      { title: '02. Structural Repairs & Sub-floor Work', desc: 'Sistering weakened joists, leveling floors, and installing acoustic insulation batts.' },
      { title: '03. Complete First-Fix Services', desc: 'Full routing of new plumbing, waste pipes, gas runs, consumer units, lighting circuits and AV cables.' },
      { title: '04. Plastering & Architectural Trim', desc: 'Smooth skimming throughout, installation of skirting, architraves, ceiling coving, and wall paneling.' },
      { title: '05. High-End Second Fix & Finishing', desc: 'Hardwood floor laying, bathroom sanitaryware fitting, kitchen install, painting (Farrow & Ball / Little Greene).' }
    ],
    complianceNotes: [
      'Building Control sign-off for thermal upgrade of external walls (Part L1B) and replacement of consumer unit (Part P).'
    ],
    typicalTimelineWeeks: 18
  },
  {
    id: 'kitchens-bathrooms',
    slug: 'kitchens-bathrooms',
    title: 'Bespoke Kitchens & Luxury Bathrooms',
    shortTitle: 'Kitchens & Bathrooms',
    tagline: 'High-specification culinary spaces and spa-grade bathroom retreats.',
    description: 'Precision installation of luxury British and European kitchens, island cooktops, quartz worktops, bespoke pantries, walk-in wet rooms, frameless glass screens, and concealed thermostatic brassware.',
    heroImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Sparkles',
    durationAvg: '3 – 6 Weeks',
    startingCost: '£18,000',
    keyFeatures: [
      'Seamless kitchen cabinetry installation (Handleless, Shaker, bespoke hand-painted)',
      'Wet room tanking with Schluter waterproof membrane systems',
      'Mitred porcelain, bookmatched marble, and quartz worktop fabrication',
      'Concealed cisterns, ceiling shower heads, wall-hung sanitaryware and LED niche lighting'
    ],
    scope: [
      'Full strip-out of existing fixtures, subfloor reinforcement and waste realignments',
      'Plumbing upgrades: unvented Megaflo water pressure boosting, thermostatic valve installation',
      'Dedicated appliance circuits (Bora induction hobs, Quooker boiling taps, wine coolers)',
      'Precision tile laying (herringbone, large format 1200x600, terrazzo, zellige tiles)',
      'Mastic sealing, silicone caulking and final certification'
    ],
    processSteps: [
      { title: '01. Laser Measurement & CAD Review', desc: 'Reviewing manufacturer kitchen/bathroom plans against actual laser-scanned site dimensions.' },
      { title: '02. Strip-Out & Subsurface Preparation', desc: 'Removing old tiles/units, tanking wet zones with waterproof membrane, levelling floor.' },
      { title: '03. Mechanical & Electrical First Fix', desc: 'Repositioning water supplies, waste stacks, extractor ducts, island power, and underfloor heating cables.' },
      { title: '04. Cabinetry & Sanitary Installation', desc: 'Hanging wall units, levelling base units, laser templating worktops, installing basins and concealed valves.' },
      { title: '05. Worktop Fitting & Tiling', desc: 'Quartz/stone fitment, splashback tiling, grout sealing, appliance commissioning and testing.' }
    ],
    complianceNotes: [
      'Part P electrical certificate for special locations (bathrooms and kitchens).',
      'Water Regulations Advisory Scheme (WRAS) compliant plumbing fixtures.'
    ],
    typicalTimelineWeeks: 4
  },
  {
    id: 'groundworks-roofing-external',
    slug: 'groundworks-roofing-external',
    title: 'Groundworks, Roofing & External Envelopes',
    shortTitle: 'Groundworks & Roofing',
    tagline: 'Heavy site excavations, drainage, structural roofing, and exterior brickwork.',
    description: 'The critical structural shell and exterior envelope services that protect your building for decades. We execute deep foundation trenching, foul drainage connections, steel-reinforced retaining walls, natural Spanish slate re-roofing, leadwork valleys, and external rendering.',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Hammer',
    durationAvg: '4 – 10 Weeks',
    startingCost: '£12,000',
    keyFeatures: [
      'Trench-fill and raft foundations, concrete retaining walls and site levelling',
      'Thames Water approved sewer connections, soakaways and attenuation crates',
      'Natural slate, clay plain tile, and seamless single-ply EPDM flat roofs',
      'Code 4 / Code 5 milled lead flashings, chimney re-pointing and copings'
    ],
    scope: [
      'Excavator operations, bulk earth movement, and muck-away grab lorries',
      'Surface water drainage, ACO channels, manhole installations, and inspection chambers',
      'Breathable roof underlay, treated timber battens, dry ridge systems, and velux roof windows',
      'K-Rend silicone rendering, brick repointing, and damp proof course injection'
    ],
    processSteps: [
      { title: '01. Site Survey & Ground Testing', desc: 'CCTV drainage surveys, trial holes to determine soil load capacity and water table levels.' },
      { title: '02. Excavation & Drainage Installation', desc: 'Precision trenching, laying pipework to laser falls, backfilling with pea gravel, and building control inspection.' },
      { title: '03. Concrete Pouring & Retaining Structures', desc: 'Pouring C30/C35 strength structural concrete with rebar reinforcement.' },
      { title: '04. Roof Carpentry & Weather-Membrane', desc: 'Rafter replacement, fascia and soffit renewal, breathable Tyvek underlay installation.' },
      { title: '05. Slating / Tiling & Lead Dressing', desc: 'Laying natural slates with copper nails, dressed lead valleys and flashings, and guttering.' }
    ],
    complianceNotes: [
      'Part H Building Regs (Drainage and waste disposal).',
      'National Federation of Roofing Contractors (NFRC) guidelines and Lead Sheet Association standards.'
    ],
    typicalTimelineWeeks: 6
  }
];
