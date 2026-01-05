// Tracking utilities for Google Analytics, GTM, and Google Ads

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', eventName, eventParams)
  }

  // Google Tag Manager
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    ;(window as any).dataLayer.push({
      event: eventName,
      ...eventParams,
    })
  }
}

// Form submission tracking
export const trackFormSubmission = (formType: string, formData?: Record<string, any>) => {
  trackEvent('form_submit', {
    form_type: formType,
    ...formData,
  })

  // Google Ads conversion tracking
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', 'conversion', {
      send_to: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID,
      value: 1.0,
      currency: 'AED',
    })
  }
}

// Phone click tracking
export const trackPhoneClick = (phoneNumber: string) => {
  trackEvent('phone_click', {
    phone_number: phoneNumber,
  })

  // Google Ads conversion tracking for phone calls
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', 'conversion', {
      send_to: process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_ID,
      value: 1.0,
      currency: 'AED',
    })
  }
}

// WhatsApp click tracking
export const trackWhatsAppClick = (source?: string) => {
  trackEvent('whatsapp_click', {
    source: source || 'unknown',
  })

  // Google Ads conversion tracking for WhatsApp
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', 'conversion', {
      send_to: process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION_ID,
      value: 1.0,
      currency: 'AED',
    })
  }
}

// Page view tracking
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('config', process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID, {
      page_path: url,
      page_title: title,
    })
  }
}


