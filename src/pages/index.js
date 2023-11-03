import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import About from '../components/HomepageFeatures/About.js'
import Projects from '../components/HomepageFeatures/Projects.js'
import Experience from '../components/HomepageFeatures/Experience.js'
import Nav from '../components/HomepageFeatures/Nav.js'
import Study from '../components/HomepageFeatures/Education.js'

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
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
