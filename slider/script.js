let controls = document.querySelectorAll(".container .control");
let items = document.querySelectorAll(".item");
const maxItems = items.length;
let currentItem = 0;


controls.forEach((control)=>{
    control.addEventListener('click', ()=>{
        if (control.classList.contains("arrow-left")) {
            currentItem -= 1;
          } else {
            currentItem += 1;
          }
      
          if (currentItem >= maxItems) {
            currentItem = 0;
          }
      
          if (currentItem < 0) {
            currentItem = maxItems - 1;
          }

          items.forEach((item) => item.classList.remove("current-item"));

          items[currentItem].scrollIntoView({
            behavior: "smooth",
            inline: "center"
          });
      
          items[currentItem].classList.add("current-item");
          
          /*
          //Assim também funcionou, só não funcionou para aplicar opacidade em cada item
          items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth"
          });
          */
        console.log(currentItem);
    })

})