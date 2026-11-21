import { absoluteUrl, company } from "@/lib/company";

export default function Head() {
  const title = "Savvy Prime Properties | Kaduna Real Estate";
  const description =
    "Savvy Prime Properties is the real estate line of Savvy Prime Ltd, focused on phased expansion into land and property in Kaduna and beyond.";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Kaduna real estate, Savvy Prime Properties, Savvy Prime Ltd, land, property" />
      <link rel="canonical" href={absoluteUrl("/properties")} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={absoluteUrl("/properties")} />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}
