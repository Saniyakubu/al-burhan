import { absoluteUrl, company } from "@/lib/company";

export default function Head() {
  const title = "About Savvy Prime Ltd | Founder, Mission, Kaduna & Abuja";
  const description =
    "Learn about Savvy Prime Ltd, the CAC-registered Kaduna and Abuja company founded by Abdulsalam Haruna. Read the company story, mission, vision, and brand identity.";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Savvy Prime Ltd, Savvy Prime Limited, Kaduna, Abuja, founder Abdulsalam Haruna, company profile" />
      <link rel="canonical" href={absoluteUrl("/about")} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={absoluteUrl("/about")} />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}
