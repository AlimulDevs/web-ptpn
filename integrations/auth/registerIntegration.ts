import { json } from "stream/consumers"
import {RegisterAdminRequest} from "../../types"

async function RegisterIntegration(props:RegisterAdminRequest) {

    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL +"admin/register"

        const fetchData = await fetch(apiUrl, {
            headers : { "Content-Type": "application/json",},
            method : "POST",
            body : JSON.stringify(
                props
            )
        })
    
    const result = await fetchData.json()
    
    return await result
    } catch (error) {
        return error
    }
  
}

export default RegisterIntegration