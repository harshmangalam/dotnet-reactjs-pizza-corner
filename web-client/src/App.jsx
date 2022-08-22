import { Box, Container, Stack } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import axios from "axios";

const HomePage = lazy(() => import("./pages/Home"));
const PizzaPage = lazy(() => import("./pages/Pizza"));

const AuthPage = lazy(() => import("./pages/Auth"));
const AuthLoginPage = lazy(() => import("./pages/Auth/Login"));
const AuthSignupPage = lazy(() => import("./pages/Auth/Signup"));

const CategoryPage = lazy(() => import("./pages/Category"));
const CategoryListPage = lazy(() => import("./pages/Category/List"));
const CategoryDetailPage = lazy(() => import("./pages/Category/Details"));

// react query client instance
const queryClient = new QueryClient();

// axios gloobal setup

axios.defaults.baseURL = "http://localhost:5045/api/";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack justify={"space-between"} minH={"100vh"}>
        <Navbar />
        <Box py={6} flexGrow>
          <Container maxW={"container.xl"}>
            <Suspense fallback={<p>Loading Page...</p>}>
              <Routes>
                <Route path="" element={<HomePage />} />
                <Route path="pizza" element={<PizzaPage />} />
                <Route path="auth" element={<AuthPage />}>
                  <Route index element={<AuthLoginPage />} />
                  <Route path="signup" element={<AuthSignupPage />} />
                </Route>

                <Route path="category" element={<CategoryPage />}>
                  <Route index element={<CategoryListPage />} />
                  <Route path=":categoryId" element={<CategoryDetailPage />} />
                </Route>
              </Routes>
            </Suspense>
          </Container>
        </Box>
        <Footer />
      </Stack>
    </QueryClientProvider>
  );
}
