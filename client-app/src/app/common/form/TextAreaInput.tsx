import React from "react";
import { FieldRenderProps } from "react-final-form";
import { FormFieldProps, Form, Label, TextArea } from "semantic-ui-react";

interface IProps
  extends FieldRenderProps<string, HTMLElement>,
    FormFieldProps {}
export const TextAreaInput: React.FC<IProps> = ({
  input:{value, ...rest},
  width,
  rows,
  VALUE,
  placeholder,
  meta: { touched, error },
}) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
      <TextArea rows={rows} {...rest} defaultValue={VALUE} placeholder={placeholder} />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};
