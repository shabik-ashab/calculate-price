import React from 'react';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';
  import Typography from '@mui/material/Typography';
  import Box from '@mui/material/Box';
  import Paper from '@mui/material/Paper';
  import Grid from '@mui/material/Grid';
  import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Page2 from './Page2';


  let theme = createTheme();
theme = responsiveFontSizes(theme);

const Page1 = () => {
    return (
        <div>
            
      <Box sx={{ flexGrow: 1 }}>
      <Grid  container spacing={2}>
        <Grid sx={{borderRight: '1px solid ', minHeight: '100vh'}} item xs={8}>
        <ThemeProvider theme={theme}>
        <Typography sx={{ml:22,mt:3,mb:2}} variant="h5">I want my site to built on (Choose Framework) </Typography>
      </ThemeProvider>
      <Card sx={{ maxWidth: 545, ml:20, mb:2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Python
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nostrum esse ut minus ea doloremque dicta hic ad accusantium vitae?
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 550, ml:20, mb:2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Wordpress
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nostrum esse ut minus ea doloremque dicta hic ad accusantium vitae?
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 545, ml:20, mb:2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Phplaravel
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nostrum esse ut minus ea doloremque dicta hic ad accusantium vitae?
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 545, ml:20, mb:2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          kajavi
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nostrum esse ut minus ea doloremque dicta hic ad accusantium vitae?
        </Typography>
      </CardContent>
    </Card>
 
       <Container sx={{ml:36,mb:5}}>
       
       <Button sx={{mr:12}} size="small">PREV</Button>
     
       <Link to="page2">
        <Button size="small">NEXT</Button>
        </Link>
       </Container>
        </Grid>
        <Grid item xs={4}>
        <Typography sx={{ml:3,mt:5,mb:2 , }} color="text.secondary">please input all the field to show estimated price</Typography>
        </Grid>
       
      </Grid>
    </Box>
        </div>
    )
}

export default Page1
