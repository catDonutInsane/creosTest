import { useEffect, useState } from "react"
import axios from "axios"
import { timeOnWork } from "../../../utils/timeOnWork"
import { TopDesignerItem } from "./topDesignerItem/TopDesignerItem"
import { useAppSelector } from "../../../hooks/hooks"
import { useAppDispatch } from "../../../hooks/hooks"
import {  getFilteredDesigners } from "../../../reducers/reducer"
import type { DesignerType, DesignerResultType } from "../../../types/designerType"
import type { MedianType } from "../../../reducers/reducer"
export const TopDesigners = () => {
    const dispatch = useAppDispatch()
    const { count } = useAppSelector<DesignerType<number | null>>(state => state.reducer.designers)
    const { topDesignersFilteredByMedian } = useAppSelector(state => state.reducer)
    useEffect(() => {
        let r: MedianType[] = []
        if (count) {

            for (let i = 1; i < Math.ceil(count/ 128) + 1; i++) {
                axios.get(`https://sandbox.creos.me/api/v1/designer/?limit=128&${i == 1 ? "" : `page=${i}`}`)
                    .then(res => res.data.results)
                    .then(res => {
                        r.push(...res.map((i: DesignerResultType) => {
                            return {
                                ...i,
                                issues: i.issues.filter(i => i.status === "Done")
                            }
                        }))
                        dispatch(getFilteredDesigners(r.map(i => {
                            return {
                                ...i,
                                median: i.issues.map(i => timeOnWork(i))
                                    .reduce((prev, next) => prev + next, 0) / i.issues.length
                            }

                        }).sort((a: MedianType, b: MedianType) => a.median - b.median).splice(0, 10)))
                    }

                    )

            }
        }
        console.log(topDesignersFilteredByMedian)
},[count])
    return (
        <div >
            <p style={{marginBottom: "20px"}}>Топ-10 дизайнеров</p>
            {topDesignersFilteredByMedian.length===0?"Loading...":topDesignersFilteredByMedian.map(i => <TopDesignerItem key={i.username} {...i} />)}
        </div>
    )
} 