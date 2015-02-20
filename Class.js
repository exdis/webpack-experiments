import SuperClass from './SuperClass';

class TestClass extends SuperClass {
    constructor() {
        this.template = require('raw!./templates/template.tpl');
        console.log(this.template);
    }
}

export default TestClass;

