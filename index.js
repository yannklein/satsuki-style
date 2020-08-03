

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


const openEyelash = (event) => {
  console.log(window.scrollY);
  const eyelash = document.querySelector(".eyelash-border");
  const thres = window.innerHeight / 2;
  if (window.scrollY > thres) {
    const deg = (window.scrollY - thres) / 1.4 ** 2;
    console.log(window.scrollY - thres, deg);
    if (deg < 90) {
      eyelash.style.transform = `translate(-50%, -50%) rotateX(${deg}deg)`;
    } else {
      eyelash.style.transform = `translate(-50%, -50%) rotateX(90deg)`;
    }
  }
};

document.addEventListener("scroll", openEyelash );
