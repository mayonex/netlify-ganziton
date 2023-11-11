import Textarea from "@mui/joy/Textarea";
import { Controller } from "react-hook-form";
import { FormTextareaStyle } from "../../styles/form/formStyle";

interface props {
  name: string;
  placeholder: string;
  disabled: boolean;
  required: boolean;
}
const FormTextArea = ({
  name,
  placeholder,
  disabled = false,
  required = false,
}: props) => {
  return (
    <FormTextareaStyle>
      <Controller
        name={name}
        rules={{ required: required }}
        render={({ field }) => (
          <Textarea placeholder={placeholder} {...field} />
        )}
        disabled={disabled}
      />
    </FormTextareaStyle>
  );
};

export default FormTextArea;
