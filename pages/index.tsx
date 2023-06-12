import Head from "next/head";
import Image from "next/image";
import { Container, Text } from "@nextui-org/react";
import Layout from "../components/layouts/Layout";
import ListProducts from "../components/products/ListProducts";
import ListAperitivos from "../components/products/ListApertivos";
import ListBurger from "../components/products/ListBurger";
import ListEnsaladas from "../components/products/ListEnsaladas";
import ListSandwiches from "../components/products/ListSandwiches";
import ListLasanas from "../components/products/ListLasanas";
import ListCalzones from "../components/products/ListCalzones";
import ListPasta from "../components/products/ListPasta";
import ListLicores from "../components/products/ListLicores";

export default function Home() {
  return (
    <Layout>
      <Text
        h1
        css={{
          w: "100%",
          margin: "24px auto",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Bienvenidos a Abby's Pizza
      </Text>
      <ListAperitivos />
      <ListBurger />
      <ListEnsaladas />
      <ListSandwiches />
      <ListLasanas />
      <ListCalzones />
      <ListPasta />
      <ListLicores />
    </Layout>
  );
}
