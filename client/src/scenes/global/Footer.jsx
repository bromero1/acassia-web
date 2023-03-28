import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton } from "@mui/material";

import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";
const Footer = () => {
  const links = ["", "", "", ""];
  return (
    <Box
      sx={{
        backgroundColor: shades.primary[300],
        width: "100%",
        height: "120px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px"
        }}
      >
        {/* Facebook Icon -------- */}
        <IconButton
          onClick={() =>
            window.open(
              "https://www.facebook.com/acassiawholesaleflowers",
              "_blank"
            )
          }

          // sx={{ "&:hover": { color: "green" } }}
        >
          <FacebookIcon
            sx={{ fontSize: "3rem", "&:hover": { color: "#4267B2" } }}
          />
        </IconButton>

        {/* Instagram Icon ------- */}
        <IconButton
          onClick={() =>
            window.open(
              "https://www.instagram.com/acassiaflowers/?hl=en",
              "_blank"
            )
          }
        >
          <InstagramIcon
            sx={{
              fontSize: "3rem",
              "&:hover": {
          
                  color: "#E4405F"
                  
              },
            }}
          />
        </IconButton>

        {/* WhatsApp Icon --------- */}
        <IconButton>
          <WhatsAppIcon
            sx={{ fontSize: "3rem", "&:hover": { color: "#25D366" } }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
