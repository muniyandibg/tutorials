//let us count words in a sentence and show how many times
// the words were repeated...
let sentence = "Rose is a rose is a rose a rose"
let wordArray = sentence.toLowerCase().split(" ")

wordArray.map((word) => {
  if (wordArray.length) {
    let count = wordArray.filter((a) => a == word).length
    wordArray = wordArray.filter((a) => a != word)
    console.log(word + " ==> " + count)
  }
})
