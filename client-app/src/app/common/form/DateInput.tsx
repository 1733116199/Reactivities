import React from "react";
import { FieldRenderProps } from "react-final-form";
import { FormFieldProps, Form, Label } from "semantic-ui-react";
import { DateTimePicker } from "react-widgets";

interface IProps extends FieldRenderProps<string, HTMLElement>, FormFieldProps {}

export const DateInput: React.FC<IProps> = ({
  input,
  width,
  placeholder,
  meta: { touched, error },
  id,
  number,
  ...rest
}) => {
    console.log({
        input,
        width,
        placeholder,
        meta: { touched, error },
        id,
        number,
        ...rest
      });
  return (
    <Form.Field error={touched && !!error} width={width}>
      <DateTimePicker 
        placeholder={placeholder}
        value={new Date(input.value)}
        onChange={input.onChange}
        {...rest}
      />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};
