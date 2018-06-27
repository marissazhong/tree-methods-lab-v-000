
function inOrder(currentNode) {
  if(currentNode.left) {
    inOrder(currentNode.left);
  }
  console.log(currentNode.data);
  if(currentNode.right) {
    inOrder(currentNode.right);
  }
}

function findOrAdd(rootNode, newNode) {
  let currentNode = rootNode;
  let result = 0;
  if (currentNode.data == newNode.data) {
    //*test: console.log(currentNode.data,newNode.data);
    result = -1;
  } else if (currentNode.data > newNode.data) { // move left
    currentNode = rootNode.left;
    if (currentNode) {
      findOrAdd(currentNode, newNode);
    } else {
      rootNode.left = newNode;
    }
  } else if (currentNode.data < newNode.data) { // move right
    currentNode = rootNode.right;
    if (currentNode) {
      findOrAdd(currentNode, newNode);
    } else {
      rootNode.right = newNode;
    }
  }
  return result = -1 ? true : rootNode;
}

// let rootNode = {data: 5, left: null, right: null};
// let firstNewNode = {data: 3, left: null, right: null};
// let secondNewNode = {data: 7, left: null, right: null};
// let thirdNewNode = {data: 9, left: null, right: null};
// console.log(findOrAdd(rootNode, firstNewNode));
// console.log(findOrAdd(rootNode, secondNewNode));
// console.log(findOrAdd(rootNode, thirdNewNode));
// console.log(findOrAdd(rootNode, thirdNewNode));
