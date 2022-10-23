import './App.css';
import Navbar from './components/form/navbar';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import styled from '@emotion/styled';
import {Cards} from './card';
const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: 670,
  left: -1400,
  right: 0,
  margin: '0 auto',
});

export function App() {
  return (
    <>
      <Navbar />
      <Cards />
      <StyledFab color="primary" aria-label="add">
        <AddIcon />
      </StyledFab>
    </>
  )
}

export default App;
