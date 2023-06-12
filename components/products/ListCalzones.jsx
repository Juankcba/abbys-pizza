
import React, { useState } from 'react'
import CardProduct from './CardProduct';
import { Grid, Container, Text } from '@nextui-org/react';
const ListCalzones = () => {

    const [products, setProducts] = useState([
        { title: 'Pollo', slug: 'calzone-pollo', image: '/assets/products/soda3.jpg', price: 10.95, id: 1, description: '' },
        { title: 'Queso', slug: 'calzone-queso', image: '/assets/products/soda3.jpg', price: 9.95, id: 2, description: '' },
        { title: 'Pepperoni', slug: 'calzone-peperoni', image: '/assets/products/soda3.jpg', price: 11.95, id: 3, description: '' },
        { title: 'Chorizo', slug: 'calzone-chorizo', image: '/assets/products/soda3.jpg', price: 10.95, id: 4, description: '' },
        { title: 'Combinación', slug: 'calzone-combinacion', image: '/assets/products/soda3.jpg', price: 14.95, id: 5, description: '' },

    ])

    return (
        <Container>
            <Text h1>Calzones</Text>
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

export default ListCalzones;