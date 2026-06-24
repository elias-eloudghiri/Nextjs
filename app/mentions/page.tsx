import { getMetadata } from "@/libs/metadata";
import Mentions from "@/public/mentions.mdx";

export async function generateStaticParams() {
  return getMetadata("mentions");
}

export default function MentionsPage() {
  return (
    <main>
      <h1>Mentions</h1>
      <Mentions />
    </main>
  );
}
