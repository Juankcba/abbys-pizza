import { Card, Text, Row, Button } from '@nextui-org/react'
import React, { useContext, useState } from 'react'
import { Box } from '../ui/Box';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CartContext } from '../../context/cart/cartContext';
import { currency } from '@/utils';
import { toast } from 'react-toastify';
const CardProduct = ({ product }) => {
    const { addProductToCart } = useContext(CartContext)
    const [isPressed, setIsPressed] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const countQuantity = (state) => {
        if (state) {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity <= 1 ? 0 : quantity - 1)
        }
    }
    const addProductHadle = () => {
        let productAux = {
            _id: product.id,
            image: product.image,
            price: product.price,
            title: product.title,
            slug: product.slug,
            taxes: product.taxes,
            quantity: quantity
        }
        toast.success('Producto Agregado al Carrito', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        addProductToCart(productAux)
        setQuantity(0)
        setTimeout(() => {
            setIsPressed(false)
        }, 1000);

    }
    return (
        <Card isPressable onClick={() => setIsPressed(!isPressed)}>
            <Card.Body css={{ p: 0, position: 'relative', bottom: 0, left: 0 }} >
                {isPressed && (
                    <Box css={{ bgBlur: '#ffffff66', alignItems: 'center', flexDirection: 'column', display: 'flex', justifyContent: 'center', position: 'absolute', zIndex: 1, bottom: 0, left: 0, width: '100%', h: 240 }}>
                        <Text h3 css={{ mb: '0' }}>{product.title}</Text>
                        <Text>{product.description}</Text>
                        <Row gap={1} css={{ mt: '24px', width: '100px', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
                            <Button flat auto onPress={() => countQuantity(false)}>-</Button>
                            <Text>{quantity}</Text>
                            <Button flat auto onPress={() => countQuantity(true)}>+</Button>

                        </Row>
                        <Button auto css={{ w: '140px', mt: '8px' }} onPress={() => addProductHadle()}><AddShoppingCartIcon /></Button>
                    </Box>
                )}
                <Card.Image
                    src={product.image}
                    objectFit="cover"
                    width="100%"
                    height={240}
                    alt={product.title}
                    css={{ position: 'absolute', zIndex: 0, bottom: 0, left: 0 }}

                />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                    <Text b>{product.title}</Text>
                    <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                        {currency.format(product.price)}
                    </Text>
                </Row>
            </Card.Footer>
        </Card >
    )
}

export default CardProduct