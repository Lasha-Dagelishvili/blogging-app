import { Routes, Route } from "react-router-dom";
import { Layout } from "./copmonents/layout";
import { Loading } from "./copmonents/loading";
import { Suspense, useEffect } from "react";
import HomePage from "./pages/home";
import  SignInPage from "./pages/sign-in";
import  SignUpPage  from "./pages/sign-up";
import WritePage from "./pages/write";
import AboutPage from "./pages/about";
import NotFoundPage from "./pages/not-found";
import { supabase } from "./lib/connection";
import { useAuthContext } from "./context/auth/hooks/useAuthContext";

function App() {


  const {handleSetUser} = useAuthContext()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      handleSetUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) =>{
      handleSetUser(session);
    });

    return () => subscription.unsubscribe();

  }, []);


  return (
      <Routes>
        <Route element={<Layout />}>
          <Route
              index
              element={
                <Suspense fallback={<Loading />}>
                  <HomePage />
                </Suspense>
              }
            />

          <Route
            path='SignIn'
            element={
              <Suspense fallback={<Loading />}>
                <SignInPage />
              </Suspense>
            }
          />

          <Route
            path='SignUp'
            element={
              <Suspense fallback={<Loading />}>
                <SignUpPage />
              </Suspense>
            }
          />

          <Route
            path='Write'
            element={
              <Suspense fallback={<Loading />}>
                <WritePage />
              </Suspense>
            }
          />

          <Route
            path='about'
            element={
              <Suspense fallback={<Loading />}>
                <AboutPage />
              </Suspense>
            }
          />
        </Route>

        <Route
            path='*'
            element={
              <Suspense fallback={<Loading />}>
                <NotFoundPage />
              </Suspense>
            }
          />
      </Routes>
  );
}

export default App;
