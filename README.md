This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 参考にさせていただいているサイト

[Next.js 13 app directory で記事投稿サイトを作ってみよう](https://zenn.dev/azukiazusa/articles/next-js-app-dir-tutorial)
[GSAPでこんなこともできる！途中から横にスクロールするページを作る方法](https://liginc.co.jp/548232)

## AppDirectory を用いた開発

いままで src/pages に配置していた page コンポーネントは app/"特定のディレクトリ/page.tsx となった。  
動的ページを作成する際は/articles/[slug]のようなディレクトリを作成し引数に

```
export default function Article({ params }: { params: { slug: string } }) {
return (
<div>
<h1>記事の詳細</h1>
<p>記事のスラッグ: {params.slug}</p>
</div>
);
}
```

とよい、なお参照元のサイトにもあるように prams の書き方は今後変更される

## SeverComponents ClientComponents

後日

## フェッチングに関して

以前は api/からエンドポイントを作りそこからフェッチするという流れだったが AppDirectory では ServerComponents の中で`async/await`を使って行うことになっているようだ

## Loading UI に関して

App Router の`loading.tsx`がローディングの UI を表示する役割をしている。どうやら Suspense の挙動に近いようだ
