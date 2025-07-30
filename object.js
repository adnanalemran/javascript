var parson = {};

parson.name = "adnan";
parson.age = 26;
parson.print = function () {
  console.log(this.name + " " + this.age);
};


parson.print();


// anather way 

var parson1 ={
    name:"Adnan",
    age: 26,
    Fullname : ['adnan', 'al','emran'],
    print:function(){
        console.log(this.name, this.age, this.Fullname);
    }
}
parson1.print();

for (var i in parson1){
    console.log( [i]);
}