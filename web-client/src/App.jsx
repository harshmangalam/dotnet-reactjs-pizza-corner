import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
export default function App() {
  return (
    <Suspense fallback={<p>Loading Page...</p>}>
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
