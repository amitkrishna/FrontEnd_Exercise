# class Solution:
#     def twoSum(self, nums: List[int], target: int) -> List[int]:
nums = [2,7,11,15]
target = 9
hashmap = {}
for i in range(len(nums)):
    hashmap[nums[i]] = i
print(hashmap)
for i in range(len(nums)):
    complement = target - nums[i]
    print(complement)
    if complement in hashmap and hashmap[complement] != i:
        print([i, hashmap[complement]])