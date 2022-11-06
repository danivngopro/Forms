import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { IconButton } from '@mui/material';
import DropDown from '../ui/DropDown';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export const Cards = () => {

  const [enterTime, setEnterTime] = useState("");
  const location =useLocation ();
  let addCards  = location.state.addCards;
  let filterCard  = location.state.filterCard;
  let  flag  = location.state.flag;

  
  if (flag){
    addCards = filterCard ;
  }    

  flag=false;

  const handleChange = () => {
    setEnterTime(new Date().toLocaleString())
  };

  return (<>
    <div>
      {
        <Grid sx={{ marginLeft: "10px", marginTop: "13px" }} container spacing={0}>
          {addCards.map((singleCard: { title: any; }, index: any) =>
            <Card sx={{ maxWidth: 345, marginLeft: "10px" }} onClick={handleChange}>
              <CardHeader
<<<<<<< HEAD
=======
                avatar={
                  <Avatar sx={{ bgcolor: 'pink', img: "assets/img.jpg" }} aria-label="recipe">
                    ZD
                  </Avatar>
                }
>>>>>>> fbb5ce3010ca3de511ecb2c1dfa1bff4074f2706
                action={
                  <IconButton aria-label="settings">
                    <DropDown singleCard={singleCard} />
                  </IconButton>
                }
                title={singleCard.title}
                subheader="The date the survey was created" />
              <CardMedia
                component="img"
                height="150"
                image=".src/assets/img.jpg"
                alt="img" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <div>open in: {enterTime}</div>
                </Typography>
              </CardContent>
            </Card>
          )}
        </Grid>
      }
    </div>
  </>
  );
}