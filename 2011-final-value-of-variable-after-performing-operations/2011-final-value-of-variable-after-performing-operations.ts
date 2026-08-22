 function finalValueAfterOperations (operations: string[]): number{
  let result: number =0;

  for(let i=0; i<operations.length; i++){
     if(operations[i].includes("+")){
      result++;
     }
     else {
      result--;
     }
  };

  return result;
 };