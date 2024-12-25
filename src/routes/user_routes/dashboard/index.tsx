import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { USER_ROUTES_PATHS } from "../index.enum";
import { Loading } from "@/copmonents/loading";
import AuthGuard from "@/copmonents/router-guards/auth";



const WritePage = lazy(
    () => import("@/pages/write"),
);
const ProfileView = lazy(
    () => import("@/pages/account/profile"),
);
const AboutPage = lazy(
    () => import("@/pages/about"),
);
const TestView = lazy(
    () => import("@/pages/test"),
);
const NotFoundPage = lazy(
    () => import("@/pages/not-found"),
);


export const DASHBOARD_ROUTES = [
    <>
            <Route
            path={USER_ROUTES_PATHS.WRITE}
            element={
                <Suspense fallback={<Loading />}>
                    <WritePage />
                </Suspense>
            }
            />
            <Route
            path={USER_ROUTES_PATHS.PROFILE}
            element={
                <Suspense fallback={<Loading />}>
                <AuthGuard>
                    <ProfileView />
                </AuthGuard>
                </Suspense>
            }
            />
            <Route
            path={USER_ROUTES_PATHS.ABOUT}
            element={
                <Suspense fallback={<Loading />}>
                    <AboutPage />
                </Suspense>
            }
            />
            <Route
            path={USER_ROUTES_PATHS.TEST}
            element={
                <Suspense fallback={<Loading />}>
                    <TestView />
                </Suspense>
            }
            />
            <Route
            path={USER_ROUTES_PATHS.NOT_FOUND}
            element={
            <Suspense fallback={<Loading />}>
                <NotFoundPage />
            </Suspense>
            }
        />
    </>
]