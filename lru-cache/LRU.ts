import { DLL, DLLNode } from "./DLL";

export class LRUCache {
    dll: DLL;
    map: Map<string, DLLNode>;
    capacity: number;

    constructor(capacity: number){
        if(capacity <= 0){
            throw new Error("Capacity must be a positive number!")
        }
        this.dll = new DLL();
        this.map = new Map<string, DLLNode>();
        this.capacity = capacity;
    }

    #getNodeByKey(key: string){
        const node = this.map.get(key);
        this.dll.removeNode(node);
        this.dll.insertNodeAtHead(node);
        return node;
    }

    getKey(key: string){
        if(!key || !this.map.has(key)){
            return null;
        }
        const node = this.#getNodeByKey(key);
        return node.value;
    }

    putKey(key: string, value: unknown){
        if(!key) return;

        if(this.map.has(key)){
            const node = this.#getNodeByKey(key);
            node.value = value;
            return;
        }

        if(this.dll.count === this.capacity){
            const node = this.dll.deleteTailNode();
            this.map.delete(node.key);
        }
        const node = this.dll.createNode(key, value);
        this.dll.insertNodeAtHead(node);
        this.map.set(key, node);
    }
}