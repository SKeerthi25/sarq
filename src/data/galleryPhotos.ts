export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: 'All' | 'Structural & Steel' | 'Extensions & Masonry' | 'Loft & Roofing' | 'Kitchens & Interiors' | 'Basement & Groundworks';
  location: string;
  phase: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'photo-01',
    src: '/photos/image.png',
    title: 'Precision Structural Steel Goalpost Installation',
    category: 'Structural & Steel',
    location: 'Battersea, SW11',
    phase: 'Structural Framework'
  },
  {
    id: 'photo-02',
    src: '/photos/image copy.png',
    title: 'Wrap-Around Extension Masonry & Cavity Wall Detailing',
    category: 'Extensions & Masonry',
    location: 'Wandsworth, SW18',
    phase: 'Brickwork & Superstructure'
  },
  {
    id: 'photo-03',
    src: '/photos/image copy 2.png',
    title: 'High-Performance L-Section Steel Beam Insertion',
    category: 'Structural & Steel',
    location: 'Clapham, SW4',
    phase: 'Load-Bearing Support'
  },
  {
    id: 'photo-04',
    src: '/photos/image copy 3.png',
    title: 'Bespoke Skylight & Structural Glass Roof Opening',
    category: 'Extensions & Masonry',
    location: 'Fulham, SW6',
    phase: 'Roof Glazing'
  },
  {
    id: 'photo-05',
    src: '/photos/image copy 4.png',
    title: 'Reinforced Concrete Foundation & Ground Slab Pour',
    category: 'Basement & Groundworks',
    location: 'Battersea, SW11',
    phase: 'Substructure & Screed'
  },
  {
    id: 'photo-06',
    src: '/photos/image copy 5.png',
    title: 'Victorian Rear Elevation Brick Tooth-In Restoration',
    category: 'Extensions & Masonry',
    location: 'Putney, SW15',
    phase: 'Period Masonry'
  },
  {
    id: 'photo-07',
    src: '/photos/image copy 6.png',
    title: 'Mansard Loft Dormer Timber Framing & Lead Cheeks',
    category: 'Loft & Roofing',
    location: 'Clapham Common, SW4',
    phase: 'Carpentry & Envelope'
  },
  {
    id: 'photo-08',
    src: '/photos/image copy 7.png',
    title: 'Open-Plan Architectural Living Hub Steel Span',
    category: 'Structural & Steel',
    location: 'Wimbledon Village, SW19',
    phase: 'Knock-Through & Padstones'
  },
  {
    id: 'photo-09',
    src: '/photos/image copy 8.png',
    title: 'Precision Water Underfloor Heating Pipework Grid',
    category: 'Kitchens & Interiors',
    location: 'Balham, SW12',
    phase: 'First Fix MEP'
  },
  {
    id: 'photo-10',
    src: '/photos/image copy 9.png',
    title: 'Handmade Shaker Kitchen Island & Quartz Fitting',
    category: 'Kitchens & Interiors',
    location: 'Battersea, SW11',
    phase: 'Second Fix Fit-Out'
  },
  {
    id: 'photo-11',
    src: '/photos/image copy 10.png',
    title: 'Subterranean Reinforced Waterproof Underpinning',
    category: 'Basement & Groundworks',
    location: 'Putney, SW15',
    phase: 'Geotechnical & Concrete'
  },
  {
    id: 'photo-12',
    src: '/photos/image copy 11.png',
    title: 'Slimline Crittall Aluminium Bifold Track Alignment',
    category: 'Extensions & Masonry',
    location: 'Chelsea, SW3',
    phase: 'Glazing & Thresholds'
  },
  {
    id: 'photo-13',
    src: '/photos/image copy 12.png',
    title: 'Roof Dormer Welsh Slate Cladding & Weatherproofing',
    category: 'Loft & Roofing',
    location: 'Wandsworth, SW18',
    phase: 'External Roofing'
  },
  {
    id: 'photo-14',
    src: '/photos/image copy 13.png',
    title: 'Marble Wet Room Waterproof Tanking & Brassware',
    category: 'Kitchens & Interiors',
    location: 'Fulham, SW6',
    phase: 'Bathroom Finishes'
  },
  {
    id: 'photo-15',
    src: '/photos/image copy 14.png',
    title: 'Multi-Level Flitch Beam & Floor Joist Sistering',
    category: 'Structural & Steel',
    location: 'Battersea Park, SW11',
    phase: 'Flooring Structure'
  },
  {
    id: 'photo-16',
    src: '/photos/image copy 15.png',
    title: 'Custom Laser-Levelled Screed & Herringbone Prep',
    category: 'Kitchens & Interiors',
    location: 'Clapham, SW4',
    phase: 'Floor Levelling'
  },
  {
    id: 'photo-17',
    src: '/photos/image copy 16.png',
    title: 'Rear Side-Return Trench Excavation & Drains',
    category: 'Basement & Groundworks',
    location: 'Battersea, SW11',
    phase: 'Ground Drainage'
  },
  {
    id: 'photo-18',
    src: '/photos/image copy 17.png',
    title: 'Acoustic SoundBloc Insulation & Stud Partitioning',
    category: 'Loft & Roofing',
    location: 'Wandsworth, SW18',
    phase: 'Insulation & Partitions'
  },
  {
    id: 'photo-19',
    src: '/photos/image copy 18.png',
    title: 'London Stock Brick Match & Lime Mortar Pointing',
    category: 'Extensions & Masonry',
    location: 'Putney, SW15',
    phase: 'Facade Restoration'
  },
  {
    id: 'photo-20',
    src: '/photos/image copy 19.png',
    title: 'Bespoke Hardwood Staircase Installation',
    category: 'Loft & Roofing',
    location: 'Clapham South, SW4',
    phase: 'Joinery & Access'
  },
  {
    id: 'photo-21',
    src: '/photos/image copy 20.png',
    title: 'Structural Box Frame Crane Hoist Sequence',
    category: 'Structural & Steel',
    location: 'Battersea, SW11',
    phase: 'Heavy Lifting'
  },
  {
    id: 'photo-22',
    src: '/photos/image copy 21.png',
    title: 'Turnkey Master Bedroom Vaulted Ceiling Framing',
    category: 'Loft & Roofing',
    location: 'Wimbledon, SW19',
    phase: 'Roof Structure'
  },
  {
    id: 'photo-23',
    src: '/photos/image copy 22.png',
    title: 'Bespoke Walnut Wardrobes & Integrated LED Channels',
    category: 'Kitchens & Interiors',
    location: 'Battersea, SW11',
    phase: 'Bespoke Cabinetry'
  },
  {
    id: 'photo-24',
    src: '/photos/image copy 23.png',
    title: 'Cavity Drain Membrane & Submersible Sump Station',
    category: 'Basement & Groundworks',
    location: 'Putney, SW15',
    phase: 'Delta Waterproofing'
  },
  {
    id: 'photo-25',
    src: '/photos/image copy 24.png',
    title: 'Architectural Glazed Link & Parapet Flashing',
    category: 'Extensions & Masonry',
    location: 'Fulham, SW6',
    phase: 'Exterior Detailing'
  },
  {
    id: 'photo-26',
    src: '/photos/image copy 25.png',
    title: 'Period Cornice & Plaster Moulding Restoration',
    category: 'Kitchens & Interiors',
    location: 'Wandsworth, SW18',
    phase: 'Fine Plastering'
  },
  {
    id: 'photo-27',
    src: '/photos/image copy 26.png',
    title: 'Steel Cantilever Support for Glass Balcony Deck',
    category: 'Structural & Steel',
    location: 'Battersea, SW11',
    phase: 'External Framework'
  },
  {
    id: 'photo-28',
    src: '/photos/image copy 27.png',
    title: 'Thermal PIR Rigid Board Ceiling & Wall Detailing',
    category: 'Loft & Roofing',
    location: 'Clapham, SW4',
    phase: 'Energy Efficiency'
  },
  {
    id: 'photo-29',
    src: '/photos/image copy 28.png',
    title: 'Porcelain Large-Format Patio Paving & Flush Sills',
    category: 'Extensions & Masonry',
    location: 'Putney, SW15',
    phase: 'External Landscaping'
  },
  {
    id: 'photo-30',
    src: '/photos/image copy 29.png',
    title: 'Unvented Megaflo Cylinder & Viessmann Boiler Bank',
    category: 'Kitchens & Interiors',
    location: 'Wimbledon, SW19',
    phase: 'Plant Room MEP'
  },
  {
    id: 'photo-31',
    src: '/photos/image copy 30.png',
    title: 'Solid European Prime Oak Herringbone Floor Laying',
    category: 'Kitchens & Interiors',
    location: 'Battersea, SW11',
    phase: 'Timber Flooring'
  },
  {
    id: 'photo-32',
    src: '/photos/image copy 31.png',
    title: 'Triple-Glazed Roof Lantern Precision Crane Drop',
    category: 'Extensions & Masonry',
    location: 'Wandsworth, SW18',
    phase: 'Lantern Glazing'
  },
  {
    id: 'photo-33',
    src: '/photos/image copy 32.png',
    title: 'Completed Turnkey Open-Plan Ground Floor Handover',
    category: 'Extensions & Masonry',
    location: 'Battersea, SW11',
    phase: 'Final Snag-Free Signoff'
  }
];
