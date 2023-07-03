import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

import React from "react";
import { Link } from "react-router-dom";

const Dentists = ({ dentists, dispatch }) => {
  return (
    <div>
      {dentists.map((dentist) => {
        return (
          <Card sx={{ maxWidth: 250 }} key={dentist.id}>
            <CardActionArea>
              <CardMedia
                component="img"
                height=""
                image="https://res.cloudinary.com/dj8b54qzs/image/upload/v1681416240/doctor_fa5fdt.jpg"
                alt="dentist"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  textAlign="center"
                >
                  {dentist.name}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                  textAlign="center"
                >
                  {dentist.username}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <Link to={`/dentist/${dentist.id}`}>
                <Button variant="text" size="small" color="primary">
                  Detalles
                </Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default Dentists;
