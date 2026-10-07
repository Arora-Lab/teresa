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
    slug: 'loi-cam-ta-hat-gao-se-chia-v-2026',
    title: 'Lời Cảm Tạ HẠT GẠO SẺ CHIA V',
    category: 'Hình ảnh & tri ân',
    date: 'October 4, 2026',
    excerpt:
      'Gia Đình Từ Thiện Têrêsa-Houston xin chân thành cảm tạ quý Cha, quý Thầy Phó Tế, quý Sơ, quý ân nhân, mạnh thường quân, nghệ sĩ, ca sĩ, MC, thiện nguyện viên và tất cả quý vị đã đồng hành trong Buổi Tiệc Gây Quỹ HẠT GẠO SẺ CHIA V.',
    body: [
      'Trong tâm tình tri ân Thiên Chúa, và nhờ lời cầu bầu của Mẹ Maria cùng Thánh Nữ Têrêsa Hài Đồng Giêsu, Gia Đình Từ Thiện Têrêsa-Houston xin chân thành cảm tạ quý Cha, quý Thầy Phó Tế, quý Sơ, quý Thượng Tọa, quý Ni Cô, quý ân nhân, mạnh thường quân, các nghệ sĩ, ca sĩ, MC, anh chị em thiện nguyện viên tại Houston và Việt Nam, cùng tất cả quý vị đã hiện diện, cầu nguyện và quảng đại đồng hành trong Buổi Tiệc Gây Quỹ HẠT GẠO SẺ CHIA V ngày 27/9/2026 và Thánh Lễ Tạ Ơn ngày 1/10/2026.',
      'Xin tri ân hơn 500 tấm lòng đã cùng chung tay trong một đêm đầy yêu thương. Mỗi lời cầu nguyện, sự hiện diện và đóng góp của quý vị là một hạt gạo yêu thương, giúp chúng tôi tiếp tục mang những bao gạo đến các cụ già nghèo, neo đơn và gặp nhiều khó khăn tại Việt Nam.',
      'Một bao gạo không chỉ là lương thực, mà còn là lời nhắn nhủ: “Các cụ vẫn được yêu thương, vẫn có người nhớ đến và không bị bỏ quên.”',
      'Đặc biệt, xin cảm ơn quý vị đang theo dõi Facebook Gia Đình Từ Thiện Têrêsa-Houston, luôn Like, Share và giới thiệu hoạt động của chúng tôi đến gia đình và bạn bè. Nhờ quý vị, tình yêu thương được lan tỏa đến nhiều người hơn.',
      'Chỉ $84/năm hoặc $7/tháng, tương đương chưa đến 25 xu mỗi ngày, chúng ta có thể giúp một cụ già có gạo trong một năm. Với chúng ta những người sinh sống ở Mỹ, đó có thể là một số tiền rất nhỏ; nhưng với một cụ già nghèo, đó là sự an tâm cho một bữa cơm và một ngày mai. Như tinh thần của Thánh Nữ Têrêsa Hài Đồng Giêsu: “Làm những việc nhỏ bé với một tình yêu lớn lao.”',
      'Xin quý vị tiếp tục đồng hành cùng Gia Đình Từ Thiện Têrêsa-Houston bằng lời cầu nguyện, sự chia sẻ và những đóng góp tùy khả năng, để chúng ta cùng nhau trao gửi yêu thương và thắp sáng hy vọng.',
      'Nguyện xin Thiên Chúa, qua lời chuyển cầu của Mẹ Maria và Thánh Nữ Têrêsa Hài Đồng Giêsu, ban muôn ơn lành, bình an và sức khỏe đến quý vị cùng gia đình.',
      'Xin chân thành tri ân!',
      'Gia Đình Từ Thiện Têrêsa-Houston',
      'Hạt gạo sẻ chia - Trao gửi yêu thương - Thắp sáng hy vọng',
      'Sau đây là những hình ảnh của quý ân nhân và quý thân hữu tại buổi tiệc HẠT GẠO SẺ CHIA V. Quý vị có thể xem lại hình ảnh của mình và gia đình; nếu nhận ra bạn bè hoặc người thân trong hình, xin vui lòng chia sẻ để mọi người cùng lưu giữ những kỷ niệm đẹp của buổi tiệc.',
    ],
    heroImage: '/images/blog-watermarked/teresa-fundraising-event-2026/001-atv-0020-fixed.jpg',
    galleryDir: 'teresa-fundraising-event-2026',
  },
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
    heroImage: '/images/blog-watermarked/viet-cultural-fest-2023/02-viet-cultural-fest-1.jpg',
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
    heroImage: '/images/blog-watermarked/hoi-cho-june-2023/05-img-5332.jpeg',
    galleryDir: 'hoi-cho-june-2023',
  },
  {
    slug: 'hinh-anh-phat-gao-tai-vietnam',
    title: 'Hình ảnh phát gạo tại Vietnam',
    category: 'Phát quà tại Việt Nam',
    date: 'July 4, 2023',
    excerpt: 'Images of rice distribution in Vietnam.',
    body: ['Images of rice distribution in Vietnam.'],
    heroImage: '/images/blog-watermarked/hinh-anh-phat-gao-tai-vietnam/29-img-3649.jpg',
    galleryDir: 'hinh-anh-phat-gao-tai-vietnam',
  },
  {
    slug: 'hinh-phat-qua-thang-9-2017',
    title: 'Hình phát quà tháng 9, 2017',
    category: 'Phát quà tại Việt Nam',
    date: 'June 8, 2018',
    excerpt: 'Hình ảnh phát quà tháng 9, 2017.',
    body: ['Hình ảnh phát quà tháng 9, 2017.'],
    heroImage: '/images/blog-watermarked/hinh-phat-qua-thang-9-2017/05-img-6300.jpg',
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

  const absoluteDir = path.join(process.cwd(), 'public', 'images', 'blog-watermarked', galleryDir);
  if (!fs.existsSync(absoluteDir)) {
    return [];
  }

  return fs
    .readdirSync(absoluteDir)
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
    .sort((a, b) => a.localeCompare(b))
    .map((file) => `/images/blog-watermarked/${galleryDir}/${file}`);
}
