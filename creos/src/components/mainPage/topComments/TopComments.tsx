import axios from "axios"
import { useEffect } from "react"
import style from "./TopComments.module.css"
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks"
import { getTopComment, getDesignersList } from "../../../reducers/reducer"
import { TopDesigners } from "../topDesigners/TopDesigners"
import { CommentItem } from "./commentItem/CommentItem"
import type { DesignerType } from "../../../types/designerType"
export const TopComments = () => {
    const dispatch = useAppDispatch()
    const { count } = useAppSelector<DesignerType<number | null>>(state => state.reducer.designers)
    const { topComment } = useAppSelector(state => state.reducer)
    useEffect(() => {
        axios.get("https://sandbox.creos.me/api/v1/comment/")
            .then(res => res.data)
            .then(res => dispatch(getTopComment(res)))
    }, [])
    useEffect(() => {
        axios.get(`https://sandbox.creos.me/api/v1/designer/`)
            .then(res => res.data)
            .then(res => dispatch(getDesignersList(res)))
    }, [count])
    return (
        <div className={style.wrapper}>
            <div className={style.wrapper_comments}>
                <p>Топ-10 комментариев</p>
            {topComment?.filter(i=>i.id<=10).map(i=><CommentItem {...i}/>)}
            </div>
            
            <TopDesigners />
        </div>
    )
}