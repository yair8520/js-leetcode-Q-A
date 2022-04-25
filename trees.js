/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) return [];
  let res = [];
  const stack = [root];
  while (stack.length) {
    let node = stack.pop();
    res.push(node);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return res;
};

var preorderTraversal = function (root) {
  if (!root) return [];
  const res = [];

  const preOrder = (node) => {
    if (!node) return null;
    res.push(node.val);
    if (node.left) preOrder(node.left);
    if (node.right) preOrder(node.right);
  };
  preOrder(root);
  return res;
};

///////////////////////////////////////////////////////////////////////////
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    
  let hasPath = false;
  const dfs = (node, sum) => {
      if (node.left === null && node.right === null) {
      if (sum === node.val) {
        hasPath = true;
      }
      return;
    }
    if (node.left) {
      dfs(node.left, sum - node.val);
    }
    if (node.right) {
      dfs(node.right, sum - node.val);
    }
  };

  dfs(root, targetSum);
  return hasPath;
};

///////////////////////////////////////////////////////////////////////////
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums 
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
    
};