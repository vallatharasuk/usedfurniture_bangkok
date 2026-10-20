export const shop = {
  phoneDisplay: '7443 1747',
  phoneTel: '+97474431747',
  whatsapp: '97474431747',
  cr: '14426/29',
  shopNo: '13',
  hoursEn: '9:00 AM – 10:00 PM',
  hoursAr: '٩:٠٠ ص – ١٠:٠٠ م',
  brandDomain: 'usedfurniture.qa',
}

export const address = {
  en: ['Shop 13, New Souq Al Haraj', 'Al Wakrah Road, near Barwa Village', 'Doha, Qatar'],
  ar: ['محل ١٣، سوق الحراج الجديد', 'طريق الوكرة، قرب قرية بروة', 'الدوحة، قطر'],
  bn: ['দোকান ১৩, নিউ সুক আল হারাজ', 'আল ওয়াকরাহ রোড, বারওয়া ভিলেজের কাছে', 'দোহা, কাতার'],
  hi: ['दुकान 13, न्यू सूक अल हराज', 'अल वकराह रोड, बरवा विलेज के पास', 'दोहा, क़तर'],
}

export function hoursFor(lang) {
  if (lang === 'ar') return shop.hoursAr
  if (lang === 'bn') return 'সকাল ৯:০০ – রাত ১০:০০'
  if (lang === 'hi') return 'सुबह 9:00 – रात 10:00'
  return shop.hoursEn
}

export const mapsSearch =
  'https://www.google.com/maps/search/?api=1&query=New+Souq+Al+Haraj+Doha+Qatar'

export const mapsDirections =
  'https://www.google.com/maps/dir/?api=1&destination=New+Souq+Al+Haraj+Doha+Qatar'

export const categoryIds = ['sofas', 'beds', 'wardrobes', 'tables', 'appliances', 'office']




