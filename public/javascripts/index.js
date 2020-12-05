window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")
    // TODO three buttons: watch want to watch remove with ajax
    
    
    const watchStatusButton = document.querySelector(".watchToggler");
    watchStatusButton.addEventListener("click", async (e) => {
        // api returning json vs html
        
        
        const res = await fetch(`https://localhost8080/api`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify()
            
        })
       
        // console.log(JSON.stringify(res))
    
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