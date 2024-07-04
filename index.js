let btn=document.querySelector(".btn");
let input1=document.querySelector(".text1");
let num=document.querySelector(".num");
let para1=document.querySelector(".para");
let temp=document.querySelector(".temp");
let subhead=document.querySelector(".subhead")


const info="a1b1256c02341ddda931be47d7aaf999";
btn.addEventListener("click",function(){
   if(input1.value==""){
    alert("Enter some Location");
   }
   else{
    const currentwheather=input1.value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${currentwheather}&appid=${info}`;
    fetch(url).then(res=>res.json())
    .then(data => {
      console.log(data);
      const{name}=data
      const{feels_like}=data.main
      const{description}= data.weather[0]
      temp.innerHTML=Math.floor(feels_like-273)+"<span>&#176</span>"+"<span>C</span>";
   
      subhead.innerHTML=description;
      para1.innerHTML=name;

    })
    .catch(()=>{
      alert("Enter valid location")
    })
    input1.value=""
    
    
   }

})