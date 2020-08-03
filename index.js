

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

// const secondEyelash = document.querySelector(".eyelash-second-part");
// const secondPart = document.querySelector(".second-part");

// const thirdEyelash = document.querySelector(".eyelash-third-part");
// const thirdPart = document.querySelector(".third-part");

// const openEyelash = (event) => {
//   // Second part eyelash eyelash
//   const thresSecond = - secondPart.getBoundingClientRect().top + (secondPart.offsetHeight / 2);
//   if (thresSecond > 0) {
//     const deg = thresSecond / 1.5 ** 2;
//     if (deg < 90) {
//       secondEyelash.style.transform = `translate(-50%, -50%) rotateX(${deg}deg)`;
//     } else {
//       secondEyelash.style.transform = `translate(-50%, -50%) rotateX(90deg)`;
//     }
//   }

//   // Third part eyelash eyelash
//   const thresThird = - thirdPart.getBoundingClientRect().top + (thirdPart.offsetHeight / 2);
//   if (thresThird > 0) {
//     const deg = thresThird / 1.5 ** 2;
//     if (deg < 90) {
//       thirdEyelash.style.transform = `translate(-50%, -50%) rotateX(${deg}deg)`;
//     } else {
//       thirdEyelash.style.transform = `translate(-50%, -50%) rotateX(90deg)`;
//     }
//   }
// };

// document.addEventListener("scroll", openEyelash );
