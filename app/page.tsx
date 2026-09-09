import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getOverviewStats } from "@/app/actions";
import { ListFilter, TrendingUp, Radar, ArrowRight } from "lucide-react";

export default async function Home() {
  const stats = await getOverviewStats();

  return (
    <>
      <section
        className="bg-web relative overflow-hidden bg-background text-foreground flex flex-col items-center justify-center px-6 py-24 text-center font-mono"
        style={{
          backgroundImage:
            "linear-gradient(rgba(220,38,38,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <svg
          className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 text-primary/20"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          {[0, 30, 60, 90, 120, 150].map((deg) => (
            <line key={deg} x1="0" y1="0" x2="200" y2="0" transform={`rotate(${deg})`} />
          ))}
          {[20, 45, 75, 115, 160].map((r) => (
            <circle key={r} cx="0" cy="0" r={r} />
          ))}
        </svg>
        <svg
          className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rotate-90 text-secondary/20"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          {[0, 30, 60, 90, 120, 150].map((deg) => (
            <line key={deg} x1="0" y1="0" x2="200" y2="0" transform={`rotate(${deg})`} />
          ))}
          {[20, 45, 75, 115, 160].map((r) => (
            <circle key={r} cx="0" cy="0" r={r} />
          ))}
        </svg>

        <p className="relative text-primary text-sm tracking-widest mb-4 uppercase">
          [ Spidey Tracker — System Online ]
        </p>
        <h1 className="text-glow-red relative font-heading text-6xl sm:text-7xl mb-4 tracking-wide text-primary">
          Spidey Tracker<span className="animate-pulse text-secondary">_</span>
        </h1>
        <p className="relative text-lg text-muted-foreground max-w-xl">
          For 18 months, a city-wide tracker app has been logging reports of a
          masked vigilante swinging across a New York-inspired city.
        </p>
        <p className="relative text-2xl font-mono mt-8">
          <span className="text-secondary">{stats.totalSightings.toLocaleString()}</span>{" "}
          sightings logged.
        </p>
        <Button
          render={<a href="/boroughs" />}
          nativeButton={false}
          className="relative mt-8 bg-primary text-primary-foreground hover:bg-primary/85 shadow-[0_0_20px_color-mix(in_oklch,var(--spidey-red),transparent_55%)]"
        >
          Begin the Investigation
        </Button>
      </section>

      <section className="relative bg-background px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Card className="bg-card text-center">
              <CardHeader>
                <CardTitle className="text-xs uppercase tracking-wide text-zinc-400 font-medium">
                  Total Sightings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-heading text-3xl text-primary">
                  {stats.totalSightings.toLocaleString()}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card text-center">
              <CardHeader>
                <CardTitle className="text-xs uppercase tracking-wide text-zinc-400 font-medium">
                  Verified Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-heading text-3xl text-secondary">
                  {(stats.verifiedRate * 100).toFixed(0)}%
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card text-center">
              <CardHeader>
                <CardTitle className="text-xs uppercase tracking-wide text-zinc-400 font-medium">
                  Hottest Borough
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-heading text-2xl text-primary">
                  {stats.topBorough.name.replace("_", " ")}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card text-center">
              <CardHeader>
                <CardTitle className="text-xs uppercase tracking-wide text-zinc-400 font-medium">
                  Swinging Reports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-heading text-3xl text-secondary">
                  {stats.swingingCount.toLocaleString()}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Link href="/reports" className="group">
              <Card className="h-full border-t-4 border-t-primary bg-card transition-transform group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <ListFilter className="size-5 text-primary" />
                    <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </div>
                  <CardTitle className="font-heading text-xl tracking-wide mt-2">
                    Report Feed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Filter every sighting by borough, activity, and verification
                    status.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/trends" className="group">
              <Card className="h-full border-t-4 border-t-secondary bg-card transition-transform group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-secondary/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <TrendingUp className="size-5 text-secondary" />
                    <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </div>
                  <CardTitle className="font-heading text-xl tracking-wide mt-2">
                    Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    18 months of activity, verification, and weather patterns
                    charted out.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/map" className="group">
              <Card className="h-full border-t-4 border-t-primary bg-card transition-transform group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Radar className="size-5 text-primary" />
                    <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </div>
                  <CardTitle className="font-heading text-xl tracking-wide mt-2">
                    Web Map
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A spider-sense radar plot of recent sightings across the
                    five boroughs.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
