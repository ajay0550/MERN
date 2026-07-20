
let count = 0;

export const logger = (req, res, next) => {

    console.log('request came');
    count += 1;
    console.log(count);

    next();
}