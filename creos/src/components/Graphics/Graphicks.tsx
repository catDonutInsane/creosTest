import { useEffect, useState } from "react"
import axios from "axios"
import { BarGraphic } from "./BarGraphic"
import { PieGraphic } from "./PieGraphic"
import { useAppDispatch} from "../../hooks/hooks"
import { setPieGraphData } from "../../reducers/reducer"
export const Graphicks = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        axios.get("https://sandbox.creos.me/api/v1/issue/")
            .then(res => res.data)
            .then(res => dispatch(setPieGraphData(res)))
    }, [])
    return (
        <div>
            <PieGraphic />
            <BarGraphic />
        </div>
    )
}
