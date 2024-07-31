import { useEffect, useState } from "react"
import style from "./designerItem.module.css"
type TaskType = {
    done: number,
    inProgress : number
}

export const DesignerItem = ({...props}) =>{
    const {thumbnails, username, email, issues} = props
    const [tasks , setTasks] = useState<TaskType>({done:0,inProgress:0})
    useEffect(()=>{
        let done = issues.filter((i:any)=>i.status==="Done")
        let inProgress = issues.filter((i:any)=>i.status==="In Progress")
        setTasks({done: done.length, inProgress: inProgress.length})
    },[])
    return(
        <div className={style.desCard}>
            <img src={thumbnails.avatar} alt="avatar" />
            <div className={style.info}>
            <span>email: {email}</span>
            <span>username : {username}</span>
            </div>
            <div className={style.tasks}>
            <span>сделано: {tasks.done}</span>
            <span>В процессе: {tasks.inProgress}</span>
            </div>
        </div>
    )
}