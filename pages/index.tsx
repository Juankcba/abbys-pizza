import Head from "next/head";
import Image from "next/image";
import { Container, Text } from "@nextui-org/react";
import Layout from "../components/layouts/Layout";
import ListProducts from "../components/products/ListProducts";

export default function Home() {
  return (
    <Layout>
      <Text h1>Bienvenidos al Pocito Dulce</Text>
      <ListProducts />
    </Layout>
  );
}
