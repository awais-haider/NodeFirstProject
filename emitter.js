

/*
Creating person object
 */
var person = {

    firstname: '',
    secondname: '',
    greet : function () {

        console.log(this.firstname + " " + this.secondname);
    }

}

/*
Cloning person's object
 */
var clonePerson = Object.create(person);

clonePerson.firstname = 'awais';
clonePerson.secondname='haider';


clonePerson.greet();


/*
Practicing Event Emitters by creating own
 */
function Emitter() {

    this.events = {};


}



Emitter.prototype.on = function (type, listener) {
    
    this.events[type] =  this.events[type] || [] ;
    this.events[type].push(listener);


}


Emitter.prototype.emit = function (type) {

    //if there are some values for function listeners
    if(this.events[type] ){

        this.events[type].forEach(function(listener){

            listener();

        });

    }
    
}


module.exports = Emitter;