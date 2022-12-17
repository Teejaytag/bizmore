import FormInput from "../components/FormInput"
import PrimaryBtn from "../components/PrimaryBtn"
import SelectInput from "../components/SelectInput"
import { useStore } from "../store"

interface Props {
  onClick: (e:React.SyntheticEvent) => void
}

export default function AccountCreation(props: Props) {
  return (
    <>
      <h1 className="text-center text-[1.5rem] lg:text-[2rem] font-medium lg:mb-4 xl:mb-[1.625rem]">
        Get Started
      </h1>
      <p className="text-center ">Create an account to start growing your business</p>

      <div className="mt-10 lg:mt-14 xl:mt-[4.3125rem]">
        <form onSubmit={props.onClick}>
          <div className="flex gap-4 w-full">
            <FormInput label={"First name"} name={"fname"} placeholder="First name" />
            <FormInput label={"Last name"} name={"lname"} placeholder="Last name" />
          </div>
          <FormInput label={"Email"} name={"email"} placeholder="Enter email adderss" />
          <SelectInput label={"Business country"} name={"bcountry"}>
            <option value="select">Select</option>
          </SelectInput>
          <FormInput label={"Phone Number"} name={"phone"} placeholder="Enter phone number" />
          <FormInput label={"Password"} name={"password"} placeholder="Enter strong password" />

          <div className="flex gap-4 mt-8">
            <input className="w-8 h-8 lg:w-5 lg:h-5 rounded-md" type="checkbox" />
            <label>Agree to Bizmore`s Terms and Conditions and Privacy Policy</label>
          </div>

          <PrimaryBtn title="CREATE ACCOUNT" />

          <p className="text-center mt-9">
            Have an account already?{" "}
            <a className="text-[#0066F5]" href={"/"}>
              Log in
            </a>
          </p>
        </form>
      </div>
    </>
  )
}
