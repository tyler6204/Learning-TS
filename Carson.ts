

function Main() {
  const inputArray = ["orange", "grape", "banana", "apple", "kiwi", "pear", "lemon", "angle", "answer", "basic", "candy", "pene"];
  filterOddNumbersOut(inputArray); //should print 3
}

Main();



// using filter, filter the strings that dont start with 'a' and ends with 'e'

function filterOddNumbersOut(inputArray: string[]){
  const total = inputArray.filter((current) => (current[0] == "a" && current[current.length - 1] == "e")); 

  console.log(total); 

}

// 5318008 BOOBIES

