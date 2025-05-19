import React from 'react';

export const Step1Basic: React.FC = () => {
  return (
    <main className="main">
      <div className="container">
        <section className="hero">
          <h1>Himanshu Patil</h1>
          <p className="role">Frontend Developer</p>
          <div className="links">
              <a href="mailto:dev@himanshupatil.dev" className="link">dev@himanshupatil.dev</a>
              <div className="social">
                <a href="https://github.com/mehimanshupatil" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/mehimanshupatil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://x.com/mehimanshupatil" target="_blank" rel="noopener noreferrer">X/Twitter</a>
              </div>
            </div>
        </section>
      </div>
    </main>
  );
};