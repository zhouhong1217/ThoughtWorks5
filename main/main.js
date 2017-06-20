module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maxnum()}
o) 元素数量 = ${sequence.number()}
o) 平均值 = ${sequence.average()}`
);
};

class Sequence {
  constructor(input) {
   this.arr = input;
  }

  minimum() {
    return Math.min.apply(null,this.arr);
  }
  maxnum(){
    return Math.max.apply(null,this.arr);  
  }
  
  number(){
    return this.arr.length;
  }
  average(){
    let sum = 0;
    for(let i = 0;i<this.arr.length;i++){
      sum = sum + this.arr[i];
    }
    return (sum/this.arr.length).toFixed(2);
    //toFixed(2)保留小数点2位
  }
}
