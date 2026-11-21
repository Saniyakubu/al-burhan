import { absoluteUrl, company } from "@/lib/company";

export default function Head() {
  const title = "Savvy Prime Ltd Investor Brief | Kaduna & Abuja";
  const description =
    "A clear investor brief for Savvy Prime Ltd covering the current business lines, phased expansion roadmap, and contact details for financial institutions and strategic partners.";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Savvy Prime Ltd investor brief, Kaduna, Abuja, strategic partners, financial institutions" />
      <link rel="canonical" href={absoluteUrl("/investors")} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={absoluteUrl("/investors")} />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}
