import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Box, Button, CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function Singleproducts({ product }) {
  const navigate = useNavigate()
  const onclicktodetaisl=()=>{
    navigate(`/catagory/product/${product?.title}/${product?.id}`)
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={onclicktodetaisl} > <CardMedia component="img" height="194" image={product.image} alt="Product Image" /> </CardActionArea>
      <CardContent onClick={onclicktodetaisl}  >
        <Typography variant="body2" color="text.secondary">
          {product.title}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }} onClick={onclicktodetaisl} >
        <Typography>
          {product?.oldprice && (
            <Box component='span' style={{
              fontWeight: 'bold',
              fontSize: 'large',
              textDecoration: 'line-through',
              color: 'red',
              padding: '5px',
            }} >
              {product?.oldprice}Tk
            </Box>
          )}
          <Box component='span' style={{
            fontWeight: 'bold',
            fontSize: 'large',
          }}>
            {product?.price}Tk
          </Box>
        </Typography>
      </CardActions>
      <CardActions sx={{ justifyContent: 'center', paddingBottom: '16px' }}>
        <Button variant="contained" color="primary">Add to Cart</Button>
      </CardActions>
    </Card>
  )
}
