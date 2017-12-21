var MOUNTAIN = {};

MOUNTAIN.MOUNTAINS_LIST = [
  {
    code:'1',
    name:'Mount Everest',
    rank: 1,
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Mount-Everest.jpg/1024px-Mount-Everest.jpg'
  },

  {
    code: '2',
    name: 'K2',
    rank: 2,
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/K2_2006b.jpg/1024px-K2_2006b.jpg'
  },

  {
    code: '3',
    name: ' Kangchenjunga',
    rank: 3,
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Kanchenjunga_from_Tiger_Hills.JPG/1280px-Kanchenjunga_from_Tiger_Hills.JPG'
  },

  {
    code: '4',
    name: 'Lhotse',
    rank: 4,
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Lhotse-fromChukhungRi.jpg/1024px-Lhotse-fromChukhungRi.jpg'
  },

  {
    code: '5',
    name: 'Makalu',
    rank: 5,
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Makalu.jpg/1024px-Makalu.jpg'
  },

  {
    code:'6',
    name:'Cho Oyu',
    rank: 6,
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/ChoOyu-fromGokyo.jpg/1024px-ChoOyu-fromGokyo.jpg'
  },

  {
    code:'7',
    name:'Dhaulagiri I',
    rank: 7,
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Dhaulagiri_mountain.jpg/1024px-Dhaulagiri_mountain.jpg'
  },

  {
    code:'8',
    name:'Manaslu',
    rank: 8,
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sunrise%2C_Manaslu.jpg/1024px-Sunrise%2C_Manaslu.jpg'
  },

  {
    code:'9',
    name:'Nanga Parbat',
    rank: 9,
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Nanga_Parbat_The_Killer_Mountain.jpg/800px-Nanga_Parbat_The_Killer_Mountain.jpg'
  },

  {
    code:'10',
    name:'Annapurna I',
    rank: 10,
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Annapurna_I_ABC_Morning.jpg/1024px-Annapurna_I_ABC_Morning.jpg'
  }
];

MOUNTAIN.MOUNTAIN_DETAILS = {
  '1' : {
    code: '1',
    rank: 1,
    name: 'Mount Everest',
    knownAs: 'Sagarmatha or Chomolungma',
    located: 'Nepal, China',
    height: '8848 m',
    firstAscent: '1953',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Mount-Everest.jpg/1024px-Mount-Everest.jpg'
  },

  '2' : {
    code: '2',
    rank: 2,
    name: 'Mount K2',
    knownAs: 'Qogir or Godwin Austen',
    located: 'Pakistan, China',
    height: '8611 m',
    firstAscent: '1954',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/K2_2006b.jpg/1024px-K2_2006b.jpg'
  },

  '3' : {
    code: '3',
    rank: 3,
    name: 'Mount Kangchenjunga',
    knownAs: '',
    located: 'Nepal, India',
    height: '8586 m',
    firstAscent: '1955',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Kanchenjunga_from_Tiger_Hills.JPG/1280px-Kanchenjunga_from_Tiger_Hills.JPG'
  },

  '4' : {
    code: '4',
    rank: 4,
    name: 'Mount Lhotse',
    knownAs: '',
    located: 'Nepal, China',
    height: '8516 m',
    firstAscent: '1956',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Lhotse-fromChukhungRi.jpg/1024px-Lhotse-fromChukhungRi.jpg'
  },

  '5' : {
    code: '5',
    rank: 5,
    name: 'Mount Makalu',
    knownAs: '',
    located: 'Nepal, China',
    height: '8485 m',
    firstAscent: '1955',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Makalu.jpg/1024px-Makalu.jpg'
  },

  '6' : {
    code: '6',
    rank: 6,
    name: 'Cho Oyu',
    knownAs: '',
    located: 'Nepal, China',
    height: '8188 m',
    firstAscent: '1954',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/ChoOyu-fromGokyo.jpg/1024px-ChoOyu-fromGokyo.jpg'
  },

  '7' : {
    code: '7',
    rank: 7,
    name: 'Dhaulagiri I',
    knownAs: '',
    located: 'Nepal',
    height: '8167 m',
    firstAscent: '1960',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Dhaulagiri_mountain.jpg/1024px-Dhaulagiri_mountain.jpg'
  },

  '8' : {
    code: '8',
    rank: 8,
    name: 'Manaslu',
    knownAs: '',
    located: 'Nepal',
    height: '8163 m',
    firstAscent: '1956',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sunrise%2C_Manaslu.jpg/1024px-Sunrise%2C_Manaslu.jpg'
  },

  '9' : {
    code: '9',
    rank: 9,
    name: 'Nanga Parbat',
    knownAs: '',
    located: 'Pakistan',
    height: '8126 m',
    firstAscent: '1953',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Nanga_Parbat_The_Killer_Mountain.jpg/800px-Nanga_Parbat_The_Killer_Mountain.jpg'
  },

  '10' : {
    code: '10',
    rank: 10,
    name: 'Annapurna I',
    knownAs: '',
    located: 'Nepal',
    height: '8091 m',
    firstAscent: '1950',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Annapurna_I_ABC_Morning.jpg/1024px-Annapurna_I_ABC_Morning.jpg'
  }
};


exports.MOUNTAIN = MOUNTAIN;
