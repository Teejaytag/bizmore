import FormInput from "../components/FormInput"
import PrimaryBtn from "../components/PrimaryBtn"

export default function ResetPwd() {
  return (
    <>
      <h1 className="text-center text-[1.5rem]  lg:text-[2rem] font-medium lg:mb-4 xl:mb-[1.625rem]">
        Reset Password
      </h1>
      <p className="text-center mx-auto w-[90%] lg:w-[60%]">Enter your email address below and we will send you a password reset OTP</p>

      <div className="mt-10 lg:mt-14 xl:mt-[4.3125rem]">
        <form>
          <FormInput label={"Email Address"} name={"bname"} placeholder="Enter email address" />
        
          <PrimaryBtn title="Send reset otp" />

          <p className="text-center mt-9">
            <a className="text-[#0066F5]" href={"/"}>
              Return to login
            </a>
          </p>
        </form>
      </div>
    </>
  )
}
