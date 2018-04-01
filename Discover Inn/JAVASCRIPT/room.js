
    // pop-up box confirming details by asking name
    var enteredname;
 
    function askname2confirm(){
        while(true){
            var enteredname=prompt("Kindly type in your name to confirm.");
            
            if (enteredname==null) {
                
                return false;
            }else if (enteredname) {
                 window.localStorage.setItem("enteredname",enteredname);            //storing the 'key' enterd name and its value
                alert("Confirmation accepted, Thank you " + enteredname + "!")
                return true;
            }else if(enteredname==""){
                alert("You forgot to type in your name, please type in your name ");   
            }
        }
    }
    
   
 
    // Photo gallering hovering effects onmouseover and onmouseout
    var bigp;
    
    function displaybig(a) {
        bigp=document.getElementById("park").src;
        var smallp=a.src;
        
        document.getElementById("park").src=a.src;
    
    }
    
    function displaysmall(b) {
        var newbigp=this.src;
        
        document.getElementById("park").src=bigp;
    }
    
    
    var storedname=document.getElementById("book").value;

    
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
          }else if (variable=="hotelnames") {
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
    
    //  document.getElementById("previousinfo").innerHTML="Region: " + getVar("region") + "&nbsp;" + "&nbsp;" + "&nbsp;"+ "&nbsp;"+" Destination: " + getVar("destination") + "<br/>"
    // + getVar("checkin") + "&nbsp;" + "&nbsp;"+ "&nbsp;"+ " -- "+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;" + getVar("checkout") + "<br/>"
    // +"Rooms required: " + getVar("totalrooms");
    
    document.getElementById('numberofrooms1').innerHTML="Total price: " +  getVar("totalrooms2")+ "*"+ "1200"+ " = "+ getVar("totalrooms2")*1200 +" HKD " ;
    document.getElementById('numberofrooms2').innerHTML="Total price: " +  getVar("totalrooms2")+ "*"+ "1500"+ " = "+ getVar("totalrooms2")*1500 +" HKD ";
    document.getElementById('numberofrooms3').innerHTML="Total price: " +  getVar("totalrooms2")+ "*"+ "2100"+ " = "+ getVar("totalrooms2")*2100 +" HKD ";

    //************************************************------END OF DATA PROCESSING-----------------*********************************************************
    document.getElementById("hotelnam").innerHTML=getVar("hotelnames");
     document.getElementById("transfername").value=document.getElementById("hotelnam").innerHTML;
     document.getElementById("totalrooms2").value=getVar("totalrooms2");
     document.getElementById("checkin2").value=getVar("checkin2");
     document.getElementById("checkout2").value=getVar("checkout2");
      document.getElementById("roomtype1").value="Deluxe Single";
     

     
    
  
     document.getElementById("transfername2").value=document.getElementById("hotelnam").innerHTML;
     document.getElementById("totalrooms22").value=getVar("totalrooms2");
     document.getElementById("checkin22").value=getVar("checkin2");
     document.getElementById("checkout22").value=getVar("checkout2");
     document.getElementById("roomtype2").value="Executive Double";
       
     
    document.getElementById("transfername3").value=document.getElementById("hotelnam").innerHTML;
     document.getElementById("totalrooms23").value=getVar("totalrooms2");
     document.getElementById("checkin23").value=getVar("checkin2");
     document.getElementById("checkout23").value=getVar("checkout2");
     document.getElementById("roomtype3").value="Executive twin suite";

   //var roompagelink=window.location.href;
   // var roompagelinksplit=roompagelink.split("?"); 
   //   document.getElementById("roompagelinkform").value=roompagelinksplit[1];
   // alert(roompagelink);
   
   
   // ********************************************** Adding name to the url *****************************************************8
   /*
   
    function fillval() {
      phtml=document.querySelector("#data");
      if (window.location.search.substring(1)) {
        phtml.innerHTML=window.location.search.substring(1);
        document.querySelector("#firstname").value=getVar("firstname");
        agegroup=document.querySelectorAll("input[type='radio']");
        switch (getVar("agegroup")) {
          case "11-20": agegroup[0].checked=true; break;
          case "21-40": agegroup[1].checked=true; break;  
          case "21-40": agegroup[2].checked=true; break;  
        }
        videolike=document.querySelectorAll("input[type='checkbox']");
        if (getVar("nature") != null) videolike[0].checked=true;
        if (getVar("wonders") != null) videolike[1].checked=true;
      }
      else {
        phtml.innerHTML="No data sent";
      }
    }
   
   
   */
   
   
   

   
   
   
   
   
   