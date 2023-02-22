(() => {
  
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    contactModal: document.querySelector("[data-modal-contact]"),
    sendModalBtn: document.querySelector("[data-modal-send]"),
    thanksModal: document.querySelector("[data-modal-thanks]"),
    continueModalBtn: document.querySelector("[data-modal-continue]"),
   modalinputname: document.querySelector(".js-inputname"),
    modalinputemail: document.querySelector(".js-inputemail"),
    modalmodelBtndisabled: document.querySelector(".js-toggledisabled")
  };


  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.continueModalBtn.addEventListener("click", toggleModal);
  refs.sendModalBtn.addEventListener("click", sendForm);

  refs.modalinputname.addEventListener("keyup", toggleModalbtnactiv);
  refs.modalinputemail.addEventListener("keyup", toggleModalbtnactiv);

function toggleModalbtnactiv(){
  let name=refs.modalinputname.value;
  let email=refs.modalinputemail.value;
  if(name=="" || email=="" ){
refs.modalmodelBtndisabled.disabled=true
  }else{
    refs.modalmodelBtndisabled.disabled=false
  }
}

  function toggleModal() {

    refs.contactModal.classList.remove("hide-contact-modal");
    refs.thanksModal.classList.remove("show-thanks-modal");
   
  }

  function sendForm(event) {
    event.preventDefault();
    refs.contactModal.classList.add("hide-contact-modal");
    refs.thanksModal.classList.toggle("show-thanks-modal");
  }
 

})();

