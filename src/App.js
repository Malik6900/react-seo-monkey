import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import BlogPost from './components/pages/BlogPost'
import Contact from './components/pages/Contact'
import Signup from './components/pages/Signup'
import NotFound from './components/pages/NotFound'

function App() {
  return (
    <>
    <Router>
    <ScrollToTop />
    <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:slug' element={<BlogPost />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/sign-up' element={<Signup />} />
        {/* the old placeholder Products page is gone, send anyone with the link to Services */}
        <Route path='/products' element={<Navigate to='/services' replace />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    <Footer />
    </Router>

    </>
  );
}

export default App;
