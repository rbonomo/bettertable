import Primitive from './Primitive.js';

class Model extends Primitive {
    constructor(options) {
        super(options);

        Object.assign(this, options);
    }
}

export default Model;