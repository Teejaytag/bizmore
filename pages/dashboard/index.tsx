import React from "react"
import DashboardLayout from "../../layouts/DashboardLayout"
import Image from "next/image"
import PrimaryBarChart from "../../src/components/PrimaryBarChart"

export const growthOverview: Array<{ name: string; data: number }> = [
  {
    data: 22,
    name: "Jan",
  },
  {
    data: 18,
    name: "Feb",
  },
  {
    data: 10,
    name: "Mar",
  },
  {
    data: 24,
    name: "Apr",
  },
  {
    data: 24,
    name: "May",
  },
  {
    data: 15,
    name: "Jun",
  },
  {
    data: 5,
    name: "Jul",
  },
  {
    data: 13,
    name: "Aug",
  },

  {
    data: 134,
    name: "Sep",
  },

  {
    data: 11,
    name: "Oct",
  },
  {
    data: 4,
    name: "Nov",
  },
  {
    data: 23,
    name: "Dec",
  },
]


type Props = {}

export default function Dashboard({}: Props) {
  return (
    <DashboardLayout>
      <div className="relative">
        <div className="flex items-center gap-5">
          <Image src={"/images/avater.png"} alt={"avater"} height={60} width={60} />
          <div className="flex flex-col gap-[-1rem]">
            <div className="text-[2rem] font-medium">Ayo Store</div>
            <div>Welcome back</div>
          </div>
        </div>

        <div className="absolute right-0 top-0 rounded-full bg-[#F2F2F2] p-4">
          <Image src={"/images/bell.svg"} height={19} width={17} alt={"bell"} />
        </div>

        <div className="mt-6 flex justify-end">
          <IconBtn />
        </div>

        <div className="mt-4 flex gap-10">
          <div className="flex gap-6 w-[60%]">
            <BalCard
              title={"Total Balance"}
              amount={"N200,000"}
              bgColor={"bg-[#0066F5]"}
              textColor={"text-[#FFFFFF]"}
              icon={"/images/dash_card_icon.svg"}
            />
            <BalCard
              title={"Bizmore Points"}
              amount={"530"}
              bgColor={"bg-[#ffffff]"}
              textColor={"text-[#0066F5]"}
              icon={"/images/cup.svg"}
              borderColor={"border-[#0066F5]"}
            />
          </div>

          <div className="w-[40%] relative">
            <Image src={"/images/banner.png"} alt={"banner"} fill />
          </div>
        </div>

        <div className="flex mt-12  gap-10">
          <div className="w-[60%]">
            <div className="font-medium text-[#4B4A4A] mb-4">To-do Task</div>
            <div className="flex flex-col gap-2">
              <TodoCard title="Complete your business infomation" />
              <TodoCard title="Upgrade your account" />
              <TodoCard title="Know about bizfunds" />
            </div>
          </div>

          <div className="w-[40%]">
            <div className="font-medium text-[#4B4A4A] mb-4">Quick Actions</div>
            <QuickActionCard
              title="Check your business report"
              title2="Get to know how your business is doing"
              classnames="border-[#0066F5]"
              icon="/images/report.svg"
            />
            <QuickActionCard
              title="Set reminder for recording"
              title2="Tap to get reminded for daily recording"
              icon="/images/recording.svg"
              classnames="border-[#FFB200]"
            />
            <QuickActionCard
              icon="/images/gold.svg"
              title="Refer and earn points"
              title2="Earn points when you invite business owners to Bizmore"
              classnames="bg-[#0066F5] text-white"
              title2Color
            />
          </div>
        </div>

        <div>
          <PrimaryBarChart title="300,000" data={growthOverview} />
        </div>
      </div>
    </DashboardLayout>
  )
}

interface BalCardProps {
  title: string
  amount: string
  bgColor: string
  textColor: string
  icon: string
  borderColor?: string
}

function BalCard(props: BalCardProps) {
  return (
    <div
      className={`${props.bgColor} w-full h-[185px] px-7 py-12 ${props.textColor} rounded-[10px] border`}
    >
      <div className="flex gap-2 mb-2">
        <Image src={props.icon} alt={"icon"} height={18} width={18} />
        <div>{props.title}</div>
      </div>
      <div className="text-[2.25rem] font-[600]">{props.amount}</div>
    </div>
  )
}

interface ToolCardProps {
  title: string
}

function TodoCard(props: ToolCardProps) {
  return (
    <div className="flex gap-7 px-6 py-6 border rounded-[10px]">
      <div className="rounded-full border-2 border-[#0066F5] w-[24px] h-[24px]"></div>
      <div>{props.title}</div>
    </div>
  )
}

interface QuickActionProps {
  icon: string
  title: string
  title2: string
  classnames?: string
  title2Color?: boolean
}

function QuickActionCard(props: QuickActionProps) {
  return (
    <div className={`flex border gap-6 px-5 py-5 rounded-[10px] mb-2 ${props.classnames}`}>
      <Image src={props.icon} alt={"icon"} height={55} width={55} />
      <div className="flex flex-col gap-0">
        <div>{props.title}</div>
        <div className={`text-sm ${props.title2Color ? "text-white" : "text-[#4B4A4A]"}`}>
          {props.title2}
        </div>
      </div>
    </div>
  )
}

function IconBtn() {
  return (
    <button className="flex bg-[#0066F5] gap-3 p-4 text-white font-[600] rounded-[7px]">
      <Image src={"/images/bizfund.svg"} alt={"bizfund"} height={20} width={17} />
      <span>APPLY FOR BIZFUNDS</span>
    </button>
  )
}
