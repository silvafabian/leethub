/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0 
    let result = 0
    const map = new Map()
    
    for (i = 0; i < s.length; ++i) {
        const c = s[i]
        const last = map.get(c)
        if (last >= start) start = last + 1;
        map.set(c, i)
        const count = i - start + 1
        if (count > result) result = count
      }
  return result; 
};