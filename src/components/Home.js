import * as THREE from 'three'
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { Reflector, useTexture, useGLTF, Loader, useProgress } from '@react-three/drei'
import Overlay from './Overlay'

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[0, 10, 0]} intensity={0.3} />
      <directionalLight position={[-20, 0 ,-10]} intensity={0.7} />
    </>
  )
}

function Intro({ start, set }) {
  const [vec] = useState(() => new THREE.Vector3())
  useEffect(() => setTimeout(() => set(true), 500), [])
  return useFrame((state) => {
    if (start) {
      state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.05)
      state.camera.lookAt(0, 0, 0)
    }
  })
}

function Ground() {
  const [floor, normal] = useTexture(['/SurfaceImperfections003_1K_var1.jpg', '/SurfaceImperfections003_1K_Normal.jpg']);
  return (
    <Reflector resolution={512} args={[10, 10]} mirror={0.5} mixBlur={10} mixStrength={0.8} rotation={[-Math.PI / 2, 0, Math.PI / 2]} blur={[400, 100]} >
      {(Material, props) => <Material color={'#a0a0a0'} metalness={0.5} roughnessMap={floor} normalMap={normal} normalScale={[1, 1]} {...props} />}
    </Reflector>
  )
}

function Me({clicked, ...props}) {
  const { nodes } = useGLTF('/rz-comp.glb')
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/videos/drei.mp4', crossOrigin: 'Anonymous', autoplay: true, loop: true, muted: true }))
  useEffect(() => void (clicked && video.play()), [video, clicked])

  return (
    <mesh geometry={nodes.Plane.geometry} {...props} >
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </mesh>
  )
}

function Home({ clicked, setClicked, ready, setReady}) {
  const { loaded } = useProgress()
  return (
    <>
        <Canvas gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, 3, 100 ], fov: 15 }}>
          <color attach="background" args={['black']} />
          <fog attach="fog" args={['black', 15, 20]}  />

          <Suspense fallback={null}>
            <group position={[0, -1, 0]}>
              <Ground />
              <Me clicked={clicked} position={[0, 1.3, -2]} scale={[0.5, 0.5, 0.5]} />
            </group>
            <Lights />
            <Intro start={ready && clicked} set={setReady} />
          </Suspense>
        </Canvas>

      <Loader />
      <Overlay {...{clicked, setClicked, ready, loaded }} />
    </>
  );
}

export default Home;
