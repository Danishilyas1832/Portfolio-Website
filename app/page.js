import Image from "next/image";
import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Projects from "./projects/page";
import About from "../components/About";
import ProjectCard from "../components/ProjectCard";




export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
   <Header/>
   <Banner/>
   <Footer/>
    </div>
  );
}
