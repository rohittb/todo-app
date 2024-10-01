function findIndex(nums,target)
{
    let map=new Map();
   
    for(let i=0;i<nums.length;i++)
    {
        let restValue= target-nums[i];
       
        if(map.has(restValue))
        {
             return [map.get(restValue),i]
        }
        map.set(nums[i],i)
        
    }
    return null
}

console.log(findIndex([2, 7, 11, 15],9))
