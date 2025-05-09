import { useUser } from "../context/UserContext";
import axiosInstance from "../api/axiosInstance";
import { Task } from "../types/task";
import TaskCard from "../components/TaskCard";
import { useEffect, useState } from "react";
function DashBoardPage(){
    const [tasks, setTasks] = useState<Task[]>([]); 
    useEffect(() =>{
      const fetchTasks = async ()=>{
        let result = await axiosInstance.get('/tasks/');
        setTasks(result.data);
      }
      fetchTasks();
    },[])
    const {user} = useUser();
      return (
        <div>
          <h1>My Tasks</h1>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              name={task.name}
              content={task.content}
              status={task.status}
            />
          ))}
        </div>
      );
}

export default DashBoardPage