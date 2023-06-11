import type { AppProps } from "next/app";
import { NextUIProvider, CssBaseline } from "@nextui-org/react";
import { darkTheme, materialTheme } from "../themes";

import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { UiProvider } from "@/context/ui";
import { CartProvider } from "@/context";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // 2. Use at the root of your app
    <PayPalScriptProvider
      options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "" }}
    >
      <CartProvider>
        <UiProvider>
          <ThemeProvider theme={materialTheme}>
            <NextUIProvider theme={darkTheme}>
              <CssBaseline />
              <Component {...pageProps} />
              <ToastContainer />
            </NextUIProvider>
          </ThemeProvider>
        </UiProvider>
      </CartProvider>
    </PayPalScriptProvider>
  );
}
