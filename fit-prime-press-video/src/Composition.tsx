import { ThreeCanvas } from "@remotion/three";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import * as THREE from "three";

type Point = [number, number, number];
const lime = "#dfff4f";

const Limb: React.FC<{ from: Point; to: Point; radius: number; color: string }> = ({ from, to, radius, color }) => {
  const a = new THREE.Vector3(...from);
  const b = new THREE.Vector3(...to);
  const center = a.clone().add(b).multiplyScalar(0.5);
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
  return <mesh position={center} quaternion={q} castShadow><cylinderGeometry args={[radius * 0.78, radius, a.distanceTo(b), 18]} /><meshStandardMaterial color={color} roughness={0.48} metalness={0.06} /></mesh>;
};

const Muscle: React.FC<{ at: Point; size: Point; color?: string }> = ({ at, size, color = "#c8cec7" }) => <mesh position={at} scale={size} castShadow><sphereGeometry args={[1, 24, 18]} /><meshStandardMaterial color={color} roughness={0.5} /></mesh>;

const Gym: React.FC<{ barY: number }> = ({ barY }) => <group>
  <mesh position={[0, 0.62, 0]} receiveShadow castShadow><boxGeometry args={[3.25, 0.2, 1.12]} /><meshStandardMaterial color="#171b18" roughness={0.74} /></mesh>
  {[-1.22, 1.2].flatMap((x) => [-0.48, 0.48].map((z) => [x, z] as const)).map(([x, z]) => <mesh key={`${x}${z}`} position={[x, 0.25, z]} castShadow><boxGeometry args={[0.13, 0.75, 0.13]} /><meshStandardMaterial color="#707971" metalness={0.62} roughness={0.32} /></mesh>)}
  {[-1, 1].map((side) => <group key={side}><mesh position={[-1.55, 1.75, side * 1.45]} castShadow><boxGeometry args={[0.14, 3.2, 0.14]} /><meshStandardMaterial color="#606a61" metalness={0.72} roughness={0.26} /></mesh><mesh position={[-1.08, 0.18, side * 1.45]} castShadow><boxGeometry args={[1.1, 0.13, 0.13]} /><meshStandardMaterial color="#606a61" metalness={0.72} roughness={0.26} /></mesh></group>)}
  <group position={[-0.2, barY, 0]}><mesh rotation={[Math.PI / 2, 0, 0]} castShadow><cylinderGeometry args={[0.055, 0.055, 4.35, 16]} /><meshStandardMaterial color="#c3cbc3" metalness={0.9} roughness={0.15} /></mesh>{[-1, 1].map((side) => <group key={side} position={[0, 0, side * 1.67]} rotation={[Math.PI / 2, 0, 0]}><mesh castShadow><cylinderGeometry args={[0.37, 0.37, 0.14, 28]} /><meshStandardMaterial color="#101411" roughness={0.38} /></mesh><mesh position={[0, 0, side * 0.09]}><cylinderGeometry args={[0.22, 0.22, 0.06, 22]} /><meshStandardMaterial color={lime} emissive={lime} emissiveIntensity={0.2} /></mesh></group>)}</group>
</group>;

const Athlete: React.FC<{ barY: number; press: number }> = ({ barY, press }) => {
  const skin = "#d3d5d0";
  const shoulderL: Point = [-0.44, 1.08, -0.35], shoulderR: Point = [-0.44, 1.08, 0.35];
  const handL: Point = [-0.2, barY, -1.0], handR: Point = [-0.2, barY, 1.0];
  const elbowY = 1.1 + press * 0.66;
  const elbowL: Point = [-0.04 - press * 0.13, elbowY, -0.87], elbowR: Point = [-0.04 - press * 0.13, elbowY, 0.87];
  return <group>
    <Muscle at={[0.03, 0.98, 0]} size={[1.03, 0.29, 0.45]} />
    <Muscle at={[-0.38, 1.2, -0.25]} size={[0.52, 0.2, 0.31]} color="#d9ddd6" /><Muscle at={[-0.38, 1.2, 0.25]} size={[0.52, 0.2, 0.31]} color="#d9ddd6" />
    {[-0.03, 0.26, 0.54].map((x) => <Muscle key={x} at={[x, 1.28, -0.02]} size={[0.13, 0.07, 0.2]} color="#e0e4de" />)}
    <Muscle at={[0.72, 0.91, 0]} size={[0.42, 0.24, 0.36]} color="#aeb8ae" />
    <Muscle at={[-1.23, 1.13, 0]} size={[0.27, 0.32, 0.25]} color="#d8d1c3" />
    <mesh position={[-1.46, 1.04, 0]} rotation={[0, 0, Math.PI / 2]} castShadow><capsuleGeometry args={[0.15, 0.36, 7, 16]} /><meshStandardMaterial color="#252b26" roughness={0.7} /></mesh>
    {[{ shoulder: shoulderL, elbow: elbowL, hand: handL }, { shoulder: shoulderR, elbow: elbowR, hand: handR }].map(({ shoulder, elbow, hand }, i) => <group key={i}><Muscle at={shoulder} size={[0.25, 0.23, 0.25]} color="#d8ded6" /><Limb from={shoulder} to={elbow} radius={0.17} color={skin} /><Muscle at={elbow} size={[0.18, 0.16, 0.18]} color="#d7dcd5" /><Limb from={elbow} to={hand} radius={0.125} color="#d8d1c3" /><Muscle at={hand} size={[0.13, 0.1, 0.16]} color="#d8d1c3" /></group>)}
    {([-1, 1] as const).map((side) => { const hip: Point = [0.7, 0.86, side * 0.29]; const knee: Point = [1.43, 0.46, side * 0.72]; const ankle: Point = [2.02, 0.1, side * 0.82]; return <group key={side}><Muscle at={hip} size={[0.31, 0.24, 0.3]} color="#252c27" /><Limb from={hip} to={knee} radius={0.23} color="#2a312c" /><Muscle at={knee} size={[0.2, 0.17, 0.19]} color="#303730" /><Limb from={knee} to={ankle} radius={0.15} color="#d8d1c3" /><Muscle at={[2.2, 0.08, side * 0.83]} size={[0.26, 0.09, 0.14]} color="#d8d1c3" /></group>; })}
  </group>;
};

const Scene: React.FC = () => { const frame = useCurrentFrame(); const { fps } = useVideoConfig(); const press = interpolate(frame, [0, 0.25 * fps, 1.25 * fps, 1.45 * fps, 2.65 * fps, 3 * fps - 1], [1, 1, 0, 0, 1, 1], { easing: Easing.bezier(0.42, 0, 0.2, 1), extrapolateLeft: "clamp", extrapolateRight: "clamp" }); const barY = 1.5 + press * 1.06; return <><ambientLight intensity={0.78} /><directionalLight position={[-4, 7, 5]} intensity={2.2} castShadow /><pointLight position={[0.5, 3.2, -3]} color={lime} intensity={8} distance={8} /><mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.12, 0]} receiveShadow><planeGeometry args={[200, 200]} /><meshStandardMaterial color="#0c0f0d" roughness={0.85} /></mesh><Gym barY={barY} /><Athlete barY={barY} press={press} /></>; };

export const BenchPress: React.FC = () => { const { width, height } = useVideoConfig(); return <div className="video"><ThreeCanvas width={width} height={height} shadows camera={{ position: [5.6, 3.7, 7.4], fov: 37 }} gl={{ alpha: true, antialias: true }}><Scene /></ThreeCanvas></div>; };
