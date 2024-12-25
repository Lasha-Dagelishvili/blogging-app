import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { USER_ROUTES_PATHS } from "../index.enum";



const SignInPage = lazy(
    () => import("@/pages/sign-in"),
);
const SignUpPage = lazy(
    () => import("@/pages/sign-up"),
);


export const AUTH_ROUTES = [
    <>
        <Route 
            path={USER_ROUTES_PATHS.AUTH_SignIn} 
            element={
                <Suspense fallback={<div>Loading...</div>}>
                    <SignInPage />
                </Suspense>
                }
        />
        <Route 
            path={USER_ROUTES_PATHS.AUTH_SignUp} 
            element={
                <Suspense fallback={<div>Loading...</div>}>
                    <SignUpPage />
                </Suspense>
                }
        />
    </>
]