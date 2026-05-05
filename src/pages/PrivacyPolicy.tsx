import PrivacyContent from '../../../shared/Legal/PrivacyContent';
import { pageUrl } from '../lib/meta';

export default function PrivacyPolicy() {
  return (
    <>
      <title>Privacy Policy | StayInLapland</title>
      <meta
        name="description"
        content="StayInLapland privacy policy — how we handle anonymous analytics, newsletter subscriptions, your GDPR rights, and our data controller (Lapeso Oy, Finland)."
      />
      <link rel="canonical" href={pageUrl('/privacy')} />
      <meta name="robots" content="index, follow" />
      <PrivacyContent siteName="StayInLapland" />
    </>
  );
}
