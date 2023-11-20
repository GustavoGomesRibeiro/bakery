"use client";
import { Header, Carousel } from "@/app/Components/index";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="flex min-h-screen flex-col  justify-between">
        <section>
          <Carousel />
        </section>
      </main>
    </>
  );
}
