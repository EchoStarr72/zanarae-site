export const metadata = {
  title: "Zanarae Calm",
  description: "Soft digital tools for overwhelmed minds."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
