interface FormInputProps {
  label: string
  type?: string
  name: string
  placeholder?: string
}

export default function FormInput(props: FormInputProps) {
  return (
    <div className="flex flex-col gap-[0.3125rem] lg:grow mt-8">
      <label className="font-medium">{props.label}</label>
      <input
        className="w-full border focus:border-2 ring-0  outline-none focus:border-[#0066F5] rounded-md p-3 lg:p-4 xl:p-5"
        type="text"
        name={props.name}
        placeholder={props.placeholder}
      />
    </div>
  )
}
