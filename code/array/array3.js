// export default (arr, n) => {
//     // 计数器
//     let max = 0
//     for (let i = 0; i < arr.length -1; i++) {
//         if (arr[i] === 0) {
//             if (i === 0 && arr[1] === 0) {
//                 max++
//                 i++
//             } else if (arr[i] === 0 && arr[i - 1] === 0 && arr[i + 1] === 0) {
//                 max++
//                 i++
//             }
//         }
//     }
//     return max >= n
// }
// 第二种
export default (flowerbed, n) => {
    for (let i = 0; i < flowerbed.length; i++) {
       if (!flowerbed[i] && !flowerbed[i-1] && !flowerbed[i+1]) {
           flowerbed[i] = 1
           n--
       }
    }
    return n <= 0
}