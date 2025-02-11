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
        <Box flex={1} 
        // bgcolor="grey.100" 
        width={isMobile ? "100%" : "40%"}>
          <LeftPanel
            title={"Welcome back"}
            subtitle={"Let’s get you signed in"}
            page={"signin"}
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
                    // sx={{
                    //   backgroundColor: "white",
                    //   color: "black",
                    //   border: "1px solid #ccc",
                    //   "&:hover": {
                    //     backgroundColor: "#f5f5f5",
                    //     borderColor: "black",
                    //   },
                    //   borderRadius: "8px",
                    // }}
                    sx={{
                      background: "linear-gradient(to right, #cca8e9, #defcf9)",
                      color: "black",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      padding: "10px 20px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                      transition: "0.3s",
                      "&:hover": {
                        background: "linear-gradient(to right, #b089e5, #cceef8)",
                        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                  />
                </Box>

                <Typography fontSize="14px" mt={2}>
                  Already Enrolled? {" "}
                  <Link href="#" style={{
      color: "#6A4C93", // Deep purple tone matching your theme
      fontWeight: "bold",
      textDecoration: "none",
      padding: "2px 4px",
      borderRadius: "4px",
      transition: "0.3s",
    }}
    onMouseOver={(e) => (e.currentTarget.style.color = "#4A3173")} // Darker purple on hover
    onMouseOut={(e) => (e.currentTarget.style.color = "#6A4C93")}>
                    Connect Your Instagram
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
                <Link href="#" style={{
      color: "#6A4C93", // Deep purple tone matching your theme
      fontWeight: "bold",
      textDecoration: "none",
      padding: "2px 4px",
      borderRadius: "4px",
      transition: "0.3s",
    }}
    onMouseOver={(e) => (e.currentTarget.style.color = "#4A3173")} // Darker purple on hover
    onMouseOut={(e) => (e.currentTarget.style.color = "#6A4C93")}>
                  Privacy Policy
                </Link>
              </Box>
            </>
          )}
        </Box>
        <Box
          flex={1}
          // bgcolor="background.paper"
          display={isMobile ? "none" : "block"} 
        >
          <RightPanel page="signin" />
        </Box>
      </Box>
    </Box>
  );
};

export default Signin;
