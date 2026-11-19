import {motion} from 'framer-motion';import Cta from './Cta';
export default function ActionCard({icon:I,title,desc,label,to}){return <motion.div whileHover={{y:-6}} className="card flex flex-col gap-3 items-start"><I className="text-ac"/><h3>{title}</h3><p className="flex-1">{desc}</p><Cta to={to}>{label}</Cta></motion.div>}
