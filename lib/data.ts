import type { Category, Product, SiteInfo } from '@/lib/types';

export const categories: Category[] = [
  {
    title: 'Váy dạ hội',
    slug: 'evening-dresses',
    description: 'Váy dạ hội thanh lịch, phù hợp dự tiệc, đám cưới và sự kiện sang trọng.',
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Áo dài',
    slug: 'ao-dai',
    description: 'Áo dài truyền thống đủ kiểu dáng hiện đại và cổ điển, phù hợp lễ nghi và chụp hình.',
    image: 'https://images.unsplash.com/photo-1519750157634-b7250b6b2b33?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Vest nam',
    slug: 'mens-suits',
    description: 'Vest và trang phục nam chỉn chu, phù hợp sự kiện trang trọng và chụp ảnh.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Cosplay',
    slug: 'cosplay',
    description: 'Trang phục cosplay ấn tượng, phong cách nhân vật cho sự kiện và bộ ảnh.',
    image: 'https://images.unsplash.com/photo-1543163521-1bf5d380d58c?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Đồ tốt nghiệp',
    slug: 'graduation-outfits',
    description: 'Áo mũ, trang phục chụp hình tốt nghiệp và phụ kiện cho ngày lễ quan trọng.',
    image: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Phụ kiện',
    slug: 'accessories',
    description: 'Trang sức, mũ và phụ kiện hoàn thiện cho mọi set trang phục thuê.',
    image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d5?auto=format&fit=crop&w=900&q=80'
  }
];

export const products: Product[] = [
  {
    id: 1,
    slug: 'red-evening-dress-vdh001',
    name: 'Scarlet Gala Evening Dress',
    code: 'VDH001',
    category: 'Váy dạ hội',
    price: 180,
    priceLabel: 'Từ 180k / ngày',
    colors: ['Red'],
    sizes: ['S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1520962914089-1aa77f0a6324?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1498579809087-0a1cb0a8f3ba?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'A red statement gown with delicate draping and sparkling finishes, ideal for formal dinners and evening rental events.',
    keywords: ['red', 'gala', 'formal', 'ballroom', 'cocktail'],
    featured: true
  },
  {
    id: 2,
    slug: 'blue-evening-gown-vdh002',
    name: 'Midnight Sapphire Gown',
    code: 'VDH002',
    category: 'Váy dạ hội',
    price: 220,
    priceLabel: 'Từ 220k / ngày',
    colors: ['Blue'],
    sizes: ['S', 'M'],
    images: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1542062703-21c6f4b5d86b?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'Modern navy evening gown with a sleek silhouette, designed for premium rental events and special nights out.',
    keywords: ['navy', 'satin', 'evening', 'premium', 'gown'],
    featured: true
  },
  {
    id: 3,
    slug: 'white-ao-dai-ad010',
    name: 'White Silk Ao Dai',
    code: 'AD010',
    category: 'Áo dài',
    price: 140,
    priceLabel: 'Từ 140k / ngày',
    colors: ['White'],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1521092551476-1b6e32adf0bf?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1525097487452-6278ff080c31?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'Classic white Ao Dai rental set with elegant silk panels and refined details for ceremonies and cultural events.',
    keywords: ['ao dai', 'traditional', 'white', 'silk', 'ceremony'],
    featured: true
  },
  {
    id: 4,
    slug: 'golden-tuxedo-gns005',
    name: 'Golden Tuxedo Jacket',
    code: 'GNS005',
    category: 'Vest nam',
    price: 200,
    priceLabel: 'Từ 200k / ngày',
    colors: ['Gold'],
    sizes: ['M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'Stylish golden tuxedo jacket rental for photoshoots, weddings, and standout formal occasions.',
    keywords: ['tuxedo', 'men', 'formal', 'jacket', 'gold'],
    featured: false
  },
  {
    id: 5,
    slug: 'star-war-cosplay-jedi',
    name: 'Jedi Knight Cosplay',
    code: 'CSY010',
    category: 'Cosplay',
    price: 160,
    priceLabel: 'Từ 160k / ngày',
    colors: ['Brown', 'Beige'],
    sizes: ['M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1520975911312-3cb03cbb9f91?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1599664255777-f1ee42d8eeb8?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'Cosplay rental outfit inspired by iconic sci-fi heroes, complete with flowing robe and themed accents.',
    keywords: ['cosplay', 'jedi', 'sci-fi', 'robe', 'costume'],
    featured: true
  },
  {
    id: 6,
    slug: 'emerald-suit-msu006',
    name: 'Emerald Evening Suit',
    code: 'MSU006',
    category: 'Vest nam',
    price: 175,
    priceLabel: 'Từ 175k / ngày',
    colors: ['Green'],
    sizes: ['S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1618354694861-5d8600db5b78?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'Modern green suit rental with slim tailoring and luxury styling for evening celebrations.',
    keywords: ['green', 'suit', 'men', 'luxury', 'tailored'],
    featured: false
  },
  {
    id: 7,
    slug: 'silk-ao-dai-pink-ad012',
    name: 'Pink Silk Ao Dai',
    code: 'AD012',
    category: 'Áo dài',
    price: 150,
    priceLabel: 'Từ 150k / ngày',
    colors: ['Pink'],
    sizes: ['S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1519750157634-b7250b6b2b33?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'Soft pink Ao Dai with delicate embroidery and luxury fabric for celebrations and photo sessions.',
    keywords: ['pink', 'ao dai', 'silk', 'celebration', 'traditional'],
    featured: false
  },
  {
    id: 8,
    slug: 'black-tuxedo-mns008',
    name: 'Black Signature Tuxedo',
    code: 'MNS008',
    category: 'Vest nam',
    price: 190,
    priceLabel: 'Từ 190k / ngày',
    colors: ['Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1453831210725-4dfd1f0871f4?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'Classic black tuxedo rental with premium tailoring for weddings, galas, and formal ceremonies.',
    keywords: ['black', 'tuxedo', 'formal', 'classic', 'suit'],
    featured: true
  },
  {
    id: 9,
    slug: 'floral-graduation-dress-grd009',
    name: 'Floral Graduation Dress',
    code: 'GRD009',
    category: 'Đồ tốt nghiệp',
    price: 130,
    priceLabel: 'Từ 130k / ngày',
    colors: ['White', 'Pink'],
    sizes: ['S', 'M'],
    images: [
      'https://images.unsplash.com/photo-1495245208473-ad7ecf2dcf5f?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1474031317828-6a4b64a8f0f5?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'Feminine graduation dress rental with floral accents, perfect for photos and ceremony day.',
    keywords: ['graduate', 'floral', 'dress', 'ceremony', 'cap'],
    featured: false
  },
  {
    id: 10,
    slug: 'victorian-cosplay-dress-csy011',
    name: 'Victorian Cosplay Gown',
    code: 'CSY011',
    category: 'Cosplay',
    price: 170,
    priceLabel: 'Từ 170k / ngày',
    colors: ['Cream'],
    sizes: ['S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1511851114691-5f0f140ba710?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'Historical cosplay rental with lace details, dramatic silhouette, and elegant finishing touches.',
    keywords: ['victorian', 'cosplay', 'historic', 'gown', 'costume'],
    featured: false
  },
  {
    id: 11,
    slug: 'champagne-evening-gown-vdh011',
    name: 'Champagne Luxe Gown',
    code: 'VDH011',
    category: 'Váy dạ hội',
    price: 210,
    priceLabel: 'Từ 210k / ngày',
    colors: ['Champagne'],
    sizes: ['M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1520974725107-3548dc9617f2?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'Luxurious champagne evening gown with shimmering texture and sophisticated styling for formal events.',
    keywords: ['champagne', 'glamour', 'shimmer', 'evening', 'gown'],
    featured: true
  },
  {
    id: 12,
    slug: 'black-ao-dai-ad014',
    name: 'Black Velvet Ao Dai',
    code: 'AD014',
    category: 'Áo dài',
    price: 160,
    priceLabel: 'Từ 160k / ngày',
    colors: ['Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1525097487452-6278ff080c31?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1519750157634-b7250b6b2b33?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'Elegant black Ao Dai with velvet details for dramatic and premium cultural rental wear.',
    keywords: ['black', 'velvet', 'traditional', 'ao dai', 'luxury'],
    featured: false
  },
  {
    id: 13,
    slug: 'pearl-accessories-set-acc013',
    name: 'Pearl Bridal Accessories',
    code: 'ACC013',
    category: 'Phụ kiện',
    price: 45,
    priceLabel: 'Từ 45k / ngày',
    colors: ['White'],
    sizes: ['One Size'],
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1544117510-65b6f18a0a56?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1516900557541-9cd61fc30e2c?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'Stylish pearl necklace and accessory set to complete evening dresses and traditional outfits.',
    keywords: ['pearls', 'accessories', 'bridal', 'jewelry', 'rental'],
    featured: false
  },
  {
    id: 14,
    slug: 'lunar-new-year-ao-dai-ad015',
    name: 'Lunar New Year Ao Dai',
    code: 'AD015',
    category: 'Áo dài',
    price: 155,
    priceLabel: 'Từ 155k / ngày',
    colors: ['Red', 'Gold'],
    sizes: ['S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1519750157634-b7250b6b2b33?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1498579809087-0a1cb0a8f3ba?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'Festive Ao Dai set crafted for Lunar New Year celebrations with bold traditional motifs.',
    keywords: ['lunar', 'new year', 'ao dai', 'festive', 'red'],
    featured: false
  },
  {
    id: 15,
    slug: 'silver-cosplay-armour-csy015',
    name: 'Silver Warrior Cosplay',
    code: 'CSY015',
    category: 'Cosplay',
    price: 190,
    priceLabel: 'Từ 190k / ngày',
    colors: ['Silver'],
    sizes: ['M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1520974725107-3548dc9617f2?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'Armored cosplay costume rental with metallic details and dramatic styling for event photo shoots.',
    keywords: ['armour', 'cosplay', 'warrior', 'metal', 'fantasy'],
    featured: false
  },
  {
    id: 16,
    slug: 'rose-gold-accent-dress-vdh016',
    name: 'Rose Gold Accent Dress',
    code: 'VDH016',
    category: 'Váy dạ hội',
    price: 195,
    priceLabel: 'Từ 195k / ngày',
    colors: ['Rose Gold'],
    sizes: ['S', 'M'],
    images: [
      'https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1520975911312-3cb03cbb9f91?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1498579809087-0a1cb0a8f3ba?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'Soft rose gold evening dress with premium fabric and modern drape for luxe celebrations.',
    keywords: ['rose gold', 'gown', 'evening', 'stylish', 'premium'],
    featured: false
  },
  {
    id: 17,
    slug: 'navy-graduation-suit-grd017',
    name: 'Navy Graduation Suit',
    code: 'GRD017',
    category: 'Đồ tốt nghiệp',
    price: 175,
    priceLabel: 'Từ 175k / ngày',
    colors: ['Navy'],
    sizes: ['M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'Navy graduation suit rental crafted for polished ceremony day photos and celebrations.',
    keywords: ['graduation', 'suit', 'navy', 'ceremony', 'formal'],
    featured: false
  },
  {
    id: 18,
    slug: 'bronze-accessory-set-acc018',
    name: 'Bronze Statement Accessories',
    code: 'ACC018',
    category: 'Phụ kiện',
    price: 55,
    priceLabel: 'Từ 55k / ngày',
    colors: ['Bronze'],
    sizes: ['One Size'],
    images: [
      'https://images.unsplash.com/photo-1516900557541-9cd61fc30e2c?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1544117510-65b6f18a0a56?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'Bronze-tone accessories set perfect for pairing with party dresses and costume looks.',
    keywords: ['accessories', 'bracelet', 'necklace', 'bronze', 'style'],
    featured: false
  },
  {
    id: 19,
    slug: 'emerald-evening-dress-vdh019',
    name: 'Emerald Evening Dress',
    code: 'VDH019',
    category: 'Váy dạ hội',
    price: 205,
    priceLabel: 'Từ 205k / ngày',
    colors: ['Emerald'],
    sizes: ['S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1542062703-21c6f4b5d86b?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1498579809087-0a1cb0a8f3ba?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'Rich emerald evening dress with modern tailoring and a luxurious visual impact for rental events.',
    keywords: ['emerald', 'evening', 'dress', 'luxury', 'statement'],
    featured: false
  },
  {
    id: 20,
    slug: 'rose-gold-cosplay-armor-csy020',
    name: 'Rose Gold Warrior Cosplay',
    code: 'CSY020',
    category: 'Cosplay',
    price: 185,
    priceLabel: 'Từ 185k / ngày',
    colors: ['Pink', 'Gold'],
    sizes: ['M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1519750157634-b7250b6b2b33?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'Bold rose gold cosplay armor with dramatic style and expressive details for event appearances.',
    keywords: ['armor', 'cosplay', 'rose gold', 'fantasy', 'character'],
    featured: false
  }
];

export const siteInfo: SiteInfo = {
  phone: '+84912345678',
  zaloLink: 'https://zalo.me/84912345678',
  fbLink: 'https://m.me/examplepage',
  address: '123 Fashion Street, Ho Chi Minh City, Vietnam',
  mapLink: 'https://www.google.com/maps?q=123+Fashion+Street+Ho+Chi+Minh+City',
  baseUrl: 'https://www.rentalcatalog.example'
};
