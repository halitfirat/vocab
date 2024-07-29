import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#041E42",
    },
  },
  shape: {
    borderRadius: 3,
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        track: {
          backgroundColor: "#fff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:not(.Mui-disabled)": {
            color: "#fff",
          },
        },
      },
    },
  },
});

export default theme;
