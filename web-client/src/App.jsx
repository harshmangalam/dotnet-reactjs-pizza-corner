import { Box, Container } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomePage = lazy(() => import("./pages/Home"));
const PizzaPage = lazy(() => import("./pages/Pizza"));
export default function App() {
  return (
    <Box>
      <Navbar />
      <Box py={6}>
        <Container maxW={"container.xl"}>
          <Suspense fallback={<p>Loading Page...</p>}>
            <Routes>
              <Route path="" element={<HomePage />} />
              <Route path="pizza" element={<PizzaPage />} />
            </Routes>
          </Suspense>
        </Container>
      </Box>
    </Box>
  );
}
