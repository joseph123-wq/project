document.addEventListener("DOMContentLoaded", ()=>{
    fetch("https://official-joke-api.appspot.com/jokes/random")
    .then(response => response.json())
    .then(data =>{
        let jokesDiv=document.getElementById("jokes")
        jokesDiv.innerHTML=`
        <h2>${data.setup}<h2>
        <h2>${data.punchline}<h2>`

        document.addEventListener("DOMContentLoaded", () => {
            // Fetch the initial like count from the local server
            fetch("http://localhost:3000/likes")
              .then((response) => response.json())
              .then((data) => {
                let likecount = data.likes;
                let likecountElement = document.getElementById("like-count");
                likecountElement.innerText = likecount;
              });
          
            let likebutton = document.getElementById("like-button");
            likebutton.addEventListener("click", () => {
              // Increment the like count and update the local server
              fetch("http://localhost:3000/likes", {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ likes: 1 }),
              })
                .then((response) => response.json())
                .then((data) => {
                  let likecountElement = document.getElementById("like-count");
                  likecountElement.innerText = data.likes;
                });
            });
          
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
    })
})


  
