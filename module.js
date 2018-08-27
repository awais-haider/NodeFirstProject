
/*
Reading File
 */

var fs = require('fs');

var readableStreamImp = fs.createReadStream(__dirname + '/package.json', {encoding: 'utf8', highWaterMark: 20});


readableStreamImp.on("data", function (chunk) {

    console.log(chunk)



});




var data = fs.readFileSync(__dirname + '/package.json', 'utf8');

console.log(data);



var data = fs.readFile(__dirname + '/package.json', 'utf8', function (err, data) {

    console.log(data);


});


console.log("Done");

//call apply


var callAndApply = {

    name: 'awais',
    greet : function (param) {

        console.log(`Hello ${this.name} ${param}`);

    }

}


callAndApply.greet();
callAndApply.greet.apply({name : 'haider'}, ['G aya nou'] );
callAndApply.greet.call({name : 'haider again'}, 'G aya nou');






//template testing

var s1 = 'Hello World ';
var s2 = `Awais  ${ s1 }`;

console.log(s2);


/*
Testing inheritence + Event Emitter Example
 */
var util = require('util');
var nodeEventsEmitter = require('events');


function Greeter() {

    this.greeting = 'Hello World';
}


util.inherits(Greeter, nodeEventsEmitter);


Greeter.prototype.greet  = function (data) {

    console.log(this.greeting + ' ' + data);
    this.emit("greet", data);


}





var greeter = new Greeter();


greeter.on("greet", function (data) {

    console.log("Someone greeted test "+data );

})

greeter.greet('AWais HAider');




var Emitter = require('./emitter');

var emitFunc = new Emitter();

emitFunc.on('greet',function () {

    console.log("hello from greet 1");

    
});



emitFunc.on('greet', function(){


    console.log("hello from greet 2");

});


console.log('Test Module')


emitFunc.emit('greet');


/**

 Testing module

 */




/*
Testing how prototype works
 */
function Person(firstname, lastname) {

    this.firstname = firstname;
    this.lastname  =lastname;

}


Person.prototype.greet = function () {

    console.log("Hello "+ this.firstname + " " + this.lastname);

}

var personObject = new Person("awais", "haider");

personObject.greet();





/*

Creating object and calling its attributes

 */

var person = {


    name: 'Awais Haider',
    age: 12,
    testFunction: function(){

        console.log('helllllo');
        console.log('test func!' +' '+ this.name);

    }

};


console.log(person.name);
console.log(person['age']);
person.testFunction();


var hello = function testNewModule() {

    console.log('Test Module')

}


module.exports = hello;