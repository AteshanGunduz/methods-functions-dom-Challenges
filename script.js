// Challange 1

const restaurants = [
    {
      "name": "La Patisserie",
      "takeout": false,
      "rating": 5
    },
    {
      "name": "Cafe Geneva",
      "takeout": true,
      "rating": 6
    },
    {
      "name": "MuCafe",
      "takeout": true,
      "rating": 8
    },
    {
      "name": "Engin Balık",
      "takeout": false,
      "rating": 2
    }  
  ];
  
  document.getElementById("filterTakeoutBtn").addEventListener("click", filterTakeout);
  
   // Restaurant that offers takeout service

  function filterTakeout() {
    let rList = "\nThis restaurant offers takeaway service:\n";
    const hasTakeout = restaurants.filter(restaurant => restaurant.takeout);
    hasTakeout.forEach(restaurant => { 
      rList += `\n${restaurant.name}`;
    });
    
    document.getElementById("list").innerText = rList;
  }
  
  
  
  document.getElementById("high").addEventListener("click", filterRatings);

  // Restaurants that its ratings 5 and higher
  
  function filterRatings(){
    let restNames = "";
    let highRating = restaurants.filter(function(rest){
      return rest.rating >= 5
    })
  
     highRating.forEach(function(restaurant){
      restNames += restaurant.name + ", "
    })

    document.getElementById("high-list").innerText = restNames.slice(0, -2)
   
  }
  
  
  
  document.getElementById("cword").addEventListener("click", findingC )

 // Restaurants that its first letter starts with letter C
  
   function findingC(){
      let cword = ""
      let findC = restaurants.filter(function(restaurant){
         return restaurant.name[0] === "C"
      })
      
      findC.forEach(function(restaurant){
        cword += restaurant.name
      })
     
     document.getElementById("cword-list").innerText = cword
  
    }  




// Challange 2 Uppercases to Lowercase, Lowercases to Uppercase

const ANIMALS = ['fox', 'GOPHER', 'armadillo', 'MUSKRAT'];

let newArr = ANIMALS.map(function(str){
  return changeCase(str)
})


function changeCase(str) {
  if (/[a-z]/.test(str)) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
}


console.log(newArr);

document.getElementById("text").innerHTML = newArr




// Challange 3 BMI calculator

function calculateBMI(weightKg, heightCm) {
    return weightKg / ((heightCm / 100) * (heightCm / 100));
  }
  
  let weightKg = prompt("Weight kg");
  let heightCm = prompt("Height cm");
  
  let bmi = calculateBMI(weightKg, heightCm);
  
  document.write("BMI: " + bmi);




// Challange 4 without DOM  - get 10

  function reject(array, iteratorFunction) {
    return array.filter(function(number){
      return !iteratorFunction(number)
    })    
  }
  
  const numbers= [10, 20, 30]                

  const lessThanFifteen = reject(numbers, function(number){
     return number > 15;
  });
  console.log(lessThanFifteen) // [ 10 ]