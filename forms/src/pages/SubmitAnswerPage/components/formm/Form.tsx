import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import "./Form.scss";

const Form = () => {

    return (
        <Box className="box-one">
            {/* style={{backgroundColor: '#f0ebf8', width: '65%'}} */}
        <div style={{alignItems: 'center', marginLeft: '230px'}}> 

            <Box style={{
               marginTop:'10px', height: '128px', width: '420px', backgroundColor: 'white', borderRadius: '10px'
            }}>
                {/* <CardContent style={{
                    height: '128px', width: '420px',  backgroundColor: '#f0ebf8', borderRadius: '10px'
                   }}> */}
                <Typography> this is my question</Typography>

                <TextField label="Standard" > hhhhh</TextField>

                {/* </CardContent> */}
            </Box>
  

            <Box style={{
             width: '510px', backgroundColor: 'white', borderRadius: '10px', marginTop: '30px'
            }}>
                {/* <CardContent style={{ */}
                {/* height: '128px', width: '420px',  backgroundColor: '#f0ebf8', borderRadius: '10px' */}
                {/* }}> */}
                <Typography> this is my question</Typography>
                <div>
                    {/* value={} onChange={} */}
                    <RadioGroup aria-label="gender" name="gender1" >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </div>

                {/* </CardContent> */}
            </Box>
            </div>
        </Box>
    )
}

export default Form;