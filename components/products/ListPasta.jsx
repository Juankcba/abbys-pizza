
import React, { useState } from 'react'
import CardProduct from './CardProduct';
import { Grid, Container, Text } from '@nextui-org/react';
const ListPasta = () => {

    const [products, setProducts] = useState([
        { title: 'Albondigas o Chorizos', slug: 'pasta-albondigas', image: '/assets/products/soda3.jpg', price: 10.95, id: 1, description: '' },
        { title: 'Pollos o Carnes', slug: 'pasta-pollo', image: '/assets/products/soda3.jpg', price: 11.95, id: 2, description: '' },
        { title: 'Camarones', slug: 'pasta-camarones', image: '/assets/products/soda3.jpg', price: 13.95, id: 3, description: '' },
        { title: 'Combinación', slug: 'pasta-combinacion', image: '/assets/products/soda3.jpg', price: 14.95, id: 4, description: '2 a 6 ingridentes' },

    ])

    return (
        <Container>
            <Text h1>Espagueti & Pasta</Text>
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

export default ListPasta;