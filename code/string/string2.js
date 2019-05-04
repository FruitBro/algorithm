// a=0
// a^1 1
// a=1
// a^1 0


export default (str) => {
    // 建立数据结构，堆栈，保存数据
    let r = [] // 可以把数组用作队列或堆栈
    // 给定任意子输入都返回第一个符合条件的子串
    let match = (str) => {
        let j = str.match(/^(0+|1+)/)[0]
        let o = (j[0] ^ 1).toString().repeat(j.length) // 动态生成
        let reg = new RegExp(`(${j}${o})`)
        if (reg.test(str)) {
            return RegExp.$1
        } else {
            return ''
        }

    }
    // 通过for循环控制程序运行的流程
    for (let i = 0, len = str.length -1; i < len; i++) {
        const sub = match(str.slice(i))
        if (sub) {
            r.push(sub)
        }
        
    }
    return r
}