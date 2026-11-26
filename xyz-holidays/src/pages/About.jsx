import { motion } from 'framer-motion'
import {
  Globe,
  Heart,
  ShieldCheck,
  Headphones,
  Compass,
  Plane,
  MapPin,
  Star,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

import './About.css'

const values = [
  {
    icon: Heart,
    title: 'Travel With Passion',
    description:
      'We believe every journey should create beautiful memories. Our passion for travel inspires us to design meaningful experiences.'
  },
  {
    icon: ShieldCheck,
    title: 'Trust & Transparency',
    description:
      'Clear communication, thoughtful planning and transparent quotations are at the heart of our travel services.'
  },
  {
    icon: Headphones,
    title: 'Personalized Support',
    description:
      'Every traveller is different. We focus on understanding your preferences and helping you plan your ideal holiday.'
  },
  {
    icon: Globe,
    title: 'Explore Without Limits',
    description:
      'From iconic city skylines to peaceful beaches, discover destinations and experiences worth remembering.'
  }
]

const highlights = [
  'Thoughtfully designed holiday packages',
  'Personalized travel planning',
  'Transparent package information',
  'Assistance throughout your travel journey'
]

export default function About() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="about-hero-overlay"></div>

        <div className="about-hero-container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="about-eyebrow">
              <Plane size={15} />
              GET TO KNOW US
            </span>

            <h1>
              More Than Just
              <br />
              <span>A Holiday.</span>
              <br />
              It's An Experience.
            </h1>

            <p>
              We believe the best journeys are not just about
              destinations. They are about the people, experiences
              and memories that stay with you forever.
            </p>

            <a href="/packages" className="about-primary-btn">
              Explore Our Packages
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story-section">
        <div className="about-container">

          <div className="about-story-grid">

            <motion.div
              className="about-story-image"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1100&q=85"
                alt="Dubai city skyline"
              />

              <div className="about-image-label">
                <MapPin size={17} />
                <div>
                  <strong>Dubai, UAE</strong>
                  <span>Where unforgettable journeys begin</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="about-story-content"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="about-section-label">OUR STORY</span>

              <h2>
                Every Great Journey
                <span> Begins With A Dream.</span>
              </h2>

              <p>
                At XYZ Holidays, we believe travel is one of life's
                most rewarding experiences. It gives us the opportunity
                to explore new places, discover different cultures
                and create memories with the people we love.
              </p>

              <p>
                Our goal is to make holiday planning simpler and more
                enjoyable through thoughtfully designed travel packages
                and personalized assistance.
              </p>

              <p>
                Whether you are planning a family holiday, a romantic
                getaway or an exciting adventure, we want to help
                make your journey memorable.
              </p>

              <div className="about-highlights">
                {highlights.map((item) => (
                  <div key={item}>
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a href="/contact" className="about-text-link">
                Let's Plan Your Journey
                <ArrowRight size={18} />
              </a>
            </motion.div>

          </div>

        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="about-mission-section">
        <div className="about-container">

          <div className="about-mission-grid">

            <div className="about-mission-card">
              <div className="about-mission-icon">
                <Compass size={30} />
              </div>

              <span>OUR MISSION</span>

              <h3>Making Every Journey Meaningful</h3>

              <p>
                To simplify travel planning and create memorable
                holiday experiences through personalized service,
                thoughtful itineraries and transparent communication.
              </p>
            </div>

            <div className="about-mission-card vision-card">
              <div className="about-mission-icon">
                <Globe size={30} />
              </div>

              <span>OUR VISION</span>

              <h3>Inspiring The World To Explore</h3>

              <p>
                To become a trusted travel companion for people
                who want to discover the world and experience
                destinations in their own unique way.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* OUR VALUES */}
      <section className="about-values-section">
        <div className="about-container">

          <div className="about-section-heading">
            <span className="about-section-label">WHAT MAKES US DIFFERENT</span>

            <h2>
              The Values Behind
              <span> Every Journey.</span>
            </h2>

            <p>
              The principles that guide how we plan, serve
              and create travel experiences.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value, index) => {
              const Icon = value.icon

              return (
                <motion.div
                  className="about-value-card"
                  key={value.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                >
                  <div className="about-value-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.description}</p>
                </motion.div>
              )
            })}
          </div>

        </div>
      </section>

      {/* CLOSING BANNER */}
      <section className="about-cta-section">
        <div className="about-cta-bg"></div>

        <div className="about-cta-content">
          <div className="about-cta-icon">
            <Star size={24} />
          </div>

          <span className="about-section-label">
            YOUR NEXT CHAPTER STARTS HERE
          </span>

          <h2>
            Let's Make Your
            <br />
            <span>Next Journey Special.</span>
          </h2>

          <p>
            Tell us about your dream destination.
            Together, let's turn it into an unforgettable experience.
          </p>

          <a href="/contact" className="about-primary-btn">
            Start Planning
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </main>
  )
}
