export type CommentProps = {
  id: number;
  comment: string;
  image: any;
  userName: string;
  likeCount: number;
  timeLine: string;
  isVerified: boolean;
  reply?: {
    id: number;
    comment: string;
    image: any;
    userName: string;
    likeCount: number;
    timeLine: string;
    isVerified: boolean;
  }[];
};
export const Comments: CommentProps[] = [
  {
    id: 1,
    comment: 'looking good',
    userName: 'Sahil Rawat',
    isVerified: false,
    likeCount: 22,
    timeLine: '11h',
    image: require('../assets/sahilImage.jpeg'),
    reply: [],
  },
  {
    id: 2,
    comment: 'greate !!!',
    userName: 'Makima',
    isVerified: true,
    likeCount: 52,
    timeLine: '12h',
    image: require('../assets/makima.jpg'),
    reply: [
      {
        id: 3,
        image: require('../assets/sahilImage.jpeg'),

        comment: 'Thanks bro',
        userName: 'Sahil Rawat',
        isVerified: false,
        likeCount: 26,
        timeLine: '16h',
      },
      {
        id: 99,
        image: require('../assets/sahilImage.jpeg'),

        comment: 'Thanks bro',
        userName: 'Sahil Rawat',
        isVerified: false,
        likeCount: 26,
        timeLine: '16h',
      },
    ],
  },
  {
    id: 4,
    comment:
      'looking goosdklfl; dlkjsd;f ksdlkfvs lkdfjsl ;djks djfl  ajsd lfjdl kjsl dkjf lkdjf lk;jd',
    userName: 'Sahil Rawat',
    isVerified: false,
    likeCount: 22,
    timeLine: '11h',
    image: require('../assets/sahilImage.jpeg'),
    reply: [],
  },
  {
    id: 5,
    comment: 'looking good',
    userName: 'Sahil Rawat',
    isVerified: false,
    likeCount: 22,
    timeLine: '11h',
    image: require('../assets/sahilImage.jpeg'),
    reply: [],
  },
  {
    id: 6,
    comment: 'greate !!!',
    userName: 'Makima',
    isVerified: true,
    likeCount: 52,
    timeLine: '12h',
    image: require('../assets/makima.jpg'),
    reply: [
      {
        id: 7,
        image: require('../assets/sahilImage.jpeg'),

        comment: 'Thanks bro',
        userName: 'Sahil Rawat',
        isVerified: false,
        likeCount: 26,
        timeLine: '16h',
      },
    ],
  },
  {
    id: 8,
    comment:
      'looking goosdklfl; dlkjsd;f ksdlkfvs lkdfjsl ;djks djfl  ajsd lfjdl kjsl dkjf lkdjf lk;jd',
    userName: 'Sahil Rawat',
    isVerified: false,
    likeCount: 22,
    timeLine: '11h',
    image: require('../assets/sahilImage.jpeg'),
    reply: [],
  },
];
