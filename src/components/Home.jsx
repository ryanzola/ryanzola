import * as THREE from 'three'
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {Environment, useTexture, useGLTF, Loader, useProgress, MeshReflectorMaterial } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
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
  useEffect(() => {setTimeout(() => set(true), 500)}, [])
  return useFrame((state) => {
    if (start) {
      state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.05)
      state.camera.lookAt(0, 0.4, 0)
    }
  })
}

function Ground() {
  // const [floor, normal] = useTexture(['/SurfaceImperfections003_1K_var1.jpg', '/SurfaceImperfections003_1K_Normal.jpg']);
  const [normal, roughness] = useTexture([
    '/textures/floor-normal.png',
    '/textures/floor-roughness.png'
  ])
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[10, 10]} />
      <MeshReflectorMaterial 
            blur={[100, 300]}
            resolution={2048}
            mixBlur={1}
            mixStrength={10}
            roughnessMap={roughness}
            depthScale={1.2}
            distortion={0.3}
            normalMap={normal}
            normalScale={[1.2, 1.2]}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            metalness={0.1}
            color="#222"
      />
    </mesh>
  )
}

function Me({clicked, ...props}) {
  const { nodes } = useGLTF('/rz-comp.glb')
  const [video] = useState(() => Object.assign(document.createElement('video'), { 
    src: '/videos/drei_noaudio.mp4', 
    crossOrigin: 'Anonymous',
    autoplay: true,
    loop: true,
    muted: true,
    hidden: true,
  }))

  video.setAttribute('webkit-playsinline', '')
  video.setAttribute('playsinline', '')
  useEffect(() => {
    document.body.appendChild(video)
    return () => video.remove()
  }, [video])

  useEffect(() => void (clicked && video.play()), [video, clicked])

  return (
    <mesh geometry={nodes.Plane.geometry} {...props} >
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} colorSpace={THREE.SRGBColorSpace} />
      </meshBasicMaterial>
    </mesh>
  )
}

function Home({ clicked, setClicked, ready, setReady}) {
  const { loaded } = useProgress()
  
  return (
    <div className="h-screen">
        <Canvas gl={{ alpha: false, antialias: true }} camera={{ position: [0, 3, 100 ], fov: 15 }} role="img" aria-label="Interactive 3D scene featuring the RZ logo on a reflective floor">
          <color attach="background" args={['black']} />
          <fog attach="fog" args={['black', 15, 20]}  />

          <Suspense fallback={null}>
            <group position={[0, -1, 0]}>
              <Ground />
              <Me clicked={clicked} position={[0, 1.3, -2]} scale={[0.5, 0.5, 0.5]} />
            </group>
            <Lights />
            <Environment preset="warehouse" />
            <Intro start={ready && clicked} set={setReady} />
          </Suspense>
          <EffectComposer>
            <Bloom
              intensity={1.2}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.4}
              mipmapBlur
            />
          </EffectComposer>
        </Canvas>
        <a href="https://www.youtube.com/watch?v=Iy7i9ru7HB8" target="_blank" rel="noreferrer" className="text-white fixed right-4 bottom-4 " style={{ zIndex: 9999 }}>
          <img src="/internet.png" height="16" width="16" alt="Music inspiration" />
        </a>
      <Loader />
      <Overlay {...{clicked, setClicked, ready, loaded }} />
    </div>
  );
}

export default Home;
