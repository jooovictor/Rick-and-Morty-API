

exports.verifyConditionString = (string) => {
        if (!string || typeof string !== 'string' || !isNaN(Number(string))) {
            return true
        } else {
            return false
        }
} 

exports.verifyConditionNumber = (number) => {
    if (number && isNaN(Number(number))) {
        return true
    } else {
        return false
    }
}