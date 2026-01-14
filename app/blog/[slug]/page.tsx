
import { blogPosts } from "@/lib/blogData";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Calendar, User, ArrowLeft } from "lucide-react";
import NextLink from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) return { title: "Article non trouvé" };

  return {
    title: `${post.title} | Blog YTenergie`,
    description: post.excerpt,
    openGraph: {
      images: [post.imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-hm-blue mb-4">Article non trouvé</h1>
          <NextLink href="/blog" className="text-hm-yellow font-bold hover:underline">Retour au blog</NextLink>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` }
        ]} />

        <header className="mb-12">
          <span className="text-hm-yellow font-bold tracking-wider uppercase text-sm mb-4 block">{post.category}</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-hm-blue mb-6 leading-tight">{post.title}</h1>
          
          <div className="flex items-center gap-6 text-gray-500 text-sm border-b border-gray-100 pb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </div>
          </div>
        </header>

        <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-12 shadow-xl">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${post.imageUrl}')` }}
          ></div>
        </div>

        <div 
          className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />

        {/* Call to Action */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-hm-blue mb-4">Vous avez un projet similaire ?</h3>
          <p className="text-gray-600 mb-8">Nos experts sont là pour répondre à toutes vos questions et vous accompagner.</p>
          <a href="/form/devis-simulation" className="inline-block bg-hm-yellow text-hm-blue px-8 py-4 rounded-lg font-bold hover:bg-hm-blue hover:text-white transition-all shadow-lg">
            Demander une étude gratuite
          </a>
        </div>
      </article>
    </div>
  );
}
