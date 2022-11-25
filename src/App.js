import { OrbitControls, useHelper } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import Lightsaber from "./Lightsaber";
import * as THREE from 'three'

function App() {
	const directionalLightRef = useRef()

	// useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1)
    
	return <>
		<Perf position="top-left" />

		<OrbitControls makeDefault />

		<color args={ [ "#040404" ] } attach="background" />

		<directionalLight ref={directionalLightRef} castShadow position={[10, 30, 30]} intensity={1.5} />
		<ambientLight intensity={0.5} />

		<EffectComposer>
			<Bloom />
		</EffectComposer>


		<Lightsaber />

		{/* <mesh receiveShadow position-y={- 1.25}>
			<boxGeometry args={[10, 0.5, 10]} />
			<meshStandardMaterial color="greenyellow" />
		</mesh> */}
	</>
}

export default App;
