import LetterRequest from "../../types/letter/letterRequest";

export default async function CreateLetterIntegration(request : LetterRequest){
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL +"letter/create"

        const fetchData = await fetch(apiUrl, {
            headers : { "Content-Type": "application/json",},
            method : "POST",
            body : JSON.stringify(
                request
            )
        })
    
    const result = await fetchData.json()
    
    return await result
    } catch (error) {
        return error
    }
  
}