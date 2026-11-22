import { HomePage } from "@/components/home-page";
import { getServices, getCompanyProfile, getContacts } from "@/sanity/queries";

export default async function Home() {
  const [services, profile, contacts] = await Promise.all([
    getServices(),
    getCompanyProfile(),
    getContacts(),
  ]);

  return <HomePage services={services} profile={profile} contacts={contacts} />;
}
