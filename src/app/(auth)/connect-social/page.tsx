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
import Image from "next/image";

const Signup = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); 

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"} 
        flex={1}
      >
        <Box flex={1} 
        // bgcolor="grey.100" 
        width={isMobile ? "100%" : "40%"}>
          <LeftPanel title={"Where would you like to start?"} subtitle={"Don’t worry, you can connect other channels later."} page={"connect-social"}/>
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
                  <Image
                    src="/assets/images/png/insta.png"
                    alt="Instagram"
                    width={52}
                    height={52}
                  />
                }
                title="Instagram"
                description="Supercharge your social media marketing with Instagram Automation."
                sx={{
                  background: "linear-gradient(to right, #cca8e9, #defcf9)",
                  borderRadius: "12px",
                  padding: "16px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Box>
          )}
        </Box>
        <Box
          flex={1}
          // bgcolor="background.paper"
          display={isMobile ? "none" : "block"} 
        >
          <RightPanel page={"connect-social"}/>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;