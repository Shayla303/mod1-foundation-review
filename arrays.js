function Iterator(input) {

}
Iterator.prototype.createArray = function(arr) {
  // input.toString()

  if (typeof arr[0] === 'number' ) {
    var total = 0
    arr.forEach(function(num){
      total += num;
    })
    return total
  } else if (typeof arr[0] === 'string') {
    var text = ''
    arr.forEach(function(word, i){
      if (i === arr.length - 1) {
        text += word
      } else {
        text += word + ' ';
      }
    })
    return text
  }
}

Iterator.prototype.yell = function(words) {

  var text = ''
  words.forEach(function(word, i){
    if (i === words.length - 1) {
    text += word.toUpperCase() + '!';
  } else {
    text += word.substring(0, word.length - 2 ).toUpperCase() + '! '
  }
  })
  return text
}

Iterator.prototype.sum = function(arr){
  var total = 0;
  arr.forEach(function(num){
    total += num;
  })
  return total
}

Iterator.prototype.squareAndSum = function(arr){
  var total = 0;
  arr.forEach(function(num){
    total += num * num;
  })
  return total
}


module.exports = Iterator;
