const s=t=>Math.floor(Math.random()*t),e=()=>1+s(6);function l(t){for(let n=t.length-1;n>0;n--){const o=s(n+1);[t[n],t[o]]=[t[o],t[n]]}return t}export{s as a,e as r,l as s};
