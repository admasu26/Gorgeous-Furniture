'use client';

import { useEffect } from 'react';

/**
 * TawkMessenger Component
 * Seamlessly integrates Tawk.to Live Chatbot Widget into Gorgeous Furniture Ethiopia.
 * 
 * To connect your Tawk.to Chatbot account:
 * 1. Sign up/log in at https://www.tawk.to/
 * 2. Copy your Property ID and Widget ID from Administration -> Widget Code
 * 3. Add to your .env.local file:
 *    NEXT_PUBLIC_TAWK_PROPERTY_ID=your_property_id
 *    NEXT_PUBLIC_TAWK_WIDGET_ID=your_widget_id
 */
export default function TawkMessenger({ propertyId, widgetId }) {
  useEffect(() => {
    // Read IDs from props or environment variables
    const pId = propertyId || process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
    const wId = widgetId || process.env.NEXT_PUBLIC_TAWK_WIDGET_ID || 'default';

    if (!pId) {
      // Log helpful setup instructions for developers / site owners
      console.info(
        'Tawk.to Chatbot Widget: Property ID not found. Set NEXT_PUBLIC_TAWK_PROPERTY_ID in .env.local or pass propertyId to <TawkMessenger />.'
      );
      return;
    }

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Attach Gorgeous Furniture Ethiopia website context automatically to Tawk session
    window.Tawk_API.onLoad = function() {
      if (typeof window.Tawk_API.setAttributes === 'function') {
        window.Tawk_API.setAttributes(
          {
            store: 'Gorgeous Furniture Ethiopia',
            city: 'Addis Ababa',
            showrooms: 'CMC Flagship, Semit 72, Gerji Studio, Betel Hub',
            phone: '+251 940 510000 / +251 940 520000',
            catalog: 'Smart Recliners, King Bedroom Sets, Marble Dining, TV Consoles',
            warranty: '2-Year Quality Guarantee',
            delivery: 'Free Addis Ababa delivery over ETB 50k',
          },
          function (error) {}
        );
      }
    };

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${pId}/${wId}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [propertyId, widgetId]);

  return null;
}
