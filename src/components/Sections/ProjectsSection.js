import styled from 'styled-components'
import { GenericSection } from '../../styles'
import { useScroll } from '../useScroll'
import { fade } from '../../animation'
import SectionTitle from '../SectionTitle'
import afl from '../../img/afl.png'
import aflIcon from '../../img/icons/afl-icon.png'
import euroleagueIcon from '../../img/icons/euroleague-icon.png'
import qprIcon from '../../img/icons/qpr-icon.png'
import gresiniIcon from '../../img/icons/gresini-icon.png'
import onefootballIcon from '../../img/icons/onefootball-icon.png'
import infotvIcon from '../../img/icons/infotv-icon.png'
import cycadIcon from '../../img/icons/cycad-icon.png'
import ProjectCard from '../ProjectCard'

const projectsList = [
  {
    link: 'https://aflmint.com.au/',
    imgSrc: afl,
    side: 'right',
    icon: aflIcon,
    brandName: 'AFL Mint',
    title:
      'A web3 project for collecting AFL NFTs of moments and collectibles.',
    skills: ['React', 'Flow Blockchain', 'Tailwind CSS', 'Material UI'],
  },
  {
    link: 'https://games.euroleaguebasketball.net/',
    imgSrc: afl,
    side: 'left',
    icon: euroleagueIcon,
    brandName: 'Euroleague',
    title:
      'A web3 project for playing Euroleague themed games and collecting wearable NFTs.',
    skills: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    link: 'https://games.qpr.co.uk/',
    imgSrc: afl,
    side: 'right',
    icon: qprIcon,
    brandName: 'QPR',
    title:
      'A web3 project for playing QPR themed games and collecting NFTs of moments.',
    skills: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    link: 'https://fanpower.gresiniracing.com/',
    imgSrc: afl,
    side: 'left',
    icon: gresiniIcon,
    brandName: 'Gresini Racing',
    title:
      'A web3 project for Gresini MotoGP Racing where fans purchase membership NFTs for merchandise and Real Life experiences.',
    skills: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Express.js'],
  },
  {
    link: 'https://onefootball.com/',
    imgSrc: afl,
    side: 'right',
    icon: onefootballIcon,
    brandName: 'OneFootball',
    title:
      'A web3 project for collecting OneFootball NFTs of moments and completing Pro footballer life stories.',
    skills: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    link: 'https://infotv.co.za/',
    imgSrc: afl,
    side: 'left',
    icon: infotvIcon,
    brandName: 'InfoTV',
    title:
      'A website for InfoTV which is a digital marketing company using Smart TVs.',
    skills: ['Svelte', 'AWS', 'Tailwind CSS'],
  },
  {
    link: 'https://www.cycadestatepolokwane.co.za/',
    imgSrc: afl,
    side: 'right',
    icon: cycadIcon,
    brandName: 'Cycad Estate',
    title:
      'A website for an estate where they can manage memberships and communications for the owners of the properties.',
    skills: ['WordPress'],
  },
]

const ProjectsSection = () => {
  const [element, controls] = useScroll()
  return (
    <div>
      <Projects
        variants={fade}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <div className="left-section">
          <SectionTitle title={'My portfolio'} />
          <h2>Take a look at the latest projects I’ve worked on</h2>
          <div className="left">
            {projectsList
              .filter((p) => p.side === 'left')
              .map((project, index) => (
                <ProjectCard
                  key={index}
                  {...project}
                />
              ))}
          </div>
        </div>
        <div className="right">
          {projectsList
            .filter((p) => p.side === 'right')
            .map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
              />
            ))}
        </div>
      </Projects>
    </div>
  )
}

const Projects = styled(GenericSection)`
  background-color: var(--color-bg2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  .right,
  .left {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
  h2 {
    padding-bottom: 6rem;
    font-weight: 600;
  }
`

export default ProjectsSection
