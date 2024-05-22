for (let i = 1; i <= 9; i++) {
  let row = "";
  for (let j = 1; j <= 9; j++) {
    row += `${i * j}\t`;
  }
  console.log(row);
}

//function -> 邏輯共用
// function greeting() {
//   console.log("Hi");
// }

// greeting();

//傳入參數的function（讓變數傳進function中）
function greeting(name) {
  console.log(`Hello ${name}`);
}

greeting("Joy");
greeting("James");
greeting("Jenny");
