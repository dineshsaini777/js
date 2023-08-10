let mybutton = document.querySelector("button")
let crl = document.querySelector(".crl")

console.log("button")
console.log(".crl")

let val = 1;
mybutton.addEventListener("click", function () {
    if (val === 1) {
        crl.classList.add("img");
        crl.classList.remove("on");
        mybutton.classList.remove("font");
        mybutton.classList.remove("butn2")
        mybutton.innerHTML = "off";
        val = 0
    }
    else if (val === 0) {
        crl.classList.remove("img");
        crl.classList.add("on");
        mybutton.classList.add("font");
        mybutton.classList.add("butn2")
        mybutton.innerHTML = "on";
        val = 1
    }



})