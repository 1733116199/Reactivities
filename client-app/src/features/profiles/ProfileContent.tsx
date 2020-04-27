import React from "react";
import { Tab } from "semantic-ui-react";
import ProfilePhotos from "./ProfilePhotos";
import ProfileDescription from "./ProfileDescription";

const panes = [
  {
    menuItem: "About",
    render: () => <ProfileDescription />,
  },
  {
    menuItem: "Photo",
    render: () => <ProfilePhotos />,
  },
  {
    menuItem: "Activities",
    render: () => <Tab.Pane>Activities content</Tab.Pane>,
  },
  {
    menuItem: "Follower",
    render: () => <Tab.Pane>Followers content</Tab.Pane>,
  },
  {
    menuItem: "Following",
    render: () => <Tab.Pane>Following content</Tab.Pane>,
  },
];

export const ProfileContent = () => {
  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition="right"
      panes={panes}
      // activeIndex={1}
    />
  );
};
