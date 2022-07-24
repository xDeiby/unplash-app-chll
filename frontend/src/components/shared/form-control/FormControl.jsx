import { Controller } from "react-hook-form";
import {
  FormControlContainer,
  FormControlInput,
  FormControlLabel,
  FormControlError,
} from "./FormControl.style";

export default function FormControl({ label, placeholder, type, ...props }) {
  return (
    <Controller
      {...props}
      render={({ field: { value, ...field }, fieldState: { error } }) => (
        <FormControlContainer>
          <FormControlLabel htmlFor={props.name}>{label}</FormControlLabel>
          <FormControlInput
            {...field}
            value={value ?? ""}
            name={props.name}
            type={type}
            id={props.name}
            error={Boolean(error)}
            placeholder={placeholder}
          />

          {error && <FormControlError>{error.message}</FormControlError>}
        </FormControlContainer>
      )}
    />
  );
}
