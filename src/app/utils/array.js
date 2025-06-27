/**
 * @param array - Array []
 * @return plain object
 **/
export const arrayToPlainObject = (array) => {
    let keys = array[0];
    let vals = array[1];
    let obj = {};
    keys.forEach(function (name, index) {
        if (!Object.prototype.hasOwnProperty.call(obj, name)) {
            obj[name] = vals[index];
        } else {
            if (obj[name] instanceof Array) {
                obj[name].push(vals[index]);
            } else {
                var val = obj[name];
                obj[name] = [val, vals[index]];
            }
        }
    });
    return obj;
}
