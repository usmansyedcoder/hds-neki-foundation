import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../api/axios";

export default function NewsDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    API.get(`/news/${slug}`).then((r) => setArticle(r.data));
  }, [slug]);

  if (!article) return <div className="py-20 text-center">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link to="/news" className="text-brand-blue text-sm">
        ← Back to News
      </Link>
      <h1 className="text-3xl md:text-4xl font-extrabold text-brand-blue mt-4 mb-2">
        {article.title}
      </h1>
      <p className="text-slate-500 text-sm mb-6">
        {new Date(article.createdAt).toLocaleDateString()} · {article.author}
      </p>
      <div
        className="prose max-w-none text-slate-700"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
}
