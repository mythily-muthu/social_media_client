import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import FriendListWidget from "./FriendListWidget";
import MyPostWidget from "./MyPostWidget";
import Navbar from "./Navbar";
import PostsWidget from "./PostsWidget";
import UserWidget from "./UserWidget";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  let user = useSelector((state) => state.user);
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem"
        display={isNonMobileScreens ? "flex" : "block"}
        justifyContent="space-between"
        gap="0.5rem"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={user._id} picturePath={user.picturePath} />
        </Box>

        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget
            picturePath={
              user.picturePath === ""
                ? "https://www.pngkey.com/png/full/157-1579943_no-profile-picture-round.png"
                : user.picturePath
            }
          />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            {/* <AdvertWidget /> */}
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
