import { createContext, useContext, useReducer, useCallback } from 'react';
import { CLUES, SCENE_ORDER } from '../data/story';

// ─── Estado inicial ───────────────────────────────────────────────────────────
const initialState = {
  currentScene: 'home',
  visitedScenes: [],
  clues: Object.fromEntries(Object.keys(CLUES).map((k) => [k, { ...CLUES[k] }])),
  choiceHistory: [],   // [{ from, label, to }]
  endingReached: null, // 'verdade' | 'armadilha' | 'silencio'
  reduceMotion: false,
};

// ─── Reducer ─────────────────────────────────────────────────────────────────
function reducer(state, action) {
  switch (action.type) {
    case 'NAVIGATE': {
      const { to, choiceLabel, from } = action.payload;
      const visited = state.visitedScenes.includes(from)
        ? state.visitedScenes
        : [...state.visitedScenes, from];
      return {
        ...state,
        currentScene: to,
        visitedScenes: visited,
        choiceHistory: choiceLabel
          ? [...state.choiceHistory, { from, label: choiceLabel, to }]
          : state.choiceHistory,
      };
    }
    case 'UNLOCK_CLUES': {
      const updated = { ...state.clues };
      action.payload.forEach((id) => {
        if (updated[id]) updated[id] = { ...updated[id], locked: false };
      });
      return { ...state, clues: updated };
    }
    case 'SET_ENDING': {
      return { ...state, endingReached: action.payload };
    }
    case 'TOGGLE_REDUCE_MOTION': {
      return { ...state, reduceMotion: !state.reduceMotion };
    }

    case 'RESTART': {
      return { ...initialState };
    }
    default:
      return state;
  }
}

// ─── Contexto ─────────────────────────────────────────────────────────────────
const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useCallback((to, choiceLabel = null) => {
    dispatch({
      type: 'NAVIGATE',
      payload: { to, choiceLabel, from: state.currentScene },
    });
  }, [state.currentScene]);

  const unlockClues = useCallback((ids) => {
    dispatch({ type: 'UNLOCK_CLUES', payload: ids });
  }, []);

  const setEnding = useCallback((type) => {
    dispatch({ type: 'SET_ENDING', payload: type });
  }, []);

  const toggleReduceMotion = useCallback(() => {
    dispatch({ type: 'TOGGLE_REDUCE_MOTION' });
  }, []);



  const restart = useCallback(() => {
    dispatch({ type: 'RESTART' });
  }, []);

  // Progress 0–100
  const progress = Math.round(
    (state.visitedScenes.filter((s) => SCENE_ORDER.includes(s)).length /
      SCENE_ORDER.length) *
      100
  );

  const unlockedCluesCount = Object.values(state.clues).filter((c) => !c.locked).length;

  return (
    <GameContext.Provider
      value={{
        ...state,
        navigate,
        unlockClues,
        setEnding,
        toggleReduceMotion,
        restart,
        progress,
        unlockedCluesCount,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used inside <GameProvider>');
  return ctx;
};
