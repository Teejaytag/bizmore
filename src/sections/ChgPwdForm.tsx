import FormInput from "../components/FormInput"
import PrimaryBtn from "../components/PrimaryBtn"

interface Props {
  onClick: (e:React.SyntheticEvent) => void
}

export default function ChgPwdForm(props:Props) {
  return (
    <>
      <h1 className="text-center text-[1.5rem]  lg:text-[2rem] font-medium lg:mb-4 xl:mb-[1.625rem]">
        Change Password
      </h1>
      <p className="text-center mx-auto w-[90%] lg:w-[60%] leading-5 ">Please enter new password different from previously used password</p>

      <div className="mt-10 lg:mt-14 xl:mt-[4.3125rem]">
        <form onSubmit={props.onClick}>
          <FormInput label={"Password"} name={"password"} placeholder="Enter password" />
          <FormInput label={"Confirm Password"} name={"cpassword"} placeholder="Enter password" />

          <PrimaryBtn title="CONTINUE" />
        </form>
      </div>
    </>
  )
}
