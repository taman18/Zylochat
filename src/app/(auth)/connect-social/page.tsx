"use client";
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Select,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import ButtonElement from "@/components/common/button/button-element";
import LeftPanel from "../_partials/left-panel";
import RightPanel from "../_partials/right-panel";
import PlatformCard from "@/components/common/platform-card/platform-card";

const Signup = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); 

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"} 
        flex={1}
      >
        <Box flex={1} bgcolor="grey.100" width={isMobile ? "100%" : "40%"}>
          <LeftPanel title={"Where would you like to start?"} subtitle={"Don’t worry, you can connect other channels later."}/>
          {isMobile && ( 
            <Box sx={{
              mt: 2,
              display: "flex",
              justifyContent: "center", 
              alignItems: "center",
              p: 2,
            }}>
              <PlatformCard
                icon={
                  <img
                    src="/assets/images/png/insta.png"
                    alt="Instagram"
                    width={52}
                    height={52}
                  />
                }
                title="Instagram"
                description="Supercharge your social media marketing with Instagram Automation."
              />
            </Box>
          )}
        </Box>
        <Box
          flex={1}
          bgcolor="background.paper"
          display={isMobile ? "none" : "block"} 
        >
          <RightPanel page={"signup"}/>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;