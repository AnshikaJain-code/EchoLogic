import {hardware} from '../data/hardware';import WorkflowDiagram from '../components/WorkflowDiagram';import img from '../assets/hardware.jpg';
export default function Hardware(){return <div><h1 className="mb-4">Device & Hardware</h1><img src={img} alt="Project hardware" className="rounded-3xl w-full max-w-xl"/>
<p className="mt-3">Model numbers, GPIO pins and voltages are intentionally omitted until verified from the project or tutorial.</p>
<h2 className="mt-10">Components</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{hardware.map(([n,p,r])=><div key={n} className="card"><h3>{n}</h3><p><b>Purpose:</b> {p}<br/><b>In this project:</b> {r}</p></div>)}</div>
<h2 className="mt-10">System architecture</h2><div className="card"><WorkflowDiagram/></div></div>}
