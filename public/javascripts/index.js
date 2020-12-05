const getWantList = async () => {
    const res = await fetch('http://localhost:8080/users/api/want');
    const { status } = await res.json();

    console.log(status);
}


const changeStatus = async() => {

    const res = await fetch('http://localhost:8080/users/api/want', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify()
    })


}



document.addEventListener("DOMContentLoaded", async (event)=>{
    console.log("hello from javascript!")
    // TODO three buttons: watch want to watch remove with ajax
    try {
        await getWantList();
    } catch(err) {
        console.error(err)
    }



/*

<button class="want-to-read">Want to Read</button>
<script>
  document.querySelector(".want-to-read").addEventListener("click", function() {
    fetch(`https://api.goodreads.com/books/${BOOK_ID}/update-status`, {
      method: "PATCH", // using PATCH since we'll just be modifying the book's status
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        status: "Want to Read"
      })
    })
      .then(function(res) {
        if (!res.ok) {
          throw Error(res.statusText); // handle any potential server errors
        }
        return res.json(); // extract JSON from the response
      })
      .then(function(data) {
        document.querySelector(".want-to-read").innerHTML = "✓ Want To Read";
      })
      .catch(function(error) {
        const errorMessage = document.createElement("p");
      }
        document.querySelector("body").appendChild(errorMessage);
      });
  });
*/












    // const watchStatusButton = document.querySelector(".watchToggler");
    // watchStatusButton.addEventListener("click", async (e) => {
    //     // api returning json vs html
    //     const res = await fetch(`http://localhost:8080/users/want`, {
    //         method: 'GET',
    //         // headers: {
    //         //     'Content-Type': 'application/json'
    //         // },
    //         // body: JSON.stringify()
            
    //     })

    //     console.log(res);
    //     watchStatusButton.innerHTML = 'HELLO'
    
    // })
    
    
    
    
    
    
    
    
    
    // const wantToWatchButton = document.getElementById('want-to-watch')

    // watchedButton.addEventListener('click', (e) => {

    // })

    // //when button clicked change the watchStatus from want to watched
    // //put - 


    // const watchedButton = document.getElementById('watched')
    // watchedButton.addEventListener('click', (e) => {

    // })

























    
    
})