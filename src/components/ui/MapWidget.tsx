"use client";

export function MapWidget() {
  return (
    <iframe
      src="https://yandex.ru/map-widget/v1/?ll=74.602583%2C42.867246&z=16&l=map&lang=ru_RU&pt=74.602583%2C42.867246,pm2rdm"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Art Studio Sky — Яндекс Карты"
    />
  );
}
