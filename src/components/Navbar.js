import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import '../style/navbar.css';

const pages = ['Home', 'Chapter', 'About Us', 'Team'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    if (isNavMenuOpen) {
      setAnchorElNav(null);
      setIsNavMenuOpen(false);
    } else {
      setAnchorElNav(event.currentTarget);
      setIsNavMenuOpen(true);
    }
  };

  const scrollJoinUs = () => {
    const joinUsWelElement = document.getElementById('joinUsWel');
    if (joinUsWelElement) {
      joinUsWelElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <AppBar position="fixed" className="bg-white text-white">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            onClick={scrollJoinUs}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src="/navbarLogo.png" alt="Logo" className="mr-2 mt-10 h-16" />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center', // Center items vertically in the Box
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <img src="/navbarLogo.png" alt="Logo" style={{ marginRight: '8px', marginTop: '10px', height: '4rem' }} />
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
                alignItems: 'center',
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'flex-end',
                flexGrow: 1,
                paddingRight: 2,
              }}
            >
              {pages.map((page) => (
                 <Button key={page} sx={{ color: 'black', ml: 2 }} component={Link} to={`/${page.toLowerCase()}`}>
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      
      <CSSTransition in={isNavMenuOpen} timeout={300} classNames="menu" unmountOnExit>
        <div className="menu">
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleOpenNavMenu}>
              {page}
            </MenuItem>
          ))}
        </div>
      </CSSTransition>
      {isNavMenuOpen && (
        <div className="overlay" onClick={handleOpenNavMenu}></div>
      )}
    </div>
 
  );
}

export default Navbar;
