let arr = [2, 4, 6, 8, 10, 12, 14, 16];
function getLastItem(arr,b) {
    let lastItem = arr[arr.length-1];
    result = arr.slice(-b)
   if (b <=1 || !b){
       return lastItem
    } else return result
}
  