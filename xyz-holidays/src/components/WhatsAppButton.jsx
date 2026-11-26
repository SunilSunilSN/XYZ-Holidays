import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {

  const phoneNumber = '910000000000'

  const message = encodeURIComponent(
    'Hello XYZ Holidays! I am interested in planning a holiday. Please share your packages.'
  )

  return (

    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition"
    >

      <MessageCircle size={27} />

    </a>

  )
}
