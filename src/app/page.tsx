"use client";

import * as React from "react";
import "@/lib/env";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Head from "next/head";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  return (
    <>
      <main className="page-wrapper">
        Nothing here go to <a href="/chat">Chat</a>
        {/* <Navbar />

        <div className="main-wrapper">
          <Hero />
          <Testimonials />
          <Newsletter />
          <Footer />
        </div> */}
      </main>
    </>
  );
}
