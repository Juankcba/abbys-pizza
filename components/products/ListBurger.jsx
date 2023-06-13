
import React, { useState } from 'react'
import CardProduct from './CardProduct';
import { Grid, Container, Text } from '@nextui-org/react';
const ListBurger = () => {

    const [products, setProducts] = useState([
        { title: 'American Cheese', taxes: 11.5, slug: 'american-cheese', image: '/assets/products/soda3.jpg', price: 8.95, id: 1, description: 'Lechuga, tomate, queso americano, cebolla y pepinillo' },
        { title: 'French Burger', taxes: 11.5, slug: 'french-burger', image: '/assets/products/soda3.jpg', price: 8.95, id: 2, description: 'Suizo, cebolla, lechuga y tomate' },
        { title: 'Barbacoa Burger', taxes: 11.5, slug: 'alitas-complemento', image: '/assets/products/soda3.jpg', price: 8.95, id: 3, description: 'Queso suizo o americano, salsa BBQ, setas, cebolla, lechuga y tomate' },
        { title: "Abby's Burger", taxes: 11.5, slug: 'abbys-burger', image: '/assets/products/soda3.jpg', price: 8.75, id: 4, description: 'Salsa de pizza, suizo y americano, cebolla y lechuga y tomate' },
        { title: 'Cheesburger', taxes: 11.5, slug: 'cheesburger', image: '/assets/products/soda3.jpg', price: 8.95, id: 5, description: 'Refrescante Soda' }

    ])

    return (
        <Container>
            <Text h1>Burger</Text>
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

export default ListBurger;