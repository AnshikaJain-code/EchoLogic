import {useState} from 'react';import {Search} from 'lucide-react';import {docs} from '../data/documentation';
export default function Documentation(){const [q,setQ]=useState('');const r=docs.filter(d=>(d[0]+d[1]).toLowerCase().includes(q.toLowerCase()));
return <div><h1 className="mb-4">Documentation Centre</h1><div className="relative mb-4"><Search size={16} className="absolute left-3 top-3.5 text-mu"/><input className="inp !pl-9" placeholder="Search documentation..." value={q} onChange={e=>setQ(e.target.value)}/></div>
<div className="grid gap-3">{r.map(([t,d])=><details key={t} className="card"><summary className="cursor-pointer font-bold">{t}</summary><p className="mt-2">{d}</p></details>)}{!r.length&&<p>No matching articles.</p>}</div></div>}
