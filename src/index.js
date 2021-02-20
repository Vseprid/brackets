module.exports = function check(str, bracketsConfig) {
    const pipes = bracketsConfig.some(e => e.some(x => x === '|'));
    if (pipes) {
        bracketsConfig.reduce()
    }
    const o = bracketsConfig.reduce((acc, [open, close]) => ({ ...acc, [close]: open }), {})
    const stack = []
    for (let s of str) {
        if (!o[s]) {
            stack.push(s)
        } else {
            if (stack.pop() !== o[s]) return false
        }
    }
    return stack.length === 0
}
