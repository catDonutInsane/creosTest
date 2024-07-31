
export const  messageDate = (dateCreated:string)=>{
    const messageDate = Number(new Date(dateCreated))
    const currentDate = Number(new Date())
    const difference = currentDate - messageDate;
console.log(messageDate , currentDate)
// Переводим разницу в дни, часы и минуты
const millisecondsPerMinute = 1000 * 60;
const millisecondsPerHour = millisecondsPerMinute * 60;
const millisecondsPerDay = millisecondsPerHour * 24;

// Вычисляем количество дней, часов и минут
const days = Math.floor(difference / millisecondsPerDay);
const hours = Math.floor((difference % millisecondsPerDay) / millisecondsPerHour);
const minutes = Math.floor((difference % millisecondsPerHour) / millisecondsPerMinute);

// Выводим результат
return {
    days,
    hours,
    minutes
}
// `Сообщение было создано ${days} дней, ${hours} часов и ${minutes} минут назад.`
}