
import { motion } from 'framer-motion'
import { MapPin, ArrowRight, Globe2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cities } from '../data/cities'
import './Destinations.css'

export default function Destinations() {
  return (
    <main className="destinations-page">
      <section className="destinations-hero">
        <div className="destinations-hero-overlay" />
        <div className="destinations-hero-content">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            DISCOVER THE WORLD
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Find Your Next <em>Adventure</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Explore amazing destinations, discover new cultures
            and create memories that last forever.
          </motion.p>
        </div>
      </section>

      <section className="destinations-list-section">
        <div className="destinations-container">
          <div className="destinations-heading">
            <div>
              <span className="section-eyebrow">EXPLORE OUR DESTINATIONS</span>
              <h2>Where Would You Like to Go?</h2>
              <p>Handpicked destinations for your next unforgettable journey.</p>
            </div>

            <div className="destinations-count">
              <Globe2 size={20} />
              <span>{cities.length} Destinations</span>
            </div>
          </div>

          {cities.length > 0 ? (
            <div className="all-destinations-grid">
              {cities.map((city, index) => (
                <motion.article
                  className="all-destination-card"
                  key={city.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 3) * 0.1 }}
                >
                  <Link to={`/destinations/${city.id}`}>
                    <div className="all-destination-image">
                      <img src={city.coverImage} alt={city.name} />
                      <span className="destination-country">
                        <MapPin size={13} />
                        {city.country}
                      </span>
                    </div>

                    <div className="all-destination-info">
                      <div>
                        <h3>{city.name}</h3>
                        <p>{city.shortDescription}</p>
                      </div>

                      <span className="destination-arrow">
                        <ArrowRight size={19} />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="destinations-empty">
              No destinations available right now.
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
