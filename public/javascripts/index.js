window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")
    // TODO three buttons: watch want to watch remove with ajax
    
    
    const watchStatusButton = document.querySelector("watchToggler");
    watchStatusButton.addEventListener("click", async (e) => {
        // api returning json vs html
    
        console.log('CLIK')
    
        const res = await fetch(`http://localhost8080/users/want`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  })
            
        })
    
        console.log(res);
    
    })
    
    
    
    
    
    
    
    
    
    // const wantToWatchButton = document.getElementById('want-to-watch')

    // watchedButton.addEventListener('click', (e) => {

    // })

    // //when button clicked change the watchStatus from want to watched
    // //put - 


    // const watchedButton = document.getElementById('watched')
    // watchedButton.addEventListener('click', (e) => {

    // })

























    
    
})