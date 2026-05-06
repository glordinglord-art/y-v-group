export const siteConfig = {
  name: "Y.V. Group",
  title: "Y.V. Group | Bienes raíces, inversiones y avaluós en Antioquia",
  description:
    "Administración de propiedad horizontal, bienes raíces, inversiones y avaluós en Antioquia con Yiseth Vélez. Contacto directo para copropiedades e inversionistas.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://yvgroup.com.co",
  phone: "+57 310 838 1590",
  phoneHref: "tel:+573108381590",
  email: "gerencia@yvgroup.com.co",
  whatsappNumber: "573108381590",
  whatsappMessage:
    "Hola Y.V. Group, quiero información sobre administración, avaluós o asesoría inmobiliaria.",
  location: "Antioquia, Colombia",
  founder: "Yiseth Vélez",
  ogImage: "/opengraph-image",
  contactFormAction:
    process.env.NEXT_PUBLIC_CONTACT_FORM_ACTION || "https://formspree.io/f/your-form-id",
} as const;
