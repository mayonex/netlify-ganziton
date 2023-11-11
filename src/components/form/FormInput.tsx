import { Controller } from "react-hook-form";
import Input from "@mui/joy/Input";
import { FormInputStyle } from "../../styles/form/formStyle";

export type InputType = "text" | "number" | "password";

interface props {
  name: string;
  placeholder: string;
  type: InputType;
  disabled: boolean;
  required: boolean;
}

const FormInput = ({
  name,
  placeholder,
  type,
  disabled = false,
  required = false,
}: props) => {
  return (
    <FormInputStyle>
      <Controller
        name={name}
        rules={{ required: required }}
        render={({ field }) => (
          <Input
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            {...field}
            // min={data.min}
            // max={data.max}
            // minLength={data.minLength}
            // maxLength={data.maxLength}
            // onChange={(e) => {
            //   field?.onChange(e.target.value);
            //   data.changeHandler ? data.changeHandler(e.target.value) : null;
            // }}
            // onBlur={(option) => {
            //   data.blurHandler && data.blurHandler(option);
            // }}
          />
        )}
      />
    </FormInputStyle>
  );
};
{
  /* <FormInput data={data} type={data.inputType} field={field}></FormInput> */
}

export default FormInput;
