
import './App.css';
import Header from './mycomponents/Header';
import Todos from './mycomponents/Todos';
import Todo from './mycomponents/Todo';
import Footer from './mycomponents/Footer';
import React, { useState } from 'react';
import Addtodo from './mycomponents/Addtodo';

function App() {
  const addTodo=(title,desc)=>{
        const myTodo={
          title: title,
          desc: desc
        }
        setTodos([...todos,myTodo]);
  }
  const onDelete=(todo)=>{
    console.log("i am ondelete",todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const[todos,setTodos]=useState([
    {
      sno: 1,
      title: "go to the market",
      desc: "you need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "go to the mall",
      desc: "you need to go to the mall to get this job done"
    },
    {
      sno: 3,
      title: "go to the gym",
      desc: "you need to go to the gym to get this job done"
    }
  ]);
  return (
    <>
     <Header title="Mytodos"/>
     <Addtodo addTodo={addTodo}/>
     <Todos todos={todos} onDelete={onDelete}/>
     <Footer/>
   </>
  );
}

export default App;
