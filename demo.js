
var i=1;
var k=i;
const pokemon="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
const bt=document.querySelector("#click");
bt.onclick=()=>{
    if(k!=60){
while(i<=60){
    const di=document.createElement("div");
    di.classList.add("poke");
    const sp=document.createElement("span");
    sp.innerText=`${i}`;
    const image=document.createElement('img');
    image.src=`${pokemon}${i}.png`;
    
    di.appendChild(image);
    di.appendChild(sp);
    document.querySelector("section").appendChild(di);
    k=i;
    i++;
}
    }
    else{
        alert("Click on 'Want more Pokemon' button for more Pokemon");
    }
}
var j=k;
const btn=document.querySelector("#more");
btn.onclick=()=>{
    if(j!=151){
        while(i!=152){
            const di=document.createElement("div");
    di.classList.add("poke");
    const sp=document.createElement("span");
    sp.innerText=`${i}`;
    const image=document.createElement('img');
    image.src=`${pokemon}${i}.png`;
    
    di.appendChild(image);
    di.appendChild(sp);
    document.querySelector("section").appendChild(di);
    j=i;
    i++;
        }
    }
    else{
        alert("There is no more Pokemon to show");
    }

}