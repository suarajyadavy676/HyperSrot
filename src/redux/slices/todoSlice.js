import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
const initialState = {
  initialTodo:[
    {title:"Task1",discription:"This is good ui",team:"hackers",status:"Pending",assignees:"@Vijay",priority:"Po",createdDate:`${new Date().toLocaleString()}`,id:uuidv4()},
    {title:"Task2",discription:"This is good ui",team:"hackers",status:"In Progress",assignees:"@Vijay",priority:"P2",createdDate:`${new Date().toLocaleString()}`,id:uuidv4()},
    {title:"Task3",discription:"This is good ui",team:"hackers",status:"Completed",assignees:"@Vijay",priority:"P1",createdDate:`${new Date().toLocaleString()}`,id:uuidv4()},
    {title:"Task4",discription:"This is good ui",team:"hackers",status:"Deployed",assignees:"@Vijay",priority:"P2",createdDate:`${new Date().toLocaleString()}`,id:uuidv4()},
    {title:"Task5",discription:"This is good ui",team:"hackers",status:"Deferred",assignees:"@Vijay",priority:"Po",createdDate:`${new Date().toLocaleString()}`,id:uuidv4()},
  ]
}

export const  todoSlice = createSlice({
  name:"todo",
  initialState,
  reducers:{
    add:(state,action)=>{
      // console.log(action)
      state.initialTodo.push(action.payload)
    },
    deleteItem:(state,action)=>{
      // console.log(action.payload)
      state.initialTodo = state.initialTodo.filter(ele=>ele.id !== action.payload)
    }
  }
})
// console.log(todoSlice.reducer)
export const {add,deleteItem} = todoSlice.actions
export default todoSlice.reducer