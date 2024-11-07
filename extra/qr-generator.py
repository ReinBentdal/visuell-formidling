import qrcode

BASE = 'https://reinbentdal.github.io/visuell-formidling'

links = {
    'qr-start': '/',
    'qr-done': '/done',
    'qr-square': '/square',
    'qr-cafe': '/cafe',
    'qr-news-the-daily-tribune': '/the-daily-tribune',
    'qr-news-elvfjord-bulletin': '/elvfjord-bulletin',
    'qr-news-the-national-journal': '/the-national-journal',
}

for link in links:
    img = qrcode.make(BASE + links[link])
    img.save(f"{link}.png")