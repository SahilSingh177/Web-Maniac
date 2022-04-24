let about=document.getElementById("about");
let Backbtn=document.getElementById("Backbtn");
let home=document.getElementById("home");
let redirectText=document.getElementById("first");
let contact=document.getElementById("contact");
let act = document.getElementById("activity");
let type = document.getElementById("type");
let participants = document.getElementById("participants");
let cost = document.getElementById("cost");
let activBtn=document.getElementById("activBtn");

const url = "https://www.boredapi.com/api/activity/";

function apifetcher() {
  fetch(url, {
    method: "GET",
  })
    .then((resp) => resp.json())
    .then(function (data) {
      act.innerText = data.activity;
      type.innerText = data.type;
      participants.innerText = data.participants;
      cost.innerText = data.price;
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

apifetcher();
activBtn.addEventListener("click",()=>{
  apifetcher();
})


redirectText.addEventListener("click",()=>{
    location.href="/html files/activity.html"
})


