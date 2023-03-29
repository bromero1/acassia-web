import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton, Link } from "@mui/material";

import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";
const Footer = () => {
  const links = ["", "", "", ""];
  return (
    <Box mt="100px" backgroundColor={shades.primary[300]} padding="45px 0">
      <Box
        width="100%"
        display="flex"
        justifyContent="space-evenly"
        paddingTop="20px"
      >
        {/* Contact Info */}
        <Box>
          <Typography variant="h5" color={shades.secondary[500]}>
            Contact Us
          </Typography>
          <Typography color={shades.secondary[200]}>
            Acassia Flowers <br />
            260 2nd Street <br />
            Chelsea, Mass <br />
            <Link href="mailto:info@acassiaflowers.com">
              info@acassiaflowers.com
            </Link>
          </Typography>
        </Box>

        {/* Hours of Ops */}
        <Box>
          <Typography variant="h5" color={shades.secondary[500]}>
            Hours
          </Typography>
          <Typography color={shades.secondary[100]}>
            Mon - Fri <br />
            5am - 12pm <br />
            Sat - Sun <br />
            6am - 10am
          </Typography>
        </Box>
        {/* Social Media Icons */}
        <Box>
          <Typography variant="h5" color={shades.secondary[500]}>
            Social Media
          </Typography>
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
              sx={{ fontSize: "2rem", "&:hover": { color: "#4267B2" } }}
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
                fontSize: "2rem",
                "&:hover": {
                  color: "#E4405F",
                },
              }}
            />
          </IconButton>

          {/* WhatsApp Icon --------- */}
          <IconButton
            onClick={() => window.open("https://wa.me/6174069725", "_blank")}
          >
            <WhatsAppIcon
              sx={{ fontSize: "2rem", "&:hover": { color: "#25D366" } }}
            />
          </IconButton>
        </Box>
        {/* End social media box */}
      </Box>
    </Box>
  );
};

export default Footer;
