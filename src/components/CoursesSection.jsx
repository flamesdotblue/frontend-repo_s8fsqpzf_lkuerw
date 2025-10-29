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

function CourseCard({ course }) {
  return (
    <div className="group bg-zinc-900/60 border border-white/10 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-colors">
      <div className="relative h-48 overflow-hidden">
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
          <a
            href="#enroll"
            className="text-emerald-400 hover:text-emerald-300 font-medium"
          >
            Enroll Now →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Courses crafted for real careers</h2>
            <p className="text-gray-400 mt-2 max-w-2xl">
              Each program is built with employer expectations in mind—pair programming, code reviews, and hands-on deliverables.
            </p>
          </div>
          <a href="#all-courses" className="hidden sm:inline text-emerald-400 hover:text-emerald-300">See all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
