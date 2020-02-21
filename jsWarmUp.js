var list = [4,7,9,10,11]

var sum = 0
for (var i = 0;i<list.length; i++){
    sum+=list[i]
}

console.log(sum)

var sum = 0
for (var i = 0;i<list.length; i++){
    if (list[i] % 2 === 0){
    sum+=list[i]}
}


var sum = 0
for (var i = 0;i<list.length; ++i){
    if (list[i] > 5){
     sum+=list[i]}
}

console.log(sum)



var dig = ""
for (var i = 0;i<list.length; ++i){

     dig+=list[i]
}

var sum = 0
for (var i = 0; i<dig.length; ++i){
	sum+=phraseInt(list[i])
}

console.log(sum)

