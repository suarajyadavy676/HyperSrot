import React from 'react'
import { useSelector } from 'react-redux'
import TaskCard from './TaskCard'

function Completed() {
  const data = useSelector(state=>state.todo.initialTodo)
  // console.log("data",data)
  const filterData = data?.filter(data=>data.status=="Completed")
  // console.log("filterData",filterData)
  return (
    <div className='bg-white w-[250px] shadow-2xl min-h-60'>
      <h1 className='bg-green-400 text-center'>Completed</h1>
      {filterData?.map(ele=><TaskCard {...ele} key={ele?.id} />)}
    </div>
  )
}

export default Completed
