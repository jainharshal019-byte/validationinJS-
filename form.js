function validate(){
     document.getElementById('fe').innerHTML="";
       document.getElementById('le').innerHTML="";
       document.getElementById('ee').innerHTML="";
       document.getElementById('pe').innerHTML="";
       document.getElementById('ge').innerHTML="";
       document.getElementById('ce').innerHTML="";




    var fname=document.getElementById('fname').value; 
    var lname=document.getElementById('lname').value;
     var email=document.getElementById('email').value; 
     var pass=document.getElementById('pass').value;
     var gender=document.querySelector('input[name="gen"]:checked');
      

    if( fname==""){
        document.getElementById('fe').innerHTML="Firstname is required";
        return false;

    } if( lname==""){
        document.getElementById('le').innerHTML="lastname is required";
        return false;
        
    } if( email==""){
        document.getElementById('ee').innerHTML="email is required";
        return false;
        
    } if( pass==""){
        document.getElementById('pe').innerHTML="password is required";
        return false;
        
    } if(! gender){  
          document.getElementById('ge').innerHTML="select ";
        return false;
    }
    
     if(city==""){
         document.getElementById('ce').innerHTML="select city";
        return false;

     }  
     return true;





}