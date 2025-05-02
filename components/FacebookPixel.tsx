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
          window.fbAsyncInit = function() {
            FB.init({
              appId: '2091986757930696',
              cookie: true,
              xfbml: true,
              version: 'v18.0'
            });
          };

          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));

          // Configuración de la API de conversiones
          const accessToken = 'EAAQTaWQ0IosBO9TRJjEntlHPBTIetQSYul2VuQF7tOs5QRs5fNCjYZCqU8IZCYe9QFSDwZAPx6puSYwpocfdHcv9pOAIZBF34reGPJfyjFqH1cQqUnswZBOAk3CVf2fgL7uKXIGdcKq7cogtZBekeifGrtZC1jUYXMiYLDlWXmOUPZCwQRnSZCUzyfEN7w3uCMZC9PwZDZD';
          
          // Función para enviar eventos de conversión
          window.sendConversionEvent = function(eventName, eventData) {
            fetch('https://graph.facebook.com/v18.0/2091986757930696/events', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                data: [{
                  event_name: eventName,
                  event_time: Math.floor(Date.now() / 1000),
                  user_data: {
                    client_ip_address: eventData.ip,
                    client_user_agent: eventData.userAgent,
                  },
                  custom_data: eventData.customData || {},
                }],
                access_token: accessToken,
              }),
            });
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