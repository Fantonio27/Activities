var twoSum = function(nums, target) {
    // let numbersArray = nums.filter((num)=> num < target)
    // let n = 0
    for(let i = 0; i < nums.length; i++){
        
        for(let y = i + 1; y < nums.length; y++){
            let num = nums[i] + nums[y]

            if(num == target){
                return [i, y]
            }
        }
        
    }  
};

// console.log(twoSum([2,7,11,15], 9))
// console.log(twoSum([3,2,4], 6))
// console.log(twoSum([3,3], 6))

// console.log(twoSum([5,2,10,2,8,2], 10))
// console.log(twoSum([5,2,10,2,8,2], 10))