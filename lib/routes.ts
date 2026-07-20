// Maps a prototype `.dc.html` filename → its canonical site route. Single source for
// converting the prototype cross-links, and the enumeration of every crawlable page.

export const PROTO_TO_ROUTE: Record<string, string> = {
  // core
  "Svasamm.dc.html": "/",
  "Solutions.dc.html": "/pages/services.html",
  "Contact.dc.html": "/pages/contact.html",
  "Privacy.dc.html": "/privacy",
  "Terms.dc.html": "/terms",
  // products
  "Millingo.dc.html": "/pages/millingo.html",
  "DMS.dc.html": "/pages/dms.html",
  "ERP.dc.html": "/pages/erp.html",
  "HRMS.dc.html": "/pages/hrms.html",
  "CRM.dc.html": "/pages/crm.html",
  "ServiceDesk.dc.html": "/pages/service-desk.html",
  // Millingo cluster
  "Guide-CMR.dc.html": "/pages/custom-milled-rice-cmr-process.html",
  "Guide-YieldRecovery.dc.html": "/pages/rice-mill-yield-recovery.html",
  "Guide-ByproductAccounting.dc.html": "/pages/rice-mill-byproduct-accounting.html",
  "Guide-GST.dc.html": "/pages/gst-for-rice-mills.html",
  "Guide-BestSoftware.dc.html": "/pages/best-rice-mill-software.html",
  "Guide-Pricing.dc.html": "/pages/rice-mill-software-price.html",
  "State-WestBengal.dc.html": "/pages/rice-mill-software-west-bengal.html",
  "State-UttarPradesh.dc.html": "/pages/rice-mill-software-uttar-pradesh.html",
  "State-Odisha.dc.html": "/pages/rice-mill-software-odisha.html",
  "State-Bihar.dc.html": "/pages/rice-mill-software-bihar.html",
  "Compare-Dataman.dc.html": "/pages/millingo-vs-dataman.html",
  "Compare-Samadhan.dc.html": "/pages/millingo-vs-samadhan.html",
  // DMS cluster
  "Guide-OEMDistributor.dc.html": "/pages/oem-distributor-management.html",
  "DMS-CodingMarking.dc.html": "/pages/dms-coding-marking-oem.html",
  "DMS-PackagingMachinery.dc.html": "/pages/dms-packaging-machinery-oem.html",
  "DMS-Electrical.dc.html": "/pages/dms-electrical-electronics-oem.html",
  "DMS-Pharma.dc.html": "/pages/dms-pharma-medical-device-oem.html",
  "DMS-Automotive.dc.html": "/pages/dms-automotive-aftermarket-oem.html",
  "DMS-HVAC.dc.html": "/pages/dms-hvac-equipment-oem.html",
  "DMS-Agri.dc.html": "/pages/dms-agri-farm-equipment-oem.html",
  "Compare-Bizom.dc.html": "/pages/dms-vs-bizom.html",
  "Compare-FieldAssist.dc.html": "/pages/dms-vs-fieldassist.html",
  // ERP cluster
  "Guide-ERPImplementation.dc.html": "/pages/erp-implementation-guide.html",
  "ERP-Manufacturing.dc.html": "/pages/erp-for-manufacturing.html",
  "ERP-Trading.dc.html": "/pages/erp-for-trading-distribution.html",
  "ERP-Services.dc.html": "/pages/erp-for-services-firms.html",
  // HRMS cluster
  "Guide-PayrollCompliance.dc.html": "/pages/payroll-statutory-compliance-india.html",
  "HRMS-Manufacturing.dc.html": "/pages/hrms-for-manufacturing.html",
  "HRMS-Retail.dc.html": "/pages/hrms-for-retail.html",
  "HRMS-Healthcare.dc.html": "/pages/hrms-for-hospitals-clinics.html",
  // CRM cluster
  "Guide-CRMSalesPipeline.dc.html": "/pages/sales-pipeline-guide.html",
  "CRM-B2B.dc.html": "/pages/crm-for-b2b-sales.html",
  "CRM-Services.dc.html": "/pages/crm-for-services-firms.html",
  "CRM-Distribution.dc.html": "/pages/crm-for-distribution.html",
  // Service Desk cluster
  "Guide-ITSM.dc.html": "/pages/itsm-fundamentals-guide.html",
  "SD-InternalIT.dc.html": "/pages/service-desk-for-internal-it.html",
  "SD-MSP.dc.html": "/pages/service-desk-for-msps.html",
  "SD-CustomerSupport.dc.html": "/pages/service-desk-for-customer-support.html",
};

/** Convert a prototype href (or an already-canonical path/URL) to a site route. */
export function toRoute(href: string): string {
  if (!href) return "#";
  if (href.startsWith("http") || href.startsWith("/") || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href;
  }
  // handle "File.dc.html#anchor"
  const [file, hash] = href.split("#");
  const route = PROTO_TO_ROUTE[file];
  return route ? (hash ? `${route}#${hash}` : route) : `#${href}`;
}
