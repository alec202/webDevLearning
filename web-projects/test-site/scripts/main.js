const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/library-three-pane-window.jpeg") {
    myImage.setAttribute("src", "images/lots-of-shelves-library.jpeg");
  } else {
    myImage.setAttribute("src", "images/library-three-pane-window.jpeg");
  }
};
