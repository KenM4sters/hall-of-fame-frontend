import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import * as THREE from 'three'

const R3f = ({ instanceCount, data }) => {

  const meshPositions = Array.from({ length: instanceCount }, (_, index) => Array.from({length: 3}, (_, i) => Math.random() * 10));
  console.log(data.content != undefined ? data.content[0].imageUrl : "not defined");

  const texture = new useLoader(THREE.TextureLoader, data.content != undefined ? data.content[0].imageUrl : "src/assets/unnamed.jpg")

  return (
    <Canvas
      style={{background: "#101010"}}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 6],
      }}
    >
      <OrbitControls />
      {meshPositions.map((position, index) => (
        <mesh key={index} position={position}>
          <boxGeometry attach="geometry" args={[1, 1, 0.2]} />
          <meshBasicMaterial attach="material" map={texture}/>
        </mesh>
      ))}
    </Canvas>
  );
};

export default R3f;
