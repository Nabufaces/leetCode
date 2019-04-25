class Trie {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
    /**
     * Inserts a word into the trie. 
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let cur = this;
        for(let s of word) {
            if(!cur.children.has(s)) {
                cur.children.set(s, new Trie());
            }
            cur = cur.children.get(s);
        }
        cur.isEnd = true;
    }
    /**
     * Returns if the word is in the trie. 
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.startsWith(word, true);
    }
    /**
     * Returns if there is any word in the trie that starts with the given prefix. 
     * @param {string} word
     * @return {boolean}
     */
    startsWith(word, isComplete = false) {
        let cur = this;
        for(let s of word) {
            if(!cur.children.has(s)) return false;
            cur = cur.children.get(s);
        }
        return isComplete ? cur.isEnd : true;
    }
}

/**
 * TestCase
const trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
 */