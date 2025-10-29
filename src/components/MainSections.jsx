import { useState } from 'react';

const courses = [
  {
    id: 'fe',
    title: 'Frontend Development',
    image:
      'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop',
    price: '$149',
    duration: '8 weeks',
    blurb:
      'Master responsive UI, modern JavaScript, and React. Build portfolio-grade interfaces with real-world projects.',
  },
  {
    id: 'be',
    title: 'Backend Development',
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    price: '$149',
    duration: '8 weeks',
    blurb:
      'APIs, databases, and authentication using Python and Node. Deploy production-ready services with best practices.',
  },
  {
    id: 'fs',
    title: 'Full Stack Development',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
    price: '$249',
    duration: '12 weeks',
    blurb:
      'From idea to production: learn to design, build, and ship applications end-to-end with confidence.',
  },
  {
    id: 'dm',
    title: 'Digital Media Marketing',
    image:
      'https://images.unsplash.com/photo-1559027615-5f1f2b71f1f4?q=80&w=1600&auto=format&fit=crop',
    price: '$129',
    duration: '6 weeks',
    blurb:
      'Grow brands through content, SEO, and paid campaigns. Build funnels that convert and measure ROI.',
  },
];

const posts = [
  {
    id: 1,
    title: 'How Aisha Switched from Retail to Frontend in 6 Months',
    author: 'TechVersity Editorial',
    date: 'Sep 12, 2025',
    read: '8 min read',
    image:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop',
    excerpt:
      'After years in retail, Aisha wanted a career with growth. Through daily practice, code reviews, and a strong portfolio, she landed her first junior role.',
  },
  {
    id: 2,
    title: 'Design Systems: The Secret to Consistent UI at Scale',
    author: 'Maya Singh',
    date: 'Aug 30, 2025',
    read: '6 min read',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    excerpt:
      'Design systems bring structure to product teams. Learn how tokens, components, and documentation accelerate delivery.',
  },
  {
    id: 3,
    title: 'From CRUD to Craft: Writing Expressive Backend APIs',
    author: 'Leo Martins',
    date: 'Aug 10, 2025',
    read: '7 min read',
    image:
      'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1600&auto=format&fit=crop',
    excerpt:
      'Beyond endpoints and status codes—learn patterns for resilient services: idempotency, pagination, observability, and security.',
  },
];

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
      {subtitle && <p className="text-gray-400 mt-2 max-w-2xl">{subtitle}</p>}
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <div className="group bg-zinc-900/60 border border-white/10 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-colors">
      <div className="relative h-44 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold text-lg">{course.title}</h3>
          <span className="text-emerald-400 font-semibold">{course.price}</span>
        </div>
        <p className="text-gray-400 mt-2 text-sm leading-relaxed">{course.blurb}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
          <span>Duration: {course.duration}</span>
          <a href="#contact" className="text-emerald-400 hover:text-emerald-300 font-medium">Enroll Now →</a>
        </div>
      </div>
    </div>
  );
}

function BlogCard({ post }) {
  return (
    <article className="group bg-zinc-900/60 border border-white/10 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-colors">
      <div className="h-44 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      </div>
      <div className="p-5">
        <h3 className="text-white font-semibold text-lg group-hover:text-emerald-400 transition-colors">{post.title}</h3>
        <p className="text-xs text-gray-400 mt-1">By {post.author} · {post.date} · {post.read}</p>
        <p className="text-gray-400 mt-3 text-sm leading-relaxed">{post.excerpt}</p>
        <a href="#blog" className="inline-block mt-3 text-emerald-400 hover:text-emerald-300 font-medium">Read More →</a>
      </div>
    </article>
  );
}

function ContactForm() {
  const [status, setStatus] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setStatus('Thanks! We will get back to you within 24 hours.');
      }}
      className="bg-zinc-900/60 border border-white/10 rounded-xl p-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1" htmlFor="name">Full Name</label>
          <input id="name" required className="w-full px-3 py-2 rounded-md bg-black border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Alex Johnson" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1" htmlFor="email">Email</label>
          <input id="email" type="email" required className="w-full px-3 py-2 rounded-md bg-black border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="you@example.com" />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm text-gray-400 mb-1" htmlFor="message">Message</label>
          <textarea id="message" rows="4" required className="w-full px-3 py-2 rounded-md bg-black border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Tell us how we can help"></textarea>
        </div>
      </div>
      <button className="mt-4 inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-3 text-black font-semibold hover:bg-emerald-400 transition-colors">Send Message</button>
      {status && <p className="mt-3 text-sm text-emerald-400">{status}</p>}
    </form>
  );
}

export default function MainSections() {
  return (
    <main className="bg-black text-white">
      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Who We Are"
            subtitle="TechVersity is an education company focused on practical, job-ready training. Our curriculum blends mentorship, real projects, and thoughtful feedback."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">Our Teaching Philosophy</h3>
              <p className="text-gray-400 text-sm leading-relaxed">We prioritize active learning through projects, code reviews, and reflection. Each module culminates in a meaningful deliverable you can showcase.</p>
            </div>
            <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">Why Choose TechVersity</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Affordable tuition, flexible schedules, and career support. You learn the way teams work—version control, PRs, standups, and real feedback cycles.</p>
            </div>
            <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Learners join from 40+ countries. Live cohorts, community events, and an alumni network that opens doors worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Courses crafted for real careers"
            subtitle="Each program is built with employer expectations in mind—pair programming, code reviews, and hands-on deliverables."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Latest from our blog"
            subtitle="Insights on learning strategies, engineering practices, and student journeys into tech."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((p) => (
              <BlogCard key={p.id} post={p} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="inline-flex items-center justify-center rounded-md border border-white/10 px-6 py-3 text-white hover:bg-white/10">Load More</button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Contact Us"
            subtitle="Have questions about cohorts, pricing, or curriculum? Send us a message and our team will respond within one business day."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">Reach us directly</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Email: hello@techversity.school</li>
                <li>Support: support@techversity.school</li>
                <li>Hours: Mon–Fri, 9am–6pm GMT</li>
              </ul>
              <p className="text-gray-400 text-sm leading-relaxed mt-4">We welcome partnerships and scholarship requests. Tell us about your goals and we will tailor a path for you.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
