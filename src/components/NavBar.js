import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";
import ArticleIcon from "@mui/icons-material/Article";
import Article from "@mui/icons-material/Article";

// import ThemeSwitch from "./ThemeSwitch";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "dark"
      ? "#2D2F33"
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#2D2F33" : grey[800],
}));

// const Puller = styled(Box)(({ theme }) => ({
//   width: 30,
//   height: 6,
//   backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
//   borderRadius: 3,
//   position: "absolute",
//   top: 8,
//   left: "calc(50% - 15px)",
// }));

function SwipeableEdgeDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(90% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />

      <Box
        sx={{
          display: "flex",
          // width: "100%",
          //  float:"left",
          pt: 4,
          // display: "inline-block",
          alignItems: "center",
          // padding: "10px",
          justifyContent: "space-evenly",
          flexFlow: "row wrap",
          // marginRight: "200px",
        }}
      >
        <Typography component="h1" sx={{ fontSize: "175% !important" }}>
          <strong>Aydee</strong> Reichert
        </Typography>

        <div sx={{}}>
          <a
            href="#aboutMe"
            style={{
              marginRight: "2rem",
              color: "#7deaa2",
              textTransform: "uppercase",
              fontSize: "0.875rem",
              fontWeight: "500",
              lineWeight: "1.75",
              letterSpacing: "0.02857em",
              textDecoration: "none",
            }}
          >
            About Me
          </a>
          <a
            href="#experience"
            style={{
              marginRight: "2rem",
              color: "#7deaa2",
              textTransform: "uppercase",
              fontSize: "0.875rem",
              fontWeight: "500",
              lineWeight: "1.75",
              letterSpacing: "0.02857em",
              textDecoration: "none",
            }}
          >
            Experience
          </a>
          <a
            href="#project"
            style={{
              marginRight: "2rem",
              color: "#7deaa2",
              textTransform: "uppercase",
              fontSize: "0.875rem",
              fontWeight: "500",
              lineWeight: "1.75",
              letterSpacing: "0.02857em",
              textDecoration: "none",
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            style={{
              marginRight: "2rem",
              color: "#7deaa2",
              textTransform: "uppercase",
              fontSize: "0.875rem",
              fontWeight: "500",
              lineWeight: "1.75",
              letterSpacing: "0.02857em",
              textDecoration: "none",
            }}
          >
            Contact
          </a>
        </div>
        <div>
          <Link
            sx={{ textDecoration: "none", marginRight: "2rem", '&:hover': { color: '#7deaa2' }  }}
            href="https://github.com/ReichertA2"
          >
            <GitHubIcon sx={{ marginRight: "0.3rem",'&:hover': { color: '#7deaa2' } }}  />
            Github
          </Link>

          <Link
            sx={{ textDecoration: "none", marginRight: "2rem", '&:hover': { color: '#7deaa2' } }}
            href="https://www.linkedin.com/in/aydee-reichert"
          >
            <LinkedInIcon sx={{ marginRight: "0.3rem",'&:hover': { color: '#7deaa2' } }} />
            LinkedIn
          </Link>
          <Link
            sx={{ textDecoration: "none", '&:hover': { color: '#7deaa2' }}}
            href="https://drive.google.com/file/d/1UEno4Sr0f_IDm5JKG2G7YgHlfuL0SHxl/view?usp=sharing"
          >
            <ArticleIcon sx={{ marginRight: "0.3rem", '&:hover': { color: '#7deaa2' } }} /> Resume
          </Link>
        </div>
        {/* <ThemeSwitch/> */}
      </Box>
      {/* <div sx={{}}>
        <p>
          <GitHubIcon />
          Github
        </p>
        <p>
          <LinkedInIcon />
          LinkedIn
        </p>
      </div> */}
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          {/* <Puller /> */}
          {/* <Typography sx={{ p: 2, color: "text.secondary" }}>
            51 results
          </Typography>  */}
        </StyledBox>
        <StyledBox
          sx={{
            px: 0,
            pb: 0,
            height: "100%",
            overflow: "auto",
          }}
        >
          <Skeleton variant="rectangular" height="100%" />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
