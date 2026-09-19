import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { Loader2 } from 'lucide-react';

// Lazy load route pages
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const ServicesHub = lazy(() => import('./pages/ServicesHub').then(m => ({ default: m.ServicesHub })));
const NewBuild = lazy(() => import('./pages/services/NewBuild').then(m => ({ default: m.NewBuild })));
const Extensions = lazy(() => import('./pages/services/Extensions').then(m => ({ default: m.Extensions })));
const LoftConversions = lazy(() => import('./pages/services/LoftConversions').then(m => ({ default: m.LoftConversions })));
const BasementStructural = lazy(() => import('./pages/services/BasementStructural').then(m => ({ default: m.BasementStructural })));
const Refurbishment = lazy(() => import('./pages/services/Refurbishment').then(m => ({ default: m.Refurbishment })));
const KitchensBathrooms = lazy(() => import('./pages/services/KitchensBathrooms').then(m => ({ default: m.KitchensBathrooms })));
const GroundworksRoofing = lazy(() => import('./pages/services/GroundworksRoofing').then(m => ({ default: m.GroundworksRoofing })));
const Projects = lazy(() => import('./pages/Projects').then(m => ({ default: m.Projects })));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail').then(m => ({ default: m.ProjectDetail })));
const Process = lazy(() => import('./pages/Process').then(m => ({ default: m.Process })));
const RequestQuote = lazy(() => import('./pages/RequestQuote').then(m => ({ default: m.RequestQuote })));
const Accreditations = lazy(() => import('./pages/Accreditations').then(m => ({ default: m.Accreditations })));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage').then(m => ({ default: m.TestimonialsPage })));
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const BlogPost = lazy(() => import('./pages/BlogPost').then(m => ({ default: m.BlogPost })));
const FAQPage = lazy(() => import('./pages/FAQPage').then(m => ({ default: m.FAQPage })));
const Careers = lazy(() => import('./pages/Careers').then(m => ({ default: m.Careers })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const Terms = lazy(() => import('./pages/legal/Terms').then(m => ({ default: m.Terms })));
const CookiePolicy = lazy(() => import('./pages/legal/CookiePolicy').then(m => ({ default: m.CookiePolicy })));
const Accessibility = lazy(() => import('./pages/legal/Accessibility').then(m => ({ default: m.Accessibility })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

const PageLoader = () => (
  <div className="min-h-[50vh] flex flex-col items-center justify-center gap-3 py-20">
    <Loader2 className="w-8 h-8 text-brand animate-spin" />
    <span className="font-mono text-xs text-muted uppercase tracking-widest">
      SARQ Construction // Loading...
    </span>
  </div>
);

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            
            {/* Services Routes */}
            <Route path="services" element={<ServicesHub />} />
            <Route path="services/new-build" element={<NewBuild />} />
            <Route path="services/extensions" element={<Extensions />} />
            <Route path="services/loft-conversions" element={<LoftConversions />} />
            <Route path="services/basement-structural" element={<BasementStructural />} />
            <Route path="services/refurbishment" element={<Refurbishment />} />
            <Route path="services/kitchens-bathrooms" element={<KitchensBathrooms />} />
            <Route path="services/groundworks-roofing-external" element={<GroundworksRoofing />} />

            {/* Projects */}
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:slug" element={<ProjectDetail />} />

            {/* Process & Quote */}
            <Route path="process" element={<Process />} />
            <Route path="request-a-quote" element={<RequestQuote />} />

            {/* Trust, Reviews & Knowledge */}
            <Route path="accreditations" element={<Accreditations />} />
            <Route path="testimonials" element={<TestimonialsPage />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />

            {/* Legal */}
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="cookie-policy" element={<CookiePolicy />} />
            <Route path="accessibility" element={<Accessibility />} />

            {/* 404 Catch-All */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;
