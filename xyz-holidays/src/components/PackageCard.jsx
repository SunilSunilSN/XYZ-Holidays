import { Clock, MapPin, ArrowRight } from 'lucide-react'

export default function PackageCard({ item }) {
  const formattedPrice = new Intl.NumberFormat('en-IN').format(
    item.price.amount
  )

  return (
    <article className="package-card">

      <div className="package-image">
        <img src={item.image} alt={item.name} />

        <span className="package-tag">
          {item.category}
        </span>

        <span className="package-duration">
          <Clock size={14} />
          {item.duration.days} Days / {item.duration.nights} Nights
        </span>
      </div>

      <div className="package-content">

        <div className="package-location">
          <MapPin size={14} />
          {item.cityName}, {item.country}
        </div>

        <h3>{item.name}</h3>

        <div className="package-features">
          {item.inclusions.slice(0, 3).map((feature) => (
            <div key={feature}>
              ✓ {feature}
            </div>
          ))}
        </div>

        <div className="package-bottom">
          <div>
            <span className="price-label">Starting from</span>

            <div className="package-price">
              ₹{formattedPrice}
              <span>
                {item.price.perPerson ? ' / person' : ''}
              </span>
            </div>
          </div>

          <a
            href={`/packages/${item.cityId}/${item.id}`}
            className="package-arrow"
            aria-label={`View ${item.name}`}
          >
            <ArrowRight size={20} />
          </a>
        </div>

      </div>
    </article>
  )
}
