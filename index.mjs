class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Adds a new node containing value to the end of the list
    append(value) {
        if (!this.head) {
            this.head = new Node(value);
            return;
        };

        this.tail().nextNode = new Node(value);
    }

    // Adds a new node containing value to the start of the list
    prepend(value) {
        let node = this.head;
        this.head = new Node(value);
        this.head.nextNode = node;
    }

    // Returns the total number of nodes in the list
    size() {
        if (!this.head) {
            return -1;
        }

        let count = 1;
        let node = this.head;

        while (node.nextNode) {
            count++;
            node = node.nextNode;
        }
        return count;
    }

    // Returns the first node in the list
    head() {
        return this.head;
    }

    // Returns the last node in the list
    tail() {
        if (!this.head) {
            return null;
        } else if (this.head.nextNode == null) {
            return this.head;
        }

        let node = this.head;

        while (node.nextNode) {
            node = node.nextNode;
        }
        return node;
    }

    // Returns the node at the given index
    at(index) {
        if (index > this.size()) {
            return null;
        } else if (index == 0) {
            return this.head;
        }

        let count = 0;
        let node = this.head;

        while (count != index) {
            node = node.nextNode;
            count++;
        }
        return node;
    }

    // Removes the last element from the list
    pop() {
        if (!this.head) {
            return null;
        } else if (!this.head.nextNode) {
            return this.head = null;
        }

        let node = this.head;

        while (node.nextNode) {
            if (!node.nextNode.nextNode) {
                node.nextNode = null;
                break;
            }
            node = node.nextNode;
        }
    }

    // Returns true if the passed in value is in the list and otherwise returns false
    contains(value) {
        if (!this.head) {
            return null;
        }

        let node = this.head;

        while (node != null) {
            if (node.value === value) {
                return true;
            }
            node = node.nextNode;
        }
        return false;
    }

    // Returns the index of the node containing value, or null if not found
    find(value) {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        let count = 0;

        while (node !== null) {
            if (node.value === value) {
                return count;
            }
            node = node.nextNode;
            count++;
        }
        return null;
    }

    // Represents the LinkedList objects as strings in the console
    toString() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        let string = `( ${this.head.value} ) -> `

        while (node.nextNode) {
            node = node.nextNode;
            string = string + `( ${node.value} ) -> `;
        }
        return console.log(string + "null");
    }

    // Inserts a new node with the provided value at the given index
    insertAt(value, index) {
        if (!this.head || index > this.size()) {
            return null;
        }

        if(index === 0) {
            this.prepend(value);
            return;
        } else if (index > this.size()) {
            this.append(value);
            return;
        }

        let insertNode = new Node(value);
        let nodeIndex = this.at(index);
        insertNode.nextNode = nodeIndex;
        this.at(index - 1).nextNode = insertNode;
    }

    // Removes the node at the given index
    removeAt(index) {
        if (!this.head || index > this.size()) {
            return null;
        } else if (index === 0) {
            this.head = this.head.nextNode;
            return;
        };

        let nodeBefore = this.at(index - 1);
        let nodeAfter = this.at(index + 1);

        nodeBefore.nextNode = nodeAfter;
    }
}

export {
    LinkedList
}