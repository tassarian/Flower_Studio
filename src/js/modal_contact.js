

(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      console.log(refs);
      refs.modal.classList.toggle("is-hidden");
    }
    
    const refs2 = {
      openModa2lBtn: document.querySelector("[data-modal2-open]"),
      closeModa2lBtn: document.querySelector("[data-modal2-close]"),
      modal2: document.querySelector("[data-modal2]"),
    };
  
    refs2.openModa2lBtn.addEventListener("click", toggleModal2);
    refs2.closeModa2lBtn.addEventListener("click", toggleModal2);
  
    
    function toggleModal2(event) {
      modal2.classList.toggle("show-modal-2");
      event.preventDefault();
    }
  })();