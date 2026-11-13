import SitePreviewClient from './SitePreviewClient';

export function generateStaticParams() {
  return [
    { siteId: 'saas-cloud' },
    { siteId: 'agency-studio' },
    { siteId: 'ops-telemetry' },
    { siteId: 'gaming-arena' },
  ];
}

export default async function SitePreviewPage({ params }) {
  const resolvedParams = await params;
  return <SitePreviewClient siteId={resolvedParams?.siteId} />;
}

