import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import AristaSubset from '../fonts/subset.json'
import { Title } from '@/components/dom/Title'
import { Link } from '@/components/dom/Link'
import { faHome } from '@fortawesome/free-solid-svg-icons'

function DOM() {
  return (
    <div className='p-8'>
      <div className='flex flex-row items-end'>
        <Title>404</Title>
        <p className='p-2 font-sans text-xs'>Not found</p>
      </div>
      <div className='flex flex-row py-1'>
        <Link href='/' title='Home' icon={faHome} />
      </div>
    </div>
  )
}

function R3F() {
  const font = new FontLoader().parse(AristaSubset)
  extend({ TextGeometry })

  return (
    <group rotation={[0, 180, 0]}>
      <mesh position={[-50, 10, 0]}>
        <textGeometry args={['404', { font, size: 50, height: 10 }]} />
        <meshNormalMaterial attach='material' />
      </mesh>
    </group>
  )
}

export default function Error() {
  return (
    <>
      <DOM />
      <R3F r3f />
    </>
  )
}
