import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";

interface Props{
    product: Product;
}

export default function ProductCard({product}: Props){
    return(
        <Card>
      <CardActionArea>
        <CardHeader
            avatar={
                <Avatar sx={{bgcolor: 'secondary.main'}}>
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
            }
            title={product.name}
            titleTypographyProps={{sx: {fontWeight: 'bold', color: 'primary.main'}}}
        />
        <CardMedia
          sx={{ height: 140 , backgroundSize: 'contain', bgcolor:'primary.light'}}
          image={product.pictureUrl}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom color='secondary' variant="h5">
            ${(product.price/100).toFixed(2)}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {product.brand} / {product.type}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to cart
        </Button>
        <Button component={Link} to={`/catalog/${product.id}`} size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
    )
}