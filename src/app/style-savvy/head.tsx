import { absoluteUrl, company } from "@/lib/company";

export default function Head() {
  const title = "Style Savvy | Fashion Resale Nigeria";
  const description =
    "Style Savvy is the fashion line of Savvy Prime Ltd, focused on fashion resale in Nigeria through local purchase, import, and auction sourcing.";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="fashion resale Nigeria, Savvy Prime Ltd, Style Savvy, Kaduna, Abuja" />
      <link rel="canonical" href={absoluteUrl("/style-savvy")} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={absoluteUrl("/style-savvy")} />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}
