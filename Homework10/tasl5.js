let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

function mapBuilder(keys, values) {
    let map = new Map();
    for (let key of keys) {
        map.set(key, values[key - 1]);
    }
    return map;
};

console.log(map.size); // 4
console.log(map.get(2)); // "span"
