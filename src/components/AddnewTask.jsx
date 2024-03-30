import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { add } from "../redux/slices/todoSlice";
import { useDispatch } from "react-redux";

function AddnewTask() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log(db)

  let dispatch = useDispatch()
  // random id
  function generateRandomId(length = 6) {
    return Math.random().toString(36).substring(2, length + 2);
  }

  let initialState = {title:"",discription:"",team:"",status:"",assignees:"",priority:"",createdDate:`${new Date().toLocaleString()}`,id:generateRandomId()} 
  
  const [createTask,setCreateTask] = useState(initialState)
  // console.log(createTask)

  const handleChange = (e) =>{
    setCreateTask({...createTask,[e.target.name]:e.target.value})
  }
  const handleSubmit = ()=>{
    // console.log(createTask)
    setCreateTask({...createTask})
    // 
    dispatch(add(createTask))
    onClose()
  }
  return (
    <>
      <Button onClick={onOpen}>Add New Task</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>CREATE A TASK</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            
              <div className="flex justify-between items-center">
                <label>Title :</label>
                <input
                  type="text"
                  name="title"
                  placeholder=" Enter Task Name"
                  onChange={handleChange}
                  className=" my-2  bg-slate-300 rounded-sm w-[80%]"
                />
              </div>

              <div className="flex justify-between flex-wrap items-center">
                <label>Discription :</label>
                <textarea
                  name="discription"
                  id=""
                  cols="38"
                  rows="2"
                  placeholder="Enter Discription Here"
                  onChange={handleChange}
                  className="mt-2 ml-2  bg-slate-300 rounded-sm"
                ></textarea>
              </div>

              <div>
                <label>Team : </label>
                <input
                  type="text"
                  name="team"
                  placeholder="Enter Team"
                  onChange={handleChange}
                  className=" my-2  bg-slate-300 rounded-sm w-[80%]"
                />
              </div>

              <label>
                Assignees :
                <input
                  type="text"
                  name="assignees"
                  placeholder="Enter Assignees"
                  onChange={handleChange}
                  className="my-2 ml-2 bg-slate-300 rounded-sm"
                />
              </label><br />
              <label>
                Status :
                <select name="status" id="" onChange={handleChange} className=" bg-slate-300 rounded-sm">
                  <option value="">Choose</option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Deployed">Deployed</option>
                  <option value="Deffered">Deffered</option>
                </select>
              </label>
              <div className="my-2">
                <span className="mr-14">Priority: </span>
                <select name="priority" onChange={handleChange} className="bg-slate-300">
                  <option value="">choose</option>
                  <option value="P0">P0</option>
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                </select>
              </div>
              <div className="text-center my-2">
                <button  onClick={handleSubmit} className="bg-blue-500 text-white px-2 rounded-sm">
                  Submit
                </button>
              </div>
          </ModalBody>
          <ModalFooter>
            {/* <Button colorScheme="blue" mr={"50%"} onClick={onClose}>
              Close
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddnewTask;
