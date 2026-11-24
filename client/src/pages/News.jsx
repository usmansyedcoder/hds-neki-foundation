import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    API.get("/news").then((r) => setNews(r.data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-brand-blue mb-8">
        News & Updates
      </h1>

      {news.length === 0 ? (
        <p className="text-slate-500">No news articles yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((n) => (
            <Link
              key={n._id}
              to={`/news/${n.slug}`}
              className="card p-6 hover:-translate-y-1 transition"
            >
              <p className="text-xs text-brand-green font-semibold uppercase mb-2">
                {new Date(n.createdAt).toLocaleDateString()}
              </p>
              <h3 className="font-bold text-lg mb-2">{n.title}</h3>
              <p className="text-sm text-slate-600 line-clamp-3">{n.excerpt}</p>
              <p className="text-brand-blue font-semibold text-sm mt-4">
                Read more →
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
