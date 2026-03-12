import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Home } from "@/pages/Home";
import { NearbyLawyerFinder } from "@/pages/NearbyLawyerFinder";
import { SectionSimplifier } from "@/pages/SectionSimplifier";
import { WhatShouldIDo } from "@/pages/WhatShouldIDo";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const sectionSimplifierRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/section-simplifier",
  component: SectionSimplifier,
});

const whatShouldIDoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/what-should-i-do",
  component: WhatShouldIDo,
});

const nearbyLawyersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/nearby-lawyers",
  component: NearbyLawyerFinder,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  sectionSimplifierRoute,
  whatShouldIDoRoute,
  nearbyLawyersRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
