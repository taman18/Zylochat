"use client";
import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface PlatformCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ icon, title, description }) => (
  <Card
    variant="elevation"
    elevation={2}
    sx={{
      display: "flex",
      alignItems: "center",
      p: 2,
      mb: 2,
      cursor: "pointer",
      borderRadius: "12px",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      "&:hover": {
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        transform: "translateY(-4px)",
      },
    }}
  >
    <Box
      sx={{
        mr: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
      }}
    >
      {icon}
    </Box>
    <CardContent sx={{ padding: 0, flexGrow: 1 }}>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 0.5, fontSize: "1.1rem" }}>
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ fontSize: "0.9rem" }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default PlatformCard;
