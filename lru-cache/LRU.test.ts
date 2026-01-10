import { LRUCache } from "./LRU";

describe('LRUCache', () => {
    test('should initialize with given capacity', () => {
        const cache = new LRUCache(3);
        expect(cache.capacity).toBe(3);
        expect(cache.dll.count).toBe(0);
    });

    test('should throw error for negative capacity', () => {
        expect(() => new LRUCache(-1)).toThrow("Capacity must be a positive number!");
    });

    test('should put and get a single key', () => {
        const cache = new LRUCache(2);
        cache.putKey('key1', 'value1');
        expect(cache.getKey('key1')).toBe('value1');
    });

    test('should return null for non-existent key', () => {
        const cache = new LRUCache(2);
        expect(cache.getKey('nonexistent')).toBeFalsy();
    });

    test('should return null for empty key', () => {
        const cache = new LRUCache(2);
        expect(cache.getKey('')).toBe(null);
    });

    test('should update value for existing key', () => {
        const cache = new LRUCache(2);
        cache.putKey('key1', 'value1');
        cache.putKey('key1', 'updatedValue');
        expect(cache.getKey('key1')).toBe('updatedValue');
        expect(cache.dll.count).toBe(1);
    });

    test('should evict least recently used item when capacity is reached', () => {
        const cache = new LRUCache(2);
        cache.putKey('key1', 'value1');
        cache.putKey('key2', 'value2');
        cache.putKey('key3', 'value3'); // key1 should be evicted
        expect(cache.getKey('key1')).toBeFalsy();
        expect(cache.getKey('key2')).toBe('value2');
        expect(cache.getKey('key3')).toBe('value3');
    });

    test('should move accessed item to front (most recently used)', () => {
        const cache = new LRUCache(2);
        cache.putKey('key1', 'value1');
        cache.putKey('key2', 'value2');
        cache.getKey('key1'); // Access key1, making it most recent
        cache.putKey('key3', 'value3'); // key2 should be evicted, not key1
        expect(cache.getKey('key1')).toBe('value1');
        expect(cache.getKey('key2')).toBeFalsy();
        expect(cache.getKey('key3')).toBe('value3');
    });

    test('should handle capacity of 1', () => {
        const cache = new LRUCache(1);
        cache.putKey('key1', 'value1');
        expect(cache.getKey('key1')).toBe('value1');
        cache.putKey('key2', 'value2');
        expect(cache.getKey('key1')).toBeFalsy();
        expect(cache.getKey('key2')).toBe('value2');
    });

    test('should store different data types as values', () => {
        const cache = new LRUCache(3);
        cache.putKey('num', 42);
        cache.putKey('str', 'hello');
        cache.putKey('obj', { name: 'test' });
        expect(cache.getKey('num')).toBe(42);
        expect(cache.getKey('str')).toBe('hello');
        expect(cache.getKey('obj')).toEqual({ name: 'test' });
    });

    test('should not add key if empty key is provided to putKey', () => {
        const cache = new LRUCache(2);
        cache.putKey('', 'value');
        expect(cache.dll.count).toBe(0);
    });

    test('should handle multiple operations in sequence', () => {
        const cache = new LRUCache(3);
        cache.putKey('a', 1);
        cache.putKey('b', 2);
        cache.putKey('c', 3);
        expect(cache.dll.count).toBe(3);
        
        cache.getKey('a'); // a is now most recent
        cache.putKey('d', 4); // b should be evicted
        
        expect(cache.getKey('b')).toBeFalsy();
        expect(cache.getKey('a')).toBe(1);
        expect(cache.getKey('c')).toBe(3);
        expect(cache.getKey('d')).toBe(4);
    });

    test('should update existing key and move to front', () => {
        const cache = new LRUCache(2);
        cache.putKey('key1', 'value1');
        cache.putKey('key2', 'value2');
        cache.putKey('key1', 'newValue1'); // Update and move to front
        cache.putKey('key3', 'value3'); // key2 should be evicted
        
        expect(cache.getKey('key1')).toBe('newValue1');
        expect(cache.getKey('key2')).toBeFalsy();
        expect(cache.getKey('key3')).toBe('value3');
    });
});