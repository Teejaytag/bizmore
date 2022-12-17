interface SelectInputProps {
  label: string
  name: string
  children: JSX.Element | JSX.Element[]
}

export default function SelectInput(props: SelectInputProps) {
  return (
    <div className="flex flex-col gap-[0.3125rem] grow mt-8">
      <label className="font-medium" htmlFor="">
        {props.label}
      </label>
      <select className="w-full border focus:border-2 ring-0  outline-none focus:border-[#0066F5] rounded-md p-3 lg:p-4 xl:p-5" name={props.name}>
        {props.children}
      </select>
    </div>
  )
}
