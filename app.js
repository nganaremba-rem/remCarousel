const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const carouselItems = document.querySelector(".carousel-items");
const carouselItem = document.querySelectorAll(".carousel-item");
const indicator = document.querySelector(".indicator");

let perc = 0;
let maxLength = carouselItem.length * 100 - 100;

nextBtn.onclick = () => {
  if (perc == maxLength) perc = 0;
  else perc += 100;
  let dot = document.querySelector(`#dot${perc}`);
  changeDot(dot);
  slide(perc);
};

prevBtn.onclick = () => {
  if (perc == 0) perc = maxLength;
  else perc -= 100;
  let dot = document.querySelector(`#dot${perc}`);
  changeDot(dot);
  slide(perc);
};

function slide(percentage) {
  carouselItems.style.transform = `translateX(-${percentage}%)`;
}

function createIndicator() {
  let dotItems = "";
  carouselItem.forEach((item, index) => {
    let itemId = index;
    let dotClass = "dot";
    if (itemId > 0) {
      itemId *= 100;
    } else {
      dotClass = "dot active";
    }
    dotItems += `
            <div class="${dotClass}" id="dot${itemId}"></div> 
        `;
  });
  indicator.innerHTML = dotItems;
}

createIndicator();

function changeDot(dot) {
  dots.forEach((inDot) => {
    inDot.classList.remove("active");
  });
  dot.classList.add("active");
}

const dots = document.querySelectorAll(".dot");
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    let dotId = dot.id;
    dotId = dotId.slice(3);
    slide(dotId);
    changeDot(dot);
  });
});

let automaticSlide = setInterval(() => {
  nextBtn.click();
}, 2000);

carouselItem.forEach((item) => {
  item.addEventListener("mouseover", () => {
    clearInterval(automaticSlide);
  });
  item.addEventListener("mouseleave", () => {
    automaticSlide = setInterval(() => {
      nextBtn.click();
    }, 2000);
  });
});
