
import type { Issue } from "../types/designerType";
export const  timeOnWork = ({date_started_by_designer, date_finished_by_designer}:Issue)=>{
    const startDate = Date.parse(date_started_by_designer)
    const finishDate = Date.parse(date_finished_by_designer)
    const difference = finishDate - startDate;


return difference
}

export const medianTimeFormat = (medianTime :number) =>{
const millisecondsPerMinute = 1000 * 60;
const millisecondsPerHour = millisecondsPerMinute * 60;
const millisecondsPerDay = millisecondsPerHour * 24;

const days = Math.floor(medianTime / millisecondsPerDay);
const hours = Math.floor((medianTime % millisecondsPerDay) / millisecondsPerHour);
const minutes = Math.floor((medianTime % millisecondsPerHour) / millisecondsPerMinute);
return `Медианное время выполнения задачи ${days} дней, ${hours} часов и ${minutes} минут`
}