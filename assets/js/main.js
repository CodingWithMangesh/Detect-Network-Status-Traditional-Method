/* ==================== Detecting Network Status ==================== */
const wrapper = document.querySelector(".wrapper");
const toast = document.querySelector(".toast");
const networkIcon = document.querySelector(".network__icon");
const title = document.querySelector("span");
const description = document.querySelector("p");

const messageOnline = () => {
  toast.classList.remove("offline");
  title.innerText = "You're online now";
  description.innerText = "Hurray! Internet is connected.";
  networkIcon.innerHTML = '<i class="ri-wifi-line"></i>';
};

// hide toast on close icon
const closeIcon = () => {
  wrapper.classList.add("hide__toast");
};

const messageOffline = () => {
  wrapper.classList.remove("hide");
  toast.classList.add("offline");
  title.innerText = "You're offline now";
  description.innerText = "Oops! Internet is disconnected.";
  networkIcon.innerHTML = '<i class="ri-wifi-off-line"></i>';
};

if (window.navigator.onLine) {
  messageOnline();
} else {
  messageOffline();
}

window.addEventListener("online", messageOnline);
window.addEventListener("offline", messageOffline);
