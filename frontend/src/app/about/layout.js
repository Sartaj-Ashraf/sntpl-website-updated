export const metadata = {
  title:
    "About Srinagar Net Tech Pvt. Ltd. | Internet Services Provider",
  description:
    "About Srinagar Net Tech Pvt. Ltd. | Internet Services Provider in Jammu & Kashmir. SNTPL offers high-speed fiber broadband, SD-WAN, Enterprise Solutions, Lease Line, Broadband, Dark Fibre, and customized end-to-end internet solutions for corporates, media, banking, and enterprises across J&K.",
  keywords: [
    "internet service provider Kashmir",
    "fiber broadband Srinagar",
    "IT consulting J&K",
    "web development Kashmir",
    "SD-WAN services",
    "VoIP solutions",
    "high speed internet Srinagar",
    "network integration Kashmir",
    "IT solutions Jammu Kashmir",
    "SNTPL internet",
    "Enterprise Solutions",
    "Lease Line",
    "Broadband",
    "Dark Fibre",
    "Lease Line",
    "Srinagar Net Tech",
    "internet leased line Kashmir",
    "FTTH Srinagar",
    "enterprise broadband J&K",
    "ISP near me Srinagar",
    "corporate internet solutions",
    "digital transformation Kashmir",
    "software development Srinagar",
    "IT services Jammu Kashmir",
    "business internet Kashmir",
  ],
  openGraph: {
    title:
      "About Srinagar Net Tech Pvt. Ltd. | Internet Services Provider in Jammu & Kashmir",
    description:
      "About Srinagar Net Tech Pvt. Ltd. | Internet Services Provider in Jammu & Kashmir. SNTPL offers high-speed fiber broadband, SD-WAN, VoIP services, IT consulting, web development, and customized end-to-end technology solutions for corporates, media, banking, and enterprises across Jammu & Kashmir since 2007.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    title:
      "About Srinagar Net Tech Pvt. Ltd. | Internet Services Provider in Jammu & Kashmir",
    description:
      "About Srinagar Net Tech Pvt. Ltd. | Internet Services Provider in Jammu & Kashmir. SNTPL offers high-speed fiber broadband, SD-WAN, VoIP services, IT consulting, web development, and customized end-to-end technology solutions for corporates, media, banking, and enterprises across Jammu & Kashmir since 2007.",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <div className="">
          <main className="">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
