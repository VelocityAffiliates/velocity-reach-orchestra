import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { articles, getArticle } from "@/lib/articles";

export const Route = createFileRoute("/blog/$slug")({
  component: ArticlePage,
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    if (!a) return { meta: [{ title: "Insights, Velocity Affiliates" }] };
    return {
      meta: [
        { title: `${a.t}, Velocity Affiliates` },
        { name: "description", content: a.d },
        { property: "og:title", content: a.t },
        { property: "og:description", content: a.d },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-x pt-44 pb-32">
      <h1 className="display-xl text-5xl">Article not found</h1>
      <Link to="/blog" className="link-arrow mt-8 inline-block">Back to Insights →</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-x pt-44 pb-32">
      <h1 className="display-xl text-5xl">Something went wrong</h1>
      <p className="mt-6 text-muted-foreground">{error.message}</p>
      <Link to="/blog" className="link-arrow mt-8 inline-block">Back to Insights →</Link>
    </div>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div>
      <Nav />

      <article className="container-x pt-44 md:pt-56 pb-20 max-w-4xl">
        <div className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          {article.cat} · {article.date}
        </div>
        <h1 className="mt-8 display-xl text-4xl md:text-6xl leading-[1.05]">
          {article.t}
        </h1>
        <p className="mt-10 text-lg md:text-xl text-muted-foreground leading-relaxed">
          {article.d}
        </p>

        <div className="mt-16 space-y-7 text-lg leading-[1.75] text-ink/90">
          {article.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-10 flex flex-wrap items-center justify-between gap-4">
          <Link to="/blog" className="link-arrow">← All Insights</Link>
          <Link to="/appointment" className="btn-primary">Book a Strategy Call</Link>
        </div>
      </article>

      <section className="border-t border-border surface-subtle">
        <div className="container-x py-20 md:py-28">
          <span className="eyebrow">Continue Reading</span>
          <div className="mt-10 grid md:grid-cols-3 gap-px bg-border hairline">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="bg-background p-8 group"
              >
                <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                  {p.cat}
                </span>
                <h3 className="mt-5 text-xl group-hover:opacity-70 transition-opacity">
                  {p.t}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
