const kimJoohyuck = { 
    id: 'kim-joohyuck',
    url: 'Kimjoohyuck.jpg',
    name: 'kim joo hyuck',
    nameEng:`kim<br>joo hyuck`,
    nameKr:'김주혁',
    date: '1972.10.03',

    awards:[
        '2019 제55회 백상예술대상 영화부문 남자조연상',
        '2018 제39회 청룡영화상 남우조연상',
        '2018 대한민국 대중문화예술상 국무총리상',
        '2018 제55회 대종상영화제 남우조연상',
        '2017 제1회 더서울어워즈 남우조연상',
        '2015 KBS 연예대상 버라이어티부문 최고 엔터테이너상',
        '2014 KBS 연예대상 쇼/오락부문 신인상',
        '2008 제29회 청룡영화상 베스트커플상',
        '2006 제42회 백상예술대상 방송부문 남자 최우수연기상',
        '2005 SBS 연기대상 10대스타상, 남자 최우수연기상 ',
    ],
        slideImages: ['slide1.jpg', 'slide2.jpg'],


    /* ==============
    이미지
    ============== */
    gallery:[
        {
            key: 'drama',
            image: [
                'kim-joohyuck/drama/drama3.jpg',
                'kim-joohyuck/drama/drama2.jpg',
                'kim-joohyuck/drama/drama1.jpg',
            ],
        },
        {
            key: 'movie',
            image: [
                'kim-joohyuck/movie/movie9.jpg',
                'kim-joohyuck/movie/movie8.jpg',
                'kim-joohyuck/movie/movie7.jpg',
                'kim-joohyuck/movie/movie6.jpg',
                'kim-joohyuck/movie/movie5.jpg',
                'kim-joohyuck/movie/movie4.jpg',
                'kim-joohyuck/movie/movie3.jpg',
                'kim-joohyuck/movie/movie2.jpg',
                'kim-joohyuck/movie/movie1.jpg'
            ]
        },
        {
            key: 'magazine',
            image: [
                'kim-joohyuck/magazine/magazine5.jpg',
                'kim-joohyuck/magazine/magazine4.jpg',
                'kim-joohyuck/magazine/magazine3.jpg',
                'kim-joohyuck/magazine/magazine2.jpg',
                'kim-joohyuck/magazine/magazine1.jpg',
            ]
        },
    ],


    /* ==============
    활동 내역
    ============== */
    archive: [
    {
      key: 'drama',
      label: '드라마',
      list: [
        { year: '2017', content: ['아르곤'] },
        { year: '2016', content: ['응답하라 1988'] },
        { year: '2013', content: ['구암 허준'] },
        { year: '2012', content: ['무신'] },
        { year: '2008', content: ['떼루아'] },
        { year: '2005', content: ['프라하의 연인'] },
        { year: '2002', content: ['흐르는 강물처럼', '라이벌'] },
        { year: '2000', content: ['사랑은 아무나 하나'] },
        { year: '1999', content: ['카이스트'] },
        { year: '1998', content: ['비밀의 문'] },
      ],
    },
    {
      key: 'movie',
      label: '영화',
      list: [
        { year: '2018', content: ['독전','흥부'] },
        { year: '2017', content: ['석조저택 살인사건', '공조', '장옥의 편지(단편)','온도의 기억(단편)'] },
        { year: '2016', content: ['당신자신과 당신의 것','비밀은 없다','좋아해줘'] },
        { year: '2015', content: ['뷰티 인사이드 (특별출연)','나의 절친 악당들 (특별출연)'] },
        { year: '2011', content: ['커플즈','투혼','적과의 동침'] },
        { year: '2010', content: ['방자전'] },
        { year: '2008', content: ['아내가 결혼했다'] },
        { year: '2006', content: ['사랑따윈 필요없어'] },
        { year: '2005', content: ['청연','광식이 동생 광태'] },
        { year: '2004', content: ['어디선가 누군가에 무슨 일이 생기면 틀림없이 나타난다, 홍반장'] },
        { year: '2003', content: ['싱글즈'] },
        { year: '2002', content: ['YMCA 야구단'] },
        { year: '2001', content: ['세이 예스'] },
      ],
    },
    {
      key: 'entertainment',
      label: '예능/교양',
      list: [
        { year: '2014', content: ['해피선데이 : 1박 2일 시즌3'] },
      ],
    },
    {
        key: 'stagy',
        label: '연극',
        list:[{year:'2009', content: ['옛날 옛적에 훠어이 훠이']}]
    },
    {
        key:'album',
        label:'앨범',
        list:[
            { year: '2011', content: ['영화 [커플즈] OST ‘빛나라 우리 사랑아’']},
            { year: '2005', content: ['영화 [광식이 동생 광태] OST ‘세월이 가면’, ‘첫사랑’, ‘삽질의 추억’'] },
        ]
    },
    {
        key: 'performance',
        label: '공연',
        list: [
            { year: '2014', content: ['일본 팬미팅'] },
            { year: '2009', content: ['일본 팬미팅'] },
        ],
    },
    {
      key: 'advertisement',
      label: '광고',
      list: [
        { content: [
            `동국제약 인사돌 / 브라운 면도기 / 대한주택공사 / 대한화재 하우머치 / LG텔레콤 / 
            LG전자 트롬세탁기 / 기아자동차 로체 / LG카드`,
            '외 다수']
        }
      ],
    },
    {
        key:'position',
        label:'역임',
        list:[{year:'2008', content:['제7회 미쟝센단편영화제 명예 심사위원']}]

    }
  ],
}

export default kimJoohyuck