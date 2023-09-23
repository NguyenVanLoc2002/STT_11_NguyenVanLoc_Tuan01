function createImage(imgPath) {
  return new Promise((resolve, reject) => {
    var img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", () => {
      document.querySelector(".images").appendChild(img);
      resolve(img);
    });

    img.addEventListener("error", () => {
      reject(new Error("Image loading failed"));
    });
  });
}

function wait(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }

createImage(
  "https://tse3.mm.bing.net/th?id=OIP.Nia8NcZLgly5CjOqGkokZgHaJO&pid=Api&P=0&h=180"
)
  .then(image => {
    return wait(2)
      .then(() => {
        image.style.display = "none";
      })
      .then(() => {
        createImage(
          "https://tse2.mm.bing.net/th?id=OIP.6Zb5VWURjBNQ7sHp3L2tHwHaJF&pid=Api&P=0&h=180"
        );
      });
  })
  .then(image => {
    return wait(2).then(() => {
      image.style.display = "none";
    });
  })
  .catch((error) => {
    console.error(error);
  });
