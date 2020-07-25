function imageChanger(x) { 
    if (x.src=="https://www.festivalclaca.cat/pics/b/5/55971_hollow-heart-png.png")
    x.src="https://e7.pngegg.com/pngimages/820/953/png-clipart-love-hearts-love-hearts-red-heart-love-heart.png"; 
    else
    x.src="https://www.festivalclaca.cat/pics/b/5/55971_hollow-heart-png.png";    
} 
    function imageReturn(x) { 
        x.src="https://www.festivalclaca.cat/pics/b/5/55971_hollow-heart-png.png"; 
        } 
function total(x,price,t){
document.getElementById(t).innerHTML=parseInt(x.value)*parseFloat(document.getElementById(price).textContent);
}
function TOT(){
  if (document.getElementById("t1"))
  t1=document.getElementById("t1");
  else (t1.textContent="0");
  if (document.getElementById("t2"))
  t2=document.getElementById("t2");
  else t2.textContent="0";
  if (document.getElementById("t3"))
  t3=document.getElementById("t3");
  else t3.textContent="0";
  document.getElementById("TOTAL").innerHTML=(parseFloat(t1.textContent)+parseFloat(t2.textContent)+parseFloat(t3.textContent)).toFixed(2);
    
}
function suppr(x){
    el=x.parentNode.parentNode;
    el.remove();    
}