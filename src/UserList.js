import React from 'react';

function User({user}){
    return(
        <div>
            <b>{user.username}</b><span>({user.email})</span>
        </div>
    );
}

function UserList(){
    const users=[
        {
            id:1,
            username:'siheun',
            email : 'siheun@naver.com'
        },
        {
            id:2,
            username:'tebin',
            email:'tebin@naver.com'
        },
        {
            id:3,
            username:'fiers',
            email:'fiers@naver.com'
        }
    ];

    return(
        <div>
        {users.map(user=>(
            <User user={user} key={user.id}/>
        ))}
        </div>
    );
}

export default UserList;