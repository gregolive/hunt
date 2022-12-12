import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.scss';
import { AnimationLayout, Welcome, Clue, Prize } from './components';

const App = () => {
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route element={<AnimationLayout />}>
              <Route
                path='/'
                element={<Welcome />}
              />

              <Route
                path='/1'
                element={<Clue.One />}
              />

              <Route
                path='/2'
                element={<Clue.Two />}
              />

              <Route
                path='/3'
                element={<Clue.Three />}
              />

              <Route
                path='/4'
                element={<Clue.Four />}
              />

              <Route
                path='/5'
                element={<Clue.Five />}
              />

              <Route
                path='/6'
                element={<Clue.Six />}
              />

              <Route
                path='/7'
                element={<Clue.Seven />}
              />

              <Route
                path='/8'
                element={<Clue.Eight />}
              />

              <Route
                path='/winner'
                element={<Prize />}
              />
            </Route>
          </Routes>
        </Router>
      </AnimatePresence>
    </div>
  );
}

export default App;
