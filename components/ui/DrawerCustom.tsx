import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { CartContext } from "../../context/cart/cartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Image from "next/image";
import { Card, Col, Grid, Row, Text } from "@nextui-org/react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { appApi } from "@/apis";
import { Box as BoxNext } from "./Box";
type Anchor = "top" | "left" | "bottom" | "right";
export type OrderResponseBody = {
  id: string;
  status:
    | "COMPLETED"
    | "SAVED"
    | "APPROVED"
    | "VOIDED"
    | "PAYER_ACTION_REQUIRED";
};

export default function DrawerCustom() {
  const { cart } = React.useContext(CartContext);
  const [isPaying, setIsPaying] = React.useState(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  console.log(cart);

  const onOrderCompleted = async (details: OrderResponseBody) => {
    if (details.status !== "COMPLETED") {
      return alert("No hay pago en Paypal");
    }

    setIsPaying(true);

    try {
      /* const { data } = await appApi.post(`/orders/pay`, {
        transactionId: details.id,
        orderId: order._id
      }); */
    } catch (error) {
      setIsPaying(false);
      console.log(error);
      alert("Error");
    }
  };

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

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Row css={{ m: "24px" }}>
        {cart.length === 0 ? (
          <Text h2>Carrito Vacio</Text>
        ) : (
          <Row css={{ display: "flex", flexDirection: "column" }}>
            <Text h2>Checkout</Text>
            {cart.map((product, index) => (
              <Grid.Container key={index} gap={1}>
                <Grid xs={4}>
                  <Card>
                    <Card.Body
                      css={{ p: 0, position: "relative", bottom: 0, left: 0 }}
                    >
                      <Card.Image
                        src={product.image}
                        alt={product.title}
                        objectFit="cover"
                        width="100%"
                        height={100}
                      />
                    </Card.Body>
                  </Card>
                </Grid>
                <Grid xs={8}>
                  <Row css={{ display: "flex", flexDirection: "column" }}>
                    <Text h3 css={{ mb: 0 }}>
                      {product.title}
                    </Text>
                    <Text>Cantitad: {product.quantity}</Text>
                    <Text>SubTotal: {product.price * product.quantity}</Text>
                  </Row>
                </Grid>
              </Grid.Container>
            ))}
            <Row
              css={{
                borderTop: "1px solid $accents4",
                borderBottom: "1px solid $accents4",
                p: "10px 0",
                mb: "24px",
              }}
            >
              <Text h3>
                Total{" "}
                {cart
                  .flatMap((product) => product.price * product.quantity)
                  .reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    0
                  )}
              </Text>
            </Row>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: `${cart
                          .flatMap(
                            (product) => product.price * product.quantity
                          )
                          .reduce(
                            (accumulator, currentValue) =>
                              accumulator + currentValue,
                            0
                          )}`,
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order!.capture().then((details: any) => {
                  onOrderCompleted(details);
                  // console.log({ details  })
                  // const name = details.payer.name.given_name;
                  // alert(`Transaction completed by ${name}`);
                });
              }}
            />
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
            {cart.length > 0 ? <LocalMallIcon /> : <ShoppingCartIcon />}
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
