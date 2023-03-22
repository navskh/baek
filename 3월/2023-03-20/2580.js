const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];
rl.on('line', line => {
	input.push(line);
}).on('close', () => {
	const map = input.map(row => row.split(' '));
	const zeroPoint = [];
	// 0인 지점 담기
	for (let i = 0; i < map.length; i++) {
		for (let j = 0; j < map[i].length; j++) {
			if (map[i][j] == 0) {
				zeroPoint.push([i, j]);
			}
		}
	}

	// 사각형 지점 가져오기
	const getSquareArea = pos => parseInt(pos / 3) * 3;

	// 체크
	const check = (y, x) => {
		// 가로축에 1~9 안에 있는지 체크 
		for (let i = 0; i < 9; i++) {
			if (i === y) continue;
			if (map[i][x] == 0) continue;

			if (map[i][x] == map[y][x]) {
				return false;
			}
    }
    
		// 세로축에 1~9 안에 있는지 체크 
		for (let i = 0; i < 9; i++) {
			if (i == x) continue;
			if (map[y][i] == 0) continue;

			if (map[y][i] == map[y][x]) {
				return false;
			}
		}

    // 3 x 3 안에 있는지 체크
		const squareX = getSquareArea(x);
		const squareY = getSquareArea(y);
		for (let i = squareY; i < squareY + 3; i++) {
			for (let j = squareX; j < squareX + 3; j++) {
				if (i == y && j == x) continue;
				if (map[i][j] == 0) continue;

				if (map[i][j] == map[y][x]) {
					return false;
				}
			}
		}

		return true;
	};

  const backTracking = cur => {
    // 완성 되었으면 출력
		if (cur === zeroPoint.length) {
			map.forEach(el => {
				console.log(el.join(' '));
			});

			process.exit();
    }
    else {
			const [y, x] = zeroPoint[cur];

      // 하나씩 담아보며 맞으면 그 다음으로 넘어감
			for (let i = 1; i <= 9; i++) {
				map[y][x] = i;
				if (check(y, x)) {
					backTracking(cur + 1);
				}
				map[y][x] = 0;
			}
		}
	};

	backTracking(0);
});
