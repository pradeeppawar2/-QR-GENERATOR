const input = document.querySelector("input");
const container = document.querySelector(".container")
const genBtn = document.querySelector("button");
const img = document.querySelector("img");
const down = document.querySelector(".down");
let preValue;

genBtn.addEventListener("click", ()=>{
    let qrValue = input.value.trim();
    if (!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    genBtn.innerText = "Generating QR Code...";
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    img.addEventListener("load", () => {
        container.classList.add("active");
        genBtn.innerText = "Generate QR Code";
      });
      
})

 


input.addEventListener("keyup", () => {
    if (!input.value.trim()) {
      container.classList.remove("active");
      preValue = "";
    }
  });