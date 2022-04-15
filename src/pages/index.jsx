import HexIsland from '@/components/canvas/HexIsland'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { Title } from '@/components/dom/Title'
import { Link } from '@/components/dom/Link'

// dom components goes here
const DOM = () => {
  return (
    <>
      <div className='p-8'>
        <Title>tjw.DEV</Title>
        <div className='flex flex-row py-0'>
          <Link
            href='https://github.com/tjw-dev'
            title='Github'
            icon={faGithub}
          />
          <Link
            href='https://discord.gg/SzxMh6GjS8'
            title='Discord'
            icon={faDiscord}
          />
          <Link href='mailto:hello@tjw.dev' title='E-Mail' icon={faEnvelope} />
        </div>
      </div>
      {/*}
      <footer className='sticky flex flex-row-reverse top-[100vh]'>
        <div className='flex flex-row'>
        </div>
      </footer>
      */}
    </>
  )
}

// canvas components goes here
const R3F = () => {
  return <HexIsland position={[0, 0, 0]} />
}

const Page = () => {
  return (
    <>
      <DOM />
      {/* @ts-ignore */}
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'tjw.DEV',
    },
  }
}
