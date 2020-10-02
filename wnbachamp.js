'use strict'
//const points = 1, threes = .5, rebound = 1.25, assist = 1.5, steal = 2, block = 2, to = -.5, dd = 1.5, td = 3;
//let player = { points: 0, threes: 0, rebound: 0, assist: 0, steal: 0, block: 0, to: 0, dd: 0, td: 0};

const seattle = [
	{name: 'BStew', points: 23, threes: 1.3, rebound: 8, assist: 5.7, steal: 2.3, block: 1.7, to: 1.3, dd: 1, td: 0},
	{name: 'JLoyd', points: 17.3, threes: 2.7, rebound: 5, assist: 3.7, steal: .7, block: .7, to: 3, dd: 0, td: 0},
	{name: 'AClark', points: 9, threes: 1, rebound: 6.7, assist: 2, steal: .7, block: .3, to: .7, dd: 0, td: 0},
	{name: 'SBird', points: 11.3, threes: 2.3, rebound: 2, assist: 7.3, steal: .7, block: 0, to: 2.7, dd: 0, td: 0},
	{name: 'NHoward', points: 8.3, threes: 1, rebound: 4, assist: 2, steal: 1, block: 0, to: 2, dd: 0, td: 0},
	{name: 'JCanada', points: 4.7, threes: 0, rebound: 1.7, assist: 1.3, steal: .7, block: 0, to: .3, dd: 0, td: 0},
	{name: 'MRussell', points: 5.7, threes: 0, rebound: 4.3, assist: .7, steal: 0, block: .3, to: 1, dd: 0, td: 0},
	{name: 'SWhitcomb', points: 5, threes: 1, rebound: 1.3, assist: 1.7, steal: 1, block: 0, to: .3, dd: 0, td: 0},
	{name: 'EPrince', points: 6, threes: 1, rebound: 1, assist: 2, steal: 0, block: 0, to: 0, dd: 0, td: 0},
	{name: 'EMagbegor', points: 1.3, threes: 0, rebound: 2, assist: .3, steal: 0, block: .3, to: 0, dd: 0, td: 0}
], lv = [
	{name: 'AWilson', points: 21.8, threes: 0, rebound: 10.4, assist: 2.6, steal: .8, block: 3, to: 2.8, dd: 3, td: 0},
	{name: 'KMcBride', points: 8, threes: .4, rebound: 3.8, assist: 2.4, steal: .4, block: 0, to: 1.2, dd: 0, td: 0},
	{name: 'DRobinson', points: 10.2, threes: .2, rebound: 4.4, assist: 3, steal: 1.2, block: 0, to: 1.2, dd: 0, td: 0},
	{name: 'AMcCoughtry', points: 16, threes: 1, rebound: 4.4, assist: 3.6, steal: 1.8, block: .2, to: 2.2, dd: 0, td: 0},
	{name: 'CSword', points: 3.2, threes: 0, rebound: 4.8, assist: .8, steal: .6, block: 1, to: .4, dd: 0, td: 0},
	{name: 'JYoung', points: 7, threes: .2, rebound: 3.4, assist: 3, steal: .4, block: .2, to: 2.6, dd: 0, td: 0},
	{name: 'ECannon', points: .7, threes: 0, rebound: 1, assist: .7, steal: 0, block: 0, to: 1, dd: 0, td: 0},
	{name: 'SRodgers', points: 0, threes: 0, rebound: 1, assist: 1, steal: .4, block: 0, to: .4, dd: 0, td: 0},
	{name: 'LAllen', points: 2, threes: 0, rebound: 0, assist: 0, steal: .5, block: 0, to: .5, dd: 0, td: 0},
	{name: 'CBurdick', points: 2, threes: 0, rebound: 2, assist: 0, steal: 0, block: 0, to: 0, dd: 0, td: 0}
];

let results = [];


seattle.forEach(x => {
	const points = 1, threes = .5, rebound = 1.25, assist = 1.5, steal = 2, block = 2, to = -.5, dd = 1.5, td = 3;
	let score = 0;
	score = (x.points * points) + (x.threes * threes) + (x.rebound * rebound) + (x.assist * assist) 
		+ (x.steal * steal) + (x.block * block) + (x.to * to) + (x.dd ? dd : 0) + (x.td ? td : 0); 
	results.push({
		'name': x.name,
		'score': score
	});
});

lv.forEach(x => {
	const points = 1, threes = .5, rebound = 1.25, assist = 1.5, steal = 2, block = 2, to = -.5, dd = 1.5, td = 3;
	let score = 0;
	score = (x.points * points) + (x.threes * threes) + (x.rebound * rebound) + (x.assist * assist) 
		+ (x.steal * steal) + (x.block * block) + (x.to * to) + (x.dd ? dd : 0) + (x.td ? td : 0); 
	results.push({
		'name': x.name,
		'score': score
	});
});

results.sort((a,b) => b.score - a.score);

console.log(results);
