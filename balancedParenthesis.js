// #3 Verify if a string balanced parenthesis
(function isBalanced(str){
  const splittedStr = str.split('');
  console.log(`🚀 🚀  ->  ~ isBalanced ~ splittedStr`, splittedStr);
  let oppeningParenthesis = 0;
  let closingParenthesis = 0;

  splittedStr.forEach((char) => {
    if (char === `(`) oppeningParenthesis++;
    else if(char === `)`) closingParenthesis++;
  });

  if (oppeningParenthesis === closingParenthesis) console.log(`Balanced parenthesis`);
  else console.log(`NOT balanced parenthesis`)

})(`()()(())`)