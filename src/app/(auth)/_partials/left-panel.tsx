import { Box, Typography, Select, MenuItem, useMediaQuery } from "@mui/material";
import ButtonElement from "@/components/common/button/button-element";

const handleSignIn = () => {
  console.log("Signing in...");
};
interface LeftPanelProps {
  title: string;
  subtitle: string;
}

const LeftPanel : React.FC<LeftPanelProps>= ({title,subtitle}) => {
  const isMobile = useMediaQuery("(max-width:600px)"); 

  return (
    <Box p={4} height={!isMobile ? '100%' : 'auto'} sx={{ overflow: "hidden", position: "relative" }}>
     
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
          bgcolor="white" 
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
          <img
            src="/assets/images/png/signup.png"
            alt="Illustration"
            style={{
              width: "150px",
              height: "170px",
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