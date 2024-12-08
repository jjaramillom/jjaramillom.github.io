import { ReactNode } from 'react';
import { Title, TypeWriter } from '@/components';
import { IconType } from 'react-icons';
import {
  FaEnvelopeSquare,
  FaGithubSquare,
  FaIdCard,
  FaLinkedin,
} from 'react-icons/fa';
import {
  SiDocker,
  SiExpress,
  SiFlask,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';
import { TbBrandAzure } from 'react-icons/tb';

import styles from './page.module.scss';

interface ContactIconConfig {
  icon: ReactNode;
  link: string;
  label: string;
}

interface TechIconConfig {
  icon: ReactNode;
  label: string;
}

const createTechIconComponent = (Icon: IconType): ReactNode => (
  <Icon className={`${styles.icon} ${styles.tech}`} />
);
const createAnimatedIconComponent = (Icon: IconType): ReactNode => (
  <Icon className={`${styles.icon} ${styles.animated}`} />
);

const TECH_ICONS: TechIconConfig[] = [
  { icon: createTechIconComponent(SiJavascript), label: 'JavaScript' },
  { icon: createTechIconComponent(SiTypescript), label: 'Typescript' },
  { icon: createTechIconComponent(SiReact), label: 'React.js' },
  { icon: createTechIconComponent(SiNodedotjs), label: 'Node.js' },
  { icon: createTechIconComponent(SiVuedotjs), label: 'Vue.js' },
  { icon: createTechIconComponent(SiGraphql), label: 'GraphQL' },
  { icon: createTechIconComponent(SiExpress), label: 'Express.js' },
  { icon: createTechIconComponent(SiNextdotjs), label: 'Next.js' },
  { icon: createTechIconComponent(SiJest), label: 'Jest' },
  { icon: createTechIconComponent(SiRedux), label: 'Redux' },
  { icon: createTechIconComponent(SiPython), label: 'Python' },
  { icon: createTechIconComponent(SiFlask), label: 'Flask' },
  { icon: createTechIconComponent(SiMongodb), label: 'MongoDB' },
  { icon: createTechIconComponent(SiPostgresql), label: 'PostgreSQL' },
  { icon: createTechIconComponent(SiGit), label: 'Git' },
  { icon: createTechIconComponent(TbBrandAzure), label: 'Azure' },
  { icon: createTechIconComponent(SiDocker), label: 'Docker' },
];

const CONTACT_ICONS: ContactIconConfig[] = [
  {
    icon: createAnimatedIconComponent(FaGithubSquare),
    label: 'Github',
    link: 'https://www.github.com/jjaramillom',
  },
  {
    icon: createAnimatedIconComponent(FaLinkedin),
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jjaramillom',
  },
  {
    icon: createAnimatedIconComponent(FaEnvelopeSquare),
    label: 'Send me an email',
    link: 'mailto:jacobo.jaramillo.dev@gmail.com',
  },
  {
    icon: createAnimatedIconComponent(FaIdCard),
    label: 'Download my CV',
    link: '/files/JJ_CV.pdf',
  },
];

export default function Home() {
  return (
    <div>
      <Title className='mb-8'>
        <span className='font-[500]'>Jacobo</span>{' '}
        <span className='font-[400] text-orange'>Jaramillo</span>
      </Title>
      <TypeWriter />
      <hr className='my-3 w-100' />
      <div className='flex flex-row justify-center mt-5 mb-6'>
        {CONTACT_ICONS.map(({ icon, link, label }) => (
          <div key={link} className={styles.iconWrapper}>
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              download={label === 'Download my CV'}
            >
              {icon}
            </a>
            <div className={`mt-1 ${styles.tooltip}`}>{`${label}`}</div>
          </div>
        ))}
      </div>
      <h3 className='text-center text-main-dark text-2xl mb-4 font-light'>
        These are some of the technologies I have worked with
      </h3>
      <div className='relative mx-auto flex max-w-[750px] flex-wrap justify-center'>
        {TECH_ICONS.map(({ icon, label }) => (
          <div key={label} className={`${styles.iconWrapper} ${styles.tech}`}>
            {icon}
            <div className={`mt-1 ${styles.tooltip}`}>{`${label}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
