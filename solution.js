function socksForSale(socks){
    socks.sort(function(a,b){
      return a-b;
    });
    var count = 0;
    for(var i=0;i<socks.length-1;i++){
      if(socks[i]===socks[i+1]){
        count++;
        i++;
      }
    }
    return count;
  }
  
  var socks = [10,10,10,10,20,30,30,30,30,30,30,30,40,40,40,40,40];
  var socks_pair = socksForSale(socks);
  console.log(socks_pair);