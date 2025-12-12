
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import {ConvexClientProvider} from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export const metadata = {
  title: "Evyntra",
  description: "Discover and Create amazing events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-linear-to-br from-gray-950 via-zinc-900 to-stone-900 text-white` }
      >
      
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      
      <ClerkProvider
         appearance={{
        theme: dark,
        }}
      >

        <ConvexClientProvider>

      {/* {Header} */}
      <Header />


      <main className="relative min-h-screen container mx-auto pt-40 md:pt-32">
        
        {/* {glow} */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/5 w-80 h-80 md:w-96 md:h-96 bg-pink-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/5 w-80 h-80 md:w-96 md:h-96 bg-orange-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 min-h-[70vh]">{children}</div>

      {/* {Footer} */}
      <footer className="border-t border-gray-800/50 py-8 px-6 max-w-7xl mx-auto">
          <div className="text-sm text-gray-400">Made with ❤️‍🔥 by Siddhant</div>
      </footer>
      </main>
      </ConvexClientProvider>
      </ClerkProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
