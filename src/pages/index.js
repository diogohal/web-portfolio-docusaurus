import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import About from '../components/HomepageFeatures/About.js'
import Experience from '../components/HomepageFeatures/Experience.js'
import Study from '../components/HomepageFeatures/Education.js'
import '../css/custom.css'

export default function Home() {
  return (
    <div>
      <div className='home'>
        <Layout
            title={`Home`}
            description="Description will go into a meta tag in <head />">
        <About/>
        <Experience/>
        <Study/>
        </Layout>
      </div>
    </div>
  );
}
