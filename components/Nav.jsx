import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Link from 'next/link';

const drawerWidth = 240;
function Nav(props) {
  // eslint-disable-next-line react/prop-types
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        NavBar
      </Typography>
      <Divider />
      <List
        sx={{
          display: { xs: 'flex', sm: 'none' },
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <ListItem>
          <Link
            style={{ textDecoration: 'none', color: '#010101' }}
            href="/"
          >
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link
            style={{ textDecoration: 'none', color: '#010101' }}
            href="/about"
          >
            About
          </Link>
        </ListItem>
        <ListItem>
          <Link
            style={{ textDecoration: 'none', color: '#010101' }}
            href="/product"
          >
            product
          </Link>
        </ListItem>
        <ListItem>
          <Link
            style={{ textDecoration: 'none', color: '#010101' }}
            href="/cart"
          >
            Cart
          </Link>
        </ListItem>
        <ListItem>
          <Link
            style={{ textDecoration: 'none', color: '#010101' }}
            href="/category"
          >
            Store
          </Link>
        </ListItem>
        <ListItem>
          <Link
            style={{ textDecoration: 'none', color: '#010101' }}
            href="/login"
          >
            login
          </Link>
        </ListItem>
      </List>
    </Box>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Box sx={{ height: '64px' }}>
        <AppBar>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              NavBar
            </Typography>
            <List
              sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}
            >
              <ListItem>
                <Link
                  style={{ textDecoration: 'none', color: '#010101' }}
                  href="/"
                >
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  style={{ textDecoration: 'none', color: '#010101' }}
                  href="/about"
                >
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  style={{ textDecoration: 'none', color: '#010101' }}
                  href="/product"
                >
                  product
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  style={{ textDecoration: 'none', color: '#010101' }}
                  href="/cart"
                >
                  Cart
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  style={{ textDecoration: 'none', color: '#010101' }}
                  href="/category"
                >
                  Category
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  style={{ textDecoration: 'none', color: '#010101' }}
                  href="/login"
                >
                  login
                </Link>
              </ListItem>
            </List>
          </Toolbar>
        </AppBar>
      </Box>
      <AppBar>
        <Drawer
          container={container}
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </AppBar>
    </>
  );
}

export default Nav;
