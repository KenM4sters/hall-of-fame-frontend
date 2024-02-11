import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sparkles, Stats } from "@react-three/drei";
import * as THREE from 'three'

const R3f = ({ instanceCount, data }) => {

  // const meshPositions = Array.from({ length: instanceCount }, (_, index) => Array.from({length: 3}, (_, i) => Math.random() * 10));
  // console.log(data.content != undefined ? data.content[0].imageUrl : "not defined");

  const meshPositions = [];
  for(let i = 0; i < data.numberOfElements; i++) {
    meshPositions.push([(i*3) - 4.5, 0.5, 0])
  }




  const textureArray = Array.from({ length: data.numberOfElements}, (_, index) => new useLoader(THREE.TextureLoader, data.content != undefined ? data.content[index].imageUrl : "src/assets/unnamed.jpg"))
  console.log(textureArray);


  
  return (
    <>
      <Canvas
        style={{background: "#101010"}}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 8],
        }}
      >
        <OrbitControls />
        <Sparkles size={10} color={'orange'} scale={[10]} speed={[0.2]} />
        {meshPositions.map((position, index) => (
          <mesh key={index} position={position}>
            <boxGeometry attach="geometry" args={[1.8, 1.8, 0.2]} />
            <meshBasicMaterial attach="material-0" color="#ffffff"/>
            <meshBasicMaterial attach="material-1" color="#ffffff"/>
            <meshBasicMaterial attach="material-2" color="#ffffff"/>
            <meshBasicMaterial attach="material-3" color="#ffffff"/>
            <meshBasicMaterial attach="material-4" map={textureArray[index]}  />
            <meshBasicMaterial attach="material-5" color="#ffffff"/>
          </mesh>
        ))}
      </Canvas>
    </>
  );
};

export default R3f;
