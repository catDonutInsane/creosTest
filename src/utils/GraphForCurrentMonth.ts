import { getWeekOfMonth, format } from "date-fns";
import type { PieGraphType } from "../types/pieGraphType";
import type { DataI } from "../components/Graphics/BarGraphic";

// получаем график на текущий месяц
export const GraphForCurrentMonth = (pieGraphData: PieGraphType[]) => {

    let data = format(new Date(), "yyyy/MM").split("/").join("-")
    let reg = new RegExp('^' + data, "gi")
    let res: PieGraphType[][] = []

    pieGraphData.filter(i => i.date_finished_by_designer.match(reg))
        .forEach((i) => {
            let weekOfMonth = getWeekOfMonth(new Date(i.date_finished_by_designer))
            if (res.length === 0 || res[weekOfMonth - 1] === undefined) {
                res.push([i])
            }
            else {
                res[weekOfMonth - 1].push(i)
            }
        })
    let result: DataI[][] = res.map(i => i.map(((i) => {
        let weekOfMonth = getWeekOfMonth(new Date(i.date_finished_by_designer))

        return {
            name: weekOfMonth,
            "Доход": i.received_from_client,
            "Расход": i.send_to_account_manager + i.send_to_designer + i.send_to_project_manager,
            "Разница": i.received_from_client - (i.send_to_account_manager + i.send_to_designer + i.send_to_project_manager)
        }
    })))

    return result.map(i => {
        return i.reduce((prev, next): any => {
            return {
                name: next.name,
                "Доход": prev["Доход"] + next["Доход"],
                "Расход": prev["Расход"] + next["Расход"],
                "Разница": prev["Разница"] + next["Разница"]
            }
        }, {
            name: 0,
            "Доход": 0,
            "Расход": 0,
            "Разница": 0
        })
    })
}

