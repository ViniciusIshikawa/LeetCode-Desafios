function  twoSum(nums, target) {
    let num1, num2;
    let indices = [];
    for(let i = 0; i  <= nums.length; i++) {
      num1 = nums[i];

      for (let aux = i + 1; aux <= nums.length; aux++) {
        num2 = nums[aux];

        if (num1 + num2 === target) {
          indices.push(nums.indexOf(nums[i])); 
          indices.push(nums.lastIndexOf(nums[aux]));
          return indices; 
        } 
      } 
    }  
};

console.log(twoSum([1,3,4,2], 6));