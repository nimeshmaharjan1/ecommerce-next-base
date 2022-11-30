import React from 'react';
import ThemeToggler from '@shared/components/theme-toggler';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { AppBar, Box, Container, Link, Toolbar, Typography, useScrollTrigger } from '@mui/material';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

const Header = () => {
  function ElevationScroll(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar>
          <Container>
            <Grid container alignItems={'center'} py={1}>
              <Grid xs={2}>Title</Grid>
              <Grid container xs={8} justifyContent={'space-around'}>
                <Link
                  component="button"
                  variant="body2"
                  underline="hover"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                >
                  Home
                </Link>
                <Link
                  component="button"
                  variant="body2"
                  underline="hover"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                >
                  Products
                </Link>
              </Grid>
              <Grid xs={2} container justifyContent="center">
                <ThemeToggler></ThemeToggler>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
