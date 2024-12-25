import { Route, Routes } from "react-router-dom"
import { Layout } from "@/copmonents/layout/layout"
import { Suspense } from "react"
import { Loading } from "@/copmonents/loading"
import HomePage from "@/pages/home"
import { ADMIN_ROUTES } from "@/routes/user_routes"

const AppRoutes = () => {
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
            {ADMIN_ROUTES}
        </Route>
    </Routes>
  );
};

export default AppRoutes