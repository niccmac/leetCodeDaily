/*
Given the root of a binary tree and an integer targetSum,
return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const hasPathSum = function (root, targetSum) {
  // If no tree return false.
  if (!root) {
    return false;
  }

  // Recursive function.
  const traversal = (node, sum) => {
    //Add val to current path through tree.
    sum += node.val;

    // If on a leaf node (node with no further nodes), check if route sum === target.
    if (!node.left && !node.right) {
      if (sum === targetSum) {
        return true;
      }
    }
    // Check both routes for true.
    let foundLeft = false;
    let foundRight = false;

    if (node.left) {
      foundLeft = traversal(node.left, sum);
    }

    if (node.right) {
      foundRight = traversal(node.right, sum);
    }

    // if either route returns true, return true.
    return foundLeft || foundRight;
  };

  return traversal(root, 0);
};
