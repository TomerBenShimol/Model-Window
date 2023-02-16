"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-modal");
const btnsOpenModel = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closedModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener("click", openModal);
}

btnCloseModel.addEventListener("click", closedModal);
overlay.addEventListener("click", closedModal);

document.addEventListener("keydown", function (e) {
  if (e.code === "Escape" && !modal.classList.contains("hidden")) {
    closedModal();
  }
});
