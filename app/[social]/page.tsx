import Link from "next/link";
import { notFound } from "next/navigation";

const ALLOWED_SOCIALS = ["facebook", "twitter", "instagram"] as const;

type Social = (typeof ALLOWED_SOCIALS)[number];

export default async function SocialPage({ params, }: { params: Promise<{ social: string }> }) {
    const { social } = await params;
const socialLower = social.toLowerCase();
  
  if (!ALLOWED_SOCIALS.includes(social as Social)) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#101010] text-white px-6 text-center -mt-1.5">
      <h1 className="text-3xl font-bold mb-4 capitalize">
        {social} (Mock Page)
      </h1>

      <p className="opacity-70 max-w-md mb-6">
        This is a placeholder page for the {social} link. In a real product,
        this would redirect to the official {social} page.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-[#D87D4A] hover:bg-[#FBAF85] transition font-bold tracking-wide"
      >
        Go back home
      </Link>
    </main>
  );
}
