(function(){
  var words="I want to understand how machines learn and think.".split(" ");
  var box=document.getElementById("attn");
  var spans=words.map(function(t){
    var s=document.createElement("span");
    s.className="w"; s.tabIndex=0; s.textContent=t;
    box.appendChild(s); box.appendChild(document.createTextNode(" "));
    return s;
  });
  function h(i,j){var x=Math.sin((i+1)*12.9898+(j+1)*78.233)*43758.5453;return x-Math.floor(x);}
  function show(i){
    var w=spans.map(function(_,j){return j===i?1:(0.12+0.88*h(i,j))*Math.exp(-Math.abs(i-j)/5);});
    var m=Math.max.apply(null,w.filter(function(_,j){return j!==i;}));
    spans.forEach(function(s,j){
      var a=j===i?55:Math.round(45*w[j]/m);
      s.style.backgroundColor="color-mix(in srgb, var(--accent) "+a+"%, transparent)";
    });
  }
  function clear(){spans.forEach(function(s){s.style.backgroundColor="";});}
  spans.forEach(function(s,i){
    s.addEventListener("mouseenter",function(){show(i);});
    s.addEventListener("focus",function(){show(i);});
    s.addEventListener("click",function(){show(i);});
    s.addEventListener("mouseleave",clear);
    s.addEventListener("blur",clear);
  });
})();
