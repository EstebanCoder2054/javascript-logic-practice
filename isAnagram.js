const isAnagram = (str1, str2) => {
  const formatStr = (str) => {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
  };

  const sortedStr1 = formatStr(str1);
  const sortedStr2 = formatStr(str2);

  return sortedStr1 === sortedStr2;
};
console.log(isAnagram("elbow!!", "below##"));

//not checking the white spaces and the special characters, it's better to use the first solution
const isAnagram2 = (str1, str2) => {
  let temp1 = str1.split("").sort().join("");
  let temp2 = str2.split("").sort().join("");
  return temp1 === temp2;
};
console.log(isAnagram2("elbow!!", "below##"));
