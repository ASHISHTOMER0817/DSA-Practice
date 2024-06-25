// START OF STRAIGHT LINKED LIST
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

const firstNode = new Node(2);
const SecondNode = new Node(8);
const thirdNode = new Node(3);
const fourthNode = new Node(7);
firstNode.next = SecondNode;
SecondNode.next = thirdNode;
thirdNode.next = fourthNode;
// END OF STRAIGHT LINKED LIST


//  const values = [];
// ( function showValues(nodes){
//       // console.log(nodes.value)
//       values.push(nodes.value)
//       if(nodes.next === null) return;
//       showValues(nodes.next)
//  })(firstNode)
//  console.log(values)

// Sum list

// const sumList = (head) =>{
//       if(head === null)return 0;
//       return head.value + sumList(head.next)
// }

//  const sumList = (head) =>{
//       let sum = 0
//       let current = head;
//       while(current !== null){
//            sum += +current.value;
//            current = current.next;
//       }
//       return sum;
//  };
//  const  sum =sumList(firstNode);
//  console.log(sum);

// Find Node value

// const findNodeValue =(head, target)=>{
//       if(head === null)return console.log(false);
//       if(head.value === target)return console.log(true);
//       findNodeValue(head.next,target)
// }
// findNodeValue(firstNode,1)

// const findNodeValueWhile = (head, target) => {
// 	let current = head;
// 	while (current.value !== target && current !== null) {
// 		current = current.next;
// 		if (current.value === target){
//             return console.log(true)

//             }
// 	}
//       return false
// };
// const boolean =findNodeValueWhile(firstNode, 7)
// console.log(boolean)

// const findIndex = (head, index) => {
// 	if (head === null) return;
// 	if (index === 0) {
// 		console.log(head.value);
// 		return head.value;
// 	}
// 	findIndex(head.next, index - 1);
// };

// findIndex(firstNode, 2)

// function findNthIndex(head, index){
// 	if(head === null)return null;
// 	let current = head;
// 	let nodeIndex = 0
// 	while(current !== null){
// 		if(nodeIndex === index){
// 			// console.log(current.value)
// 			 return current.value;}
// 			 console.log(current.value)
// 		current = current.next
// 		nodeIndex++
// 	}
// 	return null;
// }

// console.log('this is something else',findNthIndex(firstNode, 3))

// REVERSE LINKED LIST

function reversedLinkedList(head) {
	if (!head) return null;
	let current = head;

	while (current !== null) {

	}
}
console.log(reversedLinkedList(firstNode));
