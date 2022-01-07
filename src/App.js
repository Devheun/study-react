import React,{useRef,useState} from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter'
import InputSample from './InputSample'
import UserList from './UserList'
import CreateUser from './CreateUser'

function App(){
  const [inputs,setInputs]=useState({
    username:'',
    email:''
  });

  const {username,email}=inputs;

  const onChange=(e)=>{
    const {name,value}=e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  }

  const [users,setUsers]=useState([
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
  ]);
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

    const user={
      id : nextId.current,
      username,
      email
    };
    setUsers([...users,user]);

    setInputs({
      username:'',
      email:''
    });
    nextId.current+=1;
  }

  const onRemove= (id)=>{ //user.id 가 id인 것을 제거하여 새로운 배열 만듦
    setUsers(users.filter(user=>user.id!==id));
  };

  return(
    <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
    <UserList users={users} onRemove={onRemove}/>
    </>
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
