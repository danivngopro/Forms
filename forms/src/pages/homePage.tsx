import { Cards } from '../components/form/cards';
import Link from '@mui/material/Link';
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';
import StateTextFields from '../components/form/addCard';
import Navbar from '../components/form/navbar';
import { useState } from "react";
import { OneCard } from '../components/form/oneCard';
import { SearchNav } from '../components/form/search';

export function HomePage() {

  const [addCards, setAddCards] = useState<{ title: String }[]>([{ title: "סקר 1 " }, { title: "סקר 2 " }])
  const navigate = useNavigate();

  const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: 670,
    left: -1400,
    right: 0,
    margin: '0 auto',
  });

  const navigateApi = () => {
    navigate('/newSurvey');
  };

  return (
    <>
      <Navbar addCards={addCards} />
      <Link sx={{ color: "#2771b0", fontWeight: "bold", margin: "700px" }} href="/cards" underline="none">
        {'הסקרים שלי'}
      </Link>

      <StyledFab className="addIcon" color="primary" aria-label="add">
        <AddIcon type="button" onClick={navigateApi} />
      </StyledFab>

      <Routes>
        <Route path="/cards" element={<Cards addCards={addCards} />} />
        <Route path="/newSurvey" element={<StateTextFields />} />
        <Route path='/oneCard' element={<OneCard />}></Route>
        {/* <Route path='/SearchNav' element={<SearchNav/>}></Route> */}
      </Routes>

    </>
  )
}

export default HomePage;