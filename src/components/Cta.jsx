import {Link} from 'react-router-dom';import {ExternalLink} from 'lucide-react';
export default function Cta({to,children,cls='btn btn-p'}){return to.startsWith('http')?<a className={cls} href={to} target="_blank" rel="noopener noreferrer">{children}<ExternalLink size={14}/></a>:<Link className={cls} to={to}>{children}</Link>}
