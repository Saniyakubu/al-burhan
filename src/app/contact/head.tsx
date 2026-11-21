import { absoluteUrl, company } from "@/lib/company";

export default function Head() {
  const title = "Contact Savvy Prime Ltd | Kaduna Office, Phone, WhatsApp, Email";
  const description =
    "Contact Savvy Prime Ltd in New Millennium City, Kaduna. Reach the company by phone, WhatsApp, email, TikTok, or Instagram.";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Savvy Prime Ltd contact, Kaduna office, WhatsApp, email, TikTok, Instagram" />
      <link rel="canonical" href={absoluteUrl("/contact")} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={absoluteUrl("/contact")} />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}
