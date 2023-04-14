import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/TodoReducer";



const initialState = [];

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () =>{

    const [todos, dispatch] = useReducer(todoReducer , initialState, init);
todoReducer
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    

    const handleNewTodo=(todo)=>{
        const action={
            type:'Add Todo',
            payload:todo
        }
        dispatch(action)
    }

    const handleDeleteTodo=(id)=>{
        dispatch({
            type:'Remove Todo',
            payload:id
        })
    }
    const HandleToggleTodo=(id)=>{
        dispatch({
            type:'Todo toggle',
            payload:id
        })
    }


    return{
        todos,
        handleDeleteTodo,
        handleNewTodo,
        HandleToggleTodo,
        todosCount:todos.length,
        pendingTodosCount:todos.filter(todo=>!todo.done).length
    }
}







