import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Modern Web App</title>
        <meta
          name="description"
          content="A modern web application built with Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Welcome to Your
              <span className="text-blue-600 block">Modern Web App</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A scalable monorepo structure built with Next.js, React,
              TypeScript, and TailwindCSS. Ready for backend integration and
              shared component libraries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                🚀 Next.js Frontend
              </h3>
              <p className="text-gray-600">
                Modern React framework with file-based routing, API routes, and
                optimizations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                📦 Shared Packages
              </h3>
              <p className="text-gray-600">
                Reusable UI components and utilities shared across your
                monorepo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                ⚡ Ready for Backend
              </h3>
              <p className="text-gray-600">
                Prepared structure for Express, NestJS, or your preferred
                backend framework.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
