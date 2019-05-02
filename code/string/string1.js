// export default (str) => {
//     // 字符串按空格进行分隔，保存数组，数组中的元素的先后顺序就是单词的顺序
//     // 再对字符串中的单词进行反转
//     let arr = str.split(' ')
//     //
//     let result = arr.map(item => {
//         // 将数组进行遍历，然后对每个元素进行反转
//         return item.split('').reverse().join('')
//     })
//     return result.join(' ')
// }

// 简化代码
// export default (str) => {
//     return str.split(' ').map(item => {
//        return item.split('').reverse().join('')
//     }).join(' ')
// }

// export default (str) => {
//     return str.split(/\s/g).map(item => {
//        return item.split('').reverse().join('')
//     }).join(' ')
// }

export default (str) => {
    return str.match(/[\w']+/g).map(item => {
       return item.split('').reverse().join('')
    }).join(' ')
}
/**
 * 反转字符串中的单词
 * 知识点
 * String.prototype.split
 * String.prototype.match
 * Array.prototype.map
 * Array.prototype.reverse
 * Array.prototype.join
 * 思维方法
 * 要熟悉所有的API,知道在某些场景的实际应用
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split
 */



