
var i;
var heading;
var obj;
for( i=0; i<random+1;++i) {
   
    heading = '<h2 id="yoyo">' + object[i].hotelname + '</h2>';
    var description = '<p id="tt">' + object[i].description + '</p>';
    var priceho='<h4>' + object[i].price + '</h4>';
  
    //web url
    var a = document.createElement('a');
    var linkText = document.createTextNode("Offical website");
    a.appendChild(linkText);
    a.id="corner";
    a.title = "official website";
    a.href = object[i].weburl;
    
    var images='<img alt ="image of hotel" src="objects[i].purl" />';
  
  var hotel =   '<div>'+ heading  + description + priceho+ '<a href="room.html" onclick="namechange(object[i].hotelname)">Details</a>' + '<a target="_blank" href=object[i].weburl>Official website</a>' +'</div>'  ;
    
  document.getElementById("hotels").innerHTML+=hotel;
  document.getElementById("hotels").innerHTML+= images;
  
    var a=document.getElementsByTagName("img");
    var im=["../IMAGES/park.jpg","../IMAGES/palace.jpg","../IMAGES/oriental.jpg"];
      for(var z=0;z<3;z++){
        a[z].src=im[z];
      }
}

document.getElementById("checkin2").value=c;
    document.getElementById("checkin2").value=d;
    
    
  function find(){
  var data={};
  
    var query=window.location.search.substring(1);
        var vars=query.split("&");
            for(var i=0;i<vars.length;i++){
                var pair=vars[i].split("=");
                data[i]=pair1;
                document.write(data[i]);
            }
  }
  
  

  
  
  
  
  
  
  