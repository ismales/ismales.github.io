const repairBrandsExpandButton = document.querySelector(".repair-brands__button");
const brandsList = document.querySelector(".repair-brands__list");
const brandsListItem = document.querySelector(".repair-brands__item");

document.addEventListener("DOMContentLoaded", () => {
  let windowWidth = document.documentElement.clientWidth;

  if (windowWidth > 1119) {
    hideEl(8);
    buttonPressed(8);
  } else if (windowWidth > 400) {
    hideEl(6);
    buttonPressed(6);
  } else {
    hideEl(120);
  }
});

const buttonPressed = (item) => {
  repairBrandsExpandButton.addEventListener("click", () => {
    if (repairBrandsExpandButton.innerText == "Показать все") {
      repairBrandsExpandButton.textContent = "Скрыть";
      repairBrandsExpandButton.classList.remove("button--bg-img-expand");
      repairBrandsExpandButton.classList.add("button--bg-img-expand--pressed");
      showEL(item);
    } else {
      repairBrandsExpandButton.textContent = "Показать все";
      repairBrandsExpandButton.classList.remove("button--bg-img-expand--pressed");
      repairBrandsExpandButton.classList.add("button--bg-img-expand");
      hideEl(item);
    }
  });
};

const hideEl = (item) => {
  for (let i = item; i < brandsList.childElementCount; i++) {
    brandsList.children[i].classList.add("repair-brands__item-d-none");
  }
};

const showEL = (item) => {
  for (let i = item; i < brandsList.childElementCount; i++) {
    brandsList.children[i].classList.remove("repair-brands__item-d-none");
  }
};
