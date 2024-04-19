import React, { Component, Suspense } from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('../layout/DefaultLayout'))

// Pages
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="*" element={<DefaultLayout />} />
            {/* <Route path="/404" element={<Page404 />} /> */}
            {/*<Route exact path="/500" name="Page 500" element={<Page500 />} /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
