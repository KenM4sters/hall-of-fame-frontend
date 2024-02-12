import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sparkles, Stats } from "@react-three/drei";
import * as THREE from 'three'

const R3f = ({ instanceCount, data }) => {

  const characterRef = useRef();
  const [characterSelected, setCharacterSelected] = useState(undefined);

  for(let i = 0; i < data?.content?.length; i++) {
    data.content[i]["texture"] = new useLoader(THREE.TextureLoader, data.content != undefined ? data.content[i].imageUrl : "src/assets/unnamed.jpg");
  }

  let meshPositions = [];
  for(let i = 0; i < data?.numberOfElements; i++) {
    meshPositions.push([(i*3) - 4.5, 0.5, 0])
  }
  
  const RenderChars = () => {
    useFrame(() => {
      // meshPositions[0][0] += 1;
    })

    return (
      meshPositions.map((position, index) => (
        <mesh key={index} position={position} onClick={() => {setCharacterSelected(data?.content[index])} } >
          <boxGeometry attach="geometry" args={[1.8, 1.8, 0.2]} />
          <meshBasicMaterial attach="material-0" color="#101010"/>
          <meshBasicMaterial attach="material-1" color="#101010"/>
          <meshBasicMaterial attach="material-2" color="#101010"/>
          <meshBasicMaterial attach="material-3" color="#101010"/>
          <meshBasicMaterial attach="material-4" map={data?.content[index]?.texture}  />
          <meshBasicMaterial attach="material-5" color="#101010"/>
        </mesh>
      ))
    )
  }

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
        <Sparkles size={10} count={1000} color={'orange'} scale={[50]} speed={[0.2]} />
        <RenderChars />
      </Canvas>
    </>
  );
};

export default R3f;
