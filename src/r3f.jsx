import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";

const R3f = ({ instanceCount }) => {
  console.log(instanceCount);

  const meshPositions = Array.from({ length: instanceCount }, (_, index) => Array.from({length: 3}, (_, i) => Math.random() * 10));

  console.log(meshPositions);

  // // Array of positions for each mesh
  // const meshPositions = [
  //   [0, 0, 0], // position for mesh 1
  //   [1, 0, 0], // position for mesh 2
  //   [0, 1, 0], // position for mesh 3
  //   // Add more positions as needed
  // ];

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
          <meshStandardMaterial attach="material" color="orange" />
        </mesh>
      ))}
    </Canvas>
  );
};

export default R3f;
