// Your code goes here

// mouseover + mouseout

const welcome = document.querySelector(".intro h2");

welcome.addEventListener("mouseover", (e) => (e.target.style.fontSize = "5em"));
welcome.addEventListener(
   "mouseout",
   (e) => (e.target.style.fontSize = "3.2em")
);

// wheel

const imgs = document.querySelectorAll("img");
let imgsangles = Array.from(imgs, (i) => 0);
imgs.forEach((i, j) =>
   i.addEventListener(
      "mouseover",
      (e) => (e.target.style.transform = `rotate(${imgsangles[j]}deg)`)
   )
);

imgs.forEach((i) =>
   i.addEventListener("mouseover", (e) => e.target.classList.add("mousedover"))
);
imgs.forEach((i) =>
   i.addEventListener("mouseout", (e) => {
      e.target.classList.remove("mousedover");
      document.querySelector("body").style.overflow = "";
   })
);

imgs.forEach((i, j) =>
   i.addEventListener("wheel", (e) => {
      document.querySelector("body").style.overflow = "hidden";

      if (e.target.classList.contains("mousedover")) {
         // console.log(e);
         e.target.style.transform = `rotate(${(imgsangles[j] +=
            e.deltaY * -0.08)}deg)`;
      }
   })
);

// keydown

function home(e) {
   if (e.code === "Escape" || e.code === "Enter") {
      imgsangles = Array.from(imgs, (i) => 0);
      imgs.forEach((i) => (i.style.transform = ""));
   }
}

document.addEventListener("keydown", home);

// load

imgs.forEach((i) =>
   i.addEventListener("load", (e) => {
      // console.log(e.currentTarget);
      e.currentTarget.style.opacity = "0.05";
      e.currentTarget.style.transition = "all 0.5s";
      setTimeout(function () {
         i.style.opacity = "1";
      }, 500);
   })
);

// contextmenu

imgs.forEach((i) => i.addEventListener("contextmenu", (e) => e.target));

// click and preventDefault()
// clicking any of the navbar item would toggle foot red color

document.querySelectorAll(".nav-link").forEach((i) =>
   i.addEventListener("click", (e) => {
      e.target.classList.toggle("highlight");
      e.preventDefault();
   })
);

// dblclick

document
   .querySelectorAll("p")
   .forEach((i) =>
      i.addEventListener("dblclick", (e) =>
         alert("don't doubleclick! not yet implemented")
      )
   );

// select

document
   .querySelectorAll("*")
   .forEach((i) => i.addEventListener("select", (e) => console.log(e.target)));

// drag / drop / preventDefault()

document.querySelectorAll(".img-content").forEach((i) => {
   i.draggable = true;
   i.ondragstart = "event.dataTransfer.setData('text/plain',null)";
});

let dragpsa = document.createElement("div");
dragpsa.className = "tempelement";
dragpsa.innerHTML =
   "<h2 style='font-size: 8rem; color: red'>Drop at Sign Me Up! Buttons</h2>";
dragpsa.style =
   "width: Xu; height: Yu; position: fixed; top: 50%; left: 50%; margin-left: -(X/2)u; margin-top: -(Y/2)u; display:none";
document.body.append(dragpsa);

imgs.forEach((i) => {
   i.addEventListener(
      "drag",
      function (event) {
         document.querySelector(".tempelement").style =
            "width: Xu; height: Yu; position: fixed; top: 50%; left: 50%; margin-left: -(X/2)u; margin-top: -(Y/2)u; ";
      },
      false
   );
});

document.addEventListener(
   "dragover",
   function (e) {
      // prevent default to allow drop
      e.preventDefault();
   },
   false
);

// if something is dragged on to "Sign me up" button, alert
document.addEventListener(
   "drop",
   (e) => {
      document.querySelector(".tempelement").style =
         "width: Xu; height: Yu; position: fixed; top: 50%; left: 50%; margin-left: -(X/2)u; margin-top: -(Y/2)u; display:none";

      e.preventDefault();
      // console.log(e.target.className);
      if (e.target.className == "btn") {
         // console.log("dropped");
         alert("No signup right now, sorry");
      }
   },
   false
);

// click the first sign me up section would alert once

function proptest(e) {
   alert("you clicked " + e.currentTarget.classList);
   e.stopPropagation(); // this prevent clicking btn firing the upper div's alert too.
}

document.querySelector(".btn").addEventListener("click", proptest);

document.querySelector(".destination").addEventListener("click", proptest);
