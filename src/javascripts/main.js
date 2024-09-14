//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

// request data from the API using fetch

let jokeHtml = ``

fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
  .then(function (res) {
    if (!res.ok) {
      throw Error("Reuqest Failed")
    } else {
      return res.json()
    }
  })
  .then(function (data) {
    console.log(data)
    // if some value are undefine change their value.
    if (data.setup == undefined) {
      jokeHtml = `

         <div class="card">
  <div class="card-header">
  Category : ${data.category}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p> ${data.joke}</p>
      <footer class="blockquote-footer"> Type: ${data.type}</footer>
    </blockquote>
  </div>
</div>
         
         `
    } else {
      jokeHtml = `
                        
                        <div class="card">
  <div class="card-header">
  Category: ${data.category}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>${data.setup}</p>
      <footer class="blockquote-footer"> ${data.delivery}</footer>
    </blockquote>
  </div>
</div>

                        
                        `
    }

    document.querySelector(".display").innerHTML = jokeHtml
  })
  .catch(function (err) {
    console.log(err)
  })

document.querySelector(".generate").addEventListener("click", function () {
  location.reload()
})

// allow people to save jokes and like them and leave comments
