import Navbar from "@/components/ui/global/navbar";
import Image from "next/image";

export default function Home() {
  return <main>
    <Navbar/>
    <section className="h-screen w-full bg-neutral-950 rounded-md !overflow-visilbe realtive flex flex-col items-center antialiased">
      <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%at50%_10%,#000_35%,#233_100%)]">

      </div>
    </section>
  </main>
  }