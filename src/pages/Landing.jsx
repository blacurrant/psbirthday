import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text3D, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedText() {
  const textRef = useRef()
  useFrame((state) => {
    textRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
  })
  
  return (
    <Text3D
      ref={textRef}
      font="/path-to-your-font.json"
      size={1.5}
      height={0.2}
      curveSegments={12}
    >
      MY LITTLE CAMPING
      <meshPhongMaterial color="white" />
    </Text3D>
  )
}

function AnimatedHeart() {
  const heartRef = useRef()
  useFrame((state) => {
    heartRef.current.scale.x = 1 + Math.sin(state.clock.elapsedTime) * 0.1
    heartRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime) * 0.1
    heartRef.current.scale.z = 1 + Math.sin(state.clock.elapsedTime) * 0.1
  })

  const heartShape = new THREE.Shape()
  heartShape.moveTo(25, 25)
  heartShape.bezierCurveTo(25, 25, 20, 0, 0, 0)
  heartShape.bezierCurveTo(-30, 0, -30, 35, -30, 35)
  heartShape.bezierCurveTo(-30, 55, -10, 77, 25, 95)
  heartShape.bezierCurveTo(60, 77, 80, 55, 80, 35)
  heartShape.bezierCurveTo(80, 35, 80, 0, 50, 0)
  heartShape.bezierCurveTo(35, 0, 25, 25, 25, 25)

  return (
    <mesh ref={heartRef} position={[3, 0, 0]} scale={0.01}>
      <extrudeGeometry 
        args={[
          heartShape, 
          { depth: 8, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 }
        ]} 
      />
      <meshPhongMaterial color="red" />
    </mesh>
  )
}

function CampingComponent() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <AnimatedText />
        <AnimatedHeart />
        <OrbitControls />
      </Canvas>
      <button className="absolute bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded">
        ENTER
      </button>
    </div>
  )
}

export default CampingComponent