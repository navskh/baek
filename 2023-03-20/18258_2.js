class Node {
	constructor(item) {
		this.item = item;
		this.next = null;
	}
}

class queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	push(value) {
		const node = new Node(value);
		// head가 없으면 head로 설정, 있으면 tail에 연결
		if (!this.head) {
			this.head = node;
			this.head.next = this.tail;
		} else {
			this.tail.next = node;
		}
		this.tail = node;
		this.size += 1;
	}

	getSize() {
		return this.size;
	}

	pop() {
		if (this.size > 2) {
			const item = this.head.item;
			const newHead = this.head.next;
			this.head = newHead;
			this.size--;
			return item;
		} else if (this.size == 2) {
			const item = this.head.item;
			const newHead = this.head.next;
			this.head = newHead;
			this.tail = newHead;
			this.size--;
			return item;
		} else if (this.size == 1) {
			const item = this.head.item;
			this.head = null;
			this.tail = null;
			this.size--;
			return item;
		} else {
			return -1;
		}
	}

	empty() {
		return this.size == 0 ? 1 : 0;
	}

	front() {
		return this.head ? this.head.item : -1;
	}

	back() {
		return this.tail ? this.tail.item : -1;
	}
}

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	input.shift();
	let answer = '';

	const q = new queue();
	input.forEach(str => {
		let thisA = str.split(' ');
		let cmd = thisA[0];
		if (cmd == 'push') {
			let value = +thisA[1];
			q.push(value);
		} else if (cmd == 'front') {
			answer += q.front() + '\n';
		} else if (cmd == 'back') {
			answer += q.back() + '\n';
		} else if (cmd == 'size') {
			answer += q.getSize() + '\n';
		} else if (cmd == 'empty') {
			answer += q.empty() + '\n';
		} else if (cmd == 'pop') {
			answer += q.pop() + '\n';
		}
	});

	console.log(answer.split('\n').join('\n'));
	process.exit();
});
