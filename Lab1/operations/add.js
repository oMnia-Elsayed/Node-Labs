module.exports = (...arg) => {
    return arg.reduce( (agg , val) => {
        return agg += val
    })
}