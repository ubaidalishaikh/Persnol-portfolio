import Link from "next/link";

export default function Header() {
    return (
      <div className="flex justify-between px-4 bg-black-300  h-10 pt-2" >
          <div className=" text-white text-3xl p-6 font-bold  hover:text-zinc-300 cursor-pointer">
              Ubaid
          </div>
          
          <div  className="flex gap-12 text-3xl p-4 justify-between">
            
          <Link className="cursor-pointer hover:text-zinc-300  " href="/">Home</Link>
          <Link className="cursor-pointer hover:text-zinc-300" href="/skills">Skills</Link>
          <Link className="cursor-pointer hover:text-zinc-300" href="/about">About</Link>
          <Link className="cursor-pointer hover:text-zinc-300" href="/contact-us">Contact US</Link>

         
          </div>
          
      </div>
    );
  }
  
  
  