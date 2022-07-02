import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
  logo: {
    height: '8em',
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
  },
  logoContainer: {
    padding: 0
  }
}));

const Header = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (e, index) => {
    setValue(index);
  };

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/services' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/revolution' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/about' && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === '/contact' && value !== 4) {
      setValue(4);
    }
  }, [value, setValue]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar color='primary'>
          <Toolbar disableGutters>
            <Button component={Link} to='/' className={classes.logoContainer} onClick={() => setValue(0)}>
              <img src={logo} alt='company logo' className={classes.logo} />
            </Button>
            <Tabs
              className={classes.tabContainer}
              value={value}
              onChange={handleChange}
              indicatorColor='primary' // hides the by default orange color underline as background is primary already
            >
              <Tab
                className={classes.tab}
                label='Home'
                component={Link}
                to='/'
              />
              <Tab
                className={classes.tab}
                label='Services'
                component={Link}
                to='/services'
              />
              <Tab
                className={classes.tab}
                label='The Revolution'
                component={Link}
                to='/revolution'
              />
              <Tab
                className={classes.tab}
                label='About Us'
                component={Link}
                to='/about'
              />
              <Tab
                className={classes.tab}
                label='Contact Us'
                component={Link}
                to='/contact'
              />
            </Tabs>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
