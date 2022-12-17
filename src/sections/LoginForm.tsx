import FormInput from "../components/FormInput"
import PrimaryBtn from "../components/PrimaryBtn"

interface Props {
  onClick: (e:React.SyntheticEvent) => void
}

export default function LoginForm(props:Props) {
  return (
    <>
      <h1 className="text-center text-[1.5rem]  lg:text-[2rem] font-medium lg:mb-4 xl:mb-[1.625rem]">
        Welcome Back!
      </h1>
      <p className="text-center">Please log in to your acount to continue </p>

      <div className="mt-10 lg:mt-14 xl:mt-[4.3125rem]">
        <form onSubmit={props.onClick}>
          <FormInput label={"Email Address"} name={"bname"} placeholder="Enter email address" />
          <FormInput label={"Password"} name={"bname"} placeholder="Enter password" />

          <div className="flex justify-end mt-4">
            <a className="text-[#0066F5]" href={"/"}>
              Forgot password?
            </a>
          </div>

          <PrimaryBtn title="LOG IN" />

          <p className="text-center mt-9">
            Don&apos;t have an account?{" "}
            <a className="text-[#0066F5]" href={"/"}>
              Create Now
            </a>
          </p>
        </form>
      </div>
    </>
  )
}
