import CookieContent from '../../../shared/Legal/CookieContent';
import { pageUrl } from '../lib/meta';

export default function CookiePolicy() {
  return (
    <>
      <title>Cookie Policy | StayInLapland</title>
      <meta
        name="description"
        content="StayInLapland cookie policy — what cookies we set (Google Analytics 4, consent state, newsletter popup state), how to opt out, and your rights under GDPR."
      />
      <link rel="canonical" href={pageUrl('/cookie-policy')} />
      <meta name="robots" content="index, follow" />
      <CookieContent siteId="stayinlapland" siteName="StayInLapland" />
    </>
  );
}
