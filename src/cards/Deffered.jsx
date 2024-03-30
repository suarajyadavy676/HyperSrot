import React from 'react'
import { useSelector } from 'react-redux'
import TaskCard from './TaskCard'

function Deffered() {
  const data = useSelector(state=>state.todo.initialTodo)
  // console.log("data",data)
  const filterData = data?.filter(data=>data.status=="Deferred")
  // console.log("filterData",filterData)
  return (
    <div className='bg-white w-[250px] shadow-2xl min-h-60'>
      <h1 className='bg-red-500 text-center'>Deffered</h1>
      {filterData?.map(ele=><TaskCard {...ele} key={ele?.id} />)}
    </div>
  )
}

export default Deffered
