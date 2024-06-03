import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

const DevLinks = ({ primary = false, footer = false }: { primary?: boolean; footer?: boolean }) => (
  <div className={`links ${footer? 'footer-links' : ''}`}>
    <div className={`link ${primary? 'text-[#6851ff]' : 'text-[#fff]'}`}>
      {/* Updated to use Next.js Link component */}
      <Link href="https://aworldpeace.org" target='_blank'>
       Learn how
      </Link>
    </div>
    <div className={`link-divider ${primary? 'bg-[#DDDBE0]' : 'bg-[#a270d3]'}`} />
    <div className={`link ${primary? 'text-[#6851ff]' : 'text-[#fff]'}`}>
      {/* Updated to use Next.js Link component */}
      <Link href="/peace">
        Proof of Peacemaking
      </Link>
    </div>
    <div className={`link-divider ${primary? 'bg-[#DDDBE0]' : 'bg-[#a270d3]'}`} />
    <div className={`link ${primary? 'text-[#6851ff]' : 'text-[#fff]'}`}>
      {/* Updated to use Next.js Link component */}
      <Link href="/recognition">
      Proof of Recognition
      </Link>
    </div>
  </div>
);

export default DevLinks;
