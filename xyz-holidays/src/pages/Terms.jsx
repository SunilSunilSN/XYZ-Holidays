import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, FileText } from 'lucide-react'
import './LegalPages.css'

export default function Terms() {
  return (
    <main className="legal-page">
      <header className="legal-hero">
        <div className="legal-container">
          <Link to="/" className="legal-back"><ArrowLeft size={15} /> Back to home</Link>
          <div className="legal-title-icon"><FileText size={23} /></div>
          <span className="legal-eyebrow">XYZ HOLIDAYS</span>
          <h1>Terms &amp; Conditions</h1>
          <p>Terms for browsing this website and making a travel enquiry with XYZ Holidays.</p>
        </div>
      </header>
      <div className="legal-container legal-content-layout">
        <article className="legal-content">
          <p className="legal-intro">These terms apply to your use of the XYZ Holidays website. A travel enquiry through this website is a request for information and does not, by itself, confirm a reservation. Booking-specific documents and supplier terms may also apply when you choose to book.</p>
          <section><h2>1. Website information</h2><p>We aim to keep destination and package information useful and current. Images, descriptions, sample prices and availability are provided for general information and may change. A final itinerary, price, inclusions and availability should be confirmed in writing before you make a booking or payment.</p></section>
          <section><h2>2. Enquiries and bookings</h2><p>Sending an enquiry does not create a booking. A booking is confirmed only after XYZ Holidays or the relevant travel supplier has accepted it and provided written confirmation, including any required payment and booking conditions.</p></section>
          <section><h2>3. Prices and payments</h2><p>Prices can depend on travel dates, availability, exchange rates, taxes and supplier terms. Any quote should state its validity period and what it includes. Payment amounts, due dates, accepted methods and any additional charges will be provided with the applicable booking details. Do not make payment based solely on an unconfirmed website listing.</p></section>
          <section><h2>4. Changes and cancellations</h2><p>Change, cancellation, refund and no-show conditions vary by booking and supplier. The conditions provided with your confirmed itinerary or booking documents apply. Please review them before confirming, and contact us promptly if you need to request a change.</p></section>
          <section><h2>5. Traveller responsibilities</h2><p>Travellers are responsible for providing accurate booking information and for checking that they have the travel documents and permissions required for their journey. If you have questions about a particular destination or itinerary, contact us before booking so we can discuss the information available to us.</p></section>
          <section><h2>6. Third-party suppliers and links</h2><p>Travel arrangements may involve airlines, hotels, transport operators, tour providers and other suppliers, each with their own terms. This website may also link to third-party sites. Review the applicable supplier terms and privacy policies before completing a booking or using an external site.</p></section>
          <section><h2>7. Website use and content</h2><p>Please use this website lawfully and do not interfere with its operation or attempt to access it in an unauthorised way. Website text, branding and design belong to XYZ Holidays or their respective rights holders and may not be reused without permission, except where applicable law allows.</p></section>
          <section><h2>8. Updates and contact</h2><p>We may update these terms as the website or our services change. The version published here applies to website use from its publication. For questions about a specific trip or booking, use our <Link to="/contact">contact page</Link>. Add the company’s legal name, jurisdiction and verified contact information before publishing.</p></section>
          <p className="legal-template-note">Website owner: have these terms checked against your actual booking, cancellation, payment and supplier arrangements and the laws that apply to your business before publishing.</p>
        </article>
        <aside className="legal-sidebar"><span className="legal-eyebrow">RELATED</span><Link to="/privacy-policy">Privacy Policy <ArrowRight size={15} /></Link><Link to="/contact">Contact XYZ Holidays <ArrowRight size={15} /></Link></aside>
      </div>
    </main>
  )
}
