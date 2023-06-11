import {
  Container,
  Row,
  Text,
  Button,
  Input,
  Loading,
} from "@nextui-org/react";
import React from "react";
import { currency } from "@/utils";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { CartContext } from "@/context";
import { appApi } from "@/apis";
import Swal from "sweetalert2";
export type OrderResponseBody = {
  id: string;
  status:
    | "COMPLETED"
    | "SAVED"
    | "APPROVED"
    | "VOIDED"
    | "PAYER_ACTION_REQUIRED";
};

const CheckoutStepper = () => {
  const [isPaying, setIsPaying] = React.useState(false);
  const [orderId, setOrderId] = React.useState<any>(null);
  const [step, setStep] = React.useState(1);
  const { cart, createOrder, emptyProductsOfCart } =
    React.useContext(CartContext);
  const [name, setName] = React.useState("");
  const [isPosting, setIsPosting] = React.useState(false);

  const [errorMessage, setErrorMessage] = React.useState("");
  const handleCreateOrder = async () => {
    setIsPosting(true);
    const { hasError, message } = await createOrder(name);

    if (hasError) {
      setIsPosting(false);
      setErrorMessage(message);
      return;
    }
    console.log(message);
    setOrderId(message);
    setStep(2);
  };

  const onOrderCompleted = async (details: OrderResponseBody) => {
    if (details.status !== "COMPLETED") {
      return alert("No hay pago en Paypal");
    }

    setIsPaying(true);
    console.log("paying", details.id, orderId);
    try {
      await appApi
        .post(`/orders/pay`, {
          transactionId: details.id,
          orderId: orderId,
        })
        .then((r) => {
          if (r.status == 200) {
            setStep(3);
            Swal.fire("Gracias por su Compra", "", "success");
            emptyProductsOfCart();
          }
        });
    } catch (error) {
      setIsPaying(false);
      console.log(error);
      alert("Error");
    }
  };
  return (
    <Container css={{ p: 0, w: "100%", margin: "0px auto" }}>
      <Row
        css={{
          borderTop: "1px solid $accents4",
          borderBottom: "1px solid $accents4",
          p: "10px 0",
          mb: "24px",
          w: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Text h3 css={{ mb: "0" }}>
          Sub Total
        </Text>
        <Text h3>
          {currency.format(
            cart
              .flatMap((product) => product.price * product.quantity)
              .reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              )
          )}
        </Text>
        <Text h4 css={{ mb: "0" }}>
          Taxes
        </Text>
        <Text h4>
          {currency.format(
            cart
              .flatMap((product) => product.price * product.quantity)
              .reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              ) * 0.21
          )}
        </Text>
        <Text h2 css={{ mb: "0" }}>
          Total
        </Text>
        <Text h3>
          {currency.format(
            cart
              .flatMap((product) => product.price * product.quantity)
              .reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              ) * 1.21
          )}
        </Text>
      </Row>
      {step == 1 && (
        <Row css={{ flexDirection: "column", gap: "8px", maxW: "200px" }}>
          <Input
            name="name"
            value={name}
            fullWidth
            placeholder="Nombre"
            label="Nombre"
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            css={{ w: "100%" }}
            type="button"
            disabled={isPosting}
            onClick={() => handleCreateOrder()}
          >
            Confirmar Orden {isPosting && <Loading />}
          </Button>
        </Row>
      )}
      {step == 2 && (
        <Row css={{ flexDirection: "column" }}>
          <Button
            color="success"
            css={{
              mb: "12px",
              w: "100%",
              maxW: "200px",
              borderRadius: "4px",
            }}
          >
            $ Pagar en Caja $
          </Button>
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: `${
                        cart
                          .flatMap(
                            (product) => product.price * product.quantity
                          )
                          .reduce(
                            (accumulator, currentValue) =>
                              accumulator + currentValue,
                            0
                          ) * 1.21
                      }`,
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              console.log("holaaa", actions, data);
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
      {step == 3 && (
        <Row css={{ flexDirection: "column" }}>
          <Text h2>Gracias por su Compra</Text>
        </Row>
      )}
    </Container>
  );
};

export default CheckoutStepper;
