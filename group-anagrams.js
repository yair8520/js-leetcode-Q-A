/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const sortedWords = strs.map((word) => word.split("").sort().join(""));
  const map = {};
  const res = [];
  for (let i = 0; i < strs.length; i++) {
    if (!map[sortedWords[i]]) {
      map[sortedWords[i]] = [strs[i]];
    } else {
      map[sortedWords[i]].push(strs[i]);
    }
  }
  for (const key in map) {
    res.push(map[key]);
  }
  return res;
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
["aet", "aet", "ant", "aet", "ant", "abt"];

//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
