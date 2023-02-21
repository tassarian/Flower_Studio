const btns = document.querySelectorAll ('.btn');

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    document.querySelector('[data-target="${path}"]').classList.add('is-hidden')

  })
})