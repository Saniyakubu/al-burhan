import { absoluteUrl, company } from "@/lib/company";

export default function Head() {
  const title = "Savvy Prime Ltd Growth Roadmap | Real Estate, Agriculture, Manufacturing, Consulting";
  const description =
    "Read Savvy Prime Ltd's phased growth plan from vehicles and fashion into real estate, agriculture, manufacturing, and consulting.";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Savvy Prime Ltd growth, real estate, agriculture, manufacturing, consulting, Kaduna, Abuja" />
      <link rel="canonical" href={absoluteUrl("/growth")} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={absoluteUrl("/growth")} />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}
