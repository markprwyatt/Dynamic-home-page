// GRAB DOM ELEMENTS

const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");

// Show time function

const showTime = () => {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  // AM or PM

  const amPm = hour => (12 ? "PM" : "AM");

  // 24 hour format

  hour = hour % 12 || 12;

  // Output time

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;

  setTimeout(showTime, 1000);
};

// Add Zero

const addZero = n => {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
};

//Set Background and greeting

setBackgroundGreeting = () => {
  let today = new Date();
  const hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = "url('./img/morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
  } else {
    document.body.style.backgroundImage = "url('./img/evening.jpg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
};

const getName = () => {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
};

const setName = e => {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keycode === 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
};

const getFocus = () => {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "Enter goal for today";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
};

const setFocus = e => {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keycode === 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
};

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

showTime();
setBackgroundGreeting();
getName();
getFocus();
