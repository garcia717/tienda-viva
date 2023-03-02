
import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';

const Item = ({element}) => {
  return (
    <Grid container spacing={2}>
        <Grid item lg={8}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={element.img}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {element.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Precio: $ {element.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {element.description}
          </Typography>
        </CardContent>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="success" size='small'>
        Ver más
      </Button>
    </Stack>
      </CardActionArea>
    </Card>
        </Grid>
        </Grid>
 
  )
}

export default Item



