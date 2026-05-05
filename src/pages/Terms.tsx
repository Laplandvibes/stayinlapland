import TermsContent from '../../../shared/Legal/TermsContent';
import { pageUrl } from '../lib/meta';

export default function Terms() {
  return (
    <>
      <title>Terms of Use | StayInLapland</title>
      <meta
        name="description"
        content="StayInLapland terms of use — editorial scope, affiliate disclosure, third-party booking links, intellectual property, and Finnish jurisdiction."
      />
      <link rel="canonical" href={pageUrl('/terms')} />
      <meta name="robots" content="index, follow" />
      <TermsContent siteName="StayInLapland" siteUrl="stayinlapland.com" />
    </>
  );
}
