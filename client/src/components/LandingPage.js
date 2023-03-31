import { useEffect } from "react";

function LandingPage({setPath}){
    useEffect(() => {
        setPath("/landingpage")
      }, [])
    return(
        <div>
            <div className=" absolute font-bold text-[2em] text-center right-0 left-0">
            <p className="read" >Reading is a discount ticket to everywhere</p>
           </div>
            < img  className="w-full" src="https://neilpatel.com/wp-content/uploads/2016/04/laptop-and-desk.jpg" alt='sharon'/>
        </div>
    )
    
}

export default LandingPage;