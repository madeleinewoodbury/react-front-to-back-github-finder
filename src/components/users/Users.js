import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        id: 1,
        login: 'madeleinewoodbury',
        avatar_url: 'https://avatars1.githubusercontent.com/u/44329604?v=4',
        html_url: 'https://github.com/madeleinewoodbury'
      },
      {
        id: 2,
        login: 'bradtraversy',
        avatar_url: 'https://avatars2.githubusercontent.com/u/5550850?v=4',
        html_url: 'https://github.com/bradtraversy'
      },
      {
        id: 3,
        login: 'Colt',
        avatar_url: 'https://avatars1.githubusercontent.com/u/5498438?v=4',
        html_url: 'https://github.com/Colt'
      }
    ]
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
