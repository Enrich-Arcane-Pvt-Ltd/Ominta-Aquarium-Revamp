"use client";

import { Mail, Lock } from "lucide-react";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("admin1@enricharcane.com");
  const [password, setPassword] = useState("Enrich@1234");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const year = new Date().getFullYear();

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const token = await userCredential.user.getIdToken();

      await localStorage.setItem('token', token);
      await localStorage.setItem('email', String(userCredential?.user?.email));

      toast.info('User Logged In Successfully !');

      setTimeout(() => {
        router.push('/login/dashboard');
      }, 3000);
    } catch (err: any) {
      console.log(err);
      toast.error(err.message || "Failed to login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-accent-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="w-full max-w-md relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-accent-900 mb-2 text-center">Welcome Back</h2>
            <p className="text-accent-600 mb-8 text-center">Enter your credentials to Sign in to your account</p>

            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-accent-800 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-500" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-3.5 bg-light-300 border-2 border-light-400 rounded-xl focus:outline-none focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 text-accent-900"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-accent-800 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-500" />
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-4 py-3.5 bg-light-300 border-2 border-light-400 rounded-xl focus:outline-none focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 text-accent-900"
                    required
                  />
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full mt-6 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/50 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-accent-500 text-sm mt-6">
          © {year} Ominita Aquarium. All rights reserved.
        </p>
      </div>
    </div>
  );
}
