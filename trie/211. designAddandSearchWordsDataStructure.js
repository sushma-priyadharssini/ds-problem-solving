class TrieNode {
    children = new Map();
    isWord = false;
}

export default class WordFinder {
    constructor() {
        this.trie = new TrieNode();
    }
    /**
     * @param {string} word
     */
    addWord(word) {
        let node = this.trie;

        for (let ch of word) {
            if (!node.children.has(ch)) {
                node.children.set(ch, new TrieNode());
            }
            node = node.children.get(ch)
        }
        node.isWord = true;
    }

    searchInNode(word, node) {
        for (let i = 0; i < word.length; i++) {
            const ch = word[i];

            if (!node.children.has(ch)) {
                if (ch === ".") {
                    let found = false;
                    node.children.forEach((child) => {
                        if (this.searchInNode(word.substring(i + 1), child)) {
                            found = true
                        }
                    })
                    return found;
                } else {
                    return false;
                }
            } else {
                node = node.children.get(ch)
            }
        }
        return node.isWord;
    }

    /**
     * @param {string} word
     * @returns {boolean}
     */
    search(word) {
        return this.searchInNode(word, this.trie);
    }
}