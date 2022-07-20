function bindActionCreatorsHelper(actions, creator){
    result = {}
    for (const action in actions) {
        result[action] = function (...arg) {
            return creator(actions[action](...arg))
        }
    }

    return result
}

module.exports = {
    bindActionCreatorsHelper
}