'use client';
import { useState } from 'react';

export default function AuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 w-96">
        <h2 className="text-2xl font-bold text-yellow-500 mb-6">{isLogin ? 'Login' : 'Create Account'}</h2>
        <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-3 mb-4 bg-gray-800 border border-gray-600 rounded text-white" />
        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-3 mb-6 bg-gray-800 border border-gray-600 rounded text-white" />
        <button className="w-full bg-yellow-500 text-black py-3 rounded font-bold hover:bg-yellow-400 transition">
          {isLogin ? 'LOGIN' : 'SIGN UP'}
        </button>
        <p className="text-center mt-4 text-gray-400">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setIsLogin(!isLogin)} className="text-yellow-500 underline">
            {isLogin ? 'Sign up' : 'Login'}
          </button>
        </p>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">✕</button>
      </div>
    </div>
  );
}
