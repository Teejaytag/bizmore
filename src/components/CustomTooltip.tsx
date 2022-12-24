

export interface CustomTooltipType {
  payload?: any
  label?: any
  active?: boolean
}

export default function CustomTooltip({ payload, label, active }: CustomTooltipType) {
  if (active) {
    return (
      <div data-testid="tooltip" className="">
        <p className="">{label}</p>
        <p className="">{payload && payload.length ? payload[0].value : ""}</p>
      </div>
    )
  }

  return null
}
