
/*
COLORS, black, red, green, yellow, blue , magenta, cyan, white 
BACKGROUND , bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite
*/
// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    buildHeap(array) { //use siftDown
        const firstParentInd = this.getParentInd(array.length - 1);
        for (let currentInd = firstParentInd; currentInd >= 0; currentInd--) {
            this.siftDown(array, currentInd);
        }
        return array;
    }

    insert(value) {
        this.heap[this.heap.length] = value;
        this.siftUp(this.heap.length - 1);
    }

    remove() {
        var currentInd = this.heap.lenght - 1;
        var parentInd = this.getParentInd(currentInd);

        while (parentInd >= 0) {
            currentInd = parentInd;
            parentInd = this.getParentInd(currentInd);
        }
        this.heap[currentInd] = this.heap[this.heap.lenght - 1];
        this.heap.pop();
        this.siftDown(this.heap, currentInd);
    }

    siftUp(ind) {
        var currentInd = ind;
        var parentInd = this.getParentInd(currentInd);

        while (this.heap[currentInd] < this.heap[parentInd]) {
            this.swap(this.heap, currentInd, parentInd);
            currentInd = parentInd;
            parentInd = this.getParentInd(currentInd);
        }
    }

    siftDown(arr, ind) {
        var currentInd = ind;
        var leftInd = this.getChildInds(currentInd)[0];
        var rightInd = this.getChildInds(currentInd)[1];

        if (arr[leftInd]) {
            var lessChildInd;
            if (arr[rightInd]) {
                if (arr[leftInd] < arr[rightInd]) lessChildInd = leftInd;
                else lessChildInd = rightInd;
            } else {
                lessChildInd = leftInd;
            }
            if (arr[currentInd] > arr[lessChildInd]) {
                this.swap(arr, currentInd, lessChildInd);
            } else return;

            currentInd = lessChildInd;
            this.siftDown(arr, lessChildInd);
        } else return;
    }

    peek() {

        return this.heap[0]

    }

    getParentInd(childInd) {
        return Math.floor((childInd - 1) / 2);
    }

    getChildInds(ind) {
        return [ind * 2 + 1, ind * 2 + 2];
    }

    swap(arr, indA, indB) {
        var valueAtA = arr[indA];
        var valueAtB = arr[indB];
        arr[indA] = valueAtB;
        arr[indB] = valueAtA;
    }
}

var arr = [32, 11, 5, -9, 36, 22, 3, 108, 7, 15];
var heap = new MinHeap(arr);
console.log(heap);
console.log(heap.peek()); 