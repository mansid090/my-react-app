import { useReducer } from "react";

function counterReducer(state, action) {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  }

  if (action.type === "decrement") {
    return {
      count: state.count > 0 ? state.count - 1 : 0,
    };
  }

  if (action.type === "reset") {
    return { count: action.payload };
  }

  return state;
}

export function useCounter(initialValue) {
  const [state, disptach] = useReducer(counterReducer, {
    count: initialValue,
  });

  function increment() {
    disptach({ type: "increment" });
  }

  function decrement() {
    disptach({ type: "decrement" });
  }

  function reset() {
    disptach({ type: "reset", payload: initialValue });
  }

  return {
    count: state.count,
    increment,
    decrement,
    reset,
  };
}

// import {useState} from 'react'

// export function useCounter(initialValue){
//     const [count , setCount] = useState(initialValue)

//     function increment(){
//         setCount((prev) => prev + 1)
//     }

//     function decrement(){
//         setCount((prev) => prev - 1);
//     }

//     function reset(){
//         setCount(initialValue)
//     }

//     return {
//         count ,
//         increment,
//         decrement,
//         reset
//     }
// }
