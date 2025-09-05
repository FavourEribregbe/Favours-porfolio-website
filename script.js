var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){ 
    for (tablink of tablinks){
         tablink.classList.remove("active-link");
}
   for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
     sidemenu.style.right = "0";
}
function closemenu(){
     sidemenu.style.right = "-200px";
}

document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  let form = e.target;

  let response = await fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    alert("✅ Message delivered successfully!");
    form.reset();
  } else {
    alert("❌ Something went wrong. Try again.");
  }
});
