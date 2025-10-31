export interface Community {
  id: string
  slug: string
  name: string
  fullName: string
  location: string
  address?: string
  phone: string
  city: string
  status?: string
  hours?: string
  description?: string
}

export const communities: Community[] = [
  {
    id: 'jasper-point',
    slug: 'jasper-point',
    name: 'Jasper Point',
    fullName: 'Beazer Homes Jasper Point',
    location: 'Henderson, NV',
    phone: '(702) 747-9096',
    city: 'Henderson',
    status: 'Open',
    hours: 'Closes 6 PM',
    description: 'Jasper Point offers beautiful new construction homes in the heart of Henderson, featuring modern designs and desirable amenities for families and professionals.',
  },
  {
    id: 'juniper-trails',
    slug: 'juniper-trails',
    name: 'Juniper Trails',
    fullName: 'Beazer Homes Juniper Trails',
    location: 'Henderson, NV',
    phone: '(702) 747-3801',
    city: 'Henderson',
    status: 'Closed',
    hours: 'Opens 10 AM Sat',
    description: 'Juniper Trails presents an exceptional living experience in Henderson, with thoughtfully designed homes and convenient access to shopping, dining, and entertainment.',
  },
  {
    id: 'las-vegas-design-studio',
    slug: 'las-vegas-design-studio',
    name: 'Las Vegas Design Studio',
    fullName: 'Beazer Homes Las Vegas Design Studio',
    location: 'Henderson, NV',
    phone: '(702) 837-2100',
    city: 'Henderson',
    status: 'Open',
    hours: 'Closes 5 PM',
    description: 'Visit our Las Vegas Design Studio to explore design options and customize your perfect Beazer home. Online estimates available.',
  },
  {
    id: 'rainbow-crossing',
    slug: 'rainbow-crossing',
    name: 'Rainbow Crossing',
    fullName: 'Beazer Homes Rainbow Crossing',
    location: '6794 Nimbus Avenue',
    address: '6794 Nimbus Avenue',
    phone: '(702) 330-8182',
    city: 'Las Vegas',
    description: 'Rainbow Crossing features stunning new homes in a prime Las Vegas location, offering quality construction and modern living spaces.',
  },
  {
    id: 'emerson-estates',
    slug: 'emerson-estates',
    name: 'Emerson Estates',
    fullName: 'Beazer Homes Emerson Estates',
    location: '2583 Regency Cove Ct',
    address: '2583 Regency Cove Ct',
    phone: '(702) 850-6015',
    city: 'Las Vegas',
    status: 'Open',
    hours: 'Closes 6 PM',
    description: 'Emerson Estates provides elegant new construction homes with premium finishes and exceptional value in a desirable Las Vegas community.',
  },
  {
    id: 'marigold',
    slug: 'marigold',
    name: 'Marigold',
    fullName: 'Beazer Homes Marigold',
    location: '3946 Blooming Orange Ave',
    address: '3946 Blooming Orange Ave',
    phone: '(702) 509-1969',
    city: 'Las Vegas',
    status: 'Opening Soon',
    hours: 'Opens Nov 15',
    description: 'Marigold is a brand new community coming soon, featuring beautifully designed homes in a vibrant Las Vegas neighborhood.',
  },
  {
    id: 'sunterra',
    slug: 'sunterra',
    name: 'Sunterra',
    fullName: 'Beazer Homes Sunterra',
    location: '4717 Woodland Ave',
    address: '4717 Woodland Ave',
    phone: '(702) 475-4113',
    city: 'Las Vegas',
    status: 'Open',
    hours: 'Closes 6 PM',
    description: 'Sunterra offers exceptional new homes with energy-efficient features and thoughtful design, perfect for modern living in Las Vegas.',
  },
  {
    id: 'majestic-point-south',
    slug: 'majestic-point-south',
    name: 'Majestic Point South',
    fullName: 'Beazer Homes Majestic Point South',
    location: '5743 WHIMSICAL St',
    address: '5743 WHIMSICAL St',
    phone: '(702) 727-1190',
    city: 'Las Vegas',
    status: 'Open',
    hours: 'Closes 6 PM',
    description: 'Majestic Point South showcases luxurious new construction homes with premium amenities and spacious floor plans in an ideal Las Vegas location.',
  },
  {
    id: 'cantata-point',
    slug: 'cantata-point',
    name: 'Cantata Point',
    fullName: 'Beazer Homes Cantata Point',
    location: 'Henderson, NV',
    phone: '(702) 459-3015',
    city: 'Henderson',
    status: 'Open',
    hours: 'Closes 6 PM',
    description: 'Cantata Point features beautifully crafted new homes in Henderson, combining quality construction with desirable location and lifestyle amenities.',
  },
  {
    id: 'aria-crossing',
    slug: 'aria-crossing',
    name: 'Aria Crossing',
    fullName: 'Beazer Homes Aria Crossing',
    location: 'Henderson, NV',
    phone: '(702) 623-1018',
    city: 'Henderson',
    status: 'Open',
    hours: 'Closes 6 PM',
    description: 'Aria Crossing offers exceptional new construction homes in Henderson, designed for comfort, style, and modern living.',
  },
  {
    id: 'westview-estates',
    slug: 'westview-estates',
    name: 'Westview Estates',
    fullName: 'Beazer Homes Westview Estates',
    location: 'Henderson, NV',
    phone: '(702) 675-8080',
    city: 'Henderson',
    status: 'Open',
    hours: 'Closes 6 PM',
    description: 'Westview Estates presents premium new homes in Henderson, featuring quality craftsmanship and desirable community amenities.',
  },
  {
    id: 'rosa-point',
    slug: 'rosa-point',
    name: 'Rosa Point',
    fullName: 'Beazer Homes Rosa Point',
    location: '1991 Hydrangea Place',
    address: '1991 Hydrangea Place',
    phone: '(702) 329-6077',
    city: 'Las Vegas',
    description: 'Rosa Point showcases elegant new construction homes with beautiful design and exceptional quality in a prime Las Vegas location.',
  },
]

export function getCommunityBySlug(slug: string): Community | undefined {
  return communities.find((community) => community.slug === slug)
}

export function getCommunitiesByCity(city: string): Community[] {
  return communities.filter((community) => community.city === city)
}

