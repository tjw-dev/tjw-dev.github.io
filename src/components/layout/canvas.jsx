import { Suspense, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Preload, ContactShadows } from '@react-three/drei'
import useStore from '@/helpers/store'
import { EffectComposer, SSAO, Vignette } from '@react-three/postprocessing'
import { SimplexNoise } from 'three-stdlib'

function Effects() {
  return (
    <EffectComposer multisampling={0}>
      <SSAO
        samples={31}
        radius={10}
        intensity={30}
        luminanceInfluence={0.1}
        color='#FCFCFC'
      />
      <Vignette eskil={false} offset={0.1} darkness={1.25} />
    </EffectComposer>
  )
}

function Rig({ position }) {
  const { camera, mouse } = useThree()
  const [simplex] = useState(() => new SimplexNoise())

  const vec = new THREE.Vector3()
  const pos = new THREE.Vector3()
  pos.fromArray(position)

  return useFrame((state) => {
    const shake = 15 * simplex.noise(state.clock.elapsedTime * 0.06, 1)
    camera.position.lerp(
      vec.set(pos.x + shake + mouse.x * 4, pos.y + mouse.y * 16, pos.z - shake),
      0.06
    )
  })
}

const DefaultControls = () => {
  const dom = useStore((state) => state.dom)
  const control = useRef(null)

  useEffect(() => {
    if (control) {
      dom.current.style['touch-action'] = 'none'
    }
  }, [dom, control])
  // @ts-ignore
  return (
    <OrbitControls
      makeDefault
      ref={control}
      domElement={dom.current}
      enablePan={false}
      enableRotate={false}
      enableZoom={false}
    />
  )
}

const DefaultCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)
  const [reducedMotion, setReducedMotion] = useState(true)
  const [position, setPosition] = useState([-75, 48, -124])

  useEffect(() => {
    const { matches } = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(matches)
  }, [])

  return (
    <Canvas
      frameloop={reducedMotion ? 'demand' : 'always'}
      camera={{
        position: position,
        near: 3,
        far: 2000,
      }}
      flat
      shadows
      gl={{ antialias: false }}
      dpr={[1, 1.5]}
      mode='concurrent'
      style={{
        position: 'absolute',
        top: 0,
      }}
      onCreated={(state) => state.events.connect(dom.current)}
    >
      <Suspense fallback={null}>
        {!reducedMotion && <Rig position={position} />}
        <ambientLight intensity={0.4} />
        <ContactShadows
          position={[0, -10, 0]}
          opacity={0.8}
          width={128}
          height={128}
          blur={0.5}
          far={40}
        />
        <Effects />
        <DefaultControls enableRotate={reducedMotion} />
        <Preload all />
        {children}
      </Suspense>
    </Canvas>
  )
}

export default DefaultCanvas
