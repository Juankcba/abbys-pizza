
import React, { useState } from 'react'
import CardProduct from './CardProduct';
import { Grid, Container, Text } from '@nextui-org/react';
const ListEnsaladas = () => {

    const [products, setProducts] = useState([
        { title: 'Pollo', slug: 'ensalada-pollo', image: '/assets/products/soda3.jpg', price: 12.95, id: 1, description: '' },
        { title: 'Churrasco', slug: 'ensalada-churrasco', image: '/assets/products/soda3.jpg', price: 13.95, id: 2, description: '' },
        { title: 'Marisco', slug: 'ensalada-marisco', image: '/assets/products/soda3.jpg', price: 15.95, id: 3, description: '' },
        { title: "Combinación", slug: 'ensalada-combinacion', image: '/assets/products/soda3.jpg', price: 15.95, id: 4, description: '2 a 6 ingredientes' },


    ])

    return (
        <Container>
            <Text h1>Ensaladas</Text>
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

export default ListEnsaladas;