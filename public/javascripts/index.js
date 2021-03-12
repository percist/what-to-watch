const apiurl = "/api";

const changeWatchStatus = async (data, route) => {
  const url = `${apiurl}/${route}`;
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

});
