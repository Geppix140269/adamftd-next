import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page | ADAMftd",
};

export default function Page() {
  return (
    <div className="min-h-screen p-8 pb-20 md:pb-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-3xl font-extrabold text-white mb-4">
          Page Title
        </h1>
        <p className="text-text-secondary">
          This page is under construction. Coming soon!
        </p>
      </div>
    </div>
  );
}
