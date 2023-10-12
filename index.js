document.addEventListener("DOMContentLoaded", ()=>{
    fetch("https://official-joke-api.appspot.com/jokes/random")
    .then(response => response.json())
    .then(data =>{
        let jokesDiv=document.getElementById("jokes")
        jokesDiv.innerHTML=`
        <h2>${data.setup}<h2>
        <h2>${data.punchline}<h2>`

        let likebutton = document.getElementById("like-button");
        let likecountElement = document.getElementById("like-count");
        let likecount =0;
        likebutton.addEventListener("click", ()=>{
            likecount++;
            likecountElement.innerText = likecount;
        });

        let button =document.getElementById("btn")
        button.addEventListener("click",()=>{
            location.reload(false)
        })
        let form = document.getElementById("form")
        form.addEventListener("submit",(event)=>{
            event.preventDefault()
            let inputVal = event.target.input.value;
            let newJoke = {
                setup: inputVal,
                punchline: "Your custom punchline here"
            };
            let p = document.createElement("p")
            p.textContent = inputVal
            jokesDiv.appendChild(p);
            event.target.input.value="";
        })
        let saveButton = document.getElementById("save-button");
        saveButton.addEventListener("click", () => {
            let inputVal = form.input.value;
            let newJoke = {
                setup: inputVal,
                punchline: "Your custom punchline here"
            };

          
    })
})
})


  
