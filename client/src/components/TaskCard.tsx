import { TaskStatus, Task } from "../types/task";

export default function TaskCard({id, name, content, status}: Task){
    return(
    <div id={String(id)}>
        <input type="text" value={name}/>
        <input type="text" value={content}/>
        <input type="text" value={status}/>
    </div>
    )
}