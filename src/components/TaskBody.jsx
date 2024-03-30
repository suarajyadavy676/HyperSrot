import AddnewTask from "./AddnewTask";
import Pending from "../cards/Pending";
import Progress from '../cards/Pregress'
import Completed from '../cards/Completed'
import Deployed from "../cards/Deployed";
import Deffered from "../cards/Deffered";

function TaskBody() {
  return (
    <>
      <div className="w-[96%] border-4 border-white border-solid min-h-96 mt-10 mx-auto rounded-lg p-2">
        {/* filter */}
        <div className="flex sm:justify-between flex-wrap mx-auto justify-center">
          <div className="my-2">
            <label>Filter By :</label>
            <input
              type="text"
              placeholder="Assignee Name"
              className="text-center ml-2"
            />
          </div>
          <div className="my-2">
            <select name="" id="">
              <option value="">Priority</option>
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
          </div>
          <div className="bg-white my-2">
            <input type="date" /> - <input type="date" />
          </div>
          
          {/* add new task component  */}
          <AddnewTask />
        </div>

        {/* Sort */}
        <div className="mt-4">
          <span className="mr-14">Sorted By: </span>
          <select name="" id="">
            <option value="">Priority</option>
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 my-9 justify-center text-white font-bold">
          <Pending />
          <Progress/>
          <Completed/>
          <Deployed/>
          <Deffered/>
        </div>

      </div>
    </>
  );
}

export default TaskBody;
