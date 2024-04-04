import React from 'react';
import { useRouter } from 'next/router';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import ProductData from '../../../components/ProductData';

// eslint-disable-next-line react/prop-types
export default function Product() {
  const router = useRouter();
  const id = router.query['product-details'];
  const filteredProducts = ProductData.filter((product) => product.id === Number(id));
  return (

    <Grid container rowGap={2} columnSpacing={2}>
      {filteredProducts.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="34%"
                image={product.img.src}
                alt={product.img.src}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div" />
                <Typography variant="h5">
                  {product.Title}
                </Typography>
                <Typography variant="h6">
                  {product.Price}
                </Typography>
                <Typography variant="p">
                  {product.Des}
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      ))}
    </Grid>
  );
}
