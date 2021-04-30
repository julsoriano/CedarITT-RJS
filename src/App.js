import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from "react-router-dom";

// @material-ui/core components
/* See https://material-ui.com/styles/basics/ under "@material-ui/core/styles vs @material-ui/styles"

            @material-ui/core/styles vs @material-ui/styles

Material-UI's styles are powered by the @material-ui/styles package, (built with JSS). This solution is isolated. 
  It doesn't have a default theme, and can be used to style React applications that are not using Material-UI components.

To reduce the number of packages to install when using Material-UI, and to simplify the imports, 
  @material-ui/styles modules are re-exported from @material-ui/core/styles.

To remove the need to systematically supply a theme, the default Material-UI theme is applied to the 
  re-exported makeStyles, styled, withTheme, useTheme, and withStyles modules.

For instance:

// Re-export with a default theme
import { makeStyles } from '@material-ui/core/styles';

// Original module with no default theme
import { makeStyles } from '@material-ui/styles';

*/

// Re-export with a default theme. See https://material-ui.com/styles/basics/ under "@material-ui/core/styles vs @material-ui/styles"
import withStyles from "@material-ui/core/styles/withStyles"; 

// core components
import Navbar from "components/Navbars/NavbarRD.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/SidebarRD.jsx";
//import FixedPlugin from "components/FixedPlugin/FixedPlugin.jsx";

import routes from "routesTM.js";

import dashboardStyle from "assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";

// import { useLocation } from 'react-router-dom';

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
        return (
          <Route
            path={prop.path}
            component={prop.component}
            key={key}
          />
        );        
    })}
    <Redirect from="/" to="/dashboard" />
  </Switch>
);

function ResponsiveDrawer(props) {
  /* console.log("Props: " + Object.keys(props));
  // Props: classes,history,location,match,staticContext
  /*
  var cls = props.classes;
  for (var x in cls) {
    console.log("Class Name: " + cls[x]);
  } 
  */

  //const { window, location } = props;
  // const classes = useStyles(); // CSS Hook API

  // custom hook to get the current pathname in React
  // See How to get the current URL and pathname in React https://surajsharma.net/blog/current-url-in-react
  // console.log("Path from useLocation: " + useLocation().pathname); // Path from useLocation: /
  // console.log("Path from props: "+ location.pathname); // Path from props: /

  const { classes, ...rest } = props;
  // const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  // const [color, setColor] = useState("purple");
  // const [image, setImage] = useState("assets/img/sidebar-2.jpg");
  // const [fixedClasses, setFixedClasses] = useState("dropdown show");

  var mainPanel = React.createRef();

  var color = "purple";
  // var fixedClasses = "dropdown show";

  //const handleImageClick = image => {
  //  setImage({ image: image });
  //};
  /*
  const handleColorClick = color => {
    setColor({ color: color });
  };
  
  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses({ fixedClasses: "dropdown show" });
    } else {
      setFixedClasses({ fixedClasses: "dropdown" });
    }
  };
  */
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function getRoute() {
    return window.location.pathname !== "/admin/maps";
  }

  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText={"Cedar ITT"}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}
        {getRoute() ? <Footer /> : null}
        {/* <FixedPlugin
          handleImageClick={handleImageClick}
          handleColorClick={handleColorClick}
          bgColor={color}
          bgImage={image}
          handleFixedClick={handleFixedClick}
          fixedClasses={fixedClasses}
        /> */}
        </div> 
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(ResponsiveDrawer);

/*
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
*/