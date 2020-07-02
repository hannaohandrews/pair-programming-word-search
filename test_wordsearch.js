const wordSearch = (letters, word) => { 
  let temp = '';
  let horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
      if (l.includes(word)){
          return true
      } 
  }
  for(let i = 0 ; i < letters[0].length; i++){
      for(let j = 0; j < letters.length; j++){
          temp += letters[i][j];
      }
      if(temp === word){
          return true;
      }
  }
  return false;
}
  

module.exports = wordSearch