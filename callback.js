var names  = ['adnan', 'rakib ', 'rafid', 'robi ','rasel'];

function traverse(names,callback){

    for(var i= 0 ; i<names.length;i++){
        callback(names[i])
    }

}

traverse(names, function(name){
    console.log(name.toUpperCase());
})

