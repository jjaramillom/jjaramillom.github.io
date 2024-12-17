import { ReactNode } from 'react';
import { IconType } from 'react-icons';
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

interface TechIconConfig {
  icon: ReactNode;
  label: string;
}

const createTechIconComponent = (Icon: IconType): ReactNode => (
  <Icon className={`${styles.icon} ${styles.tech}`} />
);

export const TECH_ICONS: TechIconConfig[] = [
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
