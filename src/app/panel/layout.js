import PanelHeaderComponent from "@/componentsPanel/header/header";
import "@/css/globals.css"



export function generateMetadata() {
  return {
    icons: {
      icon: "/images/logo/favicon.png",
    },
    title: {
      default: "Login | Cossinest Homes",
      template: "%s | Cossinest Homes",
    },
    robots: {
      index: false,
      follow: false,
      nocache: true,
    },
  };
}

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>  
            {children}
        </body>
      </html>
    );
  }
