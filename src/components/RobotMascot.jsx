import {motion} from 'framer-motion';
const arm=(s,r)=>({animate:{rotate:[0,r,0]},transition:{duration:3.2,repeat:Infinity,ease:'easeInOut'},style:{transformOrigin:s}});
export default function RobotMascot(){return <motion.svg viewBox="0 0 300 330" className="w-64 md:w-80 mx-auto" style={{filter:'drop-shadow(0 25px 30px rgba(40,20,80,.35))'}} animate={{y:[0,-14,0]}} transition={{duration:5,repeat:Infinity,ease:'easeInOut'}}>
<defs><radialGradient id="bd" cx=".35" cy=".25" r=".9"><stop offset="0" stopColor="#f3efff"/><stop offset=".5" stopColor="#b8acf0"/><stop offset="1" stopColor="#6b5bc4"/></radialGradient>
<radialGradient id="hd" cx=".35" cy=".2" r="1"><stop offset="0" stopColor="#fff"/><stop offset=".6" stopColor="#e4defa"/><stop offset="1" stopColor="#a99be0"/></radialGradient>
<linearGradient id="vs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2a2a35"/><stop offset="1" stopColor="#050508"/></linearGradient>
<filter id="gl"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
<ellipse cx="150" cy="318" rx="70" ry="8" fill="rgba(0,0,0,.25)"/>
<motion.g {...arm('85px 215px',-8)}><path d="M85 220 Q50 200 48 160" stroke="url(#bd)" strokeWidth="24" strokeLinecap="round" fill="none"/><circle cx="62" cy="195" r="9" fill="#33333f"/><circle cx="46" cy="150" r="16" fill="#e9e4fb"/><circle cx="46" cy="150" r="16" fill="none" stroke="#b8f2c8" strokeWidth="4" strokeDasharray="30 70"/></motion.g>
<motion.g {...arm('215px 215px',8)}><path d="M215 220 Q250 200 252 160" stroke="url(#bd)" strokeWidth="24" strokeLinecap="round" fill="none"/><circle cx="238" cy="195" r="9" fill="#33333f"/><circle cx="254" cy="150" r="16" fill="#e9e4fb"/><circle cx="254" cy="150" r="16" fill="none" stroke="#b8f2c8" strokeWidth="4" strokeDasharray="30 70"/></motion.g>
<ellipse cx="150" cy="245" rx="68" ry="72" fill="url(#bd)"/><ellipse cx="150" cy="222" rx="52" ry="12" fill="none" stroke="#b8f2c8" strokeWidth="4" opacity=".9"/><circle cx="150" cy="258" r="12" fill="#2a2a35"/><circle cx="150" cy="258" r="5" fill="#b8f2c8" filter="url(#gl)"/>
<line x1="150" y1="62" x2="150" y2="36" stroke="#c4623a" strokeWidth="5"/><circle cx="150" cy="30" r="9" fill="#c4623a"/>
<g fill="#7d6cd0"><circle cx="64" cy="122" r="22"/><circle cx="236" cy="122" r="22"/></g><g stroke="#cfc7f5" strokeWidth="3"><path d="M54 114h20M54 122h20M54 130h20M226 114h20M226 122h20M226 130h20"/></g>
<rect x="68" y="62" width="164" height="124" rx="58" fill="url(#hd)"/><ellipse cx="115" cy="78" rx="38" ry="9" fill="#fff" opacity=".7"/>
<rect x="86" y="86" width="128" height="76" rx="34" fill="url(#vs)"/>
<g fill="#b8f2c8" filter="url(#gl)"><rect x="116" y="106" width="16" height="22" rx="5"/><rect x="168" y="106" width="16" height="22" rx="5"/></g>
<path d="M130 142 Q150 156 170 142" stroke="#b8f2c8" strokeWidth="5" fill="none" strokeLinecap="round" filter="url(#gl)"/></motion.svg>}
