import { ResponsiveContainer, BarChart, Bar, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"
import CustomTooltip from "./CustomTooltip"

type Props = {
  title: string
  data: Array<{ name: string; data: number }>
}

export default function PrimaryBarChart(props: Props) {
  return (
    <div className="">
      <div className="">
        <h1 className="">{props.title}</h1>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart width={150} height={40} barCategoryGap="1%" data={props.data}>
            {/* <XAxis
            dataKey="name"
      
          /> */}
          {/* <YAxis /> */}
          <Bar dataKey="data" fill="#527af0" barSize={50} radius={[5, 5, 0, 0]} />
          
          <Tooltip content={<CustomTooltip />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
