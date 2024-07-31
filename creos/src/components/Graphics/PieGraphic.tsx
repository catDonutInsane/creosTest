import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "../../hooks/hooks"
import axios from "axios"
import { setPieGraphData } from "../../reducers/reducer"
import { PieChart, Pie, Cell } from "recharts"
export const PieGraphic = () => {
  const dispatch = useAppDispatch()
  const { pieGraphData } = useAppSelector(state => state.reducer)
  const [done, setDone] = useState<number>(0)
  const [inProgress, setInProgress] = useState<number>(0)
  const [newIssue, setNewIssue] = useState<number>(0)
  const [data, setData] = useState<{ name: string; value: number; }[]>([])


  useEffect(() => {
    graphData()
  }, [done, inProgress, newIssue, pieGraphData])

  useEffect(() => {

    if (pieGraphData.length === 0) {
      axios.get("https://sandbox.creos.me/api/v1/issue/")
        .then(res => res.data)
        .then(res => dispatch(setPieGraphData(res)))
    }
  }, [])

  let graphData = () => {
    setDone((pieGraphData.filter(i => i.status === "Done").length * 100) / pieGraphData.length)
    setInProgress((pieGraphData.filter(i => i.status === "In Progress").length * 100) / pieGraphData.length)
    setNewIssue((pieGraphData.filter(i => i.status === "New").length * 100) / pieGraphData.length)
    setData([
      {
        "name": "Group A",
        "value": done,

      },
      {
        "name": "Group B",
        "value": inProgress,

      },
      {
        "name": "Group C",
        "value": newIssue,

      },

    ])
  }
  const colors = [
    '#ee32ef',
    '#cc3344',
    "#cca3c4"
  ]
  const labels = [
    "Зделано",
    "В процессе",
    "Новые"
  ]
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: {
    cx: any;
    cy: any;
    midAngle: any;
    innerRadius: any;
    outerRadius: any;
    percent: any;
    index: any;
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * 2.5 * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * 2.5 * Math.sin(-midAngle * RADIAN);
    const z = cx + radius * Math.cos(-midAngle * RADIAN);
    const w = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <>
        <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${labels[index]}`}
        </text>
        <text x={z} y={w} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      </>

    );
  };
  return (
    <div>
      <PieChart width={730} height={250}>
        <Pie data={data} cx="50%" cy="50%" nameKey="name" dataKey='value' outerRadius={80} label={renderCustomizedLabel}>
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))
          }
        </Pie>
      </PieChart>
    </div>
  )
}