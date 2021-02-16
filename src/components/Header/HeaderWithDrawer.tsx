import React from "react";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SportsBaseballIcon from "@material-ui/icons/SportsBaseball";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { SelectionItem } from "../../TypescriptTypes/Events";
import paths from "../../router/paths";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

export interface Props {
  bets: Array<SelectionItem>;
  navigate: (path: String) => void;
  REACT_APP_NAME: String
}

const HeaderWithDrawer: React.FC<Props> = ({ bets, navigate, REACT_APP_NAME }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedScreen, setSelectedScreen] = React.useState("Football");

  /* open drawer */
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  /* close drawer */
  const handleDrawerClose = () => {
    setOpen(false);
  };

  /* toggle drawer */
  const handleDrawerToggle = () => {
    setOpen((prev) => !prev);
  };

  /* check if menu is selected or not */
  // const isMenuSelected = (menuItem: string) => {
  //   if (selectedScreen === menuItem) {
  //     return true;
  //   }
  //   return false;
  // };

  /* function runs on choosing a menu item */
  const chooseMenuItem = (menuItem: string, path: string) => {
    setSelectedScreen(menuItem);
    navigate(path);
    handleDrawerToggle();
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className="text-white">
            {REACT_APP_NAME}
          </Typography>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={open}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem
                button
                key={"Football"}
                // selected={isMenuSelected("Football")}
                onClick={() => chooseMenuItem("Football", paths.home)}
              >
                <ListItemIcon>
                  <SportsSoccerIcon />
                </ListItemIcon>
                <ListItemText primary={"Football"} />
              </ListItem>
              <ListItem
                button
                key={"Baseball"}
                // selected={isMenuSelected("Baseball")}
                onClick={() =>
                  chooseMenuItem("Baseball", paths.underConstruction)
                }
              >
                <ListItemIcon>
                  <SportsBaseballIcon />
                </ListItemIcon>
                <ListItemText primary={"Baseball"} />
              </ListItem>
              <ListItem
                button
                key={"Basketball"}
                // selected={isMenuSelected("Basketball")}
                onClick={() =>
                  chooseMenuItem("Basketball", paths.underConstruction)
                }
              >
                <ListItemIcon>
                  <SportsBasketballIcon />
                </ListItemIcon>
                <ListItemText primary={"Basketball"} />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem
                button
                key={"Betslip"}
                // selected={isMenuSelected("Betslip")}
                onClick={() => chooseMenuItem("Betslip", paths.betslip)}
              >
                <ListItemIcon>
                  <Badge badgeContent={bets.length} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </ListItemIcon>
                <ListItemText primary={"Betslip"} />
              </ListItem>
            </List>
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* space given for the application's screen to have a clean view */}
      </main>
    </div>
  );
};

export default HeaderWithDrawer;
