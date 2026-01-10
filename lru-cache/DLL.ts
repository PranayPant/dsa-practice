export class DLLNode {
    prev: DLLNode | null;
    next: DLLNode | null;
    key: string;
    value: unknown;
    constructor(key: string, value: unknown){
        this.value = value;
        this.key = key;
        this.prev = null;
        this.next = null;
    }
}

export class DLL {
    #head: DLLNode;
    #tail: DLLNode;
    count: number;

    constructor(){
        this.#head = new DLLNode("", "");
        this.#tail = new DLLNode("", "");
        this.#head.prev = this.#tail;
        this.#tail.next = this.#head;
        this.count = 0;
    }

    insertNodeAtHead(node: DLLNode){
        const prevNode = this.#head.prev;
        prevNode.next = node;
        node.prev = prevNode;
        node.next = this.#head;
        this.#head.prev = node;
        this.count++;
    }

    deleteTailNode(){
        return this.removeNode(this.#tail.next);
    }

    createNode(key: string, value: unknown){
        return new DLLNode(key, value);
    }

    removeNode(node: DLLNode){
        const prevNode = node.prev;
        const nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        node.prev = null;
        node.next = null;
        this.count--;
        return node;
    }
}
