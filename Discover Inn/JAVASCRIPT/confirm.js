    //*********************************************-------Retriving the Stored value of the entered name(enterd in roompage) inside the local storage-----**************************************************************
  
  
    var yo=window.localStorage.getItem("enteredname");
    
    document.getElementById("name").innerHTML="Booking in name of : " + yo;
    
    //*********************************************The end ****************************************************************************************
    
    var fc= yo.substring(0,1).toLowerCase();        //fc stands for first character and lc stands for last character
    var lc=yo.substring(yo.length-1).toLowerCase();
   // ^^^^^^^^^^^^^^^^ ABOVE are the name first and last character that are retrived and have been made small
   
   
   
     var d= new Date();
     var n=d.getDate();
     var m=d.getMonth();
     var y=d.getFullYear();
     var h=d.getHours();
     var min=d.getMinutes();
     var s=d.getSeconds();
     
     var m2=m+1;
     var y2=y%100;
     
    document.getElementById("dates0").innerHTML="Booking date : " +n+ "/"+m2+"/"+y;
     document.getElementById("dates").innerHTML="T"+"H"+y2+""+"0"+m2+n+h+min+s+fc+lc;
    
     
      //*************************************************-----DATA PROCESSING FROM ADDRESS BAR------***********************************************
  
  function getVar(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      var returning="Not given"
      for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        
        if (pair[0] == variable) {
          
          if (variable=="checkin2" || variable=="checkout2" || variable=="checkin22" || variable=="checkout22" || variable=="checkin23" || variable=="checkout23") {
                var properdate=pair[1].split("%252F");
               var finaldate=properdate[0]+ "/"+ properdate[1]+ "/"+ properdate[2];
            return finaldate;
            
          }else if (variable=="transfername" || variable=="transfername2" || variable=="transfername3" ) {
            var diff=pair[1].split("+");
            
            if (diff.length==2) {
                 var fulldiff= diff[0] + " " + diff[1] ; 
            }
            else if (diff.length==3) {
                var fulldiff= diff[0] + " " + diff[1] + " " + diff[2]; 
            }
        
            
          //  var fulldiff= diff[0] + " " + diff[1] +diff[2]; 
            
            /*
            for(var j=0;j<diff.length;i++){
                
                var fulldiff =diff[j] +" ";
                 alert(diff.length);
                 alert(fulldiff);
            }
            */
            return fulldiff;
            
            
          }
          
          return pair[1];
        }
      } 
      return returning; 
    }
    
 //   document.getElementById("previousinfo").innerHTML="Region: " + getVar("region") + "&nbsp;" + "&nbsp;" + "&nbsp;"+ "&nbsp;"+" Destination: " + getVar("destination") + "<br/>"
    //          + getVar("checkin") + "&nbsp;" + "&nbsp;"+ "&nbsp;"+ " -- "+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;" + getVar("checkout") + "<br/>"
    //         +"Rooms required: " + getVar("totalrooms");
    
   // document.getElementById('numberofrooms1').innerHTML="Total price: " +  getVar("totalrooms2")+ "*"+ "1200"+ " = "+ getVar("totalrooms2")*1200 +" HKD " ;
   // document.getElementById('numberofrooms2').innerHTML="Total price: " +  getVar("totalrooms2")+ "*"+ "1500"+ " = "+ getVar("totalrooms2")*1500 +" HKD ";
   // document.getElementById('numberofrooms3').innerHTML="Total price: " +  getVar("totalrooms2")+ "*"+ "2100"+ " = "+ getVar("totalrooms2")*2100 +" HKD ";

    //************************************************------END OF DATA PROCESSING-----------------*********************************************************
    
    
     document.getElementById("writecheckin").innerHTML= getVar("checkin2");  
    document.getElementById("writecheckout").innerHTML= getVar("checkout2");
     document.getElementById("detail").innerHTML= "Room Type : " + getVar("totalrooms2") + " Deluxe single";
     document.getElementById("hotelname").innerHTML= getVar("transfername");
     document.getElementById("price").innerHTML="Total price: " +  getVar("totalrooms2")+ "*"+ "1200"+ " = "+ getVar("totalrooms2")*1200 +" HKD " ;
    
     if (document.getElementById("hotelname").innerHTML=="Not given") {
        document.getElementById("writecheckin").innerHTML= getVar("checkin22");  
        document.getElementById("writecheckout").innerHTML= getVar("checkout22");
        document.getElementById("detail").innerHTML= "Room Type : " + getVar("totalrooms22") + " Executive Double";
        document.getElementById("hotelname").innerHTML= getVar("transfername2");
        document.getElementById("price").innerHTML="Total price: " +  getVar("totalrooms22")+ "*"+ "1500"+ " = "+ getVar("totalrooms22")*1500 +" HKD " ;

     }
   
    if (document.getElementById("hotelname").innerHTML=="Not given") {
     document.getElementById("writecheckin").innerHTML= getVar("checkin23");  
    document.getElementById("writecheckout").innerHTML= getVar("checkout23");
     document.getElementById("detail").innerHTML= "Room Type : " + getVar("totalrooms23") + " Executive Twin Suite";
     document.getElementById("hotelname").innerHTML= getVar("transfername3");
    document.getElementById("price").innerHTML="Total price: " +  getVar("totalrooms23")+ "*"+ "2100"+ " = "+ getVar("totalrooms23")*2100 +" HKD " ;

    }
  
  

