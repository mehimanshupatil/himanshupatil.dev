import React, { useState, useEffect } from 'react';
import { Step1Basic } from './Step1Basic';
import { Step2Styled } from './Step2Styled';
import { Step3Animated } from './Step3Animated';
import './styles.scss';


export const StepDemo: React.FC = () => {
  const [step, setStep] = useState('1');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };


  const renderStep = () => {
    switch (step) {
      case '2':
        return <Step2Styled />;
      case '3':
        return <Step3Animated theme={theme} />;
      default:
        return <Step1Basic />;
    }
  };

  return (
    <>
      <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      {renderStep()}
      <nav className="steps">
        <button
          onClick={() => setStep('1')}
          className={`step-btn ${step === '1' ? 'active' : ''}`}
        >
          Step 1: HTML
        </button>
        <button
          onClick={() => setStep('2')}
          className={`step-btn ${step === '2' ? 'active' : ''}`}
        >
          Step 2: CSS
        </button>
        <button
          onClick={() => setStep('3')}
          className={`step-btn ${step === '3' ? 'active' : ''}`}
        >
          Step 3: JavaScript
        </button>
      </nav>
    </>
  );
};