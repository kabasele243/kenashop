import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://images.unsplash.com/photo-1485675067348-b5ac01cfc282?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://images.unsplash.com/photo-1520880178538-52017968d5d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          size: 'large',
          id: 4,
          linkUrl: 'womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=426&q=80',
          size: 'large',
          id: 5,
          linkUrl: 'mens'
        }
      ]
    };
  }

  render() {

    //We map through our sections from state
    //We destructure the value we need like { title, imageUrl, id, size} to access them directly
    //We access them through MenuItem That we give state, and it receive them as a props.
    //We use spread to destructure them using otherSectionsProps so with can add more attribute without expressely naming them.

    return (
      <div className='directory-menu'>

        {this.state.sections.map(({ id, ...otherSectionsProps }) => (
          <MenuItem key={id} {...otherSectionsProps} />
        ))}


      </div>
    );
  }
}

export default Directory;
