import { createTheme } from "@mui/material/styles";

export const shades = {
  primary: {
    100: "#e0d7e8",
    200: "#c1afd1",
    300: "#a388b9",
    400: "#8460a2",
    500: "#65388b",
    600: "#512d6f",
    700: "#3d2253",
    800: "#281638",
    900: "#140b1c",
  },
  secondary: {
    100: "#f9faf7",
    200: "#f2f6ef",
    300: "#ecf1e7",
    400: "#e5eddf",
    500: "#dfe8d7",
    600: "#b2baac",
    700: "#868b81",
    800: "#595d56",
    900: "#2d2e2b",
  },
  neutral: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000",
  },
};



export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[600],
    },
    secondary: {
      main: shades.secondary[200],
    },
    neutral: {
        light: shades.neutral[200],
        dark:  shades.neutral[400],
        main: shades.neutral[300]
    }
  },
  typography: {
    fontFamily: ["Josefin Sans", "sans-serif"].join(","),
    fontSize: 11,
    
  }
});
