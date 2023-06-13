
import React, { useState } from 'react'
import CardProduct from './CardProduct';
import { Grid, Container, Text } from '@nextui-org/react';
const ListLicores = () => {

    const [licores, setProducts] = useState([
        { title: 'Don Q', taxes: 11.5, slug: 'licores-don-q', image: '/assets/products/soda3.jpg', price: 6, id: 1, description: '' },
        { title: 'Vodka', taxes: 11.5, slug: 'licores-vodka', image: '/assets/products/soda3.jpg', price: 6, id: 2, description: '' },
        { title: 'Whiskey - Black Label', taxes: 11.5, slug: 'licores-black-label', image: '/assets/products/soda3.jpg', price: 7, id: 3, description: '' },
        { title: 'Licore 43', taxes: 11.5, slug: 'licores-licore-43', image: '/assets/products/soda3.jpg', price: 6, id: 4, description: '' },
        { title: 'Countreau', taxes: 11.5, slug: 'licores-countreau', image: '/assets/products/soda3.jpg', price: 6, id: 5, description: '' },
    ])
    const [cervezas, setCervezas] = useState([
        { title: 'Michelob', taxes: 11.5, slug: 'cervezas-michelob', image: '/assets/products/soda3.jpg', price: 3, id: 1, description: '' },
        { title: 'Heineken', taxes: 11.5, slug: 'cervezas-heineken', image: '/assets/products/soda3.jpg', price: 3, id: 2, description: '' },
        { title: 'Corona', taxes: 11.5, slug: 'cervezas-corona', image: '/assets/products/soda3.jpg', price: 3, id: 3, description: '' },
        { title: 'Coors light', taxes: 11.5, slug: 'cervezas-coors-light', image: '/assets/products/soda3.jpg', price: 3, id: 4, description: '' },
        { title: 'Peroni', taxes: 11.5, slug: 'cervezas-peroni', image: '/assets/products/soda3.jpg', price: 3, id: 5, description: '' },
    ])
    const [sodas, setSodas] = useState([
        { title: 'Refresco de botella', slug: 'refresco-de-botella', taxes: 11.5, image: '/assets/products/soda3.jpg', price: 2.24, id: 1, description: '' },
        { title: 'Jugos', taxes: 11.5, slug: 'refresco-jugos', image: '/assets/products/soda3.jpg', price: 2.24, id: 2, description: '' },
        { title: 'Jarra', taxes: 11.5, slug: 'refresco-jarra', image: '/assets/products/soda3.jpg', price: 7, id: 3, description: '' },
        { title: 'Padrino', taxes: 11.5, slug: 'refresco-padrino', image: '/assets/products/soda3.jpg', price: 2.69, id: 4, description: '' },
        { title: 'Refresco de lata', taxes: 11.5, slug: 'refresco-de-lata', image: '/assets/products/soda3.jpg', price: 1.79, id: 5, description: '' },
        { title: 'Agua', taxes: 11.5, slug: 'refresco-agua', image: '/assets/products/soda3.jpg', price: 1.12, id: 6, description: '' },
        { title: 'Piña Colada', taxes: 11.5, slug: 'refresco-piña-colada', image: '/assets/products/soda3.jpg', price: 0, id: 7, description: '' },
    ])
    const [cervezasLata, setCervezasLata] = useState([
        { title: 'Medalla', taxes: 11.5, slug: 'cervezas-lata-medalla', image: '/assets/products/soda3.jpg', price: 1.80, id: 1, description: '' },
        { title: 'Coors light', taxes: 11.5, slug: 'cervezas-coors-light', image: '/assets/products/soda3.jpg', price: 1.80, id: 2, description: '' },
    ])
    const [happyHour, setHappyHour] = useState([
        { title: 'Peroni', taxes: 11.5, slug: 'happy-lata-medalla', image: '/assets/products/soda3.jpg', price: 5.00, id: 1, description: '2 x $5.00' },
        { title: 'Sangria de la casa', taxes: 11.5, slug: 'happy-coors-light', image: '/assets/products/soda3.jpg', price: 6.00, id: 2, description: '' },
        { title: 'Copa de vino', taxes: 11.5, slug: 'happy-coors-light', image: '/assets/products/soda3.jpg', price: 4.67, id: 2, description: '' },
    ])
    const [shots, setShots] = useState([
        { title: 'Pama', taxes: 11.5, slug: 'shot-pama', image: '/assets/products/soda3.jpg', price: 3.00, id: 1, description: '' },
        { title: 'Grand Marnier', taxes: 11.5, slug: 'shot-grand-marnier', image: '/assets/products/soda3.jpg', price: 3.00, id: 2, description: '' },
        { title: 'Frangelico', taxes: 11.5, slug: 'shot-frangelico', image: '/assets/products/soda3.jpg', price: 3.00, id: 2, description: '' },
        { title: 'Licor 43', taxes: 11.5, slug: 'shot-licor-43', image: '/assets/products/soda3.jpg', price: 3.00, id: 2, description: '' },
        { title: 'Licor 45', taxes: 11.5, slug: 'shot-licor-45', image: '/assets/products/soda3.jpg', price: 3.00, id: 2, description: '' },
        { title: 'Baileys', taxes: 11.5, slug: 'shot-baileys', image: '/assets/products/soda3.jpg', price: 3.00, id: 2, description: '' },
    ])


    return (
        <Container>
            <Text h1>Bebidas</Text>
            <Text h2>Licores</Text>
            <Grid.Container gap={1} css={{ pt: '24px', justifyContent: 'center' }}>
                {licores.map(product => (
                    <Grid xs={12} sm={6} md={3} lg={2} key={product.id}>
                        <CardProduct product={product} />
                    </Grid>
                ))}
            </Grid.Container>
            <Text h2>Cervezas</Text>
            <Grid.Container gap={1} css={{ pt: '24px', justifyContent: 'center' }}>
                {cervezas.map(product => (
                    <Grid xs={12} sm={6} md={3} lg={2} key={product.id}>
                        <CardProduct product={product} />
                    </Grid>
                ))}
            </Grid.Container>
            <Text h2>Refrescos</Text>
            <Grid.Container gap={1} css={{ pt: '24px', justifyContent: 'center' }}>
                {sodas.map(product => (
                    <Grid xs={12} sm={6} md={3} lg={2} key={product.id}>
                        <CardProduct product={product} />
                    </Grid>
                ))}
            </Grid.Container>
            <Text h2>Cervezas de Lata</Text>
            <Grid.Container gap={1} css={{ pt: '24px', justifyContent: 'center' }}>
                {cervezasLata.map(product => (
                    <Grid xs={12} sm={6} md={3} lg={2} key={product.id}>
                        <CardProduct product={product} />
                    </Grid>
                ))}
            </Grid.Container>
            <Text h2>HAPPY HOUR</Text>
            <Grid.Container gap={1} css={{ pt: '24px', justifyContent: 'center' }}>
                {happyHour.map(product => (
                    <Grid xs={12} sm={6} md={3} lg={2} key={product.id}>
                        <CardProduct product={product} />
                    </Grid>
                ))}
            </Grid.Container>
            <Text h2>Shots</Text>
            <Grid.Container gap={1} css={{ pt: '24px', justifyContent: 'center' }}>
                {shots.map(product => (
                    <Grid xs={12} sm={6} md={3} lg={2} key={product.id}>
                        <CardProduct product={product} />
                    </Grid>
                ))}
            </Grid.Container>

        </Container>
    )
}

export default ListLicores;