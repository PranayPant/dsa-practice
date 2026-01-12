interface User {
    userId: string;
    score: number;
    timestamp: number;
}
interface ITopK {
    getTopK: (k: number) => User[];
    insert: (userId: string, score: number, timestamp?: number) => void;
}
class TopK implements ITopK {
    #topK: User[] = [];
    #userMap = new Map<string, User>(); // map userId:index
    getTopK(k: number) {
        return this.#topK.slice(0, k);
    }
    insert(userId: string, score: number, timestamp?: number) {
        const newUser: User = { userId, score, timestamp: timestamp ?? Date.now() };
        if (this.#userMap.has(userId)) {
            this.#removeUser(this.#userMap.get(userId));
        }

        const insertIndex = this.#findInsertLocation(newUser);
        this.#userMap.set(userId, newUser);
        this.#topK.splice(insertIndex, 0, newUser);
    }

    #removeUser(user: User) {
        // Find topK index by userId -> O(1)
        // Delete that user -> O(K) using splice
        const targetIndex = this.#topK.indexOf(user);

        if (targetIndex === -1) {
            throw new Error("User does not exist!");
        }
        this.#topK.splice(targetIndex, 1);
    }

    /**
     * Higher scores come first
     * Timestamp to break ties - earlier timestamps come first
     * @param newUser
     * @param existingUser
     * @returns
     */
    #compareUsers(a: User, b: User) {
        // Descending Score
        if (a.score !== b.score) {
            return b.score - a.score;
        }
        // Ascending Timestamp (Older is better)
        return a.timestamp - b.timestamp;
    }

    #findInsertLocation(newUser: User) {
        // Use Binary Search to find location -> O(logK)
        let low = 0,
            high = this.#topK.length;
        while (low < high) {
            const mid = (low + high) >>> 1;
            if (this.#compareUsers(newUser, this.#topK[mid]) < 0) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        return low;
    }
}
