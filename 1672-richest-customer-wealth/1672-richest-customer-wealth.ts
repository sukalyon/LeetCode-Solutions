function maximumWealth (accounts: number[][]):number{

let maxWealth: number =0;

for (let i=0; i<accounts.length; i++){
  let currentCustomerWealth: number =0;

for (let j=0; j<accounts[i].length; j++){

currentCustomerWealth+=accounts[i][j]

if (currentCustomerWealth > maxWealth ){
  maxWealth=currentCustomerWealth;

}

}
currentCustomerWealth=0;
}
return maxWealth;
};