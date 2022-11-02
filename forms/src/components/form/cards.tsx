import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { pink } from '@material-ui/core/colors';
import Grid from '@mui/material/Grid';
import { IconButton } from '@mui/material';
import DropDown from '../ui/DropDown';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Cards = (props: { filterCard: any[], addCards: any[], flag: any }): JSX.Element => {

  let { addCards } = props;
  let { filterCard } = props;
  let { flag } = props;

  if (flag){
    console.log(flag)
    addCards = filterCard ;
  }    
  const [enterTime, setEnterTime] = useState("");

  const handleChange = () => {
    setEnterTime(new Date().toLocaleString())
  };

  flag=false;

  return (<>
    <div>
      {
        <Grid sx={{ marginLeft: "10px", marginTop: "13px" }} container spacing={0}>
          {addCards.map((singleCard, index) =>
            <Card sx={{ maxWidth: 345, marginLeft: "10px" }} onClick={handleChange}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: pink[500], img: "assets/img.jpg" }} aria-label="recipe">
                    ZD
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <DropDown singleCard={singleCard} />
                  </IconButton>
                }
                title={singleCard.title}
                subheader="October 20, 2022" />
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