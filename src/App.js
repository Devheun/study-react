import React,{useRef} from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter'
import InputSample from './InputSample'
import UserList from './UserList'

function App(){
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
  {/* 
  const name = 'react';
  const style={
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : 24,
    padding : '1rem'
  */}
  const nextId=useRef(4);
  const onCreate=()=>{
    nextId.current+=1;
  }

  return(
    
    <UserList users={users}/>
    //<InputSample />
    //<Counter/>
    //<Wrapper>
      //<Hello name="react" color="red" isSpecial ={true}/>
      //<Hello color="pink"/>
      //<div style={style}>{name}</div>
      //<div className="gray-box"></div>
    //</Wrapper>
  
  );
  
}

export default App;
