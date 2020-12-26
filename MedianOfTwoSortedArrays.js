/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    for(var i = 0; i < nums2.length; i++){
        nums1.push(nums2[i]);
    }
    // var swapped;
    // do {
    //     swapped = false;
    //     for (var i=0; i < nums1.length-1; i++) {
    //         if (nums1[i] > nums1[i+1]) {
    //             var temp = nums1[i];
    //             nums1[i] = nums1[i+1];
    //             nums1[i+1] = temp;
    //             swapped = true;
    //         }
    //     }
    // } while (swapped);
    nums1.sort(function(a,b){return a - b});
    
    if(nums1.length%2 == 0){
        return (nums1[Math.floor(nums1.length/2)]+nums1[(Math.floor(nums1.length/2)) - 1]) / 2
    }
    return nums1[Math.floor(nums1.length/2)]
}
