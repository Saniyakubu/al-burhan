import { HomePage } from "@/components/home-page";
import { getServices, getCompanyProfile } from "@/sanity/queries";

export default async function Home() {
  const [services, profile] = await Promise.all([
    getServices(),
    getCompanyProfile(),
  ]);

  return <HomePage services={services} profile={profile} />;
}
