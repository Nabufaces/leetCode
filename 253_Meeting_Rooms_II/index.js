function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

class Heap {
    constructor(arr = []) {
        this.heapArr = [...arr];
        this.build();
    }
    build() {
        for(let i = Math.floor(this.size() / 2); i >= 0; i--) {
            this.siftDown(i);
        }
    }
    size() {
        return this.heapArr.length;
    }
    top() {
        return this.size() ? this.heapArr[0] : null;
    }
    insert(val) {
        this.heapArr.push(val);
        this.siftUp(this.size() - 1);
    }
    pop() {
        const arr = this.heapArr;
        const max = arr.pop();
        if(arr.length) {
            arr[0] = max;
            this.siftDown(0);
        }
    }
    siftDown(i) {
        const arr = this.heapArr, size = arr.length;
        let child = 2 * i + 1;
        while(child < size) {
            if(child + 1 < size && arr[child] > arr[child + 1]) {
                child += 1;
            }
            if(arr[i] > arr[child]) {
                swap(arr, i, child);
                i = child;
                child = 2 * i + 1;
            } else {
                break;
            }
        }
    }
    siftUp(i) {
        const arr = this.heapArr;
        let root = Math.floor((i - 1) / 2);
        while(root >= 0) {
            if(arr[root] > arr[i]) {
                swap(arr, root, i);
                i = root;
                root = Math.floor((i - 1) / 2);
            } else {
                break;
            }
        }
    }
}

/**
 * @param {number[][]} intervals
 * @return {number}
 */
function minMeetingRooms(intervals) {
    const heap = new Heap();
    intervals.sort((a, b) => a[0] - b[0]);

    for(let i = 0; i < intervals.length; i++) {
        if(heap.size() && heap.top() < intervals[i][0]) {
            heap.pop();
        } 
        heap.insert(intervals[i][1]);
    }
    return heap.size();
}

/**
 * TestCase
console.log(minMeetingRooms([[0,30],[5,10],[15,20]])); // 2
console.log(minMeetingRooms([[9,15],[5,8]])); // 1
 */