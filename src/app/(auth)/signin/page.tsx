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
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"} 
        flex={1}
      >
        <Box flex={1} bgcolor="grey.100" width={isMobile ? "100%" : "40%"}>
          <LeftPanel
            title={"Welcome back"}
            subtitle={"Let’s get you signed in"}
          />
          {isMobile && (
            <>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                mt={2}
                p={2}
              >
                <Box
                  width={{ xs: "90%", sm: "350px" }}
                  display="flex"
                  flexDirection="column"
                  gap={2}
                >
                  <ButtonElement
                    icon={<FcGoogle />}
                    text="Sign In With Google"
                    variant="outlined"
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      border: "1px solid #ccc",
                      "&:hover": {
                        backgroundColor: "#f5f5f5",
                        borderColor: "black",
                      },
                      borderRadius: "8px",
                    }}
                  />
                </Box>

                <Typography fontSize="14px" mt={2}>
                  New to Zylochat?{" "}
                  <Link href="#" style={{ color: "blue", fontWeight: "bold" }}>
                    Sign up
                  </Link>
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                gap={2}
                position="absolute"
                bottom={20}
                left="50%"
                sx={{ transform: "translateX(-50%)" }}
              >
                <Link href="#" style={{ color: "blue", fontSize: "14px" }}>
                  Privacy Policy
                </Link>
              </Box>
            </>
          )}
        </Box>
        <Box
          flex={1}
          bgcolor="background.paper"
          display={isMobile ? "none" : "block"} 
        >
          <RightPanel page="signin" />
        </Box>
      </Box>
    </Box>
  );
};

export default Signin;
