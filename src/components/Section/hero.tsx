import Image from "next/link";
import { Button } from "../ui/button";





export default function Hero() {
  return (
    // Section 01
    <div className="bg-white-600 h-screen flex items-center p-8 font-sans">
      <div className="flex flex-col justify-center w-1/2 h-24 gap-4 ">
      <h1 className="font-bold text-[44px] first-letter:text-yellow-300 ">Hello. I,m Ubaid</h1>
      <p className="font-normal text-[23px]">"Hi, I’m Ubaid – a web developer with a passion for crafting beautiful and efficient websites. Skilled in HTML, CSS, NextJs and TypeScript, I bring creative ideas to life through code. Explore my work, and let’s build something amazing together!</p>
      {/* <button className="hover:bg-black hover:text-white text-lg rounded-lg w-[140px] h-[90px] p-[10px] bg-white text-black font-serif">Contact US</button> */}
      <Button variant="secondary" size="default">Contact Us</Button>
      </div>
      <div className="w-1/2 h-70 p-24 mt-14 hover:translate-x-12 hover:transition-all"> <img src="hero.png" alt="Main Page" className="w-[750px] h-auto rounded-full shadow-lg" /></div>
    </div>
    
  );
}
