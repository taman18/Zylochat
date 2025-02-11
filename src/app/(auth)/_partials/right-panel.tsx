"use client";
import React from "react";
import {
  Box,
  Select,
  MenuItem,
  useMediaQuery,
  Typography,
} from "@mui/material";
import ButtonElement from "@/components/common/button/button-element";
import PlatformCard from "@/components/common/platform-card/platform-card";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
// For Later Scaling
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import AppleIcon from "@mui/icons-material/Apple";
import Image from "next/image";
const handleSignIn = () => {
  console.log("Signing in...");
};

interface RightPanelProps {
  page: string;
}

const RightPanel: React.FC<RightPanelProps> = ({ page }) => {
  const isMobile = useMediaQuery("(max-width:600px)"); 

  return (
    <Box p={4} height="100%" display="flex" flexDirection="column">
      
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent={isMobile ? "space-between" : "right"}
        gap={2}
        flexWrap="wrap"
        sx={{ mb: isMobile ? 2 : 0 }} 
      >
        <Select
          defaultValue="English"
          variant="outlined"
          size="small"
          // sx={{
          //   background: "#fff",
          //   borderRadius: "8px",
          //   fontSize: "0.875rem",
          //   fontWeight: "bold",
          // }}
          sx={{
            background: "linear-gradient(to right, #cca8e9, #defcf9)", // Match with background
            borderRadius: "8px",
            fontSize: "0.875rem",
            fontWeight: "bold",
            color: "black",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent", // Hide outline
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#b089e5", // Light border on hover
            },
            "& .MuiSelect-icon": {
              color: "black", // Customize dropdown arrow color
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                background: "linear-gradient(to right, #cca8e9, #defcf9)", // Match menu items background
                borderRadius: "8px",
              },
            },
          }}
        >
          <MenuItem value="English" sx={{
      color: "black",
      fontWeight: "bold",
      "&:hover": { backgroundColor: "#b089e5", color: "white" },
    }}>English</MenuItem>
          <MenuItem value="Spanish" sx={{
      color: "black",
      fontWeight: "bold",
      "&:hover": { backgroundColor: "#b089e5", color: "white" },
    }}>Spanish</MenuItem>
        </Select>
        {page === "connect-social" && (
          <ButtonElement
            text="Sign In"
            variant="outlined"
            size="medium"
            onClick={handleSignIn}
            customClass="signInButton"
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
        )}
      </Box>


      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1, 
        }}
      >
        {page === "connect-social" && (
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
        )}

        {page === "signin" && (
          <>
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
              <Link
                href="signup"
                color="primary"
                style={{
                  color: "#6A4C93", // Deep purple tone matching your theme
                  fontWeight: "bold",
                  textDecoration: "none",
                  padding: "2px 4px",
                  borderRadius: "4px",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#4A3173")} // Darker purple on hover
                onMouseOut={(e) => (e.currentTarget.style.color = "#6A4C93")}
              >
                Connect Your Instagram
              </Link>
            </Typography>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={2}
              position="absolute"
              bottom={20}
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
    </Box>
  );
};

export default RightPanel;
