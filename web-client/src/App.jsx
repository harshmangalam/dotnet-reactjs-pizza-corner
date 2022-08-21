import { Box, Container } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomePage = lazy(() => import("./pages/Home"));
const PizzaPage = lazy(() => import("./pages/Pizza"));

const AuthPage = lazy(() => import("./pages/auth"));
const AuthLoginPage = lazy(() => import("./pages/auth/Login"));
const AuthSignupPage = lazy(() => import("./pages/auth/Signup"));

const CategoryDetailPage = lazy(() => import("./pages/CategoryDetail"));
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
              <Route path="auth" element={<AuthPage />}>
                <Route index element={<AuthLoginPage />} />
                <Route path="signup" element={<AuthSignupPage />} />
              </Route>

              <Route path="/:categoryId" element={<CategoryDetailPage />} />
            </Routes>
          </Suspense>
        </Container>
      </Box>
    </Box>
  );
}
