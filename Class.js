import SuperClass from './SuperClass';

class TestClass extends SuperClass {
    constructor() {
        this.template = require('raw!./templates/template.tpl');
        this.jadeTemplate = require('raw!jade-html!./templates/template.jade');
        console.log(this.template);
    }
}

export default TestClass;

