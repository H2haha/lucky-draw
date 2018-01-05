var fs=require('fs');

var str=fs.readFileSync('data.txt');
var arr=eval('('+str+')');

//1等奖 1名
//2等奖 1名
//3等奖 3名
//5个

//1.抽取
//2.删除

function rnd(n, m){
  return Math.floor(Math.random()*(m-n)+n);
}

var result=[];

while(result.length<5){
  var n=rnd(0, arr.length);

  result.push(arr[n]);
  arr.splice(n, 1);

  //console.log('抽到了', result[result.length-1], '，剩下的', arr);
}

console.log('最终结果', result);

/*
result[0]     =>  1等奖
result[1]     =>  2等奖
result[2,3,4] =>  3等奖
*/
