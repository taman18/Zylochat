import {
  Box,
  Typography,
  Select,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import ButtonElement from "@/components/common/button/button-element";
import Image from "next/image";

const handleSignIn = () => {
  console.log("Signing in...");
};
interface LeftPanelProps {
  title: string;
  subtitle: string;
  page: string;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ title, subtitle, page }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      p={4}
      height={!isMobile ? "100%" : "auto"}
      sx={{ overflow: "hidden", position: "relative" }}
    >
      {isMobile && (
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          p={2}
          zIndex={10}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            color="black"
            sx={{ fontSize: "1.2rem" }}
          >
            Zylochat
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
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
        </Box>
      )}

      <Box sx={{ mt: isMobile ? 8 : 0 }} height={!isMobile ? "100%" : "auto"}>
        {!isMobile && (
          <Typography
            variant="h6"
            fontWeight="bold"
            color="black"
            sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
          >
            Zylochat
          </Typography>
        )}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          px={{ xs: 2, sm: 15 }}
          height={!isMobile ? "100%" : "auto"}
        >
          <Image
            src="/assets/images/png/signup.png"
            alt="Illustration"
            width={150} // Add explicit width
            height={170} // Add explicit height
            style={{
              marginBottom: "16px",
              alignSelf: "start",
            }}
          />
          <Box>
            <Typography
              variant="h3"
              fontWeight="900"
              gutterBottom
              color="black"
              align="left"
              sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem" } }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              color="gray"
              align="left"
              sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
            >
              {subtitle}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftPanel;
