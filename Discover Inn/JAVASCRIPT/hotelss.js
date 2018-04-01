
    var a=["../IMAGES/park.jpg","../IMAGES/palace.jpg","../IMAGES/oriental.jpg"];

   for(var i=0; i<random;++i) {
   
  var heading = '<h2 id="yoyo">' + object[i].hotelname + '</h2>';
  var description = '<p>' + object[i].description + '</p>';
  var priceho='<h4>' + object[i].price + '</h4>';
  var str="Official website";
  var officialwebsite=str.link("object[i].weburl");
//  alert(object[i].weburl);
    
    //var a=document.getElementsByTagName("img");
   
 //   var im=["park.jpg","palace.jpg","oriental.jpg"];
    
   // for( z=0;z<random+1;z++){
 //       a[z].src=im[z];
  //  }
  
  
    if (i==0) {
         var images='<img src="../IMAGES/park.jpg" id="yoma"/>';
    }else if (i==1) {
       var images='<img src="../IMAGES/palace.jpg" id="yoma"/>';
    }else if (i==2) {
        var images='<img src="../IMAGES/oriental.jpg" id="yoma"/>';
    }
    
    

    
    
    var deti=[ '<a  onclick=dheeru1()   >Details</a>','<a  onclick=dheeru2() >Details</a>','<a  onclick=dheeru3() >Details</a>',];
    
    
  var hotel =   '<div>'+ heading  + description +  deti[i] +priceho + officialwebsite + images + '</div>';
  
  
  document.getElementById("hotels").innerHTML+=hotel;
  
   }
   
     function dheeru1(){
     var submi= document.getElementById("search");
     document.getElementById("hotelnames").value="The Royal Plaza";
    submi.submit();
      }
      
       function dheeru2(){
     var submi= document.getElementById("search");
     document.getElementById("hotelnames").value="Caesars Palace";
    submi.submit();
      }
   
    function dheeru3(){
     var submi= document.getElementById("search");
     document.getElementById("hotelnames").value="The Venetian Hotel";
    submi.submit();
      }

  
/*
  function find(){
  var data={};
  
    var query=window.location.search.substring(1);
        var vars=query.split("&");
            for(var i=0;i<vars.length;i++)
            {
                var pair=vars[i].split("=");
                data[i]=pair[1];
                document.write(data[i]);
            }
  }
  */
  
  //*************************************************-----DATA PROCESSING FROM ADDRESS BAR------***********************************************
  
  function getVar(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      var returning="Not given"
      for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        
        if (pair[0] == variable) {
          
          if (variable=="checkin" || variable=="checkout") {
                var properdate=pair[1].split("%2F");
               var finaldate=properdate[0]+ "/"+ properdate[1]+ "/"+ properdate[2];
            return finaldate;
          }
          
          return pair[1];
        }
      } 
      return returning; 
    }
    
    
    document.getElementById("previousinfo").innerHTML="Region: " + getVar("region") + "&nbsp;" + "&nbsp;" + "&nbsp;"+ "&nbsp;"+" Destination: " + getVar("destination") + "<br/>"
              + getVar("checkin") + "&nbsp;" + "&nbsp;"+ "&nbsp;"+ " -- "+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;" + getVar("checkout") + "<br/>"
             +"Rooms required: " + getVar("totalrooms");

    //************************************************------END OF DATA PROCESSING-----------------*********************************************************
     
    /* var destinnames=["Sapporo", "Furano", "Biei","Kagoshima","Miyazaki","Osaka"];
     for (var i=0;i<6;i++) {
        var x = document.getElementById("destination2");
        var c = document.createElement("option");
            c.text = destinnames[i];
            x.options.add(c, i);
    }
    
    
*/
    
     var submi= document.getElementById("invisibleform");
   
     document.getElementById("totalrooms2").value=getVar("totalrooms");
     document.getElementById("checkin2").value=getVar("checkin");
     document.getElementById("checkout2").value=getVar("checkout");
     document.getElementById("region").value=getVar("region");
     start();
     document.getElementById("destinaiton").value=getVar("destination");


   
  