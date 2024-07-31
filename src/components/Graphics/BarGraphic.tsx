import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useAppSelector } from '../../hooks/hooks';
import { GraphForCurrentMonth } from '../../utils/GraphForCurrentMonth';
import { useEffect, useState } from 'react';

export interface DataI {
  name: number
  "Доход": number
  "Расход": number
  "Разница": number
}

export const BarGraphic = () => {
  const { pieGraphData } = useAppSelector(state => state.reducer)
  const [data, setData] = useState<DataI[]>([])


  useEffect(() => {
    setData(GraphForCurrentMonth(pieGraphData.filter(i => i.status === "Done")))
  }, [pieGraphData])

  return (
    <ResponsiveContainer width="100%" height="100%" minWidth={320} minHeight={500}>
      <BarChart
        width={50}
        height={50}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Доход" fill="#82ca9d" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        <Bar dataKey="Расход" fill="#8884d8" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        <Bar dataKey="Разница" fill="lightblue" activeBar={<Rectangle fill="gold" stroke="purple" />} />
      </BarChart>
    </ResponsiveContainer>

  )
}