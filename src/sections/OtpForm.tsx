import FormInput from "../components/FormInput"
import PrimaryBtn from "../components/PrimaryBtn"

interface Props {
  onClick: (e: React.SyntheticEvent) => void
}

export default function OtpForm(props: Props) {
  return (
    <>
      <h1 className="text-center text-[1.5rem]  lg:text-[2rem] font-medium lg:mb-4 xl:mb-[1.625rem]">
        Enter OTP
      </h1>
      <p className="text-center mx-auto w-[90%] lg:w-[60%]">
        A 6-digits code has been sent to your email address
      </p>

      <div className="mt-14 lg:mt-14 xl:mt-[4.3125rem]">
        <form onSubmit={props.onClick}>
          <div className="flex gap-2 lg:gap-8 justify-center">
            <PinInput />
            <PinInput />
            <PinInput />
            <PinInput />
            <PinInput />
            <PinInput />
          </div>

          <PrimaryBtn title="enter otp" />

          <p className="text-center mt-9">
            Haven&apos;t received any code yet?{" "}
            <a className="text-[#0066F5]" href={"/"}>
              Resend in 20sec
            </a>
          </p>
        </form>
      </div>
    </>
  )
}

function PinInput() {
  return (
    <input
      className="w-[55px] h-[55px]  lg:w-[70px] lg:h-[70px] border focus:border-2 ring-0  outline-none focus:border-[#0066F5] rounded-md lg:p-4 xl:p-5 text-center"
      type="text"
    />
  )
}
