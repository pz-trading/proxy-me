import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserContextProvider } from './context/user';

import Layout from './pages/layout';

// Use lazy loading for the components that need to be lazily loaded
const LazyLogin = lazy(() => import('./pages/login'));
const LazyGroups = lazy(() => import('./pages/groups'));
const LazyMembers = lazy(() => import('./pages/members'));
const LazyContacts = lazy(() => import('./pages/contacts'));
const LazyProxy = lazy(() => import('./pages/proxy'));
const LazyAdmin = lazy(() => import('./pages/admin'));
const LazyResetPassword = lazy(() => import('./pages/reset_password'));

const NotFound = () => <h1>Page Not Found</h1>;

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><LazyProxy /></Suspense>} />
            <Route path="/groups/" element={<Suspense fallback={<div>Loading...</div>}><LazyGroups /></Suspense>} />
            <Route path="/members/" element={<Suspense fallback={<div>Loading...</div>}><LazyMembers /></Suspense>} />
            <Route path="/contacts/" element={<Suspense fallback={<div>Loading...</div>}><LazyContacts /></Suspense>} />

            <Route path="/login/" element={<Suspense fallback={<div>Loading...</div>}><LazyLogin /></Suspense>} />
            <Route path="/admin/" element={<Suspense fallback={<div>Loading...</div>}><LazyAdmin /></Suspense>} />
            <Route path="/reset-password/" element={<Suspense fallback={<div>Loading...</div>}><LazyResetPassword /></Suspense>} />

            <Route component={NotFound} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

const el = document.getElementById('root');
const root = createRoot(el);
root.render(<App />);
