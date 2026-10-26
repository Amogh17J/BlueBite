import React, { useState } from 'react';
import { X, Lock, Mail, User, Phone, ArrowRight, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const AuthModal = () => {
  const { isAuthModalOpen, setIsAuthModalOpen, authModalMessage, login, signup } = useCart();
  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'signup'

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Signup form state
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupPhone, setSignupPhone] = useState('');

  // Status state
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleClose = () => {
    setIsAuthModalOpen(false);
    setErrorMsg('');
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (!loginEmail.trim() || !loginPassword.trim()) {
      setErrorMsg('Please enter both email and password.');
      return;
    }

    try {
      setIsLoading(true);
      await login(loginEmail.trim(), loginPassword.trim());
      handleClose();
    } catch (err) {
      setErrorMsg(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (!signupName.trim() || !signupEmail.trim() || !signupPassword.trim()) {
      setErrorMsg('Please fill in name, email, and password.');
      return;
    }

    try {
      setIsLoading(true);
      await signup(signupName.trim(), signupEmail.trim(), signupPassword.trim(), signupPhone.trim());
      handleClose();
    } catch (err) {
      setErrorMsg(err.message || 'Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickDemoLogin = async () => {
    setErrorMsg('');
    try {
      setIsLoading(true);
      await login('demo@bluebite.com', 'password123');
      handleClose();
    } catch (err) {
      setErrorMsg(err.message || 'Demo login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="auth-modal-sheet" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="auth-header">
          <div className="auth-brand-badge">
            <Lock size={16} />
            <span>Secure Authentication · MERN JWT</span>
          </div>
          <button className="modal-close-btn" onClick={handleClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Notice/Prompt */}
        <div className="auth-welcome-group">
          <h3 className="auth-title">
            {activeTab === 'login' ? 'Welcome Back to BlueBite' : 'Join BlueBite Today'}
          </h3>
          <p className="auth-desc">
            {authModalMessage || 'Sign in or create an account to start adding dishes to your cart and placing orders.'}
          </p>
        </div>

        {/* Tab switch */}
        <div className="auth-tabs">
          <button
            type="button"
            className={`auth-tab-btn ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => { setActiveTab('login'); setErrorMsg(''); }}
          >
            Sign In
          </button>
          <button
            type="button"
            className={`auth-tab-btn ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => { setActiveTab('signup'); setErrorMsg(''); }}
          >
            Create Account
          </button>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="auth-error-alert">
            <AlertCircle size={16} className="alert-icon" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Quick Demo Login Pill */}
        <button
          type="button"
          className="quick-demo-btn"
          onClick={handleQuickDemoLogin}
          disabled={isLoading}
        >
          <Sparkles size={16} className="demo-sparkle" />
          <span>⚡ 1-Click Demo Login (Alex Taylor)</span>
        </button>

        {activeTab === 'login' ? (
          /* Sign In Form */
          <form className="auth-form" onSubmit={handleLoginSubmit}>
            <div className="auth-field">
              <label className="auth-label">Email Address</label>
              <div className="auth-input-wrapper">
                <Mail size={18} className="field-icon" />
                <input
                  type="email"
                  className="auth-input"
                  placeholder="e.g. demo@bluebite.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="auth-field">
              <label className="auth-label">Password</label>
              <div className="auth-input-wrapper">
                <Lock size={18} className="field-icon" />
                <input
                  type="password"
                  className="auth-input"
                  placeholder="Enter your password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="auth-submit-btn" disabled={isLoading}>
              <span>{isLoading ? 'Signing In...' : 'Sign In to BlueBite'}</span>
              <ArrowRight size={18} />
            </button>
          </form>
        ) : (
          /* Sign Up Form */
          <form className="auth-form" onSubmit={handleSignupSubmit}>
            <div className="auth-field">
              <label className="auth-label">Full Name</label>
              <div className="auth-input-wrapper">
                <User size={18} className="field-icon" />
                <input
                  type="text"
                  className="auth-input"
                  placeholder="e.g. Alex Taylor"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="auth-field">
              <label className="auth-label">Email Address</label>
              <div className="auth-input-wrapper">
                <Mail size={18} className="field-icon" />
                <input
                  type="email"
                  className="auth-input"
                  placeholder="e.g. user@example.com"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="auth-field">
              <label className="auth-label">Phone Number (Optional)</label>
              <div className="auth-input-wrapper">
                <Phone size={18} className="field-icon" />
                <input
                  type="tel"
                  className="auth-input"
                  placeholder="+91 91234 56789"
                  value={signupPhone}
                  onChange={(e) => setSignupPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="auth-field">
              <label className="auth-label">Password</label>
              <div className="auth-input-wrapper">
                <Lock size={18} className="field-icon" />
                <input
                  type="password"
                  className="auth-input"
                  placeholder="Create a password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="auth-submit-btn" disabled={isLoading}>
              <span>{isLoading ? 'Creating Account...' : 'Create Account & Sign In'}</span>
              <ArrowRight size={18} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
