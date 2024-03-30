import { MenuButton, Menu, Button, MenuList, useToast } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { deleteItem } from "../redux/slices/todoSlice";
import { useDispatch } from "react-redux";
import EditTask from "../components/EditTask";

function TaskCard(props) {
  // console.log(props)
  const toast = useToast();
  let dispatch = useDispatch();
  const { title, discription, priority, assignees, status, id } = props;
  return (
    <div className="w-[95%] mx-auto bg-slate-400 p-2 my-4 text-black">
      <div className="flex justify-between flex-wrap">
        <h1>{title}</h1>
        <h1>{priority}</h1>
      </div>
      <hr />
      <p>{discription}</p>
      <div className="flex justify-between flex-wrap">
        <h1>{assignees}</h1>

        <div>
          <Menu>
            <MenuButton as={Button}>
              <BsThreeDotsVertical />
            </MenuButton>
            <MenuList className="text-center">
              <EditTask/>
              <br />
              <button
                onClick={() => {
                  dispatch(deleteItem(id));
                  toast({
                    title: "Task is deleted",
                    // description: "We've created your account for you.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  });
                }}
              >
                Delete
              </button>
            </MenuList>
          </Menu>
        </div>
      </div>
      <h1 className="bg-blue-600 w-36 text-white mx-auto py-2 px-4 my-5 text-center">
        {status}
      </h1>
    </div>
  );
}

export default TaskCard;
