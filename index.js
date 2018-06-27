
function inOrder(currentNode) {
  if(currentNode.left) {
    inOrder(currentNode.left);
  }
  console.log(currentNode.data);
  if(currentNode.right) {
    inOrder(currentNode.right);
  }
}

function findOrAdd(root_node, new_node) {
  let currentNode = root_node.data;
  //edge case: found new_node at root
  if (currentNode == new_node) {
    return true;
  }

  
  
}