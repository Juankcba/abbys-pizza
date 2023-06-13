
import React, { useState } from 'react'
import CardProduct from './CardProduct';
import { Grid, Container, Text } from '@nextui-org/react';
const ListAperitivos = () => {

    const [products, setProducts] = useState([
        { title: 'Palitos con queso', taxes: 11.5, slug: 'palitos-con-queso', image: '/assets/products/soda3.jpg', price: 9.95, id: 1, description: 'Refrescante Soda' },
        { title: 'Alitas (10 piezas)', taxes: 11.5, slug: 'alitas', image: '/assets/products/soda3.jpg', price: 8.95, id: 2, description: 'Refrescante Soda' },
        { title: 'Alitas (8 piezas)', taxes: 11.5, slug: 'alitas-complemento', image: '/assets/products/soda3.jpg', price: 10.95, id: 3, description: 'Refrescante Soda' },
        { title: 'Pan con Ajo', taxes: 11.5, slug: 'pan-con-ajo', image: '/assets/products/soda3.jpg', price: 3.75, id: 4, description: 'Refrescante Soda' },
        { title: 'Pan con Queso', taxes: 11.5, slug: 'pan-con-queso', image: '/assets/products/soda3.jpg', price: 4.95, id: 5, description: 'Refrescante Soda' },
        { title: 'Motzarella Stick', taxes: 11.5, slug: 'motzarella-stick', image: '/assets/products/soda3.jpg', price: 6.99, id: 6, description: 'Refrescante Soda' },
        { title: 'Sampler', taxes: 11.5, slug: 'sampler', image: '/assets/products/soda3.jpg', price: 18.95, id: 7, description: 'Refrescante Soda' },
        { title: 'Papas fritas', taxes: 11.5, slug: 'papas-fritas', image: '/assets/products/soda3.jpg', price: 4.75, id: 8, description: 'Refrescante Soda' },
        { title: 'Tostones de pana', taxes: 11.5, slug: 'tostones-pana', image: '/assets/products/soda3.jpg', price: 4.75, id: 9, description: 'Refrescante Soda' },
        { title: 'Platano', taxes: 11.5, slug: 'platano', image: '/assets/products/soda3.jpg', price: 4.75, id: 10, description: 'Refrescante Soda' }

    ])

    return (
        <Container>
            <Text h1>Aperitivos</Text>
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

export default ListAperitivos;