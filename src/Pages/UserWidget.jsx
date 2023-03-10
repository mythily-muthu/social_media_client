import { ManageAccountsOutlined } from "@mui/icons-material";
import { Divider, Typography } from "@mui/material";
import axios from "axios";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/WidgetWrapper";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;

  // calling api to grab the user
  const getUser = async () => {
    let Url = `http://localhost:3001/users/${userId}`; //getting the user details with id
    let response = await axios.get(Url, {
      headers: { Authorization: `Bearer ${token}` }, //token verification
    });
    const data = response.data;
    setUser(data);
    console.log("res:", response.data);
  };
  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;
  return (
    <WidgetWrapper>
      {/* FIRST ROW */}
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap="1rem">
          <UserImage image={picturePath} />
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: pointer,
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography>{friends.length} friends</Typography>
          </Box>
          <ManageAccountsOutlined />
        </FlexBetween>

        <Divider />

        {/* SECOND ROW */}
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default UserWidget;
