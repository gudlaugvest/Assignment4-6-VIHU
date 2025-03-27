import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../datadog-rum";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
