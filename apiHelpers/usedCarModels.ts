import { UsedCarModel } from '../types'

const usedCarModels: Array<UsedCarModel> = [
  {
    id: 'audi-etron-50',
    make: 'Audi',
    model: 'e-tron 50',
    acceleration: 7,
    capacity: 71,
    range: 328,
    evDatabaseURL: 'https://ev-database.org/car/1209/Audi-e-tron-50-quattro',
  },
  {
    id: 'audi-etron-55',
    make: 'Audi',
    model: 'e-tron 55',
    acceleration: 5.7,
    capacity: 95,
    range: 417,
    evDatabaseURL: 'https://ev-database.org/car/1092/Audi-e-tron',
  },
  {
    id: 'mitsubishi-imiev',
    make: 'Mitsubishi',
    model: 'i-MiEV',
    acceleration: 15.9,
    capacity: 16,
    rangeNEDC: 160,
    evDatabaseURL: 'https://ev-database.org/car/1096/Mitsubishi-iMiEV',
  },
  {
    id: 'renault-kangoo-ze',
    make: 'Renault',
    model: 'Kangoo Z.E.',
    acceleration: 22.4,
    capacity: 22.0,
    rangeNEDC: 170,
  },
  {
    id: 'nissan-leaf-24',
    make: 'Nissan',
    model: 'Leaf',
    acceleration: 11.5,
    capacity: 24.0,
    rangeNEDC: 199,
    evDatabaseURL: 'https://ev-database.org/car/1019/Nissan-Leaf-24-kWh',
  },
  {
    id: 'nissan-leaf-30',
    make: 'Nissan',
    model: 'Leaf',
    acceleration: 11.5,
    capacity: 30.0,
    rangeNEDC: 250,
    evDatabaseURL: 'https://ev-database.org/car/1020/Nissan-Leaf-30-kWh',
  },
  {
    id: 'nissan-leaf-40',
    make: 'Nissan',
    model: 'Leaf',
    acceleration: 7.9,
    capacity: 40.0,
    range: 270,
    evDatabaseURL: 'https://ev-database.org/car/1106/Nissan-Leaf',
    price: 4390000,
    sellerURL: 'https://www.nissan.is/vehicles/new-vehicles/leaf.html',
  },
  {
    id: 'nissan-leaf-e+',
    make: 'Nissan',
    model: 'Leaf e+',
    acceleration: 7.3,
    capacity: 62.0,
    range: 385,
    evDatabaseURL: 'https://ev-database.org/car/1144/Nissan-Leaf-eplus',
    price: 4390000,
    sellerURL: 'https://www.nissan.is/vehicles/new-vehicles/leaf.html',
  },
  {
    id: 'nissan-e-nv200-24',
    make: 'Nissan',
    model: 'e-NV200 Evalia',
    acceleration: 14,
    capacity: 24.0,
    rangeNEDC: 170,
    evDatabaseURL: 'https://ev-database.org/car/1021/Nissan-e-NV200-Evalia',
  },
  {
    id: 'nissan-e-nv200-40',
    make: 'Nissan',
    model: 'e-NV200 Evalia',
    acceleration: 14,
    capacity: 40.0,
    rangeNEDC: 280,
    range: 200,
    evDatabaseURL: 'https://ev-database.org/car/1117/Nissan-e-NV200-Evalia',
  },
  {
    id: 'vw-eup-18',
    make: 'Volkswagen',
    model: 'e-Up!',
    acceleration: 12.4,
    capacity: 18.7,
    range: 133,
    rangeNEDC: 160,
    evDatabaseURL: 'https://ev-database.org/car/1081/Volkswagen-e-Up',
  },
  {
    id: 'vw-eup-37',
    make: 'Volkswagen',
    model: 'e-Up!',
    acceleration: 11.9,
    capacity: 36.8,
    range: 260,
    evDatabaseURL: 'https://ev-database.org/car/1189/Volkswagen-e-Up',
  },
  {
    id: 'volkswagen-egolf-24',
    make: 'Volkswagen',
    model: 'e-Golf',
    acceleration: 10.4,
    capacity: 24.2,
    rangeNEDC: 190,
    evDatabaseURL: 'https://ev-database.org/car/1040/Volkswagen-e-Golf',
  },
  {
    id: 'volkswagen-egolf-35',
    make: 'Volkswagen',
    model: 'e-Golf',
    acceleration: 9.6,
    capacity: 35.8,
    range: 230,
    evDatabaseURL: 'https://ev-database.org/car/1087/Volkswagen-e-Golf',
  },
  {
    id: 'vw-id-3-first',
    make: 'Volkswagen',
    model: 'ID.3 1.st edition',
    sellerURL: 'https://www.volkswagen.is/is/bilar/id3.html',
    acceleration: 7.3,
    capacity: 58,
    range: 420,
    evDatabaseURL: 'https://ev-database.org/car/1300/Volkswagen-ID3-1st',
  },
  {
    id: 'kia-soul-ev-2014',
    make: 'Kia',
    model: 'Soul EV',
    acceleration: 11.2,
    capacity: 30.5,
    rangeNEDC: 212,
    evDatabaseURL: 'https://ev-database.org/car/1012/Kia-Soul-EV',
  },
  {
    id: 'kia-soul-ev-2017',
    make: 'Kia',
    model: 'Soul EV',
    acceleration: 11.2,
    capacity: 33,
    rangeNEDC: 250,
    evDatabaseURL: 'https://ev-database.org/car/1122/Kia-Soul-EV',
  },
  {
    id: 'kia-e-soul-39kwh',
    make: 'Kia',
    model: 'e-Soul',
    price: 5490777,
    sellerURL:
      'https://issuu.com/askja/docs/kia_verdlisti_19012018/20?e=6076164/57534189',
    acceleration: 9.6,
    capacity: 39,
    range: 277,
    evDatabaseURL: 'https://ev-database.org/car/1169/Kia-e-Soul-39-kWh',
  },
  {
    id: 'kia-e-soul-64kwh',
    make: 'Kia',
    model: 'e-Soul',
    price: 6290777,
    sellerURL: 'https://www.kia.com/is/nyir-bilar/e-soul/upplifdu/',
    acceleration: 7.9,
    capacity: 64,
    range: 452,
    evDatabaseURL: 'https://ev-database.org/car/1154/Kia-e-Soul-64-kWh',
  },
  {
    id: 'kia-e-niro-39',
    make: 'Kia',
    model: 'e-Niro',
    acceleration: 9.8,
    capacity: 39,
    range: 289,
    evDatabaseURL: 'https://ev-database.org/car/1137/Kia-e-Niro-39-kWh',
  },
  {
    id: 'kia-e-niro-64',
    make: 'Kia',
    model: 'e-Niro',
    acceleration: 7.8,
    capacity: 64,
    range: 455,
    evDatabaseURL: 'https://ev-database.org/car/1125/Kia-e-Niro-64-kWh',
  },
  {
    id: 'renault-zoe-ze20',
    make: 'Renault',
    model: 'Zoe',
    acceleration: 13.5,
    capacity: 25,
    rangeNEDC: 210,
    evDatabaseURL: 'https://ev-database.org/car/1026/Renault-Zoe-Q210',
  },
  {
    id: 'renault-zoe-ze40',
    make: 'Renault',
    model: 'Zoe',
    acceleration: 11.4,
    capacity: 44.1,
    range: 300,
    evDatabaseURL: 'https://ev-database.org/car/1128/Renault-Zoe-R110',
  },
  {
    id: 'renault-zoe-ze50',
    make: 'Renault',
    model: 'Zoe',
    acceleration: 11.4,
    capacity: 52,
    range: 395,
    evDatabaseURL: 'https://ev-database.org/car/1164/Renault-Zoe-ZE50-R110',
  },
  {
    id: 'renault-kangoo-maxi-ze-33',
    make: 'Renault',
    model: 'Kangoo Maxi Z.E.',
    acceleration: 22.4,
    capacity: 33,
    rangeNEDC: 270,
    evDatabaseURL: 'https://ev-database.org/car/1101/Renault-Kangoo-Maxi-ZE-33',
  },
  {
    id: 'bmw-i3-60',
    make: 'BMW',
    model: 'i3',
    acceleration: 7.2,
    capacity: 21.6,
    rangeNEDC: 190,
    evDatabaseURL: 'https://ev-database.org/car/1004/BMW-i3-60-Ah',
  },
  {
    id: 'bmw-i3-94',
    make: 'BMW',
    model: 'i3',
    acceleration: 7.3,
    capacity: 33.2,
    rangeNEDC: 312,
    evDatabaseURL: 'https://ev-database.org/car/1068/BMW-i3-94-Ah',
  },
  {
    id: 'bmw-i3-120',
    make: 'BMW',
    model: 'i3',
    acceleration: 7.3,
    capacity: 42.8,
    range: 310,
    evDatabaseURL: 'https://ev-database.org/car/1145/BMW-i3-120-Ah',
  },
  {
    id: 'hyundai-ioniq',
    make: 'Hyundai',
    model: 'IONIQ Electric',
    acceleration: 9.9,
    capacity: 30.5,
    rangeNEDC: 280,
    evDatabaseURL: 'https://ev-database.org/car/1057/Hyundai-IONIQ-Electric',
  },
  {
    id: 'hyundai-ioniq-2020',
    make: 'Hyundai',
    model: 'IONIQ Electric',
    price: 4790000,
    sellerURL: 'https://www.hyundai.is/nyir/ioniq/yfirlit',
    acceleration: 9.7,
    capacity: 38.3,
    range: 311,
    evDatabaseURL: 'https://ev-database.org/car/1165/Hyundai-IONIQ-Electric',
  },
  {
    id: 'hyundai-kona-39',
    make: 'Hyundai',
    model: 'Kona Electric',
    acceleration: 9.7,
    capacity: 42.0,
    range: 280,
    evDatabaseURL:
      'https://ev-database.org/car/1129/Hyundai-Kona-Electric-39-kWh',
  },
  {
    id: 'hyundai-kona-64',
    make: 'Hyundai',
    model: 'Kona Electric',
    acceleration: 7.6,
    capacity: 67.1,
    range: 449,
    evDatabaseURL:
      'https://ev-database.org/car/1126/Hyundai-Kona-Electric-64-kWh',
  },
  {
    id: 'tesla-model-s-60',
    make: 'Tesla',
    model: 'Model S 60',
    acceleration: 5.8,
    capacity: 60,
    rangeNEDC: 375,
    evDatabaseURL: 'https://ev-database.org/car/1072/Tesla-Model-S-60',
  },
  {
    id: 'tesla-model-s-60d',
    make: 'Tesla',
    model: 'Model S 60D',
    acceleration: 5.2,
    capacity: 60,
    rangeNEDC: 375,
    evDatabaseURL: 'https://ev-database.org/car/1073/Tesla-Model-S-60D',
  },
  {
    id: 'tesla-model-s-70d',
    make: 'Tesla',
    model: 'Model S 70D',
    acceleration: 5.4,
    capacity: 70,
    rangeNEDC: 442,
    evDatabaseURL: 'https://ev-database.org/car/1033/Tesla-Model-S-70D',
  },
  {
    id: 'tesla-model-s-75',
    make: 'Tesla',
    model: 'Model S 75',
    acceleration: 5.4,
    capacity: 75,
    rangeNEDC: 480,
    evDatabaseURL: 'https://ev-database.org/car/1071/Tesla-Model-S-75',
  },
  {
    id: 'tesla-model-s-85',
    make: 'Tesla',
    model: 'Model S 85',
    acceleration: 5.6,
    capacity: 85,
    rangeNEDC: 502,
    evDatabaseURL: 'https://ev-database.org/car/1031/Tesla-Model-S-85',
  },
  {
    id: 'tesla-model-s-85d',
    make: 'Tesla',
    model: 'Model S 85D',
    acceleration: 4,
    capacity: 85,
    rangeNEDC: 528,
    evDatabaseURL: 'https://ev-database.org/car/1034/Tesla-Model-S-85D',
  },
  {
    id: 'tesla-model-s-p85',
    make: 'Tesla',
    model: 'Model S P85',
    acceleration: 4.4,
    capacity: 85,
    rangeNEDC: 502,
  },
  {
    id: 'tesla-model-s-p85d',
    make: 'Tesla',
    model: 'Model S P85D',
    acceleration: 3.3,
    capacity: 85,
    rangeNEDC: 491,
    evDatabaseURL: 'https://ev-database.org/car/1036/Tesla-Model-S-P85D',
  },
  {
    id: 'tesla-model-s-90d',
    make: 'Tesla',
    model: 'Model S 90D',
    acceleration: 4.4,
    capacity: 90,
    rangeNEDC: 557,
    evDatabaseURL: 'https://ev-database.org/car/1063/Tesla-Model-S-90D',
  },
  {
    id: 'tesla-model-s-100d',
    make: 'Tesla',
    model: 'Model S 100D',
    acceleration: 4.3,
    capacity: 100,
    rangeNEDC: 632,
    evDatabaseURL: 'https://ev-database.org/car/1088/Tesla-Model-S-100D',
  },
  {
    id: 'tesla-model-s-p100d',
    make: 'Tesla',
    model: 'Model S P100D',
    acceleration: 2.7,
    capacity: 100,
    rangeNEDC: 613,
    evDatabaseURL: 'https://ev-database.org/car/1075/Tesla-Model-S-P100D',
  },
  {
    id: 'tesla-model-x-90d',
    make: 'Tesla',
    model: 'Model X 90D',
    acceleration: 5,
    capacity: 90,
    rangeNEDC: 489,
    evDatabaseURL: 'https://ev-database.org/car/1053/Tesla-Model-X-90D',
  },
  {
    id: 'tesla-model-x-p90d',
    make: 'Tesla',
    model: 'Model X P90D',
    acceleration: 4,
    capacity: 90,
    rangeNEDC: 467,
    evDatabaseURL: 'https://ev-database.org/car/1054/Tesla-Model-X-P90D',
  },
  {
    id: 'tesla-model-3-srplus',
    make: 'Tesla',
    model: 'Model 3 Standard Range Plus',
    price: 5683335,
    sellerURL: 'https://www.tesla.com/is_IS/model3/design',
    acceleration: 5.6,
    capacity: 55,
    range: 409,
    evDatabaseURL:
      'https://ev-database.org/car/1177/Tesla-Model-3-Standard-Range-Plus',
  },
  {
    id: 'tesla-model-3-long-range',
    make: 'Tesla',
    model: 'Model 3 Long Range',
    acceleration: 4.6,
    capacity: 100,
    range: 560,
    evDatabaseURL:
      'https://ev-database.org/car/1138/Tesla-Model-3-Long-Range-Dual-Motor',
  },
  {
    id: 'tesla-model-3-performance',
    make: 'Tesla',
    model: 'Model 3 Performance',
    acceleration: 3.4,
    capacity: 75,
    range: 530,
    evDatabaseURL:
      'https://ev-database.org/car/1139/Tesla-Model-3-Long-Range-Performance',
  },
  {
    id: 'ford-focus-electric-23',
    make: 'Ford',
    model: 'Focus Electric',
    acceleration: 11.4,
    capacity: 23,
    rangeNEDC: 162,
    evDatabaseURL: 'https://ev-database.org/car/1010/Ford-Focus-Electric',
  },
  {
    id: 'ford-focus-electric-2017',
    make: 'Ford',
    model: 'Focus Electric',
    acceleration: 11.4,
    capacity: 33.5,
    rangeNEDC: 225,
    evDatabaseURL: 'https://ev-database.org/car/1010/Ford-Focus-Electric',
  },
  {
    id: 'jaguar-i-pace',
    make: 'Jaguar',
    model: 'I-PACE',
    acceleration: 4.8,
    capacity: 90,
    range: 470,
    evDatabaseURL: 'https://ev-database.org/car/1097/Jaguar-I-Pace',
  },
  {
    id: 'jaguar-i-pace-ev-320',
    make: 'Jaguar',
    model: 'I-PACE',
    acceleration: 6.4,
    capacity: 90,
    range: 470,
    evDatabaseURL: 'https://ev-database.org/car/1307/Jaguar-I-Pace-EV320',
  },
  {
    id: 'mercedes-b-250e',
    make: 'Mercedes-Benz',
    model: 'B 250e',
    acceleration: 7.9,
    capacity: 28,
    rangeNEDC: 200,
    evDatabaseURL: 'https://ev-database.org/car/1013/Mercedes-B-250e',
  },
  {
    id: 'mercedes-eqc',
    make: 'Mercedes-Benz',
    model: 'EQC',
    acceleration: 5.1,
    capacity: 80,
    range: 417,
    evDatabaseURL: 'https://ev-database.org/car/1135/Mercedes-EQC-400-4MATIC',
  },
  {
    id: 'mercedes-e-vito-tourer',
    make: 'Mercedes-Benz',
    model: 'eVito Tourer',
    acceleration: 12.1,
    capacity: 41,
    range: 150,
  },
  {
    id: 'open-ampera-e',
    make: 'Opel',
    model: 'Ampera-e',
    price: 4990000,
    sellerURL: 'https://ampera-e.opel.is/',
    acceleration: 7.3,
    capacity: 60,
    range: 380,
    evDatabaseURL: 'https://ev-database.org/car/1051/Opel-Ampera-e',
  },
  {
    id: 'chevrolet-bolt',
    make: 'Chevrolet',
    model: 'Bolt',
    price: 4990000,
    sellerURL: 'https://ampera-e.opel.is/',
    acceleration: 7.3,
    capacity: 60,
    range: 380,
    evDatabaseURL: 'https://ev-database.org/car/1051/Opel-Ampera-e',
  },
  {
    id: 'mg-zs-ev',
    make: 'MG',
    model: 'ZS EV',
    price: 3990000,
    sellerURL: 'https://www.bl.is/nyir/mg/zsev/',
    acceleration: 8.2,
    capacity: 44.5,
    range: 263,
    evDatabaseURL: 'https://ev-database.org/car/1201/MG-ZS-EV',
  },
  {
    make: 'Honda',
    model: 'e',
    id: 'honda-e',
    price: 4290000,
    sellerURL: 'https://www.honda.is/voruflokkar/bilar/honda-e/',
    acceleration: 9.5,
    capacity: 32.0,
    range: 220,
    evDatabaseURL: 'https://ev-database.org/car/1171/Honda-e',
  },
  {
    make: 'Honda',
    model: 'e Advance',
    id: 'honda-e-advance',
    price: 4690000,
    sellerURL: 'https://www.honda.is/voruflokkar/bilar/honda-e/',
    acceleration: 8.3,
    capacity: 32.0,
    range: 220,
    evDatabaseURL: 'https://ev-database.org/car/1233/Honda-e-Advance',
  },
  {
    make: 'Mini Cooper',
    model: 'SE',
    id: 'mini-cooper-se',
    price: 4790000,
    sellerURL: 'https://www.mini.is/is_IS/home/range/electric.html',
    acceleration: 7.3,
    capacity: 28.9,
    range: 232,
    evDatabaseURL: 'https://ev-database.org/car/1163/Mini-Cooper-SE',
  },
]

export default usedCarModels
