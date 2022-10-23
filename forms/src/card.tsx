import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { pink } from '@material-ui/core/colors';
import './card.css'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import { IconButton } from '@mui/material';
import {Route, BrowserRouter as Router,Routes, useNavigate } from 'react-router-dom';
import FloatingWindow from './pages/floatingWindow';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: 670,
  left: -1400,
  right: 0,
  margin: '0 auto',
});

export function Cards() {

  const [addCards, setAddCards] = React.useState([{ Card }])
  const navigate =useNavigate();

  const handleAddCard = () => {
    setAddCards([...addCards, { Card }])
  }

  const navigateApi = () => {
    navigate('/api');
  };

  return (<>
    <div>
      <Grid container spacing={0}>
        {addCards.map((singleCard, index) =>
          <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: pink[500] }} aria-label="recipe">
                  ZD
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Untitled form"
              subheader="October 20, 2022" />
            <CardMedia
              component="img"
              height="150"
              image=".src/assets/img.jpg"
              alt="img" />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                opened...
              </Typography>
            </CardContent>

          </Card>)}

        <StyledFab color="primary" aria-label="add">
          <AddIcon type="button" onClick={navigateApi}/>
        </StyledFab>
      </Grid>

      <Routes>
        <Route path="/api" element={<FloatingWindow />} />
      </Routes>

    </div>
  </>
  );
}