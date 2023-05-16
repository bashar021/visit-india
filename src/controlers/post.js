/**
 * This is an asynchronous function that sends a POST request with JSON data to a specified URL and
 * returns the response data as a JSON object.
 * @param url - The URL of the API endpoint where the data will be posted.
 * @param postdata - The data that needs to be sent in the POST request. It should be in JSON format.
 * @returns a Promise that resolves to the response data from the specified URL after making a POST
 * request with the provided data. If the response is not successful or null, it returns an object with
 * a success property set to false and a message property with an error message.
 */
async function Postdata(url, postdata) {
    let data = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':'http://localhost:3000/',
            // jwt token is used if we are using a token 
            // jwt:token
        },
        body: JSON.stringify(postdata)
       
    })
    if(data != null){
        data = await data.json();
    }else{
        data = {success:false,message:'please try again later'}
    }
    

    return data

}
// module.exports = Postdata;
export default Postdata