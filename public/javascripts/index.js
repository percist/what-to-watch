const apiurl = "http://localhost:8080/api";

const changeWatchStatus = async (data, route) => {
    const url = `${apiurl}/${route}`
    console.log(url)
    const res = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(data)
    });
    return await res.json();
}

const deleteWatchStatus = async () => {
    await fetch(`${apiurl}/want`, {
        method: 'DELETE'
    })
    return res.json();
}


document.addEventListener("DOMContentLoaded", async (event) => {

    const watchedButton = document.querySelector('.watchToggler')
    const form = document.querySelector('.form-inline_watchList')

    watchedButton.addEventListener('click', async (e) => {
        e.preventDefault()
        // console.log('below prevent default____________________-')
        if (watchedButton.innerHTML === "Watched") {
            try {
                await changeWatchStatus('watched');
                watchedButton.innerHTML = "Remove";
            } catch (e) {
                console.log(e)
            }
        } else if (watchedButton.value === "Want to Watch") {
            try {
                const FD = new FormData(form)
                watchedButton.setAttribute("value", 'Watched');
                await changeWatchStatus(FD, 'want');
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
