import React from 'react'
import { useSelector } from 'react-redux'
import TaskCard from './TaskCard'

function Deployed() {
  const data = useSelector(state=>state.todo.initialTodo)
  // console.log("data",data)
  const filterData = data?.filter(data=>data.status=="Deployed")
  // console.log("filterData",filterData)
  return (
    <div className='bg-white w-[250px] shadow-2xl min-h-60'>
      <h1 className='bg-blue-950 text-center'>Deployed</h1>
      {filterData?.map(ele=><TaskCard {...ele} key={ele?.id} />)}
    </div>
  )
}

export default Deployed
