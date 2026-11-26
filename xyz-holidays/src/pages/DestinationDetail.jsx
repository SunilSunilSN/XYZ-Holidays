import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, Clock3, MapPin, MessageCircle } from 'lucide-react'
import { getCityById } from '../data/cities'
import './DestinationDetail.css'

const whatsappNumber = '971500000000'

function DestinationNotFound() {
  return (
    <main className="destination-detail destination-not-found">
      <div className="detail-container">
        <span className="detail-eyebrow">DESTINATION NOT FOUND</span>
        <h1>Let’s find somewhere wonderful.</h1>
        <p>This destination may no longer be available. Explore our current holiday destinations.</p>
        <Link className="detail-button detail-button-primary" to="/destinations">Browse destinations <ArrowRight size={17} /></Link>
      </div>
    </main>
  )
}

export default function DestinationDetail() {
  const { cityId } = useParams()
  const city = getCityById(cityId?.toLowerCase())

  if (!city) return <DestinationNotFound />

  const packages = (city.packages || []).filter((pkg) => pkg.active)
  const gallery = (city.gallery || []).filter(Boolean)
  const images = [...new Set([city.coverImage, ...gallery].filter(Boolean))]
  const message = encodeURIComponent(`Hello XYZ Holidays, I’m interested in planning a trip to ${city.name}. Please share more details.`)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <main className="destination-detail">
      <section className="detail-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(12, 25, 43, .82), rgba(12, 25, 43, .22)), url("${city.coverImage}")` }}>
        <div className="detail-hero-inner">
          <Link to="/destinations" className="detail-back"><ArrowLeft size={16} /> All destinations</Link>
          <span className="detail-eyebrow">YOUR NEXT JOURNEY AWAITS</span>
          <h1>{city.name}<span>, {city.country}</span></h1>
          <p>{city.shortDescription || city.description}</p>
          <a className="detail-button detail-button-gold" href="#holiday-packages">Explore holidays <ArrowRight size={17} /></a>
        </div>
        <div className="detail-hero-location"><MapPin size={15} /> {city.name}, {city.country}</div>
      </section>

      <section className="detail-intro detail-container">
        <div className="detail-intro-copy">
          <span className="detail-eyebrow">DISCOVER {city.name.toUpperCase()}</span>
          <h2>A place to make<br /><em>lasting memories.</em></h2>
        </div>
        <p>{city.description || city.shortDescription}</p>
      </section>

      {city.highlights?.length > 0 && (
        <section className="detail-highlights">
          <div className="detail-container">
            <div className="detail-section-heading">
              <span className="detail-eyebrow">THE BEST OF {city.name.toUpperCase()}</span>
              <h2>Experiences to remember</h2>
              <p>Discover the places and moments that make {city.name} special.</p>
            </div>
            <div className="detail-highlight-grid">
              {city.highlights.map((highlight, index) => (
                <article className="detail-highlight" key={`${highlight}-${index}`}>
                  <span className="detail-highlight-number">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{highlight}</h3>
                  <span className="detail-highlight-rule" />
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {images.length > 0 && (
        <section className="detail-gallery detail-container">
          <div className="detail-section-heading">
            <span className="detail-eyebrow">A GLIMPSE OF {city.name.toUpperCase()}</span>
            <h2>Picture your journey</h2>
          </div>
          <div className={`detail-gallery-grid ${images.length === 1 ? 'detail-gallery-single' : ''}`}>
            {images.slice(0, 3).map((image, index) => (
              <img key={image} src={image} alt={`${city.name} travel view ${index + 1}`} loading="lazy" />
            ))}
          </div>
        </section>
      )}

      <section className="detail-packages" id="holiday-packages">
        <div className="detail-container">
          <div className="detail-section-heading detail-packages-heading">
            <span className="detail-eyebrow">MADE FOR YOUR KIND OF TRIP</span>
            <h2>Choose your {city.name} escape</h2>
            <p>Thoughtfully planned stays and experiences, ready for your next adventure.</p>
          </div>
          {packages.length > 0 ? (
            <div className="detail-package-grid">
              {packages.map((pkg) => (
                <article className="detail-package-card" key={pkg.id}>
                  <div className="detail-package-image">
                    <img src={pkg.image || city.coverImage} alt={pkg.name} loading="lazy" />
                    {pkg.category && <span>{pkg.category}</span>}
                  </div>
                  <div className="detail-package-content">
                    <h3>{pkg.name}</h3>
                    <div className="detail-package-duration"><Clock3 size={15} /> {pkg.duration?.days} days / {pkg.duration?.nights} nights</div>
                    <p>{pkg.description}</p>
                    {pkg.inclusions?.length > 0 && (
                      <ul>{pkg.inclusions.slice(0, 3).map((item) => <li key={item}><Check size={15} /> {item}</li>)}</ul>
                    )}
                    <div className="detail-package-bottom">
                      <div><small>Starting from</small><strong>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: pkg.price?.currency || 'INR', maximumFractionDigits: 0 }).format(pkg.price?.amount || 0)}</strong><small>{pkg.price?.perPerson ? 'per person' : ''}</small></div>
                      <a href={`${whatsappUrl}%0A%0APackage:%20${encodeURIComponent(pkg.name)}`} aria-label={`Enquire about ${pkg.name}`}><ArrowRight size={19} /></a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="detail-no-packages"><p>We’re putting together new {city.name} holidays.</p><a href={whatsappUrl}>Ask us to plan a custom trip <ArrowRight size={16} /></a></div>
          )}
        </div>
      </section>

      <section className="detail-cta">
        <div className="detail-container detail-cta-inner">
          <div><span className="detail-eyebrow">LET’S MAKE IT HAPPEN</span><h2>Your {city.name} story starts here.</h2><p>Talk to our travel team and let’s plan a trip that feels like yours.</p></div>
          <a className="detail-button detail-button-gold" href={whatsappUrl}><MessageCircle size={17} /> Plan my trip</a>
        </div>
      </section>
    </main>
  )
}
