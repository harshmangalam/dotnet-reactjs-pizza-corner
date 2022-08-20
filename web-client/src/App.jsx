import { Box } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = lazy(() => import("./pages/Home"));
export default function App() {
  return (
    <Box>
      <Navbar />
      <Suspense fallback={<p>Loading Page...</p>}>
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </Suspense>
    </Box>
  );
}
