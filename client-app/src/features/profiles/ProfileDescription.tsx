import React, { useContext, useState } from "react";
import { Tab, Grid, Header, Button } from "semantic-ui-react";
import { RootStoreContext } from "../../app/stores/rootStore";
import { observer } from "mobx-react-lite";
import ProfileEditForm from "./ProfileEditForm";

const ProfileDescription = () => {
  const rootStore = useContext(RootStoreContext);
  const { user } = rootStore.userStore;
  const [editProfileMode, setEditProfileMode] = useState(false);
  return (
    <Tab.Pane>
      <Grid>
        <Grid.Column width={16} style={{ paddingBottom: 0 }}>
          <Header
            floated="left"
            icon="user"
            content={`About ${user?.displayName}`}
          />
          <Button
            floated="right"
            basic
            onClick={() => setEditProfileMode(!editProfileMode)}
            content={editProfileMode ? "Cancel" : "Edit Profile"}
          />
        </Grid.Column>
        {editProfileMode && <Grid.Column width={16}>
            <ProfileEditForm setEditProfileMode={setEditProfileMode}/>
        </Grid.Column>}
      </Grid>
    </Tab.Pane>
  );
};

export default observer(ProfileDescription);
