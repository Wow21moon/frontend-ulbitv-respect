import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { routeConfig } from '../routeConfig/routeConfig'

const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <div className="page-wrapper">
                            {element}
                        </div>
                    )}
                />
            ))}
        </Routes>
    </Suspense>
)

export default AppRouter
