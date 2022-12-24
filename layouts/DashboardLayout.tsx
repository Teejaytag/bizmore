import React from "react"
import Image from "next/image"

type Props = {
  children: JSX.Element
}

const navItems = [
  {
    link: "/home",
    icon: "/images/home2.svg",
    title: "Home",
  },
  {
    link: "/bookkeeping",
    icon: "/images/bookkeeping2.svg",
    title: "Bookkeeping",
  },
  {
    link: "/payment",
    icon: "/images/payment.svg",
    title: "Payment",
  },
  {
    link: "/growth",
    icon: "/images/growth.svg",
    title: "Growth",
  },
  {
    link: "/setting",
    icon: "/images/setting.svg",
    title: "Setting",
  },
]

export default function DashboardLayout(props: Props) {
  return (
    <div className="flex min-h-screen">
      <div className="w-[20%] bg-[#F2F2F2] px-[3.875rem] lg:pt-14 xl:py-[6.375rem] fixed h-full">
        <div className="flex gap-4">
          <Image src={"/images/logo.svg"} height={30} width={30} alt={"bizmore_logo"} />
          <div className="font-medium text-[1.5rem]">Bizmore</div>
        </div>

        <ul className="flex flex-col lg:gap-10 xl:gap-14 h-full mt-[4rem]">
          {navItems.map((item, index) => (
            <li className="" key={index}>
              <a className="flex gap-6" href={item.link}>
                <Image src={item.icon} alt={""} width={18} height={18} />
                <div className="">{item.title}</div>
              </a>
            </li>
          ))}

          <li className="mt-20">
            <a className="flex gap-6" href="/logout">
              <Image src={"/images/homeIcon.svg"} alt={""} width={18} height={18} />
              <div className="">Logout</div>
            </a>
          </li>
        </ul>
      </div>
      <div className="py-14 xl:py-[6.375rem] px-10 absolute right-0 w-[80%]">{props.children}</div>
    </div>
  )
}
