export default async function GetLetterIntegration (){
    const apiUrl = process.env.NEXT_PUBLIC_API_URL + "letter";
    const fetchData = await fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });
  
    const data = await fetchData.json();

    return data
}