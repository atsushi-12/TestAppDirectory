//スラッグとは、記事のURLの一部となる文字列のこと
//スラッグを使うことで、記事のURLを動的に生成することができる
//praamsとは、ページのパスから動的に生成される値を取得するためのもの
export default function Article({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>記事の詳細</h1>
      <p>記事のスラッグ: {params.slug}</p>
    </div>
  );
}
