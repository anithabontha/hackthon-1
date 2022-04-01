







// async function mul(){
//     try {
//     let data=await foo();
//     let res=await data.json();
//     console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }

// mul();

// function foo(){
// return fetch("https://www.anapioficeandfire.com/api/books");
// }

// api url
const api_url = 
      "https://www.anapioficeandfire.com/api/books";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>Name</th>
          <th>No of pages</th>
          <th>publisher</th>
          <th>ISBN</th>
          <th>author</th>
          
         </tr>`;
         
         for (let r of data) {
            tab += `<tr> 
        <td>${r.name} </td>
        <td>${r.numberOfPages} </td>
        <td>${r.publisher}</td> 
        <td>${r.isbn}</td>
        <td>${r.authors}</td> 
                
    </tr>`;
}
document.getElementById("books").innerHTML = tab;
}
