export class MinHeap {
    // We store the tree in a simple number array.
    #heap: number[];

    constructor() {
        this.#heap = [];
    }

    // --- PUBLIC METHODS ---

    /**
     * Returns the minimum element (Root) without removing it.
     * Time: O(1)
     */
    peek(): number | null {
        return this.#heap.length === 0 ? null : this.#heap[0];
    }

    /**
     * Adds a new value to the heap.
     * Time: O(log N)
     * Strategy: Add to the very bottom (end), then "promote" it up.
     */
    push(val: number): void {
        // 1. Add the new value to the end of the array (bottom-right of tree)
        this.#heap.push(val);

        // 2. Fix the Heap Property (Bubble Up)
        // The new element might be smaller than its parent, violating the rule.
        this.#bubbleUp(this.#heap.length - 1);
    }

    /**
     * Removes and returns the minimum element (Root).
     * Time: O(log N)
     * Strategy: Swap root with the last element, remove the last, then "demote" the new root.
     */
    pop(): number | null {
        if (this.#heap.length === 0) return null;

        // 1. Store the min value (the root) to return later
        const min = this.#heap[0];

        // 2. Take the LAST element from the heap...
        const last = this.#heap.pop()!;

        // 3. ...and put it at the ROOT (index 0).
        // (If heap was size 1, we are done).
        if (this.#heap.length > 0) {
            this.#heap[0] = last;

            // 4. Fix the Heap Property (Bubble Down)
            // This new root is likely huge, so it needs to sink down.
            this.#bubbleDown(0);
        }

        return min;
    }

    size(): number {
        return this.#heap.length;
    }

    // --- PRIVATE HELPERS (The Mechanics) ---

    /**
     * The "Promotion" Logic.
     * Checks if the element at 'index' is smaller than its parent.
     * If so, swap them and keep going up.
     */
    #bubbleUp(index: number): void {
        while (index > 0) {
            const parentIdx = Math.floor((index - 1) / 2);

            // Invariant Check: Is the Parent already smaller?
            // If yes, the heap property is satisfied. We stop.
            if (this.#heap[parentIdx] <= this.#heap[index]) break;

            // Violation! Parent is bigger than child. Swap them.
            this.#swap(index, parentIdx);

            // Move our pointer up to the parent's old position
            index = parentIdx;
        }
    }

    /**
     * The "Demotion" Logic.
     * Checks if the element at 'index' is larger than its children.
     * If so, swap with the SMALLEST child (to maintain Min-Heap rule).
     */
    #bubbleDown(index: number): void {
        const lastIdx = this.#heap.length - 1;

        while (true) {
            const leftIdx = 2 * index + 1;
            const rightIdx = 2 * index + 2;

            // Assume the current node is the smallest... for now.
            let smallest = index;

            // 1. Compare with Left Child
            if (leftIdx <= lastIdx && this.#heap[leftIdx] < this.#heap[smallest]) {
                smallest = leftIdx;
            }

            // 2. Compare with Right Child
            // (Note: we compare with 'smallest', which might already be Left Child)
            if (rightIdx <= lastIdx && this.#heap[rightIdx] < this.#heap[smallest]) {
                smallest = rightIdx;
            }

            // 3. If the current node is indeed the smallest, we are done.
            if (smallest === index) break;

            // 4. Else, swap with the smaller child
            this.#swap(index, smallest);

            // 5. Move pointer down to follow the element
            index = smallest;
        }
    }

    #swap(i: number, j: number): void {
        [this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]];
    }
}
