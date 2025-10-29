import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 flex flex-col items-start justify-center">
        <span className="inline-flex items-center gap-2 text-emerald-400/90 text-sm font-medium tracking-wide mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Premium Online Education
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Up Your Skills to Advance
          <br />
          Your Career Path
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          Learn in-demand tech skills through project-based courses led by industry practitioners. From frontend and backend to full-stack and digital media marketing, we help you become job-ready.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#courses"
            className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-3 text-black font-semibold hover:bg-emerald-400 transition-colors"
          >
            Get Started
          </a>
          <a
            href="#courses"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-white hover:bg-white/10 transition-colors"
          >
            View Courses
          </a>
        </div>
      </div>
    </section>
  );
}
