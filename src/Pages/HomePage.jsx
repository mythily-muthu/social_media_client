import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import UserWidget from "./UserWidget";

const HomePage = () => {
  let user = useSelector((state) => state.user);
  console.log("user home: ", user);
  return (
    <Box>
      <Navbar />
      <UserWidget userId={user._id} picturePath={user.picturePath} />
    </Box>
  );
};

export default HomePage;
