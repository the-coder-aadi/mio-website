export default { darkMode:'class', content:['./index.html','./src/**/*.{js,jsx}'],
 theme:{ extend:{ fontFamily:{ display:['Fraunces','serif'], sans:['"Plus Jakarta Sans"','system-ui','sans-serif'] },
  colors:{ ink:'#07090f', brand:{ DEFAULT:'#09a3e4', dark:'#0675a3' }, gold:'#e6c27a' },
  keyframes:{ float:{ '0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-14px)'} }, marquee:{ to:{transform:'translateX(-50%)'} } },
  animation:{ float:'float 6s ease-in-out infinite', marquee:'marquee 30s linear infinite' } } }, plugins:[] }
