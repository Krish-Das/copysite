const allLanderProjectImg = [
  ...document.querySelectorAll(
    ".lander_project .project-content-wraper .lander_project-img"
  ),
];

const allProjectImgUrl = [
  ...document.querySelectorAll(".lander_project .project_img-url img"),
];

allLanderProjectImg.forEach((projectImg, idx) => {
  projectImg.style.backgroundImage = `url("${allProjectImgUrl[idx].src}")`;
});
