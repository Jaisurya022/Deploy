import React, { useState, useEffect } from 'react';
import { Box, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import Image from 'next/image';
// import ProductData from '../../components/ProductData';

// eslint-disable-next-line react/prop-types

const cardStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};
export default function Product() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const userdata = await response.json();
      const data = userdata.products.slice(0, 30);
      setPost(data);
    };
    fetchUser().catch(console.error);
  }, []);

  console.log(post);
  return (
    <Grid container rowGap={2} columnSpacing={2}>
      {post.map((posts) => {
        return (
          <Grid key={posts.id} item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex' }}>
            <Card style={cardStyle}>
              <CardActionArea sx={{ flex: 1 }}>
                <Box sx={{ height: '250px', width: '100%' }}>
                  <Image
                    src={posts.images[0]}
                    alt={posts.thumbnail}
                    width={100}
                    height={100}
                    style={{ height: '100%', width: '100%', objectFit: 'contain' }}
                  />
                </Box>

                <CardContent>
                  <Typography gutterBottom variant="h4" component="div" />
                  <Typography variant="h5">
                    Brand:
                    {posts.brand}
                  </Typography>
                  <Typography variant="p">
                    Price:
                    {posts.price}
                  </Typography>
                  <Typography variant="p">
                    Description:
                    {posts.description}
                  </Typography>
                  <Typography variant="p">
                    DiscountPercentage:
                    {posts.discountPercentage}
                    %
                  </Typography>

                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
