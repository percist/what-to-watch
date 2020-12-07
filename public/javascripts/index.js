const apiurl = "http://localhost:8080/api";

const changeWatchStatus = async data => {
    const url = `${apiurl}/${data}`
    console.log(url)
    const res = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(data)
    });
    return res.json();
}

const deleteWatchStatus = async () => {
    await fetch(`${apiurl}/want`, {
        method: 'DELETE'
    })
    return res.json();
}


document.addEventListener("DOMContentLoaded", async (event) => {

    const watchedButton = document.querySelector('.watchToggler')

    watchedButton.addEventListener('click', async (e) => {
        e.preventDefault()
        if (watchedButton.innerHTML === "Watched") {
            try {
                await changeWatchStatus('watched');
                watchedButton.innerHTML = "Remove";
            } catch (e) {
                console.log(e)
            }
        } else if (watchedButton.innerHTML === "Want to Watch") {
            try {
                await changeWatchStatus('want');
                watchedButton.innerHTML = "Watched";
            } catch (e) {
                console.log(e)
            }
        } else if (watchedButton.innerHTML === "Remove") {
            try {
                await deleteWatchStatus()
                watchedButton.innerHTML = "Want to Watch";
            } catch (e) {
                console.log(e)
            }


        }
        });

    })
