const game = {
    team1: 'Bayern Munich',
    team2: 'Liverpool',
    score:{
        'Davies': 1, 'Muller': 2, 'Lewandowski': 3, 'Kimmich': 1
    },
    odds:{
        team1: 1.33,
        draw: 3.25,
        team2: 6.5 
    }
}

// 1. Tạo một mảng người chơi cho mỗi đội (biến 'players1' và 'players2')
var players1=['Neuer', 'Pavard', 'Lucas', 'Hernandez',
 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'];
var players2=[
    'Alisson', 'Trent Alexander-Arnold', 'Andrew Robertson', 'Joel Matip', 'Fabinho', 
    'Jordan Henderson', 'Mohamed Salah', 'Roberto Firmino', 'Sadio Mane', 'Diogo Jota'
];

// 2. Cầu thủ đầu tiên trong dàn cầu thủ là thủ môn, những người còn lại là cầu thủ trên sân. 
// Đối với Bayern Munich (đội 1), tạo một biến ('gk') với tên thủ môn và một mảng ('fieldPlayers') với tất cả 10 cầu thủ còn lại
var gk = players1[0];
var fieldPlayers = players1.slice(1,11);
// 3. Tạo một mảng 'allPlayers' chứa tất cả người chơi của cả hai đội (22 người chơi)
var allPlayers =[players1,players2]
console.log(allPlayers);
// 4. Trong trận đấu, Bayern Munich (đội 1) sử dụng 3 cầu thủ dự bị. Vì vậy, hãy tạo một mảng mới ('players1Final') 
// chứa tất cả các cầu thủ ban đầu của team1 cộng với 'Thiago', 'Coutinho' và 'Perisic'
var reservePlayer = ['Thiago', 'Coutinho', 'Perisic'];
var players1Final = [players1, reservePlayer];
// 5. Dựa trên đối tượng game.odds, tạo một biến cho mỗi số lẻ (được gọi là 'team1', 'draw' và 'team2')
const { team1, draw, team2 } = game.odds;
console.log(team1);
// 6. Viết hàm ('printGoals') nhập số lượng tên cầu thủ tùy ý (không phải mảng) và in từng tên đó ra bảng điều khiển, 
// cùng với tổng số bàn thắng được ghi (số tên cầu thủ được ghi vào )
function printGoals(players){
    for(const player of players){
        let goals = game.score[player] || 0;
        console.log(player+": "+goals+" goals");
    }
}
// Dữ liệu thử nghiệm cho 6: Đầu tiên, sử dụng các cầu thủ 'Davies', 'Muller', 'Lewandowski' và 'Kimmich'.
// Sau đó, gọi lại hàm với người chơi từ game.scored
var playerTest = ['Davies', 'Muller', 'Lewandowski', 'Kimmich'];
printGoals(playerTest);

// 7. Đội nào có tỷ lệ cược thấp hơn sẽ có nhiều khả năng thắng hơn. In ra bảng điều khiển đội nào có 
// nhiều khả năng giành chiến thắng hơn mà không cần sử dụng câu lệnh if/else hoặc toán tử ba ngôi.
team1 < team2 && console.log("Team"+game.team1+ "is more likely to win");
team1 > team2 && console.log("Team"+game.team2+ "is more likely to win");
draw < team1 && console.log("A draw is more likely");   
