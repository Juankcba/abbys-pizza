import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { CartContext } from "../../context/cart/cartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Image from "next/image";
import {
  Card,
  Col,
  Grid,
  Row,
  Text,
  Button as NextButton,
  Badge,
} from "@nextui-org/react";
import { currency } from "@/utils";
import CheckoutStepper from "../products/CheckoutStepper";
import { ICartProduct } from "@/interfaces";
import { toast } from "react-toastify";
type Anchor = "top" | "left" | "bottom" | "right";

export default function DrawerCustom() {
  const { cart, removeCartProduct, updateCartQuantity } =
    React.useContext(CartContext);
  const [step, setStep] = React.useState(1);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleDelete = (product: ICartProduct) => {
    removeCartProduct(product);
    toast.error("Producto Eliminado del Carrito", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const countQuantity = (state: boolean, product: ICartProduct) => {
    let aux = product;
    if (state) {
      aux.quantity = product.quantity + 1;
    } else {
      aux.quantity = product.quantity <= 1 ? 0 : product.quantity - 1;
    }
    updateCartQuantity(aux);
  };

  console.log(cart);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  useEffect(() => {
    if (step === 3) {
      setTimeout(() => {
        setStep(1);
      }, 1000);
    }
  }, [step]);

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
    >
      <Row css={{ m: "24px" }}>
        {cart.length === 0 && step != 3 ? (
          <Col
            css={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Text h2>Carrito Vacio</Text>
            <div style={{ margin: "0 auto" }}>
              <Image
                src="/assets/img/empty-cart.png"
                alt="carrito-vacio"
                width={200}
                height={200}
              />
            </div>
          </Col>
        ) : (
          <Row css={{ display: "flex", flexDirection: "column" }}>
            {step != 3 && (
              <React.Fragment>
                <Text h2>Checkout</Text>
                {cart.map((product, index) => (
                  <Grid.Container key={index} gap={1}>
                    <Grid xs={4}>
                      <Card>
                        <Card.Body
                          css={{
                            p: 0,
                            position: "relative",
                            bottom: 0,
                            left: 0,
                            bg: "transparent",
                          }}
                        >
                          <Card.Image
                            src={product.image}
                            alt={product.title}
                            objectFit="cover"
                            width="100%"
                            height={130}
                          />
                        </Card.Body>
                        <Card.Footer css={{ p: "0px" }}>
                          <NextButton
                            auto
                            css={{
                              borderRadius: "0px 0px 6px 6px",
                              minWidth: "100%",
                              display: "flex",
                              justifyContent: "center",
                            }}
                            onPress={() => handleDelete(product)}
                          >
                            <DeleteForeverIcon />
                          </NextButton>
                        </Card.Footer>
                      </Card>
                    </Grid>
                    <Grid xs={8}>
                      <Row css={{ display: "flex", flexDirection: "column" }}>
                        <Text h3 css={{ mb: 0 }}>
                          {product.title}
                        </Text>
                        <Text>Cantitad: {product.quantity}</Text>
                        <Text>
                          SubTotal:{" "}
                          {currency.format(product.price * product.quantity)}
                        </Text>
                        <Row
                          gap={1}
                          css={{
                            p: 0,
                            mt: "8px",
                            width: "100%",
                            gap: "12px",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <NextButton
                            flat
                            auto
                            onPress={() => countQuantity(false, product)}
                          >
                            -
                          </NextButton>
                          <Text>{product.quantity}</Text>
                          <NextButton
                            flat
                            auto
                            onPress={() => countQuantity(true, product)}
                          >
                            +
                          </NextButton>
                        </Row>
                      </Row>
                    </Grid>
                  </Grid.Container>
                ))}
              </React.Fragment>
            )}
            <CheckoutStepper step={step} setStep={setStep} />
          </Row>
        )}
      </Row>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {cart.length > 0 ? (
              <Badge content={cart.length}>
                <LocalMallIcon />
              </Badge>
            ) : (
              <Badge content={cart.length}>
                <ShoppingCartIcon />
              </Badge>
            )}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
