// select dom elems
let buttonUI = document.querySelector('.btn');
let insertUI = document.querySelector('.row');
let btnClearUI = document.querySelector('.btn-2');
let btnScrollUI = document.querySelector('.scroll-up');
let rootUI= document.documentElement;

let number=1;
// adding event listeners
buttonUI.addEventListener('click',(e)=>{
    //  Instantiate new instance of XMLHTTPREQUEST obj
    const xhr = new XMLHttpRequest();

    //  GET request to that api for chuck norris joke       
    xhr.open('GET', `https://api.chucknorris.io/jokes/random`, true);

    //  Upon the obj being loaded we check status and response is successful
    xhr.onload = function(){
        if (this.status === 200){
            
            //parsing json to obj
            let response = JSON.parse(this.responseText);
            console.log(response.type)

            // output div
            let output = document.createElement('div');
            output.classList.add('col')
            output.id='target';

            // output h2
            let h2 = document.createElement('h2');
            h2.innerText = `Joke #${number}`;

            // Upon success we append to created variable 
            if(response){
                let textnode = document.createTextNode(`${response.value}`);
                output.appendChild(h2);
                output.appendChild(textnode);
                insertUI.appendChild(output).scrollIntoView({behavior: "smooth", block: "center"});
               
                // make the button appear below once two jokes are clicked
                if(number>=2){

                    buttonUI.classList.add('btn-move');
                    btnClearUI.classList.add('btn-move-2');
                }
                number++;
                // unhide elements
                btnClearUI.removeAttribute('id');
                btnScrollUI.removeAttribute('id');
            }
        }
    }
    // send HTTP request
    xhr.send();
    e.preventDefault();
})

if(number===2){
    buttonUI.classList.add('animate-this');
    btnClearUI.classList.add('animate-this');
    //buttonUI.classList.remove('animate-this');
    //btnClearUI.classList.remove('animate-this');
}



btnClearUI.addEventListener('click', (e)=>{
    document.querySelectorAll('#target').forEach((elem)=> elem.remove());
    buttonUI.id = '';    
    buttonUI.classList.remove('btn-move');
    btnClearUI.classList.remove('btn-move-2');

    // scrolling to top after jokes elems removed
    rootUI.scrollTo({top: 0,behavior: "smooth"})
    
    number = 1;
})

function revert(){

}