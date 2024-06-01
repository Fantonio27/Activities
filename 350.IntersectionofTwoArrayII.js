var intersect = function(nums1, nums2) {
    // console.log(nums1.indexOf(1))
    let array = []
    
    nums1.forEach((num)=>{
        let i = nums2.indexOf(num)
        if(i != -1){
            array.push(nums2[i])
            nums2.splice(i, 1)
        }
    })
    
    return array
};