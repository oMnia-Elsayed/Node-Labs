module.exports = (...arg) => {
    return arg.reduce( (agg , val)  =>{
        if (val !== 0)
            return agg %= val;
        else      
            throw "Can not divide by zero";
    })
    
}