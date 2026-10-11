import { shop } from './data'

export function waUrl(message) {
  const text = message?.trim()
  const base = `https://wa.me/${shop.whatsapp}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}

export function openWhatsApp(message) {
  const url = waUrl(message)
  const popup = window.open(url, '_blank', 'noopener,noreferrer')
  if (!popup) window.location.href = url
  return url
}
