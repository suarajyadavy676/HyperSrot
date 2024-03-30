import React from 'react'
import { useSelector } from 'react-redux'
import TaskCard from './TaskCard'

function Pregress() {
  const data = useSelector(state=>state.todo.initialTodo)
  // console.log("data",data)
  const filterData = data?.filter(data=>data.status=="In Progress")
  // console.log("filterData",filterData)
  return (
    <div className='bg-white w-[250px] shadow-2xl min-h-60'>
      <h1 className='bg-rose-300 text-center'>In Progress</h1>
      {filterData?.map(ele=><TaskCard {...ele} key={ele?.id} />)}
    </div>
  )
}

export default Pregress
