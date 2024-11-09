import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="bg-white-600 h-screen flex items-center p-8 font-sans">
      <div className="w-1/2 h-70 p-24 mt-14  ">
        {" "}
        <img
          src="hero.png"
          alt="Main Page"
          className="w-[750px] h-auto rounded-full shadow-lg"
        />
      </div>

      <div className="flex flex-col justify-center w-1/2 h-24 gap-4 ">
        <h1 className="font-bold text-[44px] first-letter:text-yellow-300">About Us</h1>
        <p className="font-normal text-[32px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          explicabo repudiandae temporibus modi nihil, nisi porro laborum
          quisquam nostrum ad!
        </p>
        <br />



        <div className="flex gap-3">
        <Button variant="secondary" size="default">
          View CV
        </Button>

        <Button variant="secondary" size="default">
          Hire me
        </Button>
        </div>
        
      </div>
    </div>
  );
}
