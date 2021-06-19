import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import React from "react";
// import { Link as RouterLink } from "react-router-dom";

const headersData = [
  // to be migrated. This data needs to come from Strapi.
  {
    label: "Salsa Classes",
    href: "/classes",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "DJ Gillian",
    href: "/dj-gillian",
  },
  {
    label: "Dance Floor Hire",
    href: "/dance-floor-hire",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#BFDAD3",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#353844",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    color: "#353844",
    size: "18px",
    marginLeft: "38px",
  },
}));

const Header = () => {
  const classes = useStyles();
  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        {salsaLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            className: classes.menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  const salsaLogo = (
    <Typography variant="h6" component="h1" className={classes.logo}>
      SalsaFix
    </Typography>
  );

  return (
    <header>
      <AppBar className={classes.header}>{displayDesktop()}</AppBar>
    </header>
  );
};

export default Header;
