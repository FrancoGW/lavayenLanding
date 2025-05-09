"use client"

import Script from "next/script"

export default function FacebookPixel() {
  return (
    <>
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2091986757930696');
          fbq('track', 'PageView');
        `}
      </Script>
      <Script id="facebook-conversions-api" strategy="afterInteractive">
        {`
          // Configuración de la API de conversiones
          const accessToken = 'EAAQTaWQ0IosBO9TRJjEntlHPBTIetQSYul2VuQF7tOs5QRs5fNCjYZCqU8IZCYe9QFSDwZAPx6puSYwpocfdHcv9pOAIZBF34reGPJfyjFqH1cQqUnswZBOAk3CVf2fgL7uKXIGdcKq7cogtZBekeifGrtZC1jUYXMiYLDlWXmOUPZCwQRnSZCUzyfEN7w3uCMZC9PwZDZD';
          
          // Función para enviar eventos de conversión
          window.sendConversionEvent = async function(eventName, eventData) {
            try {
              const response = await fetch('https://graph.facebook.com/v18.0/2091986757930696/events', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  data: [{
                    event_name: eventName,
                    event_time: Math.floor(Date.now() / 1000),
                    action_source: 'website',
                    user_data: {
                      client_ip_address: eventData.ip,
                      client_user_agent: eventData.userAgent,
                      em: eventData.email ? [eventData.email] : undefined,
                      ph: eventData.phone ? [eventData.phone] : undefined,
                    },
                    custom_data: {
                      ...eventData.customData,
                      content_name: eventData.contentName,
                      content_category: eventData.contentCategory,
                      value: eventData.value,
                      currency: eventData.currency || 'USD',
                    },
                  }],
                  access_token: accessToken,
                }),
              });

              if (!response.ok) {
                throw new Error('Error al enviar evento de conversión');
              }

              const result = await response.json();
              console.log('Evento de conversión enviado:', result);
            } catch (error) {
              console.error('Error al enviar evento de conversión:', error);
            }
          };
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=2091986757930696&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  )
} 
