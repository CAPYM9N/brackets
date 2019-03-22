module.exports = function check(str, bracketsConfig) {
  let mass = [];
  let brace_open;
    for(let a=0; a<str.length; a++){
      for(let i=0 ; i <bracketsConfig.length; i++){
        if(bracketsConfig[i].indexOf(str[a])!=-1){
             if(bracketsConfig[i][1].indexOf(str[a])!=-1){
            brace_open=bracketsConfig[i][0];
            if(mass.length>0 && mass[mass.length-1]==brace_open){
               mass.pop();
               }
              else{
                mass.push(str[a]);
              }
          }
          else{
           mass.push(str[a]);
          }
        }
      }
    }
    if(mass.length!==0){
      return false;
    }
    return true; 
}
