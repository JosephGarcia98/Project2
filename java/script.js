
function openBoxing(){
	window.open("https://olympics.com/en/paris-2024/schedule/boxing");
}

function openBasketball(){
	window.open("https://olympics.com/en/paris-2024/schedule/basketball");
}

function openFootball(){
	window.open("https://olympics.com/en/paris-2024/schedule/football");
}

function openJudo(){
	window.open("https://olympics.com/en/paris-2024/schedule/judo");
}

function openTennis(){
	window.open("https://olympics.com/en/paris-2024/schedule/tennis");
}

function openNews1(){
	window.open("https://olympics.com/en/news/paris-2024-swimming-romania-popovici-gold-200m-freestyle-x1645");
}

function openNews2(){
	window.open("https://olympics.com/en/news/skateboard-jagger-eaton-silver-medal-paris-2024");
}

function openNews3(){
	window.open("https://olympics.com/en/news/paris-2024-skateboard-street-men-horigome-eaton-huston");
}

function openNewsAll(){
	window.open("https://olympics.com/en/paris-2024/news");
}

let array = [
  {rank: 1, country: 'USA',gold:39, silver:41, bronze:33},
  {rank: 2, country: 'China',gold:38, silver:32, bronze:19},
  {rank: 3, country: 'Britain',gold:22, silver:20, bronze:22},
  {rank: 4, country: 'Japan',gold:27, silver:14, bronze:17},
  {rank: 5, country: 'Australia',gold:17,silver:7, bronze:22},
  {rank: 6, country: 'Italy',gold:10,silver:10, bronze:20},
  {rank: 7, country: 'Germany',gold:10,silver:11, bronze:16},
  {rank: 8, country: 'Netherlands',gold:10,silver:12, bronze:14},
  {rank: 9, country: 'France',gold:10,silver:12, bronze:11},
  {rank: 10, country: 'Canada',gold:7,silver:7, bronze:10},
];

const medalTable = document.createElement("table");
medalTable.innerHTML = "<thead><th>Rank</th><th>Player</th><th>Score</th><th>Silver</th><th>Bronze</th></thead>";
for(display of array){
    const newRow = document.createElement("tr");
    const rank = document.createElement("td");
    const country = document.createElement("td");
    const gold = document.createElement("td");
    const silver = document.createElement("td");
    const bronze = document.createElement("td");
    rank.textContent = display.rank;
    country.textContent = display.country;
    gold.textContent = display.gold;  
    silver.textContent = display.silver; 
    bronze.textContent = display.bronze; 
    newRow.appendChild(rank);
    newRow.appendChild(country);
    newRow.appendChild(gold);
    newRow.appendChild(silver);
    newRow.appendChild(bronze);
    medalTable.appendChild(newRow);
}
const medalRanks = document.getElementById('medalRanks');
medalRanks.appendChild(medalTable);