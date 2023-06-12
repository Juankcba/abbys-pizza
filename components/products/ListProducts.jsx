
import React, { useState } from 'react'
import CardProduct from './CardProduct';
import { Grid, Container, Text } from '@nextui-org/react';
const ListProducts = () => {

    const [products, setProducts] = useState([
        { title: 'Sodas', slug: 'sodas', image: '/assets/products/soda3.jpg', price: 100, id: 0, description: 'Refrescante Soda' },
        { title: 'Sodas', slug: 'sodas', image: '/assets/products/soda3.jpg', price: 100, id: 1, description: 'Refrescante Soda' },
        { title: 'Sodas', slug: 'sodas', image: '/assets/products/soda3.jpg', price: 100, id: 2, description: 'Refrescante Soda' },
        { title: 'Sodas', slug: 'sodas', image: '/assets/products/soda3.jpg', price: 100, id: 3, description: 'Refrescante Soda' },
        { title: 'Sodas', slug: 'sodas', image: '/assets/products/soda3.jpg', price: 100, id: 4, description: 'Refrescante Soda' },
        { title: 'Sodas', slug: 'sodas', image: '/assets/products/soda3.jpg', price: 100, id: 5, description: 'Refrescante Soda' },
        { title: 'Sodas', slug: 'sodas', image: '/assets/products/soda3.jpg', price: 100, id: 6, description: 'Refrescante Soda' }
    ])

    return (
        <Container>
            <Text h1>Nuestros Productos</Text>
            <Grid.Container gap={1} css={{ pt: '24px', justifyContent: 'center' }}>
                {products.map(product => (
                    <Grid xs={12} sm={6} md={3} lg={2} key={product.id}>
                        <CardProduct product={product} />
                    </Grid>
                ))}
            </Grid.Container>
        </Container>
    )
}

export default ListProducts