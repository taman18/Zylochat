'use client';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    // mode: "dark", // ✅ Force Dark Mode
    primary: {
      light: '#73A1BD',
      main: '#5089AC',
      dark: '#5089AC',
      contrastText: '#fff',
    },
    secondary: {
      light: '#c2185b',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    error: {
      light: '#FEE4E2',
      main: '#F04438',
      dark: '#F04438',
      contrastText: '#F04438',
    },
    info: {
      light: '#FEE4E2',
      main: '#F04438',
      dark: '#e6f4ff',
      contrastText: '#F04438',
    },
    grey: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D2D6DB',
      400: '#9DA4AE',
      500: '#6C737F',
      600: '#4D5761',
      700: '#384250',
      800: '#1F2A37',
      900: '#111927',
      A100: 'red',
      A200: 'blue',
      A400: 'green',
      A700: 'yellow',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 14,
  },
});

export default function MUIProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
