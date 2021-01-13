var asPython = {
    Range: (start, stop, step) => {
        if (typeof stop == 'undefined') {
            stop = start;
            start = 0;
        }
        if (typeof step == 'undefined') {
            step = 1;
        }
        if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
            return [];
        }
        var result = [];
        for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
            result.push(i);
        }
        return result;
    },
    GetElementFrom: (array) => {
        if (Array.isArray(array)){
            for (i=0; i<array.length; i++)
                yield array[i];
        }else{
            throw `Type of"${array}" not is array!`;
        }
    },

};

//export default asPython;

var arra = asPython.Range(3, 10);
console.log(asPython.GetElementFrom(arra).next());