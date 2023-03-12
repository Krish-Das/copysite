const allLanderProjects = [
  ...document.querySelectorAll(
    ".lander_project .project-content-wraper .lander_project-img"
  ),
];

[...document.querySelectorAll(".lander_project .project_img-url img")].forEach(
  (img, idx) => {
    allLanderProjects[idx].style.backgroundImage = `url("${img.src}")`;
  }
);
