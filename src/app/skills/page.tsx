import { Button } from "@/components/ui/button";

  

export default function Skills() {
    return (
        <div className="card-container flex flex-wrap justify-center items-center mt-[100px]">

        <div className="card w-[250px]  rounded-lg m-[20px] bg-transparent backdrop-blur-md shadow-slate-600 "><img className="pb-2 mb-5 h-[250px] w-[100%] rounded-lg transition-all" src="html.jpg" alt="html"/>
          <div className="card-content p-4">
            <h3 className="text-[28px] mb-2">HTML</h3>
            <p className="text-[15px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate vitae at est expedita cumque ipsum eligendi, in doloribus quo quidem</p>
             {/* <a href="" className="btn">Read more</a>  */}
             <br />
             <Button variant="destructive">Read more</Button>
          </div>        
        </div>


        <div className="card w-[250px] rounded-lg m-[20px] bg-transparent backdrop-blur-md shadow-slate-600"><img className="w-[100%] rounded-lg transition-all h-auto" src="css.jpg" alt="css"/>
            <div className="card-content p-4">
              <h3 className="text-[28px] mb-2">CSS</h3>
              <p className="[15px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate vitae at est expedita cumque ipsum eligendi, in doloribus quo quidem</p>
              {/* <a href="" className="btn">Read more</a> */}
              <br />
              <Button variant="destructive">Read more</Button>
            </div>        
          </div>


          <div className="card w-[250px] rounded-lg m-[20px] bg-transparent backdrop-blur-md shadow-slate-600"><img className="w-[100%] rounded-lg transition-all h-auto" src="js.jpg" alt="js"/>
            <div className="card-content p-4 ">
              <h3 className="text-[28px] mb-2">JAVASCRIPT</h3>
              <p className="[15px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate vitae at est expedita cumque ipsum eligendi, in doloribus quo quidem</p>
              {/* <a href="" className="btn">Read more</a> */}
              <br />
              <Button variant="destructive">Read more</Button>
              
              
            </div>        
          </div>
    </div>
    );
  }