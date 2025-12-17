//time/clock

function startTime()
{
    const today= new Date()
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d=today.getDate();
    let mon=today.getMonth();
    let y=today.getFullYear();
    let w=today.getDay();
    let weekday;
    m=checkTime(m);
    s=checkTime(s);

    switch(w)
    {
        case(1):
        {weekday="Monday"};
        break;

        case(2):
        {weekday="Tuesday"};
        break;

        case(3):
        {weekday="Wednesday"};
        break;

        case(4):
        {weekday="Thursday"};
        break;

        case(5):
        {weekday="Friday"};
        break;

        case(6):
        {weekday="Saturday"};
        break;

        case(7):
        {weekday="Sunday"};
        break;
    }
    document.getElementById('txt').innerHTML= weekday + " "+ d + "/" + mon + "/" + y + " " + h +":" + m + ":" + s;
    setTimeout(startTime,1000);
}

function checkTime(i){
    if(i<10){i="0"+i}
    return i;
}

//theme change
function applyTheme(theme) {
    const element = document.body;
    const searchicon = document.querySelector(".search-icon");
    const mic = document.querySelector(".mic");
    const icon = document.querySelector(".app-icon");

    if (theme === "dark") {
        element.classList.add("dark-mode");
        searchicon.src = "./images/white-search.png";
        mic.src = "./images/whitemic.png";
        icon.src = "./images/whitedots.png";
    }
    else
    {
        element.classList.remove("dark-mode");
        searchicon.src = "./images/search.png";
        mic.src = "./images/mic.png";
        icon.src = "./images/dots.png";
    }
}

function themechange() {
    const isDark = document.body.classList.toggle("dark-mode");
    const newTheme = isDark ? "dark" : "light";

    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
});

//profile picture change

function pfpchange(){
    var pfptoggle = document.body;
    pfptoggle.classList.toggle("pfp");
    const pfp=document.querySelector(".profile-pic");

    if(pfptoggle.classList.contains("pfp")){
        pfp.src="./images/pig_pfp.png";
    }
    else{
        pfp.src="./images/catpfp.jpg";
    }
}

//search feature
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");


function doSearch() {
    const query = searchInput.value.trim();
    if (query) {
        location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
    }
}

searchInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        doSearch();
    }
});

searchBtn.addEventListener("click", doSearch);

//color switch for search bar

const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];

function addHoverColorEffect(element, speed = 700, borderDefault = '#ccc') {
    let colorIndex = 0;
    let interval;

    element.addEventListener('mouseenter', () => {
        interval = setInterval(() => {
            element.style.borderColor = colors[colorIndex];
            element.style.boxShadow = `0 0 15px ${colors[colorIndex]}`;
            colorIndex = (colorIndex + 1) % colors.length;
        }, speed);
    });

    element.addEventListener('mouseleave', () => {
        clearInterval(interval);
        element.style.borderColor = borderDefault;
        element.style.boxShadow = 'none';
    });
}
 
addHoverColorEffect(document.querySelector('.search-from-input'));
addHoverColorEffect(document.querySelector('#searchBtn'));
addHoverColorEffect(document.querySelector('#luckyBtn'));
addHoverColorEffect(document.querySelector('#txt'));
addHoverColorEffect(document.querySelector('#greeting'));

//greetings
function updateGreeting() {
    const greetingDiv = document.getElementById("greeting");
    const hour = new Date().getHours();
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = "Good morning ☀️";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good afternoon 🌤️";
    } else {
        greeting = "Good evening 🌙";
    }

    greetingDiv.textContent = greeting;
}

updateGreeting();
setInterval(updateGreeting, 60000);