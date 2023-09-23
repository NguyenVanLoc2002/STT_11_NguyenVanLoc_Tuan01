function whereAmI(lat, lng) {
  // Phần 1: Đảo ngược mã hóa địa lý
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Không thể lấy dữ liệu vị trí: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const city = data.city;
      const country = data.country;
      console.log(`You are in ${city}, ${country}`);

      // Phần 2: Hiển thị quốc gia
      return fetch(`https://restcountries.com/v3/alpha?codes=${country}`);
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Không thể lấy dữ liệu quốc gia: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const countryData = data[0];
      console.log(`Country: ${countryData.name.common}`);
    })
    .catch((error) => {
      console.error(error);
    });
}


// Test với các tọa độ
whereAmI(52.508, 13.381);

whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
whereAmI(10.78604, 106.70123);
