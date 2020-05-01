const INITIAL_STATE = {
  sections: [
    {
      title: 'CAKES',
      imgUrl:
        'https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80',
      id: 1,
      linkUrl: 'shop/cakes'
    },
    {
      title: 'PRALINES',
      imgUrl:
        'https://images.unsplash.com/photo-1481391319762-47dff72954d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: 2,
      linkUrl: 'shop/pralines'
    },
    {
      title: 'ICECREAM',
      imgUrl:
        'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      id: 3,
      linkUrl: 'shop/icecream'
    },
    {
      title: 'COOKIES',
      imgUrl:
        'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80',
      size: 'large',
      id: 4,
      linkUrl: 'shop/cookies'
    },
    {
      title: 'CHOCOS',
      imgUrl:
        'https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1138&q=80',
      size: 'large',
      id: 5,
      linkUrl: 'shop/chocos'
    }
  ]
};

const sectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default sectionReducer;
