import { useEffect } from "react";

function UseEffect() {
    
    useEffect(() => {
        const timer = setInterval(() => {
          console.log('tick');
        }, 1000);
      
        return () => {
          clearInterval(timer); // stop the timer when the component unmounts
          console.log('timer cleared');
        };
      }, []);
    return 
    (<>

    </>
    );
}
export default UseEffect;