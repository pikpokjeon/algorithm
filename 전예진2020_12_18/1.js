const wordArry = ['a0b1c2','covid2019','00000n','exem','0000']

const insertWord = (wordArry, callback) => 
{

  wordArry.forEach( word  => {
    console.log('word :',word);
    callback(word)
  });

}

const solution = ( word ) =>
{
  const wordArry = word.split('');
  const onlyStrArry = wordArry.filter( e => e instanceof String === e instanceof String)


}

insertWord(wordArry, solution)