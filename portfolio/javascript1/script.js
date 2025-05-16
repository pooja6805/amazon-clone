const URL="https://meowfacts.herokuapp.com/?count=3";
const factpara=document.querySelector("#fact");
const btn=document.querySelector("#btn");

const getFacts= async()=>{
   console.log("getting data........");
    let response= await fetch(URL);
     console.log(response);
     let data= await response.json();
     factpara.innerText= data[0].text();
};
btn.addEventListener("click",getFacts);
// async function fetchTextData() {
//   try {
//     const response = await fetch('https://meowfacts.herokuapp.com/?count=3'); // Replace with your URL
//     const text = await response.text();  // Get plain text from response
//     console.log(text);  // Use the text data
//   } catch (error) {
//     console.error('Error:', error);  // Handle errors
//   }
// }

// fetchTextData();



