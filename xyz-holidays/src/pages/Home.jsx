import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import {
  ArrowRight,
  MapPin,
  CalendarDays,
  Users,
  Search,
  ShieldCheck,
  Headphones,
  Globe,
  Star,
  Plane,
  CheckCircle2,
  Clock,
} from "lucide-react";

import { getFeaturedCities, getFeaturedPackages } from "../data/cities";

import DestinationCard from "../components/DestinationCard";
import PackageCard from "../components/PackageCard";

import "./Home.css";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Travel Planning",
    description:
      "Travel confidently with thoughtfully planned itineraries and transparent package information.",
  },
  {
    icon: Headphones,
    title: "Personalized Support",
    description:
      "Get assistance with your travel plans, from choosing destinations to preparing for your journey.",
  },
  {
    icon: Globe,
    title: "Memorable Experiences",
    description:
      "Discover beautiful destinations and experiences designed around your travel interests.",
  },
];

export default function Home() {
  const navigate = useNavigate();

  // Dynamic data from city JSON files
  const destinations = getFeaturedCities();
  const packages = getFeaturedPackages();

  // Search form state
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travellers, setTravellers] = useState("2");

  // Search handler
  const handleSearch = (event) => {
    event.preventDefault();

    const params = new URLSearchParams({
      destination,
      date: travelDate,
      travellers,
    });

    navigate(`/contact?${params.toString()}`);
  };

  return (
    <main className="home-page">
      {/* =================================
          HERO SECTION
      ================================= */}

      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>

        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-eyebrow">
              <Plane size={15} />
              YOUR JOURNEY BEGINS HERE
            </div>

            <h1>
              Discover the
              <br />
              Extraordinary
              <br />
              <span>World of Travel.</span>
            </h1>

            <p>
              From breathtaking skylines to unforgettable adventures, discover
              beautiful destinations with holidays designed around you.
            </p>

            <div className="hero-actions">
              <Link to="/packages" className="hero-primary-button">
                Explore Packages
                <ArrowRight size={18} />
              </Link>

              <Link to="/destinations" className="hero-secondary-button">
                Discover Destinations
              </Link>
            </div>

            <div className="hero-trust">
              <div className="trust-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={15} fill="currentColor" />
                ))}
              </div>

              <span>Your next adventure starts here</span>
            </div>
          </motion.div>
        </div>

        <div className="hero-bottom-label">
          <span>EXPLORE THE WORLD</span>
          <span className="hero-bottom-line"></span>
          <span>XYZ HOLIDAYS</span>
        </div>
      </section>

      {/* =================================
          TRAVEL SEARCH
      ================================= */}

      <section className="travel-search-section">
        <form className="travel-search-card" onSubmit={handleSearch}>
          {/* Destination */}

          <div className="search-field">
            <MapPin size={21} />

            <div>
              <label htmlFor="destination">Destination</label>

              <select
                id="destination"
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
                required
              >
                <option value="">Select destination</option>

                {destinations.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}, {city.country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="search-divider"></div>

          {/* Travel Date */}

          <div className="search-field">
            <CalendarDays size={21} />

            <div>
              <label htmlFor="travel-date">Travel Date</label>

              <input
                id="travel-date"
                type="date"
                value={travelDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={(event) => setTravelDate(event.target.value)}
                required
              />
            </div>
          </div>

          <div className="search-divider"></div>

          {/* Travellers */}

          <div className="search-field">
            <Users size={21} />

            <div>
              <label htmlFor="travellers">Travellers</label>

              <select
                id="travellers"
                value={travellers}
                onChange={(event) => setTravellers(event.target.value)}
              >
                <option value="1">1 Traveller</option>
                <option value="2">2 Travellers</option>
                <option value="3">3 Travellers</option>
                <option value="4">4 Travellers</option>
                <option value="5">5 Travellers</option>
                <option value="6">6 Travellers</option>
                <option value="7">7+ Travellers</option>
              </select>
            </div>
          </div>

          {/* Search Button */}

          <button type="submit" className="search-button">
            <Search size={19} />
            Find Trips
          </button>
        </form>
      </section>

      {/* =================================
          DESTINATIONS
      ================================= */}

      <section className="destinations-section">
        <div className="section-container">
          <div className="section-heading">
            <div className="section-eyebrow">EXPLORE THE WORLD</div>

            <h2>
              Every Journey
              <span> Has A Story</span>
            </h2>

            <p>
              Discover amazing destinations and find your next favourite holiday
              experience.
            </p>
          </div>

          {destinations.length > 0 ? (
            <div className="destination-grid">
              {destinations.map((city, index) => (
                <motion.div
                  key={city.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                >
                  <DestinationCard city={city} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="home-empty-state">
              <Globe size={35} />
              <h3>Destinations coming soon</h3>
              <p>We're preparing exciting destinations for you.</p>
            </div>
          )}

          <div className="section-link">
            <Link to="/destinations">
              View All Destinations
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* =================================
          HOLIDAY PACKAGES
      ================================= */}

      <section className="packages-section">
        <div className="section-container">
          <div className="section-heading">
            <div className="section-eyebrow">HANDPICKED HOLIDAYS</div>

            <h2>
              Holidays Worth
              <span> Remembering</span>
            </h2>

            <p>
              Carefully designed holiday packages for every kind of traveller.
            </p>
          </div>

          {packages.length > 0 ? (
            <div className="packages-grid">
              {packages.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                >
                  <PackageCard item={item} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="home-empty-state">
              <Plane size={35} />
              <h3>Holiday packages coming soon</h3>
              <p>Our travel packages will be available shortly.</p>
            </div>
          )}

          <div className="section-link">
            <Link to="/packages">
              Explore All Packages
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* =================================
          WHY CHOOSE US
      ================================= */}

      <section className="why-section">
        <div className="section-container">
          <div className="section-heading">
            <div className="section-eyebrow">THE XYZ EXPERIENCE</div>

            <h2>
              Travel Better.
              <span> Experience More.</span>
            </h2>

            <p>
              We believe every holiday deserves thoughtful planning and personal
              attention.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  className="feature-card"
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                  }}
                >
                  <div className="feature-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================
          CALL TO ACTION
      ================================= */}

      <section className="home-cta-section">
        <div className="home-cta-background"></div>

        <div className="home-cta-content">
          <div className="section-eyebrow">LET'S PLAN SOMETHING SPECIAL</div>

          <h2>
            Your Dream Holiday
            <br />
            <span>Awaits You.</span>
          </h2>

          <p>
            Tell us where you want to go. We'll help you make it unforgettable.
          </p>

          <Link to="/contact" className="hero-primary-button">
            Start Planning
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
