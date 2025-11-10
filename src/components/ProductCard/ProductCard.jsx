import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";

export function ProductCard({ product, addToCart }) {
  return (
    <Card>
      <Box component={NavLink} to={`/products/${product.id}`}>
        <CardActionArea
          sx={{
            width: 300,
            height: 300,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: 100 }}>
            <CardMedia
              component="img"
              sx={{ width: "100%" }}
              image={product.image}
              alt="green iguana"
            />
          </Box>

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              sx={{ color: "black" }}
              component="div"
            >
              {product.title.lenght <= 20
                ? product.title
                : `${product.title.slice(0, 20)}...`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Box>

      <Button
        sx={{ width: "100%" }}
        startIcon={<ShoppingCartIcon />}
        variant={"contained"}
        onClick={() => addToCart(product)}
      >
        Buy
      </Button>
    </Card>
  );
}
