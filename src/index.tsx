import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProviders'
import App from 'app/App'
import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from 'shared/ui/ErrorFallback/ErrorFallback'
import { Suspense } from 'react'


render(
    <BrowserRouter>
        <Suspense fallback="">

            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </Suspense>

    </BrowserRouter>,
    document.getElementById('root'),
)
