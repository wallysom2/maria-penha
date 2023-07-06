import React from 'react';
import Header from './components/Header';
import MainSection from './components/Main';
import ResourcesSection from './components/Resource';
import ReportSection from './components/Report'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <MainSection />
        <ResourcesSection />
        <ReportSection />
      </main>
    </div>
  );
};

export default App;

