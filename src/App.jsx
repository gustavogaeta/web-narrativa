import { useGame } from './context/GameContext';
import Home from './components/Home/Home';
import StoryScene from './components/StoryScene/StoryScene';
import FinalScreen from './components/FinalScreen/FinalScreen';
import About from './components/About/About';
import Credits from './components/Credits/Credits';
import Navbar from './components/Navbar/Navbar';
import { STORY } from './data/story';

const ENDING_SCENES = ['final_verdade', 'final_armadilha', 'final_silencio'];
const STORY_SCENES = Object.keys(STORY).filter(
  (k) => !['home', 'sobre', 'creditos', ...ENDING_SCENES].includes(k)
);

function SceneRouter({ sceneId }) {
  if (sceneId === 'home') return <Home />;
  if (sceneId === 'sobre') return <About />;
  if (sceneId === 'creditos') return <Credits />;
  if (ENDING_SCENES.includes(sceneId)) return <FinalScreen sceneId={sceneId} />;
  if (STORY_SCENES.includes(sceneId)) return <StoryScene sceneId={sceneId} />;

  // Fallback — redirect to home
  return <Home />;
}

export default function App() {
  const { currentScene, reduceMotion } = useGame();
  const isHome = currentScene === 'home';

  return (
    <div className={reduceMotion ? 'reduce-motion' : ''}>
      {/* Navbar is hidden on home for full immersion */}
      {!isHome && <Navbar />}

      {/* Main padding to account for fixed navbar */}
      <div style={!isHome ? { paddingTop: '48px' } : {}}>
        <SceneRouter sceneId={currentScene} />
      </div>
    </div>
  );
}
