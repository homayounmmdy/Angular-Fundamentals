"use client";
import { Button } from "@mycms/ui";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("hero");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-6">
      <h1 className="text-4xl font-bold text-center">{t("title")}</h1>

      <p className="text-gray-600 text-center max-w-md">{t("description")}</p>
      <div className="mt-8 flex gap-2 text-sm text-gray-500">
        <a href="/en" className="hover:underline">
          <Button>English</Button>
        </a>
        <span>|</span>
        <a href="/fr" className="hover:underline">
        <Button color="btn-success">Français</Button>
          
        </a>
      </div>
        <Button removeDefaultStyle className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600">
        Fully Custom
      </Button>
    </main>
  );
}
