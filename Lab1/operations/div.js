module.exports = (...arg) => {
    return arg.reduce ((agg , val) => {
        let validate = require('./validator');
        validate(val);
        if (val !== 0)
            return agg /= val;
        else      
            throw "Can not divide by zero";
    })   
}