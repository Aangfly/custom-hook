import { useState } from "react";



export const useForm = (initialForm={}) => {

    const [second, setSecond] = useState(initialForm);

const onInputchange =({target})=>{
    const{name, value}=target;
    setSecond({
        ...second,
        [name]: value
    })
}

const onResetForm = () =>{
    setSecond(initialForm)
}

    return{
        ...second,
        second,
        onInputchange,
        onResetForm
    }
}
