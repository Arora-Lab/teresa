import fs from 'node:fs';
import path from 'node:path';

export type LegacyBlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  body: string[];
  heroImage?: string;
  galleryDir?: string;
};

export const eventPostSlug = 'hatGaoSeChiaV2026';

export const legacyBlogPosts: LegacyBlogPost[] = [
  {
    slug: 'viet-cultural-fest-2023',
    title: 'Viet Cultural Fest 2023',
    category: 'Tiệc gây quỹ',
    date: 'September 13, 2023',
    excerpt:
      'Gia đình từ thiện Teresa thân mời quý ân nhân và các mạnh thường quân đến tham lễ hội Viet Cultural Fest do Hội Văn Hóa Khoa Học Việt Nam tổ chức tại sân vận động NRG.',
    body: [
      'Gia đình từ thiện Teresa thân mời quý ân nhân và các mạnh thường quân đến tham lễ hội Viet Cultural Fest do Hội Văn Hóa Khoa Học Việt Nam tổ chức tại sân vận động NRG (Hall D).',
      '1 NRG Center, Houston TX 77054',
      'Thứ bảy September 16, 2023 từ 10AM - 7PM.',
      'Gia đình từ thiện Teresa gian hàng #113 sẽ có bán: Cơm thịt nướng, Bánh mì thịt nướng, Chả giò, Bắp nướng, Bánh kẹp lá dứa, và các thức uống giải khát như Nước mát, Trà đào, Nước chanh, Chanh dây.',
    ],
    heroImage: '/images/blog/viet-cultural-fest-2023/02-viet-cultural-fest-1.jpg',
    galleryDir: 'viet-cultural-fest-2023',
  },
  {
    slug: 'hoi-cho-june-2023',
    title: 'Hội chợ - June 2023',
    category: 'Tiệc gây quỹ',
    date: 'July 4, 2023',
    excerpt: 'Hình ảnh sinh hoạt gây quỹ của Gia Đình Từ Thiện Teresa trong hội chợ tháng 6 năm 2023.',
    body: [
      'Hình ảnh sinh hoạt gây quỹ của Gia Đình Từ Thiện Teresa trong hội chợ tháng 6 năm 2023.',
    ],
    heroImage: '/images/blog/hoi-cho-june-2023/05-img-5332.jpeg',
    galleryDir: 'hoi-cho-june-2023',
  },
  {
    slug: 'hinh-anh-phat-gao-tai-vietnam',
    title: 'Hình ảnh phát gạo tại Vietnam',
    category: 'Phát quà tại Việt Nam',
    date: 'July 4, 2023',
    excerpt: 'Images of rice distribution in Vietnam.',
    body: ['Images of rice distribution in Vietnam.'],
    heroImage: '/images/blog/hinh-anh-phat-gao-tai-vietnam/29-img-3649.jpg',
    galleryDir: 'hinh-anh-phat-gao-tai-vietnam',
  },
  {
    slug: 'hinh-phat-qua-thang-9-2017',
    title: 'Hình phát quà tháng 9, 2017',
    category: 'Phát quà tại Việt Nam',
    date: 'June 8, 2018',
    excerpt: 'Hình ảnh phát quà tháng 9, 2017.',
    body: ['Hình ảnh phát quà tháng 9, 2017.'],
    heroImage: '/images/blog/hinh-phat-qua-thang-9-2017/05-img-6300.jpg',
    galleryDir: 'hinh-phat-qua-thang-9-2017',
  },
];

export function getLegacyBlogPost(slug: string) {
  return legacyBlogPosts.find((post) => post.slug === slug);
}

export function getGalleryImages(galleryDir: string | undefined) {
  if (!galleryDir) {
    return [];
  }

  const absoluteDir = path.join(process.cwd(), 'public', 'images', 'blog', galleryDir);
  if (!fs.existsSync(absoluteDir)) {
    return [];
  }

  return fs
    .readdirSync(absoluteDir)
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
    .sort((a, b) => a.localeCompare(b))
    .map((file) => `/images/blog/${galleryDir}/${file}`);
}
