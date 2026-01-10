export class TreeNode {
    left: TreeNode | null;
    right: TreeNode | null;
    value: number;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BST {
    root: TreeNode;
    count: number;

    constructor() {
        this.count = 0;
    }

    #addNode(parentNode: TreeNode, value: number) {
        if (value < parentNode.value) {
            if (!parentNode.left) {
                parentNode.left = new TreeNode(value);
                this.count++;
            } else {
                this.#addNode(parentNode.left, value);
            }
        } else if (value > parentNode.value) {
            if (!parentNode.right) {
                parentNode.right = new TreeNode(value);
                this.count++;
            } else {
                this.#addNode(parentNode.right, value);
            }
        }
        return;
    }

    #leftToRight(targetNode: TreeNode, path: number[]) {
        if (targetNode.left) {
            this.#leftToRight(targetNode.left, path);
        }
        path.push(targetNode.value);
        if (targetNode.right) {
            this.#leftToRight(targetNode.right, path);
        }
    }

    insert(value: number) {
        if (!this.root) {
            this.root = new TreeNode(value);
        } else {
            this.#addNode(this.root, value);
        }
    }

    inOrderTraversal(path: number[], from?: TreeNode) {
        const startNode = from ?? this.root;
        if (!startNode) return;
        this.#leftToRight(startNode, path);
    }

    levelOrderTraversal(): TreeNode[] {
        if (!this.root) {
            return [];
        }
        const children: TreeNode[] = [this.root];
        for (const child of children) {
            if (child.left) {
                children.push(child.left);
            }
            if (child.right) {
                children.push(child.right);
            }
        }

        return children;
    }
}
