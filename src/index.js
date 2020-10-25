// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix) {
        const towel = matrix.map((item, i) => {
            if (Array.isArray(item) && (i % 2 == 0)) {
                return item;
            } else {
                return item.reverse();
            }
        })

        return towel.flat();
    } else {
        return [];
    }
}
