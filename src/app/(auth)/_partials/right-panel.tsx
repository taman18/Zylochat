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
          sx={{
            background: "#fff",
            borderRadius: "8px",
            fontSize: "0.875rem",
            fontWeight: "bold",
          }}
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
        </Select>
        {page === "signup" && (
          <ButtonElement
            text="Sign In"
            variant="outlined"
            size="medium"
            onClick={handleSignIn}
            customClass="signInButton"
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
        {page === "signup" && (
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
             Already Enrolled? {" "}
              <Link
                href="signup"
                color="primary"
                style={{ color: "blue", fontWeight: "bold" }}
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
           
              <Link href="#" style={{ color: "blue", fontSize: "14px" }}>
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
