import { Cards } from '../components/form/cards';
import Link from '@mui/material/Link';
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';
import StateTextFields from '../components/form/addCard';
import Navbar from '../components/form/navbar';
import { useState } from "react";

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

  const navigateApiNewSurvey = () => {
    navigate('/newSurvey');
  };

  const navigateApiCards = () => {
    navigate('/cards');
  }

  return (
    <>
      <Navbar addCards={addCards} />
      <Link sx={{ color: "#2771b0", fontWeight: "bold", margin: "700px" }} onClick={navigateApiCards} underline="none">
        {'הסקרים שלי'}
      </Link>
      <StyledFab className="addIcon" color="primary" aria-label="add">
        <AddIcon type="button" onClick={navigateApiNewSurvey} />
      </StyledFab>
      
      <Routes>
        <Route path="/cards" element={<Cards filterCard={[]} addCards={addCards} flag={false}  />} />
        <Route path="/newSurvey" element={<StateTextFields />} />
      </Routes>

    </>
  )
}

export default HomePage;