import style from "./TopDesignerItem.module.css"
import {medianTimeFormat } from "../../../../utils/timeOnWork"
import type { MedianType } from "../../../../reducers/reducer"
export const TopDesignerItem = ({username,avatar,issues, median}:MedianType) =>{
    // const dispatch = useAppDispatch()
    // const medianTime = issues.map(i=>timeOnWork(i))
    // .reduce((prev,next)=>prev+next,0)/issues.length
    // useEffect(()=>{
    //     dispatch(getFilteredDesigners({username, medianTime}))
    // },[])

    return (
        <div className={style.topdesigners_wrapper}>
            <img src={avatar} alt="avatar" />
            <div className={style.topdesigners_wrapper_median}>
                <span>{username}</span>
                <div>{medianTimeFormat(median)}
                </div>
            </div>
           
            <span>{`количество сделанных задач: ${issues.length}`}</span>
        </div>
    )
}