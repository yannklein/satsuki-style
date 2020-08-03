

const changePicture = () => {
  activeImg = document.querySelector(".active");
  activeImg.classList.remove('active');

  if (activeImg.nextElementSibling) {
    activeImg.nextElementSibling.classList.add('active');
  } else {
    activeImg.parentElement.firstElementChild.classList.add('active');
  }
}

setInterval(changePicture, 5000);
