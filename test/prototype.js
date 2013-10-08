// prototype test
// by Zeno Zeng

var Example, example, example2;

Example = (function() {

    function Example() {
        this.info = function() {
            var object = {}
            object["this.a"] = this.a;
            object["this.b"] = this.b;
            object["Example.a"] = Example.a;
            object["Example.b"] = Example.b;
            console.log(object);
        }
    }

    Example.a = 1;

    Example.prototype.b = 100;

    return Example;

})();

example = new Example();
example.info();
example.a = 2;
example.b = 200;
example.info();
Example.b = "hello b";
example.info();
example2 = new Example();
example.info();
example2.info();

// Object {this.a: undefined, this.b: 100, Example.a: 1, Example.b: undefined}
// Object {this.a: 2, this.b: 200, Example.a: 1, Example.b: undefined}
// Object {this.a: 2, this.b: 200, Example.a: 1, Example.b: "hello b"}
// Object {this.a: 2, this.b: 200, Example.a: 1, Example.b: "hello b"}
// Object {this.a: undefined, this.b: 100, Example.a: 1, Example.b: "hello b"}

// 结论
// 修改 Example 在全局是共享的，
// 而 this 里头的是在具体实例中独立的（Example.prototype.b）
