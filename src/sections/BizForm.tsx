import FormInput from "../components/FormInput"
import PrimaryBtn from "../components/PrimaryBtn"
import SelectInput from "../components/SelectInput"

export default function BizForm() {
  return (
    <>
      <h1 className="text-center text-[1.5rem]  lg:text-[2rem] font-medium lg:mb-4 xl:mb-[1.625rem]">
        Add Your Business
      </h1>
      <p className="text-center">You are one click away from growing your business! </p>

      <div className="mt-10 lg:mt-14 xl:mt-[4.3125rem]">
        <form>
          <FormInput label={"Business Name"} name={"bname"} placeholder="Business name" />
          <FormInput
            label={"Business Email"}
            name={"bemail"}
            placeholder="Business email address"
          />

          <SelectInput label={"Business Type"} name={"Business type"}>
            <option value={"select"}>Select</option>
            <option value={"starter"}>Starter</option>
            <option value={"registered"}>Registered</option>
          </SelectInput>

          <PrimaryBtn title="CONTINUE" />

        </form>
      </div>
    </>
  )
}
