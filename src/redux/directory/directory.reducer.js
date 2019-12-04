import CartActionsTypes from "../cart/cart.types"

const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://images.unsplash.com/photo-1485675067348-b5ac01cfc282?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'technology',
            imageUrl: 'https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
            id: 2,
            size: 'medium',
            linkUrl: 'shop/technology'
        },
        {
            title: 'children',
            imageUrl: 'https://images.unsplash.com/photo-1507036066871-b7e8032b3dea?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
            id: 3,
            size: 'medium',
            linkUrl: 'shop/children'
        },
        {
            title: 'womens',
            imageUrl: 'https://images.unsplash.com/photo-1520880178538-52017968d5d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=426&q=80',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]

}


const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export default directoryReducer;