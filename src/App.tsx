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
import { supabase } from "./supabase/index";
import { useAuthContext } from "./context/auth/hooks/useAuthContext";
import AuthGuard from "./copmonents/router-guards/auth";
import GuestGuard from "./copmonents/router-guards/guest";
import ProfileView from "./pages/account/profile/index";
import TestView from "./pages/test";

function App() {

  const { setUser } = useAuthContext();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
    });
  
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
  
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [setUser]);
  
  


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
          path="SignIn"
          element={
            <Suspense fallback={<Loading />}>
              <GuestGuard>
                <SignInPage />
              </GuestGuard>
            </Suspense>
          }
        />
        <Route
          path="SignUp"
          element={
            <Suspense fallback={<Loading />}>
              <GuestGuard>
                <SignUpPage />
              </GuestGuard>
            </Suspense>
          }
        />
        <Route
          path="Write"
          element={
            <Suspense fallback={<Loading />}>
                <WritePage />
            </Suspense>
          }
        />
        <Route
          path="Profile"
          element={
            <Suspense fallback={<Loading />}>
              <AuthGuard>
                <ProfileView />
              </AuthGuard>
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<Loading />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="test"
          element={
            <Suspense fallback={<Loading />}>
              <TestView />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="*"
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
