const SHOP_DATA = {
  cakes: {
    id: 1,
    title: 'Cakes',
    routeName: 'cakes',
    items: [
      {
        id: 1,
        name: 'Chocolate Bomb',
        imgUrl:
          'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80',
        price: 25
      },
      {
        id: 2,
        name: 'Oreo Cake',
        imgUrl:
          'https://images.unsplash.com/photo-1557925923-cd4648e211a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
        price: 18
      },
      {
        id: 3,
        name: 'Blue Muffins',
        imgUrl:
          'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        price: 35
      },
      {
        id: 4,
        name: 'Jungle Muffins',
        imgUrl:
          'https://images.unsplash.com/photo-1560180474-e8563fd75bab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        price: 25
      },
      {
        id: 5,
        name: 'Birthday Cake',
        imgUrl:
          'https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80',
        price: 18
      },
      {
        id: 6,
        name: 'Cream Tarte',
        imgUrl:
          'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        price: 14
      },
      {
        id: 7,
        name: 'Fruit Fun',
        imgUrl:
          'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        price: 18
      },
      {
        id: 8,
        name: 'Caramel Cheese',
        imgUrl:
          'https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1456&q=80',
        price: 14
      },
      {
        id: 9,
        name: 'Tiramisu Cake',
        imgUrl:
          'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        price: 16
      }
    ]
  },
  icecream: {
    id: 2,
    title: 'Icecream',
    routeName: 'icecream',
    items: [
      {
        id: 10,
        name: 'Surprise Package',
        imgUrl:
          'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        price: 220
      },
      {
        id: 11,
        name: 'Strawberry Sticks',
        imgUrl:
          'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1012&q=80',
        price: 280
      },
      {
        id: 12,
        name: 'Nut Cup',
        imgUrl:
          'https://images.unsplash.com/photo-1514849302-984523450cf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        price: 110
      },
      {
        id: 13,
        name: 'Fruit Cup',
        imgUrl:
          'https://images.unsplash.com/photo-1568464774940-a3de36f824a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        price: 160
      },
      {
        id: 14,
        name: 'Caramel Shock',
        imgUrl:
          'https://images.unsplash.com/photo-1531240062960-4842b265a1ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1106&q=80',
        price: 160
      },
      {
        id: 15,
        name: 'Strawberry Waffles',
        imgUrl:
          'https://images.unsplash.com/photo-1556682851-c4580670113a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=706&q=80',
        price: 160
      },
      {
        id: 16,
        name: 'Waffles Unlimited',
        imgUrl:
          'https://images.unsplash.com/photo-1563448927992-2a8fa2e178dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        price: 190
      },
      {
        id: 17,
        name: 'Coffe Ice',
        imgUrl:
          'https://images.unsplash.com/photo-1542879568-5ab18cf1eb30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        price: 200
      }
    ]
  },
  pralines: {
    id: 3,
    title: 'Pralines',
    routeName: 'pralines',
    items: [
      {
        id: 18,
        name: 'Chocolate Balls',
        imgUrl:
          'https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
        price: 125
      },
      {
        id: 19,
        name: 'Chocolate Squares',
        imgUrl:
          'https://images.unsplash.com/photo-1548741487-18d363dc4469?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        price: 90
      },
      {
        id: 20,
        name: 'Birthday Plate',
        imgUrl:
          'https://images.unsplash.com/photo-1574099671276-df8581f1e3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1315&q=80',
        price: 90
      },
      {
        id: 21,
        name: 'Fruity Pralines',
        imgUrl:
          'https://images.unsplash.com/photo-1583315051665-6d7a9a1c1e9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        price: 165
      },
      {
        id: 22,
        name: 'Suprise Pralines',
        imgUrl:
          'https://images.unsplash.com/photo-1481391319762-47dff72954d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
        price: 185
      }
    ]
  },
  cookies: {
    id: 4,
    title: 'Cookies',
    routeName: 'cookies',
    items: [
      {
        id: 23,
        name: 'Chocolate Cookie',
        imgUrl:
          'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        price: 25
      },
      {
        id: 24,
        name: 'Cream Cookie',
        imgUrl:
          'https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
        price: 20
      },
      {
        id: 25,
        name: 'Macarons',
        imgUrl:
          'https://images.unsplash.com/photo-1548848221-0c2e497ed557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        price: 80
      },
      {
        id: 26,
        name: 'Eastern Cookie',
        imgUrl:
          'https://images.unsplash.com/photo-1573504286795-36a4a38c52a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        price: 80
      },
      {
        id: 27,
        name: 'Dwarf Cookie',
        imgUrl:
          'https://images.unsplash.com/photo-1511730609347-730e2da3da59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        price: 45
      },
      {
        id: 28,
        name: 'Christmas Cookie',
        imgUrl:
          'https://images.unsplash.com/photo-1481390915718-84930b788814?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        price: 135
      },
      {
        id: 29,
        name: 'Oreo Cookie',
        imgUrl:
          'https://images.unsplash.com/photo-1571150074404-3a1e705b1959?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
        price: 20
      }
    ]
  },
  chocolates: {
    id: 5,
    title: 'Chocolates',
    routeName: 'chocolates',
    items: [
      {
        id: 30,
        name: 'Milk Chocolate',
        imgUrl:
          'https://images.unsplash.com/photo-1575377427642-087cf684f29d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        price: 325
      },
      {
        id: 31,
        name: 'Splittered Nut Chocolate',
        imgUrl:
          'https://images.unsplash.com/photo-1542843137-8791a6904d14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        price: 20
      },
      {
        id: 32,
        name: 'Whole Nut Chocolate',
        imgUrl:
          'https://images.unsplash.com/photo-1581354480823-5f7668b7cfb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        price: 25
      },
      {
        id: 33,
        name: 'White Cocolate',
        imgUrl:
          'https://images.unsplash.com/photo-1548907040-4baa42d10919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
        price: 25
      },
      {
        id: 34,
        name: 'Strawberry Cocolate',
        imgUrl:
          'hhttps://images.unsplash.com/photo-1545396635-f4865ca1448b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        price: 40
      },
      {
        id: 35,
        name: 'Coffee Chocolate',
        imgUrl:
          'https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-1.2.1&auto=format&fit=crop&w=1438&q=80',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
