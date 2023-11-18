import { useEffect,  } from "react";
import { useRouter } from "next/router";


const CheckTokenStorage = ()=>{
    const router = useRouter()
   
    useEffect(() => {
      const token = localStorage.getItem("token")
      console.log(token)
     if (token == null) {
       router.replace("/auth")
     }
    }, [])
    
}

export default CheckTokenStorage