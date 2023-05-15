import type { Article } from "./types";

async function getArticles() {
  const res = await fetch("http://localhost:3000/api/articles", {
    cache: "no-store",
  });
  //cashを行わずにリクエストを送る、理由は頻繁な更新の中キャッシュされた情報が表示されるのを防ぐため);
  if (!res.ok) {
    throw new Error("Fail to Fetch articles");
  }
  const data = await res.json();
  //dataをArticle[]型にキャストして返す
  return data as Article[];
}
export default async function Home() {
  const articles = await getArticles();
  return (
    <div>
      <h1>新着記事</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}
