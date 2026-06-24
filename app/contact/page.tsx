import { getMetadata } from "@/libs/metadata";

type ContactPageType = {};

export async function generateStaticParams() {
  return getMetadata("contact");
}

export default function ContactPage({}: ContactPageType) {
  return <main>ContactPage</main>;
}
