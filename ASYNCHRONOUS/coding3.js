function createImage(imgPath) {
  return new Promise((resolve, reject) => {
    var img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", () => {
      document.querySelector(".images").appendChild(img);
      resolve(img);
    });

    img.addEventListener("error", () => {
      reject(new Error("Image loading failed!"));
    });
  });
}

function wait(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
//Phan 1

const loadNPause = async function () {
  try {
    const image1 = await createImage(
      "https://tse3.mm.bing.net/th?id=OIP.Nia8NcZLgly5CjOqGkokZgHaJO&pid=Api&P=0&h=180"
    );
    console.log("Image 1 Loaded");
    await wait(2);
    image1.style.display = "none";

    const image2 = await createImage(
      "https://tse2.mm.bing.net/th?id=OIP.6Zb5VWURjBNQ7sHp3L2tHwHaJF&pid=Api&P=0&h=180"
    );
    console.log("Image 2 Loaded");
    await wait(2);
    image2.style.display = "none";
  } catch (error) {
    console.error(error);
  }
};

loadNPause();

//Phan 2
// Tạo một hàm bất đồng bộ có tên 'loadAll' nhận vào một mảng đường dẫn hình ảnh 'imgArr'.
// Sử dụng .map để lặp qua mảng và tải tất cả các hình ảnh bằng hàm 'createImage' (gọi mảng kết quả là 'imgs').
// Kiểm tra mảng 'imgs' trong console! Nó có giống như bạn đã dự kiến không?
// Sử dụng một hàm kết hợp promise để thực sự lấy hình ảnh từ mảng.
// Thêm lớp 'parallel' cho tất cả các hình ảnh (nó có một số kiểu CSS).
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (imgPath) => {
      return await createImage(imgPath);
    });

    const imgsElement = await Promise.all(imgs);
    imgsElement.forEach((img) => {
      img.classList.add("parallel");
    });
  } catch (error) {
    console.error(error);
  }
};
var arrImagesPath = [
  "https://tse3.mm.bing.net/th?id=OIP.Nia8NcZLgly5CjOqGkokZgHaJO&pid=Api&P=0&h=180",
  "https://tse2.mm.bing.net/th?id=OIP.6Zb5VWURjBNQ7sHp3L2tHwHaJF&pid=Api&P=0&h=180",
  "https://tse1.mm.bing.net/th?id=OIP.L1la2eN5fAiftpKhVOWOjwHaEK&pid=Api&P=0&h=180",
];
loadAll(arrImagesPath);
