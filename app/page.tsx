"use client";
import { useRef } from "react";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Skills } from "./_components/Skills";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";

export default function Home() {
  const myRef = useRef(null);

  return (
    <SimpleBar style={{ maxHeight: '100vh' }}>
      <main>
        <Header />

        <Spacing size="md" />

        <Hero />

        <Spacing size="md" />

        <Status />

        <Spacing size="md" />

        <Skills />

        <Spacing size="md" />

        <Contact />

        <Spacing size="md" />

        <Footer />
      </main>
    </SimpleBar>
  );
}
