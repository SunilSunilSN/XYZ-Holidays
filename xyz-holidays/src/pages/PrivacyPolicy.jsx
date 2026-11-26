import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react'
import './LegalPages.css'

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <header className="legal-hero">
        <div className="legal-container">
          <Link to="/" className="legal-back"><ArrowLeft size={15} /> Back to home</Link>
          <div className="legal-title-icon"><ShieldCheck size={24} /></div>
          <span className="legal-eyebrow">XYZ HOLIDAYS</span>
          <h1>Privacy Policy</h1>
          <p>How information is handled when you explore our website or contact us about travel.</p>
        </div>
      </header>
      <div className="legal-container legal-content-layout">
        <article className="legal-content">
          <p className="legal-intro">This policy describes how XYZ Holidays (“we”, “us” or “our”) handles personal information you choose to share when using this website or requesting travel assistance. Please make sure this page reflects the company’s actual practices before publishing.</p>
          <section><h2>1. Information you provide</h2><p>When you contact us or submit a trip enquiry, you may provide details such as your name, email address, phone number, destination, preferred travel dates, number of travellers and other information relevant to planning your trip.</p></section>
          <section><h2>2. How we use information</h2><p>We use enquiry information to respond to you, discuss travel options, prepare requested proposals and, where you ask us to proceed, help coordinate travel arrangements. We may also use it to follow up on your request and maintain business records.</p></section>
          <section><h2>3. When information may be shared</h2><p>If you ask us to arrange travel, relevant details may need to be shared with travel suppliers or service providers involved in the arrangements. Information may also be handled by providers that support our website, communications or business operations. We do not sell personal information. Confirm this section against the company’s actual supplier and service-provider practices.</p></section>
          <section><h2>4. Cookies and technical information</h2><p>Your browser or website hosting may process technical information when you visit this site. If analytics, advertising tools or non-essential cookies are enabled, describe those tools and the choices available to visitors here. Do not claim that tracking is or is not used until the site configuration has been checked.</p></section>
          <section><h2>5. Retention and security</h2><p>We keep enquiry and booking information for as long as needed to respond to requests, manage travel arrangements, maintain appropriate records and meet applicable obligations. We use reasonable safeguards for the information we handle; no online service can guarantee absolute security.</p></section>
          <section><h2>6. Your choices</h2><p>You can contact us to ask about personal information you have shared, request a correction or ask us to stop using it for further travel enquiries. The rights available to you may depend on the laws that apply to your location and on any record-keeping obligations.</p></section>
          <section><h2>7. Third-party websites</h2><p>This website may link to other websites or services. Their privacy practices are governed by their own policies, so please review those policies when you visit them.</p></section>
          <section><h2>8. Contact us</h2><p>For questions about this policy or information you have shared with XYZ Holidays, please use our <Link to="/contact">contact page</Link>. Add the company’s verified privacy contact details before publishing.</p></section>
          <p className="legal-template-note">Website owner: confirm this policy against your actual data handling, booking partners, analytics and applicable local requirements before publishing.</p>
        </article>
        <aside className="legal-sidebar"><span className="legal-eyebrow">RELATED</span><Link to="/terms">Terms &amp; Conditions <ArrowRight size={15} /></Link><Link to="/contact">Contact XYZ Holidays <ArrowRight size={15} /></Link></aside>
      </div>
    </main>
  )
}
