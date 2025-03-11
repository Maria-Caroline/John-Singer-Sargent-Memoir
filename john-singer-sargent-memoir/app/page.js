import Image from "next/image";
import Summary from './pages/summary.js';
import EarlyLife from './pages/early_life.js';
import Career from './pages/career.js';
import FamousWorks from './pages/famous_works.js';
import LaterLife from './pages/later_life.js';

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Summary />} />
        <Route path='early-life' element={<EarlyLife />} />
        <Route path='career' element={<Career />} />
        <Route path='famous-works' element={<FamousWorks />} />
        <Route path='later-life' element={<LaterLife />} />
      </Routes>
    </Router >
  );
}
