const apiurl = "/api";

const changeWatchStatus = async (data, route) => {
  const url = `${apiurl}/${route}`;
  console.log(url);
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

const deleteWatchStatus = async () => {
  await fetch(`${apiurl}/want`, {
    method: "DELETE",
  });
  return res.json();
};

const handleLogoutClick = async () => {
  const request = await fetch("/api/logout", {
    method: "DELETE",
  });
};

document.addEventListener("DOMContentLoaded", async (event) => {
  const logoutButton = document.getElementById("logout");
  if (logoutButton) {
    logoutButton.addEventListener("click", async (e) => {
      let data;
      await handleLogoutClick();

      logoutButton.hidden = true;
      const container = document.querySelector(".logout-message");
    //   container.innerHTML = "Logout Successful";
      window.location.href = "/"
    });
  }
//   const demoButton = document.getElementById("demo-button");
//   const email = document.getElementById("email");
//   const password = document.getElementById("password");
//   demoButton.addEventListener("click", (event) => {
//     event.preventDefault();
//     email.innerHTML = "john@doe.com";
//     password.innerHTML = "P@ssw0rd";
//   });

  //create div with html and await that and if the res.json comes back we create a div set the html to the res.json and appendchild to the body

  // const watchedButton = document.querySelector('.watchToggler')
  // const form = document.querySelector('.form-inline_watchList')

  // watchedButton.addEventListener('click', async (e) => {
  //     e.preventDefault()
  //     // console.log('below prevent default____________________-')
  //     if (watchedButton.value === "Watched") {
  //         try {
  //             // await changeWatchStatus('watched');
  //             watchedButton.setAttribute("value", 'Remove');
  //         } catch (e) {
  //             console.log(e)
  //         }
  //     } else if (watchedButton.value === "Want to Watch") {
  //         try {
  //             // const FD = new FormData(form)
  //             watchedButton.setAttribute("value", 'Watched');
  //             // await changeWatchStatus('want');
  //         } catch (e) {
  //             console.log(e)
  //         }
  //     } else if (watchedButton.value === "Remove") {
  //         try {
  //             // await deleteWatchStatus()
  //             watchedButton.setAttribute("value", 'Want to Watch');
  //         } catch (e) {
  //             console.log(e)
  //         }
  //     }
  // });
});
