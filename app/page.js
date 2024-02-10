import CardComponent from "@/components/CardComponent";
import ChartComponent from "@/components/ChartComponent";
import Page from "@/components/Page";
import SignIn from "@/components/SignIn";
import TableComponent from "@/components/TableComponent";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Page />
      <ChartComponent />
      <CardComponent />
      <SignIn />
      <TableComponent />
    </main>
  );
}
