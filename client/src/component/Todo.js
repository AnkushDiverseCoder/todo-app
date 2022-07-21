import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';


function Todo() {

    const [todo, setTodo] = useState({
        title:'',
        content:""
    })
    // const [updateTodo, setUpdateTodo] = useState({
    //     title:'',
    //     content:""
    // })
    const [todos, setTodos] = useState([]);

    const fetchdata = async ()=>{
        const data = await axios.get("/api/getdata");
        setTodos(data.data);
    }
    useEffect(() => {
           fetchdata();      
      },[])
      // todo comment  
    
    const onSubmitHandler = async(e)=>{
        
        await axios.post("/api/createdata" , todo)
    }
     
    const updateTodo = async (id)=>{
        // e.preventDefault();
       try {
        const title = prompt("Enter New Title");
        const content = prompt("Enter new Task") ;
        axios.put(`/api/updatedata/${id}` , {
            title : title , 
            content : content,
        })
       } catch (error) {
        console.log(error)
       }
    }
    const deleteTodo = (id)=>{
        try {
            axios.delete(`/api/deletedata/${id}`)
        } catch (error) {
            
        }
    }

    return (
        <>
        <form onSubmit={onSubmitHandler}>
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
            
                <div className="flex flex-col text-center w-full mb-1">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Todo-Crud-App To Complete All Your Task</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
                </div>
                <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
                    <div className="relative sm:mb-0 flex-grow w-full">
                        <label  className="leading-7 text-sm text-gray-400">Title</label>
                        <input type="text"name="title" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={e=>setTodo({...todo , title:e.target.value})} />
                    </div>
                    <div className="relative sm:mb-0 flex-grow w-full">
                        <label  className="leading-7 text-sm text-gray-400">Task</label>
                        <input type="text" id="email" name="content" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  onChange={(e)=>setTodo({...todo  ,content:e.target.value})} />
                    </div>
                    <button type="submit" className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Button</button>
                    
                </div>
            </div>
        </section>
        </form>
            <div className="container ">
            {/* <pre>{JSON.stringify(todo)}</pre> */}
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Task</th>
                                    <th>Remove</th>
                                    <th>Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todos.map(todo=>{
                                   return(
                                    <tr key={todo._id}>
                                    <td>{todo.title}</td>
                                    <td>{todo.content}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={()=>updateTodo(todo._id)}>update</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={()=>deleteTodo(todo._id)} >delete</button>
                                    </td>
                                 </tr>
                                   )
                                })}
                            </tbody>
                        </table>
            </div>

        </>
    )
}

export default Todo