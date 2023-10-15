let theme=document.getElementById("theme");
let checkbox=document.getElementById("checkbox");

let current_theme=1;


// o means white and 1 means black
function change_theme(){
          let body=document.body;
          if(current_theme==0){
                    // dark theme
          body.style.color='white';
          body.style.backgroundColor='#363543';current_theme=1;
          for (let i=1;i<=5;i++){
                    let themcolor=document.getElementById("themecolor"+i);
                    themcolor.style.color="white";
          }
          for (let j=1;i=j<=14;j++){
                    let them_color=document.getElementById("theme_color_green"+j);
                    them_color.style.color="white";
          }
          for (let j=3;i=j<=6;j++){
                    let them_color=document.getElementById("theme_color_green"+j);
                    them_color.style.color="aqua";
          }
          document.getElementById("theme_color_green7").style.color="springgreen";
          for (let i=1;i<=3;i++){
                    let themcolor=document.getElementById("themecolor"+i);
                    themcolor.style.color="aqua";
          }
          theme.innerText="Light Mode";
          }  
          
          else{  
          //        light theme   
          body.style.color='black';
          body.style.backgroundColor='whitesmoke';current_theme=0;
          for (let i=1;i<=5;i++){
                    let themcolor=document.getElementById("themecolor"+i);
                    themcolor.style.color="#363543";
          }
          for (let j=1;j<=14;j++){
                    let them_color=document.getElementById("theme_color_green"+j);
                    
                    them_color.style.color="black";
                   
          }
          for (let j=14;j<=19;j++){
                    let them_color=document.getElementById("theme_color_green"+j);
                    
                    them_color.style.color="darkblue";
                   
          }theme.innerText="Dark Mode";
         
          }

         checkbox.checked=false; 
       
}
function login_check(){
          if(sessionStorage.getItem('email')==document.getElementById("login_email").value){
                    if(sessionStorage.getItem('pass')==document.getElementById("login_password_").value){
                              window.open("./potfolio.html","_self");
                    }else{alert("Wrong Password");}
          }
          else{
                    alert("Wrong Email Plz. Enter Correct Email-ID");
          }


}
function registration(){
          sessionStorage.setItem('name',document.getElementById("regist_name").value);
          sessionStorage.setItem('mob',document.getElementById("regist_mob").value);
          sessionStorage.setItem('email',document.getElementById("regist_registration_email").value);
          sessionStorage.setItem('pass',document.getElementById("regist_password").value);
          window.open("./login.html","_self");
}