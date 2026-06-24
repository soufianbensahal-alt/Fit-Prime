import "./index.css";
import { Composition } from "remotion";
import { BenchPress } from "./Composition";
export const RemotionRoot: React.FC = () => <Composition id="BenchPressFitPrime" component={BenchPress} durationInFrames={180} fps={60} width={1080} height={1350} />;
