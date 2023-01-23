
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined) return [];
  if(matrix.length === 0) return [];
  let i =0;
  let res = [];
  for(ar of matrix){
   if(i%2) res[i] = ar.sort((a,b)=>b-a);
   else res[i] = ar;
   i++;
  }
  res = res.join().split(',').map((n)=>Number(n))
  return res;
}
const matrix = [];
 let i =0;
 let res = [];
 if(matrix.length === 0) res = [];

 for(ar of matrix){
  if(i%2) res[i] = ar.sort((a,b)=>b-a);
  else res[i] = ar;
  i++;
 }
 res = res.join().split(',').map((n)=>Number(n))
console.log(res)
