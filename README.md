This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 参考にさせていただいているサイト

[Next.js 13 app directory で記事投稿サイトを作ってみよう](https://zenn.dev/azukiazusa/articles/next-js-app-dir-tutorial)

## AppDirectory を用いた開発

いままで src/pages に配置していた page コンポーネントは app/"特定のディレクトリ/page.tsx となった。  
動的ページを作成する際は/articles/[slug]のようなディレクトリを作成し引数に　　```
export default function Article({ params }: { params: { slug: string } }) {
return (
<div>
<h1>記事の詳細</h1>
<p>記事のスラッグ: {params.slug}</p>
</div>
);
}

```　　
とよい、なお参照元のサイトにもあるようにpramsの書き方は今後変更される
