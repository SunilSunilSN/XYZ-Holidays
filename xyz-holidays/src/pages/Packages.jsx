import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock3, MapPin, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { getAllPackages } from "../data/cities";
import "./Packages.css";

const categories = [
  "All",
  "Budget",
  "Family",
  "Luxury",
  "Adventure",
  "Honeymoon",
];

function formatPrice(price = {}) {
  const currency = price.currency || "INR";
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(price.amount || 0);
  } catch {
    return `${currency} ${new Intl.NumberFormat("en-IN").format(price.amount || 0)}`;
  }
}

export default function Packages() {
  const [category, setCategory] = useState("All");
  const [city, setCity] = useState("All destinations");
  const [query, setQuery] = useState("");
  const allPackages = useMemo(() => getAllPackages(), []);
  const destinations = useMemo(
    () => [...new Set(allPackages.map((item) => item.cityName))].sort(),
    [allPackages],
  );
  const visiblePackages = allPackages.filter((item) => {
    const matchesCategory =
      category === "All" ||
      item.category?.toLowerCase() === category.toLowerCase();
    const matchesCity = city === "All destinations" || item.cityName === city;
    const needle = query.trim().toLowerCase();
    const matchesQuery =
      !needle ||
      `${item.name} ${item.cityName} ${item.country} ${item.description}`
        .toLowerCase()
        .includes(needle);
    return matchesCategory && matchesCity && matchesQuery;
  });

  return (
    <main className="packages-page">
      <section className="packages-hero">
        <div className="packages-hero-shade" />
        <div className="packages-hero-content">
          <span className="packages-eyebrow">
            THOUGHTFULLY PLANNED GETAWAYS
          </span>
          <h1>
            Find the trip that
            <br />
            <em>feels like you.</em>
          </h1>
          <p>
            From easy family escapes to once-in-a-lifetime adventures, your next
            story starts here.
          </p>
          <a href="#package-list" className="packages-hero-button">
            Explore our holidays <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className="packages-intro">
        <div className="packages-container packages-intro-inner">
          <div>
            <span className="packages-eyebrow">YOUR NEXT CHAPTER</span>
            <h2>Good trips stay with you.</h2>
          </div>
          <p>
            Every holiday is designed to make planning simple and the moments
            away unforgettable. Find a package that fits your travel style, then
            talk to our team to make it yours.
          </p>
        </div>
      </section>

      <section className="packages-list-section" id="package-list">
        <div className="packages-container">
          <div className="packages-section-heading">
            <div>
              <span className="packages-eyebrow">EXPLORE HOLIDAY PACKAGES</span>
              <h2>A little inspiration for your next escape</h2>
              <p>
                Browse our handpicked holidays by destination or travel style.
              </p>
            </div>
            <span className="packages-result-count">
              {visiblePackages.length}{" "}
              {visiblePackages.length === 1 ? "holiday" : "holidays"}
            </span>
          </div>

          <div className="packages-filters">
            <label className="packages-search">
              <Search size={17} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search holidays or destinations"
                aria-label="Search holidays or destinations"
              />
            </label>
            <label className="packages-destination-filter">
              <MapPin size={16} />
              <select
                value={city}
                onChange={(event) => setCity(event.target.value)}
                aria-label="Filter by destination"
              >
                <option>All destinations</option>
                {destinations.map((name) => (
                  <option key={name}>{name}</option>
                ))}
              </select>
            </label>
          </div>

          <div
            className="packages-category-tabs"
            aria-label="Filter by travel style"
          >
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {visiblePackages.length ? (
            <div className="packages-grid">
              {visiblePackages.map((item, index) => (
                <motion.article
                  className="holiday-card"
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ delay: (index % 3) * 0.08 }}
                >
                  <Link
                    to={`/destinations/${item.cityId}`}
                    className="holiday-card-image-link"
                    aria-label={`Explore ${item.cityName}`}
                  >
                    <div className="holiday-card-image">
                      <img
                        src={item.image}
                        alt={`${item.name} in ${item.cityName}`}
                        loading="lazy"
                      />
                      <span className="holiday-card-category">
                        {item.category || "Holiday"}
                      </span>
                      <span className="holiday-card-duration">
                        <Clock3 size={14} />
                        {item.duration?.days} days · {item.duration?.nights}{" "}
                        nights
                      </span>
                    </div>
                  </Link>
                  <div className="holiday-card-content">
                    <div className="holiday-card-location">
                      <MapPin size={14} />
                      {item.cityName}, {item.country}
                    </div>
                    <h3>{item.name}</h3>
                    <p className="holiday-card-description">
                      {item.description}
                    </p>
                    {item.inclusions?.length > 0 && (
                      <ul>
                        {item.inclusions.slice(0, 3).map((inclusion) => (
                          <li key={inclusion}>
                            <Check size={14} />
                            {inclusion}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="holiday-card-bottom">
                      <div>
                        <span>Starting from</span>
                        <strong>{formatPrice(item.price)}</strong>
                        {item.price?.perPerson && <small>per person</small>}
                      </div>
                      <Link
                        to={`/destinations/${item.cityId}`}
                        className="holiday-card-arrow"
                        aria-label={`View ${item.cityName} destination`}
                      >
                        <ArrowRight size={19} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="packages-empty">
              <span className="packages-empty-icon">
                <Search size={20} />
              </span>
              <h3>No holidays match those filters</h3>
              <p>
                Try another destination or travel style to discover more
                options.
              </p>
              <button
                type="button"
                onClick={() => {
                  setCategory("All");
                  setCity("All destinations");
                  setQuery("");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="packages-contact">
        <div className="packages-container packages-contact-inner">
          <div>
            <span className="packages-eyebrow">NEED A HAND?</span>
            <h2>We can plan it around you.</h2>
            <p>
              Tell us what you have in mind and our travel team will help shape
              the perfect escape.
            </p>
          </div>
          <Link to="/contact" className="packages-contact-button">
            Talk to our team <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
