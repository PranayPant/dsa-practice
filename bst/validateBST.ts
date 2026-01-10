import { TreeNode } from "./BST";

export function validateBST(root: TreeNode | null): boolean {
    let isValid = true;
    let currValue = -Infinity;

    function inOrderTraversal(parent: TreeNode | null) {
        if (!isValid) {
            return isValid;
        }
        if (parent.left) {
            inOrderTraversal(parent.left);
        }
        isValid = isValid && parent.value > currValue;
        currValue = parent.value;
        if (parent.right) {
            inOrderTraversal(parent.right);
        }
    }

    if (!root) {
        isValid = true;
    } else {
        inOrderTraversal(root);
    }

    return isValid;
}
