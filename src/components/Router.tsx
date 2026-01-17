import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import AboutPage from '@/components/pages/AboutPage';
import InstitutionalPage from '@/components/pages/InstitutionalPage';
import SolutionsPage from '@/components/pages/SolutionsPage';
import GovernancePage from '@/components/pages/GovernancePage';
import EventsPage from '@/components/pages/EventsPage';
import EventDetailPage from '@/components/pages/EventDetailPage';
import ContactPage from '@/components/pages/ContactPage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "about",
        element: <AboutPage />,
        routeMetadata: {
          pageIdentifier: 'about',
        },
      },
      {
        path: "institutional",
        element: <InstitutionalPage />,
        routeMetadata: {
          pageIdentifier: 'institutional',
        },
      },
      {
        path: "solutions",
        element: <SolutionsPage />,
        routeMetadata: {
          pageIdentifier: 'solutions',
        },
      },
      {
        path: "governance",
        element: <GovernancePage />,
        routeMetadata: {
          pageIdentifier: 'governance',
        },
      },
      {
        path: "events",
        element: <EventsPage />,
        routeMetadata: {
          pageIdentifier: 'events',
        },
      },
      {
        path: "events/:id",
        element: <EventDetailPage />,
        routeMetadata: {
          pageIdentifier: 'event-detail',
        },
      },
      {
        path: "contact",
        element: <ContactPage />,
        routeMetadata: {
          pageIdentifier: 'contact',
        },
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
