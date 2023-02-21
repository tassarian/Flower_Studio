(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    contactModal: document.querySelector("[data-modal-contact]"),
    sendModalBtn: document.querySelector("[data-modal-send]"),
    thanksModal: document.querySelector("[data-modal-thanks]"),
    continueModalBtn: document.querySelector("[data-modal-continue]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.continueModalBtn.addEventListener("click", toggleModal);
  refs.sendModalBtn.addEventListener("click", sendForm);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.contactModal.classList.remove("hide-contact-modal");
    refs.thanksModal.classList.remove("show-thanks-modal");
  }

  function sendForm(event) {
    event.preventDefault();
    refs.contactModal.classList.add("hide-contact-modal");
    refs.thanksModal.classList.toggle("show-thanks-modal");
  }
})();
