import { FaUserAlt } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex justify-between items-center w-[90%] mx-auto">
        <h1 className="text-2xl font-bold text-center">Task Board</h1>
        <div className="bg-white p-4 rounded-full">      
          <FaUserAlt className="text-2xl" />
        </div>
      </div>
  )
}

export default Navbar
