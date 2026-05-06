export const siteConfig = {
  name: "Y.V. Group",
  title: "Y.V. Group | Bienes raices, inversiones y avaluos en Antioquia",
  description:
    "Administracion de propiedad horizontal, bienes raices, inversiones y avaluos en Antioquia con Yiseth Velez. Contacto directo para copropiedades e inversionistas.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://yvgroup.com.co",
  phone: "+57 310 838 1590",
  phoneHref: "tel:+573108381590",
  email: "gerencia@yvgroup.com.co",
  whatsappNumber: "573108381590",
  whatsappMessage:
    "Hola Y.V. Group, quiero informacion sobre administracion, avaluos o asesoria inmobiliaria.",
  location: "Antioquia, Colombia",
  founder: "Yiseth Velez",
  ogImage: "/opengraph-image",
  contactFormAction:
    process.env.NEXT_PUBLIC_CONTACT_FORM_ACTION || "https://formspree.io/f/your-form-id",
} as const;
