let btn = document.getElementById("btn");
let wheel1 = document.querySelector(".wheel1");
let wheel2 = document.querySelector(".wheel2");
let trackmove = document.querySelector(".track")
let carmove = document.querySelector(".car")
let audioelement = new Audio("./sound.mp3");

const gameChanger = () => {
  audioelement.loop = true;
  audioelement.play();
  wheel1.setAttribute("id", "wheel11");
  wheel1.removeAttribute("class", "wheel1");
  wheel2.setAttribute("id" , "wheel12")
  wheel2.removeAttribute("class", "wheel2");
  trackmove.setAttribute("id" , "track")
  trackmove.removeAttribute("class" , "track")
  carmove.setAttribute("id" , "car")
  carmove.removeAttribute("class" , "car")
}
btn.addEventListener("click", () => {
 gameChanger()
});

btn.addEventListener("dblclick" , () => {
  gameChanger()
})
