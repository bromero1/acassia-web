import { Box, Typography, IconButton, useMediaQuery, Link } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";

// imports all images from assets folder
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

const MainCarousel = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}

      // ARROW BUTTONS FOR SLIDESHOW
      // 
      // ---------------------------
      // renderArrowPrev={(onClickHandler, hasPrev, label) => (
      //   <IconButton
      //     onClick={onClickHandler}
      //     sx={{
      //       position: "absolute",
      //       top: "50%",
      //       left: "0",
      //       color: "white",
      //       padding: "5px",
      //       zIndex: "10",
      //     }}
      //   >
      //     <NavigateBeforeIcon
      //       sx={{
      //         fontSize: 40,
      //         color: shades.primary[600],
      //         backgroundColor: shades.primary[100],
      //         borderRadius: "50%",
      //       }}
      //     />
      //   </IconButton>
      // )}
      // renderArrowNext={(onClickHandler, hasNext, label) => (
      //   <IconButton
      //     onClick={onClickHandler}
      //     sx={{
      //       position: "absolute",
      //       top: "50%",
      //       right: "0",
      //       color: "white",
      //       padding: "5px",
      //       zIndex: "10",
      //     }}
      //   >
      //     <NavigateNextIcon
      //       sx={{
      //         fontSize: 40,
      //         color: shades.primary[600],
      //         backgroundColor: shades.primary[100],
      //         borderRadius: "50%",
      //       }}
      //     />
      //   </IconButton>
      // )}
    >

      {/* CAROUSEL IMAGES INSERTED HERE. READ IN FROM assets */}
      {Object.values(heroTextureImports).map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={texture}
            alt={`carousel-${index}`}
            style={{
              width: "100%" ,
              height: "400px",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
          <Box
            color="white"
            padding="20px"
            borderRadius="1px"
            textAlign="left"
            backgroundColor="rgb(0, 0, 0, 0.5)"
            position="absolute"
            top="30%"
            left={isNonMobile ? "10%" : "0"}
            right={isNonMobile ? undefined : "0"}
            margin={isNonMobile ? undefined : "0 auto"}
            maxWidth={isNonMobile ? undefined : "240px"}
          >
            <Typography color={shades.secondary[200]}>NEW ITEMS</Typography>
            <Typography variant="h1">Spring Sale</Typography>
            <Typography
              fontWeight="bold"
              color={shades.secondary[300]}
              sx={{ textDecoration: "underline" }}
            >
              <Link color={shades.secondary[300]} href="/sale">Shop Now</Link>
              
            </Typography>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default MainCarousel;
