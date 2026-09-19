import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'battersea-victorian-wrap-around',
    slug: 'battersea-victorian-wrap-around',
    title: 'The Battersea Victorian Wrap-Around',
    category: 'Extension',
    location: 'Battersea, London SW11',
    postcode: 'SW11',
    year: 2025,
    duration: '14 Weeks',
    budgetRange: '£95,000 – £125,000',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
    ],
    summary: 'A transformative wrap-around ground floor extension to a 4-bedroom Victorian terraced property, integrating a 4.5m frameless structural glass roof and ultra-slim Crittall-style doors.',
    clientBrief: 'The homeowners wanted to eliminate the dark, compartmentalised kitchen and narrow side passage, creating a light-filled open-plan kitchen, dining, and family living hub connected directly to their garden patio.',
    structuralChallenge: 'The project required removing two major loadbearing masonry walls across a 7.2m span, necessitating a three-piece interconnected steel goalpost system hoisted through a restricted Victorian residential street in Battersea.',
    sarqSolution: 'SARQ engineered a bespoke bolted box-frame steel solution, installed during sequenced temporary acrow propping without requiring road closures. We poured a polished concrete slab integrated with water underfloor heating and installed a 3.8m bespoke island with flush induction venting.',
    specifications: [
      { label: 'Floor Area Added', value: '42 m² net internal area' },
      { label: 'Structural Steelwork', value: '3.4 tonnes fabricated Universal Beams (UB)' },
      { label: 'Glazing System', value: 'Cortizo Cor Vision slim-line sliding glass + structural glass roof lantern' },
      { label: 'Flooring', value: 'Power-floated micro-cement with wet UFH' },
      { label: 'Energy Rating Impact', value: 'Upgraded property EPC from D (62) to B (84)' }
    ],
    clientQuote: {
      text: 'SARQ were absolute professionals from day one. Their team turned up at 7:30am on the dot every single morning, the site was immaculate, and the steel install was handled with surgical precision. Completed on budget and two days ahead of schedule.',
      author: 'Edward & Charlotte M.',
      area: 'Battersea, SW11'
    }
  },
  {
    id: 'clapham-common-mansard-suite',
    slug: 'clapham-common-mansard-suite',
    title: 'Clapham Common Mansard Master Suite',
    category: 'Loft Conversion',
    location: 'Clapham, London SW4',
    postcode: 'SW4',
    year: 2025,
    duration: '10 Weeks',
    budgetRange: '£65,000 – £85,000',
    coverImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80'
    ],
    summary: 'A 70-degree conservation-compliant Mansard loft conversion creating an expansive master suite with bespoke dressing room and marble en-suite overlooking Clapham Common.',
    clientBrief: 'Add a luxury master retreat to a 3-storey Victorian townhouse within a conservation area, ensuring compliance with local Lambeth planning constraints while maximising ceiling height and natural daylight.',
    structuralChallenge: 'Party wall party-line raising of 1.4m on both sides of a delicate 1890s brick parapet, coupled with tight 2.0m staircase headroom requirements under Part K building regulations.',
    sarqSolution: 'We designed a 70-degree slate-hung mansard with twin French doors and Juliet ironwork balustrades. A new bespoke staircase was crafted in our workshop to match the historic hardwood handrails below.',
    specifications: [
      { label: 'Usable Space Created', value: '38 m² (Bedroom, En-suite, Dressing Room)' },
      { label: 'External Cladding', value: 'Welsh Penrhyn natural slate with code 5 lead dormer cheeks' },
      { label: 'En-suite Fit-out', value: 'Schluter wet room, walk-in shower, Lusso Stone brushed gold brassware' },
      { label: 'Acoustics', value: 'Double 15mm SoundBloc plasterboard & 100mm Rockwool acoustic batts' }
    ],
    clientQuote: {
      text: 'Having our loft converted in a conservation area seemed daunting, but SARQ managed the party wall surveyors and council building inspectors effortlessly. The master suite feels like a 5-star boutique hotel.',
      author: 'Jonathan & Sophia R.',
      area: 'Clapham, SW4'
    }
  },
  {
    id: 'wandsworth-full-house-refurbishment',
    slug: 'wandsworth-full-house-refurbishment',
    title: 'Wandsworth Townhouse Full Refurbishment',
    category: 'Refurbishment',
    location: 'Wandsworth, London SW18',
    postcode: 'SW18',
    year: 2024,
    duration: '20 Weeks',
    budgetRange: '£180,000 – £240,000',
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1600&q=80'
    ],
    summary: 'A 5-bedroom period townhouse back-to-brick restoration including structural wall relocations, full electrical rewire, hydronic underfloor heating, and bespoke oak architectural joinery.',
    clientBrief: 'A complete overhaul of a rundown 2,600 sq ft property that had not been updated in 45 years, turning it into an energy-efficient contemporary family home while retaining original period charm.',
    structuralChallenge: 'Extensive sub-floor wet rot and sagging joists across the ground and first floors required replacement of over 40 structural timber members, alongside complete damp proofing injection.',
    sarqSolution: 'SARQ stripped the entire property to brick, laser-levelled all floors, replaced joists with treated C24 structural timber, installed acoustic insulation, upgraded plumbing to an unvented 300L Megaflo system, and restored original cornicing.',
    specifications: [
      { label: 'Total Floor Area', value: '245 m² (5 Beds, 3 Baths, 2 Receptions)' },
      { label: 'Plumbing System', value: 'Viessmann 200-W System Boiler + 300L Megaflo Cylinder' },
      { label: 'Electrics', value: 'Lutron smart lighting controls, Cat6 ethernet network to every room' },
      { label: 'Joinery', value: 'Floor-to-ceiling bespoke shaker wardrobes with internal LED sensors' }
    ],
    clientQuote: {
      text: 'SARQ delivered a flawless finish across all 5 storeys. Their craftsmanship in the joinery and plastering is exceptional. No hidden variations, no excuses. A real construction company that delivers on its promises.',
      author: 'Marcus & Helena B.',
      area: 'Wandsworth, SW18'
    }
  },
  {
    id: 'putney-basement-spa-cinema',
    slug: 'putney-basement-spa-cinema',
    title: 'Putney Structural Basement & Wellness Suite',
    category: 'Basement',
    location: 'Putney, London SW15',
    postcode: 'SW15',
    year: 2024,
    duration: '28 Weeks',
    budgetRange: '£220,000 – £310,000',
    coverImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1600&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80'
    ],
    summary: 'A 65 m² subterranean basement excavation with 2.8m finished ceiling height, acoustic home cinema, temperature-controlled wine room, and private sauna wellness suite.',
    clientBrief: 'Excavate beneath the existing footprint of a detached Putney residence without disturbing the upper floors where the clients continued to work from home.',
    structuralChallenge: 'Excavating 3.2m below existing footings in heavy London clay while preventing settlement in adjacent structures, managing continuous groundwater ingress.',
    sarqSolution: 'Sequential 1m underpinning pins poured with waterproof C35 concrete, accompanied by a Delta Type C dual-cavity drainage membrane and automated dual submersible pumps with SMS telemetry.',
    specifications: [
      { label: 'Excavated Volume', value: '260 m³ spoil safely removed via conveyor system' },
      { label: 'Waterproofing', value: 'Delta Type C Cavity Drain + Newton Dual Sump Station' },
      { label: 'Ventilation', value: 'Zehnder ComfoAir MVHR heat recovery subterranean unit' },
      { label: 'Ceiling Height', value: '2.85m clear internal height with flush architectural LED troughs' }
    ],
    clientQuote: {
      text: 'Excavating under our home was a massive undertaking, but SARQ handled the geotechnical monitoring and engineering flawlessly. The basement is bone-dry, whisper-quiet, and our favourite part of the house.',
      author: 'David & Natasha V.',
      area: 'Putney, SW15'
    }
  },
  {
    id: 'fulham-contemporary-new-build',
    slug: 'fulham-contemporary-new-build',
    title: 'Fulham Passivhaus-Inspired Detached Home',
    category: 'New Build',
    location: 'Fulham, London SW6',
    postcode: 'SW6',
    year: 2025,
    duration: '42 Weeks',
    budgetRange: '£650,000 – £850,000',
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80'
    ],
    summary: 'A turnkey detached 4-bedroom contemporary new build with Peterson Kolumba brickwork, integrated green roof, air source heat pump, and triple glazed Schüco architectural glazing.',
    clientBrief: 'Construct a state-of-the-art energy-efficient urban residence on a tight infill plot in Fulham, achieving EPC A-rating and near-zero carbon operational performance.',
    structuralChallenge: 'Constrained urban site access with narrow boundary clearances requiring CFA (Continuous Flight Auger) piling and precision crane lifts for pre-insulated floor cassettes.',
    sarqSolution: 'SARQ acted as Principal Contractor under a JCT Standard Building Contract, managing piling, structural steel erection, airtight envelope detailing (achieving 0.58 ACH air test), and luxury interior finishes.',
    specifications: [
      { label: 'Internal Floor Area', value: '310 m² across 3 levels' },
      { label: 'Energy Performance', value: 'EPC A (96) with 6.4 kW Solar PV array + 10 kWh battery storage' },
      { label: 'Heating & Cooling', value: 'Daikin Altherma 3 ASHP with active summer cooling' },
      { label: 'Structural Warranty', value: '10-Year Premier Guarantee Policy' }
    ],
    clientQuote: {
      text: 'From the initial ground breaking to receiving our keys and building control certificate, SARQ operated with transparency and consummate skill. Truly first-class builders.',
      author: 'Alistair & Claire T.',
      area: 'Fulham, SW6'
    }
  },
  {
    id: 'wimbledon-luxury-kitchen-extension',
    slug: 'wimbledon-luxury-kitchen-extension',
    title: 'Wimbledon Village Architectural Extension',
    category: 'Kitchen & Bathroom',
    location: 'Wimbledon Village, London SW19',
    postcode: 'SW19',
    year: 2025,
    duration: '12 Weeks',
    budgetRange: '£85,000 – £115,000',
    coverImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80'
    ],
    summary: 'A bespoke kitchen expansion featuring handmade walnut and painted shaker cabinetry, Calacatta Gold bookmatched quartz, Quooker boiling tap, and herringbone oak flooring.',
    clientBrief: 'Create a chef-grade family kitchen and entertaining area with a huge centre island, walk-in concealed larder, and flush connection to an outdoor kitchen patio.',
    structuralChallenge: 'Re-routing major water and gas main services while inserting a 5.5m flitch beam to remove internal partition pillars.',
    sarqSolution: 'Executed in 12 weeks with zero delays. Seamless subfloor levelling, high-output electric underfloor heating, and precision joinery installation.',
    specifications: [
      { label: 'Worktops', value: '30mm Calacatta Gold Quartz with waterfall mitred island edge' },
      { label: 'Appliances', value: 'Miele Generation 7000 ovens & Bora Pure induction cooktop' },
      { label: 'Flooring', value: 'Prime European Oak 90x450mm herringbone with acoustic underlay' }
    ],
    clientQuote: {
      text: 'The finish on our kitchen is breathtaking. Every line, mitre, and tile is pin-sharp. SARQ took genuine pride in their work.',
      author: 'Simon & Penny G.',
      area: 'Wimbledon, SW19'
    }
  }
];
