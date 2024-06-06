import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Specialists from '../components/Specialists';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const HomePage = () => (
  <Layout>
    <Hero />
    <Services />
    <Specialists />
    <Testimonials />
    <Newsletter />
  </Layout>
);

export default HomePage;
