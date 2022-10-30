import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { SearchNav } from './search';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default function Navbar(props: { addCards: any[] }) {

  const [searchField, setSearchField] = useState("");
  const { addCards } = props;
  const navigate = useNavigate();

  const handleChange = () => {
    navigate("/SearchNav")
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}>
            <Tooltip title="The name of the profiles">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Z" src="/assets/img.jpg" />
              </IconButton>
            </Tooltip>

          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <Autocomplete
              onInputChange={(event, newInputValue) => {
                setSearchField(newInputValue);
                handleChange();
              }}
              disablePortal
              id="combo-box-demo"
              options={addCards.map((option) => option.title)}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} />} />
          </Search>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path='/SearchNav' element={<SearchNav searchField={searchField} addCards={addCards} />}></Route>
      </Routes>
    </Box>
  );
}
