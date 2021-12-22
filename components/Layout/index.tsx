import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import styles from "@styles/Layout.module.css";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}