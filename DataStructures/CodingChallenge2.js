const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  scored: {
    Davies: 1,
    Muller: 2,
    Lewandowski: 3,
    Kimmich: 1,
  },
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
  },
};

// 1. Lặp lại mảng game.scored và in tên từng người chơi lên bảng điều khiển,
// cùng với số bàn thắng (Ví dụ: "Goal 1: Lewandowski")
for (let player in game.scored) {
  let goals = game.scored[player];
  console.log("Goal " + goals + ": " + player + "");
}
// 2. Sử dụng vòng lặp để tính số lẻ trung bình và ghi nó vào bảng điều khiển (Chúng tôi đã
// đã học cách tính trung bình cộng, nếu không nhớ bạn có thể kiểm tra lại)
var calcAvgOdds = (odds) => {
  var sum = odds.reduce((acc, curr) => acc + curr, 0);
  return sum / odds.length;
};
const oddsArray = Object.values(game.odds);
console.log(calcAvgOdds(oddsArray).toFixed(2));
// 3. In 3 tỷ lệ cược ra bảng điều khiển, nhưng theo cách có định dạng đẹp mắt, chính xác như thế này:
// Tỷ lệ thắng Bayern Munich: 1.33
// Tỷ lệ hòa: 3.25
// Tỷ lệ thắng Borrussia Dortmund: 6.5
// Lấy tên nhóm trực tiếp từ đối tượng trò chơi, không mã hóa chúng
// (ngoại trừ "hòa"). Gợi ý: Lưu ý tỷ lệ cược và đối tượng trò chơi có tác dụng như thế nào
// tên thuộc tính giống nhau
console.log("Tỷ lệ thắng " + game.team1 + ": " + oddsArray[0]);
console.log("Tỷ lệ hòa: " + oddsArray[1]);
console.log("Tỷ lệ thắng " + game.team2 + ": " + oddsArray[2]);
// 4. Phần thưởng: Tạo một đối tượng có tên là 'scorers' chứa tên của
// cầu thủ ghi bàn là thuộc tính và số bàn thắng là giá trị. Trong này
// trò chơi, nó sẽ trông như thế này:
// {
// Gnarby: 1,
// Hummel: 1,
// Lewandowski: 2
// }
game.scorers = {
  Gnarby: 1,
  Hummel: 1,
  Lewandowski: 2,
};
console.log(game.scorers);
