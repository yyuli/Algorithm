let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, ...commands] = input;

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(item) {
    const node = new Node(item);
    if (this.head === null) {
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
    if (this.size > 0) {
      const item = this.head.item;
      this.head = this.head.next;
      this.size -= 1;

      if (this.size === 0) {
        this.tail = null;
      }

      return item;
    } else {
      return -1;
    }
  }

  empty() {
    return this.size ? 0 : 1;
  }

  front() {
    return this.head ? this.head.item : -1;
  }

  back() {
    return this.tail ? this.tail.item : -1;
  }
}

function solution(n, commands) {
  let answer = "";
  const queue = new Queue();

  for (let i = 0; i < n; i += 1) {
    const command = commands[i].split(" ")[0];

    switch (command) {
      case "push":
        const pushItem = commands[i].split(" ")[1];
        queue.push(pushItem);
        break;
      case "pop":
        answer += queue.pop() + " ";
        break;
      case "front":
        answer += queue.front() + " ";
        break;
      case "back":
        answer += queue.back() + " ";
        break;
      case "empty":
        answer += queue.empty() + " ";
        break;
      case "size":
        answer += queue.getSize() + " ";
        break;
      default:
        break;
    }
  }

  return answer.split(" ").join("\n").trim();
}

const answer = solution(n, commands);
console.log(answer);
