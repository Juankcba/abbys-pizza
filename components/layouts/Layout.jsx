import React, { useContext } from 'react'
import { Button, Container, Navbar, Link, Text } from '@nextui-org/react';
import { Box } from '../ui/Box';
import Head from 'next/head';
import Image from 'next/image';
import { UiContext } from '../../context/ui/uiContext';
import { Drawer } from '@mui/material';
import DrawerCustom from '../ui/DrawerCustom';

const Layout = ({ children }) => {
    const { isOpen, openCart } = useContext(UiContext)

    return (
        <Box
            css={{
                maxW: "100%"
            }}
        >
            <Head>
                <title>El Pocito Dulce</title>
                <meta
                    name="description"
                    content="El Pocito Dulce de Miraflores, Puerto Rico"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar variant={"sticky"} >
                <Navbar.Brand>
                    <Image src={'/assets/img/logo.jpeg'} alt="logo" width={133} height={75} css={{ objectFit: 'contain' }} />
                </Navbar.Brand>

                <Navbar.Content>

                    <Navbar.Item>
                        <DrawerCustom />
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>

            {children}
        </Box>
    );
}

export default Layout