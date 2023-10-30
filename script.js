var btn=document.getElementById("btn");
var jk1=document.getElementById("jk1");
var jk2=document.getElementById("jk2");
var jk3=document.getElementById("jk3");

const apiKey="JwvIrShdclD/+MFn6Rq+eg==rainBId1YCejiUea";

const option={
    method: "GET",
   
    headers: { 'X-Api-Key': apiKey}
}
var limit=2;
const url= "https://api.api-ninjas.com/v1/dadjokes?limit="+limit;

async function getJoke(){
    const response= await fetch(url, option);
    const data= await response.json();
    jk1.innerHTML=(data[0].joke);
    // var i=0;
    // while(i<limit){
    //     //console.log(data[i].joke);
    //     jk[i+1].innerText=(data[i].joke);
    //     i++;
    //     //setInterval(9000);
    // }
    
}

btn.addEventListener("click",getJoke);


