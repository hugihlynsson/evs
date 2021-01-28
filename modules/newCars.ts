import { NewCar, ExpectedCar } from '../types'

const newCars: Array<NewCar> = [
  {
    make: 'Audi',
    model: 'e-tron',
    subModel: '50 Quattro',
    heroImageName: 'e-tron-50',
    price: 8890000,
    sellerURL: 'http://www.audi.is/is/web/is/models/tron/audi-e-tron-2021.html',
    acceleration: 6.8,
    capacity: 71,
    range: 339,
    evDatabaseURL: 'https://ev-database.org/car/1209/Audi-e-tron-50-quattro',
  },
  {
    make: 'Audi',
    model: 'e-tron',
    subModel: '55 Quattro',
    heroImageName: 'e-tron',
    price: 11990000,
    sellerURL: 'http://www.audi.is/is/web/is/models/tron/audi-e-tron-2021.html',
    acceleration: 5.7,
    capacity: 95,
    range: 436,
    evDatabaseURL: 'https://ev-database.org/car/1253/Audi-e-tron-55-quattro',
  },
  {
    make: 'Audi',
    model: 'e-tron',
    subModel: 'S',
    heroImageName: 'e-tron-s',
    price: 15990000,
    sellerURL: 'http://www.audi.is/is/web/is/models/tron/audi-e-tron-2021.html',
    acceleration: 4.5,
    capacity: 95,
    range: 364,
    evDatabaseURL: 'https://ev-database.org/car/1271/Audi-e-tron-S-55-quattro',
  },
  {
    make: 'Audi',
    model: 'e-tron Sportback',
    subModel: '55 Quattro',
    heroImageName: 'e-tron-55-sportback',
    price: 12890000,
    sellerURL:
      'http://www.audi.is/is/web/is/models/tron/audi-e-tron-sportback-2021.html',
    acceleration: 5.7,
    capacity: 95,
    range: 446,
    evDatabaseURL:
      'https://ev-database.org/car/1107/Audi-e-tron-Sportback-55-quattro',
  },
  {
    make: 'Audi',
    model: 'e-tron Sportback',
    subModel: 'S',
    heroImageName: 'e-tron-s-sportback',
    price: 16390000,
    sellerURL:
      'http://www.audi.is/is/web/is/models/tron/audi-e-tron-sportback-2021.html',
    acceleration: 4.5,
    capacity: 95,
    range: 370,
    evDatabaseURL:
      'https://ev-database.org/car/1272/Audi-e-tron-S-Sportback-55-quattro',
  },
  {
    make: 'BMW',
    model: 'i3',
    heroImageName: 'i3',
    price: 5940000,
    sellerURL: 'https://www.bl.is/nyir/bmw/i3/',
    acceleration: 7.3,
    capacity: 42.2,
    range: 310,
    evDatabaseURL: 'https://ev-database.org/car/1145/BMW-i3-120-Ah',
  },
  {
    make: 'Citroën',
    model: 'ë-C4',
    heroImageName: 'citroen-ec4',
    price: 4090000,
    sellerURL: 'https://www.citroen.is/bill/e-c4-rafbill/',
    acceleration: 9.7,
    capacity: 50,
    range: 350,
    evDatabaseURL: 'https://ev-database.org/car/1286/Citroen-e-C4',
  },
  {
    make: 'Honda',
    model: 'e',
    heroImageName: 'honda-e',
    price: 4290000,
    sellerURL: 'https://www.honda.is/voruflokkar/bilar/honda-e/',
    acceleration: 9.5,
    capacity: 32.0,
    range: 220,
    evDatabaseURL: 'https://ev-database.org/car/1171/Honda-e',
  },
  {
    make: 'Honda',
    model: 'e',
    subModel: 'Advance',
    heroImageName: 'honda-e-advance',
    price: 4690000,
    sellerURL: 'https://www.honda.is/voruflokkar/bilar/honda-e/',
    acceleration: 8.3,
    capacity: 32.0,
    range: 220,
    evDatabaseURL: 'https://ev-database.org/car/1233/Honda-e-Advance',
  },
  {
    make: 'Hyundai',
    model: 'IONIQ Electric',
    heroImageName: 'ioniq',
    price: 5590000,
    sellerURL: 'https://www.hyundai.is/nyir/ioniq/yfirlit',
    acceleration: 9.7,
    capacity: 38.3,
    range: 311,
    evDatabaseURL: 'https://ev-database.org/car/1165/Hyundai-IONIQ-Electric',
  },
  {
    make: 'Hyundai',
    model: 'Kona Electric',
    subModel: '39 kWh',
    heroImageName: 'kona-39',
    price: 5290000,
    sellerURL: 'https://www.hyundai.is/nyir/kona-ev/yfirlit',
    acceleration: 9.9,
    capacity: 39,
    range: 289,
    evDatabaseURL:
      'https://ev-database.org/car/1239/Hyundai-Kona-Electric-39-kWh',
  },
  {
    make: 'Hyundai',
    model: 'Kona Electric',
    subModel: '64 kWh',
    heroImageName: 'kona',
    price: 5990000,
    sellerURL: 'https://www.hyundai.is/nyir/kona-ev/yfirlit',
    acceleration: 7.6,
    capacity: 64,
    range: 450,
    evDatabaseURL:
      'https://ev-database.org/car/1126/Hyundai-Kona-Electric-64-kWh',
  },
  {
    make: 'Jaguar',
    model: 'I-PACE',
    subModel: 'EV 320',
    heroImageName: 'jaguar-i-pace',
    price: 10590000,
    sellerURL: 'https://www.jaguarisland.is/jaguar-range-i-pace',
    acceleration: 6.4,
    capacity: 90,
    range: 470,
    evDatabaseURL: 'https://ev-database.org/car/1307/Jaguar-I-Pace-EV320',
  },
  {
    make: 'Jaguar',
    model: 'I-PACE',
    subModel: 'EV 400',
    heroImageName: 'jaguar-i-pace-alt',
    price: 11290000,
    sellerURL: 'https://www.jaguarisland.is/jaguar-range-i-pace',
    acceleration: 4.8,
    capacity: 90,
    range: 470,
    evDatabaseURL: 'https://ev-database.org/car/1287/Jaguar-I-Pace-EV400',
  },
  {
    make: 'Kia',
    model: 'e-Niro',
    subModel: '39 kWh',
    heroImageName: 'e-niro-alt',
    price: 4990777,
    sellerURL: 'https://www.kia.com/is/nyir-bilar/e-niro/upplifdu/',
    acceleration: 9.8,
    capacity: 39,
    range: 289,
    evDatabaseURL: 'https://ev-database.org/car/1137/Kia-e-Niro-39-kWh',
  },
  {
    make: 'Kia',
    model: 'e-Niro',
    subModel: '64 kWh',
    heroImageName: 'e-niro',
    price: 5790777,
    sellerURL: 'https://www.kia.com/is/nyir-bilar/e-niro/upplifdu/',
    acceleration: 7.8,
    capacity: 64,
    range: 455,
    evDatabaseURL: 'https://ev-database.org/car/1125/Kia-e-Niro-64-kWh',
  },
  {
    make: 'Kia',
    model: 'e-Soul',
    subModel: '39 kWh',
    heroImageName: 'e-soul-alt',
    price: 4990777,
    sellerURL: 'https://www.kia.com/is/nyir-bilar/e-soul/upplifdu/',
    acceleration: 9.6,
    capacity: 39,
    range: 277,
    evDatabaseURL: 'https://ev-database.org/car/1169/Kia-e-Soul-39-kWh',
  },
  {
    make: 'Kia',
    model: 'e-Soul',
    subModel: '64 kWh',
    heroImageName: 'e-soul',
    price: 5990777,
    sellerURL: 'https://www.kia.com/is/nyir-bilar/e-soul/upplifdu/',
    acceleration: 7.9,
    capacity: 64,
    range: 452,
    evDatabaseURL: 'https://ev-database.org/car/1154/Kia-e-Soul-64-kWh',
  },
  {
    make: 'Lexus',
    model: 'UX',
    subModel: '300e',
    heroImageName: 'lexus-ux-300e',
    price: 8490000,
    sellerURL: 'https://www.lexus.is/car-models/ux-300e/',
    acceleration: 7.5,
    capacity: 50,
    range: 315,
    evDatabaseURL: 'https://ev-database.org/car/1251/Lexus-UX-300e',
  },
  {
    make: 'Mazda',
    model: 'MX-30',
    heroImageName: 'mazda-mx-30',
    price: 4090000,
    sellerURL: 'https://www.mazda.is/is/nyir-bilar/mazda-mx-30',
    acceleration: 9.0,
    capacity: 35.5,
    range: 200,
    evDatabaseURL: 'https://ev-database.org/car/1241/Mazda-MX-30',
  },
  {
    make: 'Mercedes-Benz',
    model: 'EQC',
    subModel: '400 4MATIC',
    heroImageName: 'eqc',
    price: 9590000,
    sellerURL:
      'https://www.mercedes-benz.is/passengercars/mercedes-benz-cars/models/eqc/',
    acceleration: 5.1,
    capacity: 80,
    range: 417,
    evDatabaseURL: 'https://ev-database.org/car/1135/Mercedes-EQC-400-4MATIC',
  },
  {
    make: 'Mercedes-Benz',
    model: 'EQA',
    subModel: '250',
    heroImageName: 'mercedes-eqa',
    price: 6790000,
    sellerURL:
      'https://www.mercedes-benz.is/passengercars/the-brand/innovation/concept-eqa/details.html',
    acceleration: 8.9,
    capacity: 66,
    range: 426,
    evDatabaseURL: 'https://ev-database.org/car/1147/Mercedes-EQA-250',
  },
  {
    make: 'Mercedes-Benz',
    model: 'EQA',
    subModel: '300 4MATIC',
    heroImageName: 'mercedes-eqa-alt',
    price: 7590000,
    sellerURL:
      'https://www.mercedes-benz.is/passengercars/the-brand/innovation/concept-eqa/details.html',
    acceleration: 6.9,
    capacity: 66,
    range: 423,
    evDatabaseURL: 'https://ev-database.org/car/1147/Mercedes-EQA',
  },
  {
    make: 'Mercedes-Benz',
    model: 'EQA',
    subModel: '350 4MATIC',
    heroImageName: 'mercedes-eqa-alt2',
    price: 8090000,
    sellerURL:
      'https://www.mercedes-benz.is/passengercars/the-brand/innovation/concept-eqa/details.html',
    acceleration: 5.8,
    capacity: 66,
    range: 423,
    evDatabaseURL: 'https://ev-database.org/car/1147/Mercedes-EQA',
  },
  {
    make: 'Mercedes-Benz',
    model: 'EQV',
    subModel: '300',
    heroImageName: 'eqv',
    price: 11950000,
    sellerURL:
      'https://www.mercedes-benz.is/passengercars/mercedes-benz-cars/models/v-class/v-class-447/eqv/labeling.module.html',
    acceleration: 10.0,
    capacity: 90,
    range: 363,
    evDatabaseURL: 'https://ev-database.org/car/1240/Mercedes-EQV-300-Long',
  },
  {
    make: 'MG',
    model: 'ZS EV',
    heroImageName: 'mg-zs-ev',
    price: 4090000,
    sellerURL: 'https://www.bl.is/nyir/mg/zsev/',
    acceleration: 8.2,
    capacity: 44.5,
    range: 263,
    evDatabaseURL: 'https://ev-database.org/car/1201/MG-ZS-EV',
  },
  {
    make: 'Mini Cooper',
    model: 'SE',
    heroImageName: 'mini',
    price: 4790000,
    sellerURL: 'https://www.mini.is/is_IS/home/range/electric.html',
    acceleration: 7.3,
    capacity: 28.9,
    range: 232,
    evDatabaseURL: 'https://ev-database.org/car/1163/Mini-Cooper-SE',
  },
  {
    make: 'Nissan',
    model: 'e-NV200',
    heroImageName: 'e-nv200',
    price: 5650000,
    sellerURL: 'https://www.nissan.is/vehicles/new-vehicles/e-nv200.html',
    acceleration: 14,
    capacity: 40,
    range: 200,
    evDatabaseURL: 'https://ev-database.org/car/1117/Nissan-e-NV200-Evalia',
  },
  {
    make: 'Nissan',
    model: 'Leaf',
    heroImageName: 'leaf',
    price: 4890000,
    sellerURL: 'https://www.nissan.is/vehicles/new-vehicles/leaf.html',
    acceleration: 7.9,
    capacity: 40,
    range: 270,
    evDatabaseURL: 'https://ev-database.org/car/1106/Nissan-Leaf',
  },
  {
    make: 'Nissan',
    model: 'Leaf',
    subModel: 'e+',
    heroImageName: 'leaf-eplus',
    price: 5490000,
    sellerURL: 'https://www.nissan.is/vehicles/new-vehicles/leaf.html',
    acceleration: 7.3,
    capacity: 62,
    range: 385,
    evDatabaseURL: 'https://ev-database.org/car/1144/Nissan-Leaf-eplus',
  },
  {
    make: 'Opel',
    model: 'Ampera-e',
    heroImageName: 'ampera-e',
    price: 5290000,
    sellerURL: 'https://ampera-e.opel.is/',
    acceleration: 7.3,
    capacity: 60,
    range: 380,
    evDatabaseURL: 'https://ev-database.org/car/1051/Opel-Ampera-e',
  },
  {
    make: 'Opel',
    model: 'Mokka-e',
    heroImageName: 'opel-mokka-e',
    price: 4590000,
    sellerURL: 'https://www.opel.is/bilar/nyr-mokka',
    acceleration: 8.5,
    capacity: 50,
    range: 322,
    evDatabaseURL: 'https://ev-database.org/car/1278/Opel-Mokka-e',
  },
  {
    make: 'Opel',
    model: 'Corsa-e',
    heroImageName: 'opel-corsa-e',
    price: 3990000,
    sellerURL: 'https://nyir.opel.is/corsa-e/',
    acceleration: 8.1,
    capacity: 50,
    range: 330,
    evDatabaseURL: 'https://ev-database.org/car/1192/Opel-Corsa-e',
  },
  {
    make: 'Peugeot',
    model: 'e-208',
    heroImageName: 'e-208',
    price: 4390000,
    sellerURL:
      'https://www.peugeotisland.is/nyir-bilar/velja-bil/glaenyr-peugeot-e-208/',
    acceleration: 8.1,
    capacity: 50,
    range: 340,
    evDatabaseURL: 'https://ev-database.org/car/1168/Peugeot-e-208',
  },
  {
    make: 'Peugeot',
    model: 'e-2008',
    heroImageName: 'e-2008',
    price: 4790000,
    sellerURL:
      'https://www.peugeotisland.is/nyir-bilar/velja-bil/glaenyr-peugeot-e-2008/',
    acceleration: 8.5,
    capacity: 50,
    range: 320,
    evDatabaseURL: 'https://ev-database.org/car/1206/Peugeot-e-2008-SUV',
  },
  {
    make: 'Porsche',
    model: 'Taycan',
    subModel: '4s',
    heroImageName: 'taycan-4s',
    price: 13900000,
    sellerURL: 'https://benni.is/Nyir_Bilar/Porsche/Taycan/',
    acceleration: 4.0,
    capacity: 79.2,
    range: 407,
    evDatabaseURL: 'https://ev-database.org/car/1237/Porsche-Taycan-4S',
  },
  {
    make: 'Renault',
    model: 'Zoe',
    subModel: 'R110',
    heroImageName: 'zoe-r110',
    price: 4450000,
    sellerURL: 'https://www.renault.is/cars/zoe/yfirlit.html',
    acceleration: 11.4,
    capacity: 52,
    range: 395,
    evDatabaseURL: 'https://ev-database.org/car/1164/Renault-Zoe-ZE50-R110',
  },
  {
    make: 'Renault',
    model: 'Zoe',
    subModel: 'R135',
    heroImageName: 'zoe-r135',
    price: 4950000,
    sellerURL: 'https://www.renault.is/cars/zoe/yfirlit.html',
    acceleration: 9.5,
    capacity: 52,
    range: 385,
    evDatabaseURL: 'https://ev-database.org/car/1205/Renault-Zoe-ZE50-R135',
  },
  {
    make: 'Renault',
    model: 'Kangoo',
    subModel: 'MAXI II EV',
    heroImageName: 'maxi',
    price: 4950000,
    sellerURL: 'https://renault.is/cars/kangoo/yfirlit.html',
    acceleration: 22.4,
    capacity: 33,
    range: 190,
    evDatabaseURL: 'https://ev-database.org/car/1101/Renault-Kangoo-Maxi-ZE-33',
  },
  {
    make: 'Tesla',
    model: 'Model 3',
    subModel: 'Standard Range Plus',
    heroImageName: 'tesla-model-3-srplus',
    price: 5683335,
    sellerURL: 'https://www.tesla.com/is_IS/model3/design',
    acceleration: 5.6,
    capacity: 55,
    range: 430,
    evDatabaseURL:
      'https://ev-database.org/car/1177/Tesla-Model-3-Standard-Range-Plus',
  },
  {
    make: 'Tesla',
    model: 'Model 3',
    subModel: 'Long Range',
    heroImageName: 'tesla-model-3-lr',
    price: 6427551,
    sellerURL: 'https://www.tesla.com/is_IS/model3/design',
    acceleration: 4.4,
    capacity: 75,
    range: 580,
    evDatabaseURL:
      'https://ev-database.org/car/1138/Tesla-Model-3-Long-Range-Dual-Motor',
  },
  {
    make: 'Tesla',
    model: 'Model 3',
    subModel: 'Performance',
    heroImageName: 'tesla-model-3-performance',
    price: 7489211,
    sellerURL: 'https://www.tesla.com/is_IS/model3/design',
    acceleration: 3.3,
    capacity: 75,
    range: 567,
    evDatabaseURL:
      'https://ev-database.org/car/1139/Tesla-Model-3-Long-Range-Performance',
  },
  {
    make: 'Tesla',
    model: 'Model S',
    subModel: 'Long Range',
    heroImageName: 'tesla-model-s-lr',
    price: 12476447,
    sellerURL: 'https://www.tesla.com/is_IS/models/design',
    acceleration: 3.2,
    capacity: 100,
    range: 663,
    evDatabaseURL: 'https://ev-database.org/car/1194/Tesla-Model-S-Long-Range',
  },
  {
    make: 'Tesla',
    model: 'Model S',
    subModel: 'Plaid',
    heroImageName: 'tesla-model-s-performance',
    price: 17241779,
    sellerURL: 'https://www.tesla.com/is_IS/models/design',
    acceleration: 2.1,
    capacity: 100,
    range: 628,
    evDatabaseURL: 'https://ev-database.org/car/1207/Tesla-Model-S-Performance',
  },
  {
    make: 'Tesla',
    model: 'Model X',
    subModel: 'Long Range',
    heroImageName: 'tesla-model-x-lr',
    price: 13731351,
    sellerURL: 'https://www.tesla.com/is_IS/modelx/design',
    acceleration: 3.9,
    capacity: 100,
    range: 580,
    evDatabaseURL: 'https://ev-database.org/car/1198/Tesla-Model-X-Long-Range',
  },
  {
    make: 'Tesla',
    model: 'Model X',
    subModel: 'Plaid',
    heroImageName: 'tesla-model-x-performance',
    price: 17241779,
    sellerURL: 'https://www.tesla.com/is_IS/modelx/design',
    acceleration: 2.6,
    capacity: 100,
    range: 547,
    evDatabaseURL: 'https://ev-database.org/car/1326/Tesla-Model-X-Performance',
  },
  {
    make: 'Volkswagen',
    model: 'e-Up!',
    heroImageName: 'e-up',
    price: 3690000,
    sellerURL: 'https://www.volkswagen.is/is/bilar/e-up.html',
    acceleration: 11.9,
    capacity: 36.8,
    range: 260,
    evDatabaseURL: 'https://ev-database.org/car/1189/Volkswagen-e-Up',
  },
  {
    make: 'Volkswagen',
    model: 'ID.3',
    subModel: 'Pro Performance',
    heroImageName: 'vw-id-3',
    price: 5190000,
    sellerURL: 'https://www.volkswagen.is/is/bilar/id3.html',
    acceleration: 7.3,
    capacity: 58,
    range: 420,
    evDatabaseURL:
      'https://ev-database.org/car/1306/Volkswagen-ID3-Pro-Performance',
  },
  {
    make: 'Volkswagen',
    model: 'ID.3',
    subModel: 'Pro S',
    heroImageName: 'vw-id-3-alt',
    price: 6490000,
    sellerURL: 'https://www.volkswagen.is/is/bilar/id3.html',
    acceleration: 8.5,
    capacity: 77,
    range: 550,
    evDatabaseURL: 'https://ev-database.org/car/1203/Volkswagen-ID3-Pro-S',
  },
  {
    make: 'Volkswagen',
    model: 'ID.4',
    subModel: 'Pro Performance 2WD',
    heroImageName: 'vw-id-4',
    price: 6490000,
    sellerURL: 'https://www.volkswagen.is/is/rafbilar/id-fjolskyldan/id4.html',
    acceleration: 8.5,
    capacity: 77,
    range: 500,
    evDatabaseURL: 'https://ev-database.org/car/1273/Volkswagen-ID4',
  },
]

export default newCars

export const expectedCars: Array<ExpectedCar> = [
  {
    make: 'Skoda',
    model: 'Enyaq',
    subModel: 'iV 60',
    heroImageName: 'skoda-enyaq',
    price: 5600000,
    sellerURL: 'https://www.skoda.is/models/enyaq/enyaq',
    acceleration: 8.7,
    capacity: 58,
    range: 390,
    evDatabaseURL: 'https://ev-database.org/car/1279/Skoda-Enyaq-iV-60',
    expectedDelivery: 'Sumar 2021',
  },
  {
    make: 'Skoda',
    model: 'Enyaq',
    subModel: 'iV 80',
    heroImageName: 'skoda-enyaq-alt',
    price: 6600000,
    sellerURL: 'https://www.skoda.is/models/enyaq/enyaq',
    acceleration: 8.5,
    capacity: 77,
    range: 536,
    evDatabaseURL: 'https://ev-database.org/car/1280/Skoda-Enyaq-iV-80',
    expectedDelivery: 'Sumar 2021',
  },
  {
    make: 'Tesla',
    model: 'Model S',
    subModel: 'Plaid+',
    heroImageName: 'tesla-model-s-performance',
    price: 19672191,
    sellerURL: 'https://www.tesla.com/is_IS/models/design',
    acceleration: 2.0,
    capacity: 130,
    range: 840,
    evDatabaseURL: 'https://ev-database.org/car/1207/Tesla-Model-S-Performance',
    expectedDelivery: 'Lok 2021',
  },
  {
    make: 'Volvo',
    model: 'XC40',
    subModel: 'P8 AWD Recharge',
    heroImageName: 'volvo-xc-40',
    price: 7990000,
    sellerURL: 'https://www.volvocars.com/is/bilar/volvo/xc40',
    acceleration: 4.9,
    capacity: 78,
    range: 418,
    evDatabaseURL:
      'https://ev-database.org/car/1188/Volvo-XC40-P8-AWD-Recharge',
    expectedDelivery: 'Sumar 2021',
  },
]
