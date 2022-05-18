// select dom elems
let buttonUI = document.querySelector('.btn');
let insertUI = document.querySelector('.row');
let number=1;

// adding event listeners
buttonUI.addEventListener('click',(e)=>{
    //  Instantiate new instance of XMLHTTPREQUEST object
    const xhr = new XMLHttpRequest();

    //  GET request to that api for chuck norris joke       
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    //  Upon the object being loaded we check status and response type is successful
    xhr.onload = function(){
        if (this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            let output = '';
           
            // Upon success we append to var 
            if(response.type ==='success'){
                
                response.value.forEach((joke)=>{
                    output +=
                    `<div class="col" id="target">
                        <h2>Joke #${number}</h2>
                        <p>${joke.joke}</p>
                    </div>`;
                });
                number+=1;
            }else{
                output='<p>Error</p>';
            }
            insertUI.innerHTML=output;
        }
    }

    // send HTTP request
    xhr.send();
    e.preventDefault()
})









































/* //  dom elem selection
let buttonUI = document.querySelector('.button')
let error = document.querySelector('.error');

//  add event listener
buttonUI.addEventListener('click', onClick)

//  function event listeners
function onClick(e){
    const input = document.querySelector('input[type="number"]').value;

    if (Number.isNaN(input.parseInt())===false){ 
        setTimeout(displayError,1000);
    }else{

    }
    e.preventDefault();
}

//  functions
function displayError(){
    error.innerHTML=
    "<p>Please enter a number</p>";
} */