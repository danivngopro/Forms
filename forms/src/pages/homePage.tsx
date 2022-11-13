// import Link from '@mui/material/Link';
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';
import Navbar from '../components/form/navbar';
import { useState,useEffect } from "react";

export function HomePage() {

  const [addCards, setAddCards] = useState<{ title: String }[]>([{ title: "סקר 1 " }, { title: "סקר 2 " },{ title: "NNBV" },{ title: "NNBA " }])
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

  useEffect(() => {
    navigate('/cards' , {
      state:{
        filterCard:[],
        addCards:addCards,
        flag:false
      }
    }
    );
}, []);

  return (
    <>
      <Navbar addCards={addCards} />
      <StyledFab className="addIcon" color="primary" aria-label="add">
        <AddIcon type="button" onClick={navigateApiNewSurvey} />
      </StyledFab>
    </>
  )
}

export default HomePage;