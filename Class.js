import SuperClass from './SuperClass';

class TestClass extends SuperClass {
    constructor() {
        this.template = require('raw!./templates/template.tpl');
        this.jadeTemplate = require('raw!jade-html!./templates/template.jade');
    }

		getTemplate() {
			  return this.template;
		}

		setTemplate(template) {
			  this.template = template;
		}
}

export default TestClass;

