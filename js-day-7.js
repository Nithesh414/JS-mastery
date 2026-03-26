/* object concepts*/

let car={
  brand:'audi',
  model:'s3',
  price:40
}

console.log("brand" + car.brand + " " +" model" + car['model'] + "price" + car.price)


for(let key in car){
    if(key == "brand"){
        console.log("available")
    }
} 

let marks = {
math: 90,
science: 85,
english: 95
}

if(marks.math > marks.science && marks.math > marks.english){
    console.log("math")
}
else if(marks.science > marks.english ){
    console.log("science");
    
}
else{
    console.log("english");
    
}
