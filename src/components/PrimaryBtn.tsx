import React from "react"

type Props = {
  title: string
}

export default function PrimaryBtn(props: Props) {
  return (
    <button
      type="submit"
      className="mt-12 w-full bg-[#0066F5] text-white py-3 lg:py-4 uppercase font-semibold rounded-md"
    >
      {props.title}
    </button>
  )
}
