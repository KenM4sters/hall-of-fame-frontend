import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sparkles, Stats, useScroll, Html } from "@react-three/drei";
import * as THREE from 'three'

const R3f = ({ instanceCount, data, deleteChar }) => {

  const characterRef = useRef();
  const [characterSelected, setCharacterSelected] = useState(undefined);
  const canvasRef = useRef();

  const scroll = useScroll();

  const handleCharacterdelete = (data) => {
    setCharacterSelected(data);
    deleteChar(data.id);
    console.log(data);
  }

  for(let i = 0; i < data?.content?.length; i++) {
    data.content[i]["texture"] = new useLoader(THREE.TextureLoader, data.content != undefined ? data.content[i].imageUrl : "src/assets/unnamed.jpg");
  }

  let meshPositions = [];
  for(let i = 0; i < data?.numberOfElements; i++) {
    meshPositions.push([(i*3) - 4.5, 0.5, 0])
  }
  let deleteIconPositions = [];
  for(let i = 0; i < data?.numberOfElements; i++) {
    deleteIconPositions.push([(i*3) - 4.5, 1.7, 0])
  }

  
  const RenderChars = () => {
    useFrame(() => {
      // meshPositions[0][0] += 1;
    })
    let i;

    return (
      <group>
        {meshPositions.map((position, index) => (
            <mesh key={index} position={position} >
              <boxGeometry attach="geometry" args={[1.8, 1.8, 0.2]} />
              <meshBasicMaterial attach="material-0" color="#ffffff"/>
              <meshBasicMaterial attach="material-1" color="#ffffff"/>
              <meshBasicMaterial attach="material-2" color="#ffffff"/>
              <meshBasicMaterial attach="material-3" color="#ffffff"/>
              <meshBasicMaterial attach="material-4" map={data?.content[index]?.texture}  transparent />
              <meshBasicMaterial attach="material-5" color="#ffffff"/>
            </mesh>
        ))}

        {deleteIconPositions.map((position, index) => (
            <mesh key={index} position={position} rotation={[0, 90 * 180/Math.PI , 0]} onClick={() => {handleCharacterdelete(data?.content[index])}}  >
              <sphereGeometry args={[0.15, 32, 32]} />
              <meshBasicMaterial attach="material" map={new useLoader(THREE.TextureLoader, "src/assets/cross.jpeg")} />
            </mesh>
        ))}
      </group>
    )
  }

  return (
    <>
      <Canvas
        ref={canvasRef}
        style={{background: "#101010", overflow: 'default', height: '100%'}}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 8],
        }}
      >
        <OrbitControls  enableDamping={true}/>
        <Sparkles size={10} count={1000} color={'#59f0ff'} scale={[50]} speed={[0.2]} />
        <RenderChars />
      </Canvas>


      {/* <div className="character-btn-wrapper">
        {meshPositions?.map((position, index) => {
          return (
            <>
              <button className="character-btn" key={index}> Delete Character </button>
            </>
          )
        })}
      </div> */}
    </>
  );
};

export default R3f;
