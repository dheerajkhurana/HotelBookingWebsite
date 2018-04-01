 
    var regionnames=["Select","Hokaido", "Kyushu", "Kansai"];
    var dest1=["Sapporo", "Furano", "Biei"];
    var dest2=["Kagoshima","Miyazaki"];
    var dest3=["Osaka"];
     
    // Making regions in the option list 
    for (var i=0;i<4;i++) {
        var x = document.getElementById("region");
        var c = document.createElement("option");
            c.text = regionnames[i];
            x.options.add(c, i);
    }
    
    //var m = document.getElementById("region");
    //    m.options.remove(3);
    //Function for making the dynamic destination dropdown
            
    // Making destionations dynamically in accordance to the regions
   function start(){
        for(var i=0;i<10;i++){
            var m = document.getElementById("destination");
            m.options.remove(0);
        }

        if (document.getElementById("region").options.selectedIndex==1){
            for (var i=0;i<3;i++) {
                var x = document.getElementById("destination");
                var c = document.createElement("option");
                    c.text = dest1[i];
                    x.options.add(c, i);
            }
        }else if (document.getElementById("region").options.selectedIndex==2){ 
            for(var i=0; i<2; i++){
                var x = document.getElementById("destination");
                var c = document.createElement("option");
                    c.text = dest2[i];
                    x.options.add(c, i);
            }
        }else if (document.getElementById("region").options.selectedIndex==3){ 
            for(var i=0; i<1; i++){
                var x = document.getElementById("destination");
                var c = document.createElement("option");
                    c.text = dest3[i];
                    x.options.add(c, i);
            }
        }
   }   
    //  document.getElementById("calender").innerHTML="";
    //function calenderopen(){
    //  }
    
    function validate(){
        
        if (+date1>+date2) {
        alert("You can't check-out before checking-in, so kindly put a valid checkout date");
            return false;
        
        }
        
         if (document.getElementById("totalrooms").value>0 && document.getElementById("totalrooms").value<6){
        }else if ( document.getElementById("totalrooms").value==""){
            alert('Please enter number of rooms, this section must be filled.');
            return false;
        }else if ( document.getElementById("totalrooms").value<1){
            alert('Number of rooms must be positive, Kindly put a valid number and try again.');
            return false;
        }else {
            alert('Kindly put a valid number- You can book a maximum of 5 rooms at a time, Sorry for any Inconvience.');
            return false;
        }
    }
       //alert('Welcome to Discover Inn');
       
       // Making calender display none
       
    document.getElementById("calender1").style.display="none";
    document.getElementById("calender2").style.display="none";
    
  //  if (document.getElementById("calender1").style.display==="inline-block") {
  //       document.getElementById("calender2").style.display="none";
  //  }
    
    
    
    
    // making calender open on click
    function calenderopen1(){
         document.getElementById("calender1").style.display="inline-block";
          document.getElementById("calender2").style.display="none";
    }
    // open calender 2
    function calenderopen2(){
         document.getElementById("calender2").style.display="inline-block";
          document.getElementById("calender1").style.display="none";
    }
    var date1;
    var intdate1;
    function assigndates1(a){
        var datevalue=a.innerHTML;
         date1=datevalue;
         intdate1= +date1;
         
        document.getElementById("checkin").value=datevalue+"/03/2016";
        document.getElementById("calender1").style.display="none";
    
    }
    // close calendr 2 and assign dates
    var date2;
     var intdate2;
    
     function assigndates2(a){
        var datevalue=a.innerHTML;
         date2=datevalue;
         intdate2= +date2;
         
        document.getElementById("checkout").value=datevalue+"/03/2016";
        document.getElementById("calender2").style.display="none";
        checkdates();
          
    }
    function checkdates() {
         if (+date1>+date2) {
        alert("You can't check-out before checking-in, so kindly put a valid checkout date");
        
        }
    }
   
    
    //**********************************Hotel page function starts from here ************************************************ 
    var combo0;
    var combo1;
    var combo2;
    var combo3;
    var random;
 
    var weburls=["https://www.royalplaza.com.hk","https://www.caesars.com","http://www.venetianmacao.com/"]
    var arraysofobjects;

    function gethotel(){           // a= check-in b=check-out and c=no-of-rooms
        
         arraysofobjects=[
            
            combo0=[
               
            ],

            combo1=[
                {hotelname:"The Royal Plaza",purl:"park.jpg",rflag:"",weburl:weburls[0],description:"Located in less than 1 mile off the HKSAR airport, this Mount Holly motel features free wireless internet access and cable TV in every room. Rancocas State Park is 15 minutes drive away."
                ,price:"HKD 1200"},
            ],
        
            combo2=[
                {hotelname:"The Royal Plaza",purl:"park.jpg",rflag:"",weburl:weburls[0],description:"Located in less than 1 mile off the HKSAR airport, this Mount Holly motel features free wireless internet access and cable TV in every room. Rancocas State Park is 15 minutes drive away."
                ,price:"HKD 1200"},
                {hotelname:"The Caesars Palace",purl:"palace.jpg",rflag:"",weburl:weburls[1],description:"Built in 1903, the iconic Caesars Palace stands majestically opposite the Gateway of Macau, overlooking the south China Sea. Standing tall in the up-scale Cuffe Parade, the award-winning hotel offers a swimming pool and pampering spa treatments"
                ,price:"HKD 1900"}
            ],
        
            combo3=[
                {hotelname:"The Royal Plaza",purl:"park.jpg",rflag:"",weburl:weburls[0],description:"Located in less than 1 mile off the HKSAR airport, this Mount Holly motel features free wireless internet access and cable TV in every room. Rancocas State Park is 15 minutes drive away."
                ,price:"HKD 1200"},
                {hotelname:"Caesars Palace",purl:"palace.jpg",rflag:"",weburl:weburls[1],description:"Built in 1903, the iconic Caesars Palace stands majestically opposite the Gateway of Macau, overlooking the south China Sea. Standing tall in the up-scale Cuffe Parade, the award-winning hotel offers a swimming pool and pampering spa treatments"
                ,price:"HKD 1900"},
                {hotelname:"The Venetian Hotel",purl:"oriental.jpg",rflag:"",weburl:weburls[2],description:"The Venetian Macao is a luxury hotel and casino resort in Macau owned by Las Vegas Sands. The Venetian is a 39-story, $2.4 billion anchor for the seven hotels on the Cotai Strip in Macau. It is the seventh-largest building in the world by floor area."
                ,price:"HKD 2200"}
            ]
        ]
        
         random=Math.floor((Math.random() * 10))%4;
         return arraysofobjects[random];
    }
    
    var object=gethotel();
    
    
