"use client";

import Head from "next/head";
import * as React from "react";
import "@/lib/env";

import ArrowLink from "@/components/links/ArrowLink";
import ButtonLink from "@/components/links/ButtonLink";
import UnderlineLink from "@/components/links/UnderlineLink";
import UnstyledLink from "@/components/links/UnstyledLink";

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from "~/svg/Logo.svg";

export default function HomePage() {
  return (
    <main>
      <section className="bg-white">
        <div className="layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center">
          <Logo className="w-16" />
          <h1 className="mt-4">Onyxium - Find freelancers.</h1>

          <p className="mt-2 text-sm text-gray-700">
            <ArrowLink href="https://github.com/mahfuz0001">See the repository</ArrowLink>
          </p>

          <ButtonLink className="mt-6" href="/components" variant="light">
            See all components
          </ButtonLink>

          <UnstyledLink href="https://vercel.com/new/" className="mt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img width="92" height="32" src="https://vercel.com/button" alt="Deploy with Vercel" />
          </UnstyledLink>

          <footer className="absolute bottom-2 text-gray-700">
            © {new Date().getFullYear()} By{" "}
            <UnderlineLink href="https://mahfuz-portfolio.vercel.app">Fuzious</UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}
