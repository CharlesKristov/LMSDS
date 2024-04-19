import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import './AppContent.scss';
import DefaultPage from '../../landing_page/LandingPage';
import { PrivateRoute, ProtectedRoute } from '../../middleware/middleware';
import { privateRoutes, routes } from '../../config/Router';

const AppContent = () => {
    return (
        <CContainer lg>
            <Suspense fallback={<CSpinner color="primary" />}>
                <Routes>
                    {routes.map((route: any, idx: number) => {
                        return (
                            route.element && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    element={
                                        <ProtectedRoute>
                                            <route.element />
                                        </ProtectedRoute>
                                    }
                                />
                            )
                        )
                    })}
                    {privateRoutes.map((route: any, idx: number) => {
                        return (
                            route.element && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    element={
                                        <PrivateRoute>
                                            <route.element />
                                        </PrivateRoute>
                                    }
                                />
                            )
                        )
                    })}
                    <Route path="/" element={<DefaultPage />} />
                </Routes>
            </Suspense>
        </CContainer>
    )
}

export default React.memo(AppContent)
