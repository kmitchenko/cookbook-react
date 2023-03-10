import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

function ItemsGrid({ recepies }) {
  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {recepies.map((recipe) => {
        return (
          <Card
            sx={{ maxWidth: 345, minWidth: 300, margin: "10px 0" }}
            key={recipe.id}
          >
            <CardHeader
              sx={{ minHeight: 90 }}
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              title={recipe.title}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={recipe.image}
              alt="Dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis doloribus minima earum, quos, quisquam unde est
                aliquid tempora adipisci officiis cumque architecto dolorum
                reprehenderit laboriosam molestiae dolore, accusamus consectetur
                ea!
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
              disableSpacing
            >
              <div className="left">
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </div>
              <div className="right">
                <Button size="small">Learn More</Button>
              </div>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}

export default ItemsGrid;
