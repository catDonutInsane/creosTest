import { CommentTypes } from "../../../../types/commetsType"
import { messageDate } from "../../../../utils/messegeDate"
import style from "./CommentItem.module.css"
export type {CommentTypes} from "../../../../types/commetsType"

export const CommentItem = ({designer,message,issue, date_created}:CommentTypes) =>{
    const {days,hours,minutes} = messageDate(date_created)
    return(
        <div className={style.wrapper}>
            <img src={designer.avatar} alt="avatar" />
            <div className={style.wrapper_task}>
            <span>{designer.username}</span>
            <span>Задача: {issue}</span>
            </div>
            
        <p>{message}</p>
        <span>{`Сообщение написано ${days} дней, ${hours} часов и ${minutes} минут назад.` }</span>
        </div>
    )
}