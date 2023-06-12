
import React, { useState } from 'react'
import CardProduct from './CardProduct';
import { Grid, Container, Text } from '@nextui-org/react';
const ListSandwiches = () => {

    const [products, setProducts] = useState([
        { title: 'Choripan', slug: 'sandwich-choripan', image: '/assets/products/soda3.jpg', price: 8.95, id: 1, description: '' },
        { title: 'Jamon y queso', slug: 'sandwich-jamon-queso', image: '/assets/products/soda3.jpg', price: 5.95, id: 2, description: '' },
        { title: 'Pollo', slug: 'sandwich-pollo', image: '/assets/products/soda3.jpg', price: 8.95, id: 3, description: '' },
        { title: 'Albondigas', slug: 'sandwich-albondigas', image: '/assets/products/soda3.jpg', price: 8.75, id: 4, description: '' },
        { title: 'Combinación', slug: 'sandwich-combinacion', image: '/assets/products/soda3.jpg', price: 9.95, id: 5, description: '' },

    ])

    return (
        <Container>
            <Text h1>Sandwiches</Text>
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

export default ListSandwiches;