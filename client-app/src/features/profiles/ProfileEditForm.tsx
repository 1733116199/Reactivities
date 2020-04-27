import React, { useContext } from "react";
import { Form, Button } from "semantic-ui-react";
import { Form as FinalForm, Field } from "react-final-form";
import TextInput from "../../app/common/form/TextInput";
import TextAreaInput from "../../app/common/form/TextAreaInput";
import { combineValidators, isRequired } from "revalidate";
import { RootStoreContext } from "../../app/stores/rootStore";
import { observer } from "mobx-react-lite";

const validate = combineValidators({
  displayName: isRequired({ message: "The Display Name title is required" }),
  bio: isRequired({ message: "The Biography title is required" }),
});

interface IProps {
  setEditProfileMode: (input: boolean) => void;
}

const ProfileEditForm: React.FC<IProps> = ({ setEditProfileMode }) => {
  const rootStore = useContext(RootStoreContext);
  const { profile, editProfileLoading } = rootStore.profileStore;
  const { editProfile } = rootStore.profileStore;
  const handleSubmit = (values: any) => {
    editProfile(values).then(() => setEditProfileMode(false));
  };
  return (
    <FinalForm
      initialValues={profile}
      validate={validate}
      onSubmit={handleSubmit}
      render={({ handleSubmit, invalid, pristine }) => (
        <Form onSubmit={handleSubmit}>
          <Field
            component={TextInput}
            name="displayName"
            placeholder="Display Name"
          />
          <Field
            name="bio"
            placeholder="Biography"
            rows={3}
            component={TextAreaInput}
          />
          <Button
            floated="right"
            positive
            loading={editProfileLoading}
            disabled={invalid || pristine}
            type="submit"
            content="Update profile"
          />
        </Form>
      )}
    />
  );
};

export default observer(ProfileEditForm);
