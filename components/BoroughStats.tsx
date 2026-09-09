import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BOROUGHS = ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten_Island"];

async function getBoroughCount(borough: string) {
  const { count } = await supabase
    .from("sightings")
    .select("*", { count: "exact", head: true })
    .eq("borough", borough);
  return count ?? 0;
}

export default async function BoroughStats() {
  const counts = await Promise.all(BOROUGHS.map(getBoroughCount));

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-24">
      <h2 className="text-3xl font-bold mb-12 text-center">
        He&apos;s been seen everywhere.
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-4xl w-full">
        {BOROUGHS.map((borough, i) => (
          <Card key={borough} className="bg-zinc-900 border-zinc-800 text-center">
            <CardHeader>
              <CardTitle className="text-sm text-zinc-400 font-normal">
                {borough.replace("_", " ")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-mono">{counts[i].toLocaleString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}