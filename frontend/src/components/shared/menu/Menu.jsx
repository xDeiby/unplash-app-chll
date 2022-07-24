import React from "react";
import { changeSession, useGalleryContext } from "../../../contexts";
import logo from "../../../static/logo.svg";
import NewPhotoModal from "../../modals/new-photo/NewPhotoModal";
import Search from "../../search";
import {
  Avatar,
  AvatarOptions,
  MenuContainerStyles,
  SignOutOption,
} from "./Menu.style";

export default function Menu() {
  const { session, dispatch } = useGalleryContext();

  const signOut = () => {
    localStorage.removeItem("authorization");
    dispatch(changeSession(null));
  };

  return (
    <MenuContainerStyles>
      <img src={logo} alt="logo unplash" />
      {session && (
        <>
          <Search />

          <NewPhotoModal />

          <Avatar>
            {session.name.charAt(0) + session.lastName.charAt(0)}

            <AvatarOptions>
              <SignOutOption onClick={signOut}>Sign Out</SignOutOption>
            </AvatarOptions>
          </Avatar>
        </>
      )}
    </MenuContainerStyles>
  );
}
