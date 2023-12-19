const fog = document.querySelector(".fog");

const showMoreElements = document.querySelectorAll(".show-more__content");
const showMoreButtons = document.querySelectorAll(".show-more__button");

const menuSideModal = document.querySelector(".menu-side");
const menuSideButtons = document.querySelectorAll(".menu-side__button");

const feedbackModal = document.querySelector(".feedback__modal");
const feedbackButtons = document.querySelectorAll(".feedback__button");

const callOrderModal = document.querySelector(".call-order__modal");
const callOrderButtons = document.querySelectorAll(".call-order__button");

const modals = [menuSideModal, feedbackModal, callOrderModal];
const modalCloseButtons = document.querySelectorAll(".close__button");

export function showMore() {
  for (let i = 0; i < showMoreButtons.length; i++) {
    let btnTextContent = showMoreButtons[i].textContent;
    showMoreButtons[i].addEventListener("click", () => {
      showMoreElements[i].classList.toggle("show-more");
      showMoreButtons[i].classList.toggle("button--bg-img-expand--pressed");
      if (showMoreElements[i].classList.contains("show-more")) {
        showMoreButtons[i].textContent = "Скрыть";
      } else {
        showMoreButtons[i].textContent = btnTextContent;
      }
    });
  }
}

export function closeModals() {
  for (let i = 0; i < modalCloseButtons.length; i++) {
    modalCloseButtons[i].addEventListener("click", () => {
      modals[i].classList.remove("modal--show");
      fog.classList.remove("fog-background");
    });
  }

  fog.addEventListener("click", () => {
    fog.classList.remove("fog-background");
    removeModal();
  });

  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      fog.classList.remove("fog-background");
      removeModal();
    }
  });
}

function removeModal() {
  for (let i = 0; i < modals.length; i++) {
    modals[i].classList.remove("modal--show");
  }
}

function showModal(btn, modal) {
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
      modal.classList.add("modal--show");
      modal.style.zIndex = 20;
      fog.classList.add("fog-background");
      fog.style.zIndex = 15;
    });
  }
}

export function showFeedbackModal() {
  showModal(feedbackButtons, feedbackModal);
}

export function showCallOrderModal() {
  showModal(callOrderButtons, callOrderModal);
}

export function showMenuSideModal() {
  showModal(menuSideButtons, menuSideModal);
}
