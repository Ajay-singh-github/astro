import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from './Layout.tsx';
import Home from './pages/Home/Home.tsx';
import Horoscope from './pages/Horoscope/Horoscope.tsx';
import JanamKundli from './pages/JanamKundli/JanamKundli.tsx';
import LoveMatching from './pages/LoveMatching/LoveMatching.tsx';
import Panchang from './pages/Panchang/Panchang.tsx';
import ShubhMuhurat from './pages/ShubhMuhurat/ShubhMuhurat.tsx';
import Numerology from './pages/Numerology/Numerology.tsx';
import Article from './pages/Articles/Article.tsx';
import Signup from './pages/Signup/Signup.tsx';
import Profile from './pages/Profile/Profile.tsx';
import Subscription from './pages/Subscription/Subscription.tsx';
import More from './pages/More/More.tsx';
import Contact from './pages/Contact/Contact.tsx';
import AstroProfile from './pages/AstroProfile/AstroProfile.tsx';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Articles from './pages/Articles/Articles.tsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/horoscope" element={<Horoscope />} />
        <Route path="/janam-kundli" element={<JanamKundli />} />
        <Route path="/match-making" element={<LoveMatching />} />
        <Route path="/panchang" element={<Panchang />} />
        <Route path="/shubhmuhurat-dates" element={<ShubhMuhurat />} />
        <Route path="/numerology-calculator" element={<Numerology />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article" element={<Article />} />
        <Route path="/more" element={<More />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/astro-profile" element={<AstroProfile />} />
    </Route>
  )
);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
