import Navbar from "./components/Navbar";
import TaskBody from "./components/TaskBody";
function App() {
  // console.log("date ",new Date())
  return (
    <>
      <div className="w-[94%] mx-auto mt-5">
        <Navbar/>
        <TaskBody/>
        {/* <h1>Created Date :{new Date().toLocaleString()}</h1> */}
      </div>
    </>
  );
}

export default App;
