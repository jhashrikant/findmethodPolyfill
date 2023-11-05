Array.prototype.myfind = function (callbackfn){
  console.log(this)

  for(let i =0; i < this.length; i++){
    const currentelement = this[i]
    const response = callbackfn(currentelement , i ,this)
    if (response) return currentelement;
  }
  return undefined;
}

function callbackfunction(currentelement , index , array){
  return currentelement > 129
}

const nums = [5, 12, 8, 130, 44];

const res = nums.myfind(callbackfunction)
console.log("res",res)
