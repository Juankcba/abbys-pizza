
import React, { useState } from 'react'
import CardProduct from './CardProduct';
import { Grid, Container, Text } from '@nextui-org/react';
const ListLasanas = () => {

    const [products, setProducts] = useState([
        { title: 'Mini Lasaña', taxes:11.5 ,slug: 'mini-lasana', image: '/assets/products/soda3.jpg', price: 10.95, id: 1, description: 'Refrescante Soda' },
        { title: 'Mini Lasaña combinacion',taxes:11.5 , slug: 'mini-lasana-combinacion', image: '/assets/products/soda3.jpg', price: 13.95, id: 2, description: 'Refrescante Soda' },
        { title: 'Lasaña',taxes:11.5 , slug: 'lasana', image: '/assets/products/soda3.jpg', price: 12.95, id: 3, description: 'Refrescante Soda' },
        { title: 'Lasaña Combinación',taxes:11.5 , slug: 'lasana-combinacion', image: '/assets/products/soda3.jpg', price: 15.95, id: 4, description: 'Refrescante Soda' },

    ])

    return (
        <Container>
            <Text h1>Lasañas</Text>
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

export default ListLasanas;