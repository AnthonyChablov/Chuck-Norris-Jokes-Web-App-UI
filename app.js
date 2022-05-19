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
            // output div
            let output = document.createElement('div');
            output.classList.add('col')
            output.id='target';


            // output h2
            let h2 = document.createElement('h2');
            h2.innerText = `Joke #${number}`;


            // Upon success we append to var 
            if(response.type ==='success'){
                let textnode = document.createTextNode(`${response.value[0].joke}`);
                output.appendChild(h2);
                output.appendChild(textnode);
                insertUI.appendChild(output).scrollIntoView({behavior: "smooth", block: "center"});
                number++;
            }
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