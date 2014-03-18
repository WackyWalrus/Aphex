var Aphex = function(size,arr){
  var html = '';
  var last = '';
  for(var i = 0; i < arr.length; i++){
    if(arr[i]=='clear'){
      html += "<div class='clear'></div>";
    } else if(arr[i].substr(0,4)=='line'){
      var length = parseInt(arr[i].substr(4,arr[i].length));
      for(var x = 0; x < length; x++){
        html += "<div style='width:"+size+"px;height:"+size+"px;background-color:#"+last+"'></div>";
      }
      html += "<div class='clear'></div>";
    } else if(arr[i].substr(0,2)=="do"){
      var length = parseInt(arr[i].substr(2,arr[i].length));
      for(var x = 0; x < length; x++){
        html += "<div style='width:"+size+"px;height:"+size+"px;background-color:#"+last+"'></div>";
      }
    } else {
      html += "<div style='width:"+size+"px;height:"+size+"px;background-color:#"+arr[i]+"'></div>";
    }
    last = arr[i];
  }
  document.getElementById('painting').innerHTML = html;
}