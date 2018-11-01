var nums = [1,1];
var digit = 2;

for(let i=1; digit<500; i++){
    digit=nums[i] + nums[i-1];
    nums.push(digit);
}

for(let i=0; i<nums.length; i++){
    document.getElementById("fib").innerHTML+=nums[i] + "<br>";
}