import { useState } from 'react'
import { ArrowRight, CheckCircle2, Clock3, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Contact.css'

// Keep this aligned with the WhatsApp number used in WhatsAppButton.jsx.
const whatsappNumber = '910000000000'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const phone = form.get('phone')
    const destination = form.get('destination')
    const travelDate = form.get('travelDate')
    const travellers = form.get('travellers')
    const message = form.get('message')
    const text = [
      'Hello XYZ Holidays! I would like help planning a trip.',
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : '',
      destination ? `Destination: ${destination}` : '',
      travelDate ? `Travel date: ${travelDate}` : '',
      travellers ? `Travellers: ${travellers}` : '',
      message ? `More details: ${message}` : '',
    ].filter(Boolean).join('\n')

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-shade" />
        <div className="contact-container contact-hero-inner">
          <span className="contact-eyebrow">WE’RE HERE TO HELP</span>
          <h1>Let’s plan a trip<br /><em>worth remembering.</em></h1>
          <p>Tell us what you’re dreaming of. Our team will help turn the idea into a holiday that feels right for you.</p>
          <a href="#contact-form" className="contact-hero-button">Start planning <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="contact-container contact-layout">
          <div className="contact-copy">
            <span className="contact-eyebrow">GET IN TOUCH</span>
            <h2>Your next journey<br /><em>starts with a hello.</em></h2>
            <p>Share a few details about your plans and we’ll help you explore the options. You can also reach us directly through WhatsApp.</p>

            <a className="contact-detail-card" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
              <span className="contact-detail-icon"><MessageCircle size={20} /></span>
              <span><small>CHAT WITH OUR TEAM</small><strong>WhatsApp XYZ Holidays</strong><em>Usually the quickest way to reach us</em></span>
              <ArrowRight size={17} className="contact-detail-arrow" />
            </a>
            <div className="contact-detail-card contact-detail-static">
              <span className="contact-detail-icon"><Clock3 size={20} /></span>
              <span><small>PERSONAL TRAVEL SUPPORT</small><strong>Planning, made simpler</strong><em>Tell us your destination, dates and travel style.</em></span>
            </div>
            <div className="contact-promise"><CheckCircle2 size={18} /><span>No pressure—just helpful guidance for your holiday plans.</span></div>
          </div>

          <div className="contact-form-card" id="contact-form">
            <div className="contact-form-heading"><span className="contact-eyebrow">TRIP ENQUIRY</span><h2>Tell us about your plans</h2><p>Complete the form and it will open a prefilled message in WhatsApp for you to send.</p></div>
            {sent && <div className="contact-success" role="status"><CheckCircle2 size={18} /> Your message is ready in WhatsApp. Send it there to reach our team.</div>}
            <form onSubmit={handleSubmit}>
              <div className="contact-fields-two">
                <label>Your name <span>*</span><input name="name" autoComplete="name" placeholder="Full name" required /></label>
                <label>Email address <span>*</span><input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
              </div>
              <div className="contact-fields-two">
                <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="Include country code" /></label>
                <label>Where would you like to go?<input name="destination" placeholder="Destination or ‘not sure yet’" /></label>
              </div>
              <div className="contact-fields-two">
                <label>Preferred travel date<input name="travelDate" type="date" /></label>
                <label>Number of travellers<select name="travellers" defaultValue=""><option value="" disabled>Select travellers</option><option>1 traveller</option><option>2 travellers</option><option>3–4 travellers</option><option>5 or more travellers</option></select></label>
              </div>
              <label>Anything else we should know?<textarea name="message" rows="4" placeholder="Travel style, special occasions, or questions…" /></label>
              <button type="submit" className="contact-submit"><Send size={16} /> Continue to WhatsApp</button>
              <p className="contact-form-note">Your details are added to a message for you to review and send in WhatsApp.</p>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-next-step"><div className="contact-container contact-next-inner"><div><span className="contact-eyebrow">STILL EXPLORING?</span><h2>Find a little inspiration.</h2><p>Browse places to go and thoughtfully planned holiday packages.</p></div><div className="contact-next-links"><Link to="/destinations">Explore destinations <ArrowRight size={16} /></Link><Link to="/packages">View holiday packages <ArrowRight size={16} /></Link></div></div></section>
    </main>
  )
}
