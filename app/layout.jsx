
import "./bootstrap.css";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="nonStckyHdr">
        <div className="ps-page ps-layout">
          {children}
        </div>
      </body>
    </html>
  );
}
