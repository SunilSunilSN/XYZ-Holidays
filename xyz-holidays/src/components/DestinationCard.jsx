import { MapPin, ArrowRight } from 'lucide-react'

export default function DestinationCard({ city }) {
  return (
    <a
      href={`/destinations/${city.id}`}
      className="destination-card"
    >
      <img src={city.coverImage} alt={city.name} />

      <div className="destination-overlay"></div>

      <div className="destination-content">
        <span>
          <MapPin size={13} />
          {city.country}
        </span>

        <h3>{city.name}</h3>

        <p>{city.shortDescription}</p>

        <div className="destination-explore">
          Explore Destination
          <ArrowRight size={17} />
        </div>
      </div>
    </a>
  )
}
