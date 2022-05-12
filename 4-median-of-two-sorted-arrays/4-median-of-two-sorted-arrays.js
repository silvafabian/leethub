/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mergeArr = nums1.concat(nums2)
    let sortArr = mergeArr.sort((a,b) => a-b)
    let mid = 0
    let result = 0
    if (sortArr.length % 2 !== 0) {
        mid = Math.ceil(sortArr.length/2)
        result = sortArr[mid-1]
    } else {
        mid = sortArr.length/2
        let temp = mid-1
        result = (sortArr[mid]+sortArr[temp])/2
    }
    return result
};