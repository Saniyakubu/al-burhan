import { absoluteUrl, company } from "@/lib/company";

export default function Head() {
  const title = "Savvy Wheels | Vehicle Sourcing Kaduna, Car Import Nigeria";
  const description =
    "Savvy Wheels is the vehicle line of Savvy Prime Ltd. It focuses on vehicle sourcing in Kaduna, car import Nigeria, and auction cars Nigeria.";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="vehicle sourcing Kaduna, car import Nigeria, auction cars Nigeria, Savvy Wheels" />
      <link rel="canonical" href={absoluteUrl("/savvy-wheels")} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={absoluteUrl("/savvy-wheels")} />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}
