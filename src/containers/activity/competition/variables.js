import PhoneCert1 from '@I/vote/phone-cert-1.jpeg';
import PhoneCert1Small from '@I/vote/phone-cert-1-small.jpeg';
import TestPdf from './pdfs/test.pdf';

export const CARTOON = 0;
export const LITERATURE = 1;
export const VIDEO = 2;
export const FIELDS = { 만화: CARTOON, 문학: LITERATURE, 영상: VIDEO };
export const FIELDS_IN_ENGLISH = { [CARTOON]: 'cartoon', [LITERATURE]: 'literature', [VIDEO]: 'video' };
export const REVERSED_FIELDS = { [CARTOON]: '만화', [LITERATURE]: '문학', [VIDEO]: '영상' };

export const CARTOON_LIST = [
  {
    competitionId: 1, title: 'C작품 타이틀1', author: '참가자명1', description: '작품 한 줄 설명1', type: 'pdf', file: TestPdf, thumbnail: PhoneCert1, thumbnailSmall: PhoneCert1Small,
  },
  {
    competitionId: 2, title: 'C작품 타이틀2', author: '참가자명2', description: '작품 한 줄 설명2', type: 'pdf', file: TestPdf, thumbnail: PhoneCert1, thumbnailSmall: PhoneCert1Small,
  },
  {
    competitionId: 3, title: 'C작품 타이틀3', author: '참가자명3', description: '작품 한 줄 설명3', type: 'pdf', file: TestPdf, thumbnail: PhoneCert1, thumbnailSmall: PhoneCert1Small,
  },
];

export const LITERATURE_LIST = [
  {
    competitionId: 1, title: 'L작품 타이틀1', author: '참가자명1', description: '작품 한 줄 설명1', type: 'pdf', file: TestPdf, thumbnail: PhoneCert1, thumbnailSmall: PhoneCert1Small,
  },
];

export const VIDEO_LIST = [
  {
    competitionId: 1, title: 'V작품 타이틀1', author: '참가자명1', description: '작품 한 줄 설명1', type: 'youtube', youtubeUrl: 'https://www.youtube.com/embed/F20yngfwQQg', thumbnail: PhoneCert1, thumbnailSmall: PhoneCert1Small,
  },
];
