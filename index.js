
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
  //edge case: found new_node at root
  if (currentNode.data == newNode.data) {
    return true;
  } else if (currentNode.data > newNode.data) { // move left
    currentNode = currentNode.left;
    if (currentNode) {
      findOrAdd(currentNode, newNode);
    } else {
      rootNode.left = newNode;
    }
  } else if (currentNode.data < newNode.data) { // move right
    currentNode = currentNode.right;
    if (currentNode) {
      findOrAdd(currentNode, newNode);
    } else {
      rootNode.right = newNode;
    }
  }
}
