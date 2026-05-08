# ![TypeScript 速習　～サーバーだけでなくスマホのアプリも作る～](images/tss_header.png)
## TypeScriptの要約
TypeScriptとは、JavaScriptに「型」の概念を追加した静的型付け言語です。JavaScriptの全ての機能を備えた「超集合（スーパーセット）」であり、2026年現在、Webサイト構築におけるフロントエンドからサーバーサイドまでを担う主要な言語となっています。  

最大の特長は、プログラムを実行する前の「コンパイル」段階でエラーを検知できる点です。これにより、開発者はデータの種類（数値や文字列など）を厳格に管理でき、大規模な開発でもバグの混入を劇的に減らすことができます。  

また、エディタによるコード補完が強力に働くため、開発スピードと品質を同時に高められるのが強みです。現代のシステム開発において、実行時までエラーが判明しないリスクを避け、安全かつ効率的にコードを書き進めるための「業界標準」のツールとして定着しています  。 

## TypeScript関連コマンド
### インストールや環境設定
・TypeScriptをインストール  
　「npm install -g typescript」  
 ※この前にnode.jsをインストールしてください  

・インストールできたかをバージョンで確認  
　「tsc -v」  
　「npx tsc -v」  
※現実的にはnpxは使うので「npx tsc -v」  

### プログラミングをする
・TypeScript書類.tsなどを実行  
　「npx ts-node TypeScript書類.ts」  

・TypeScript書類.tsなどをJavaScriptにコンパイル  
　「tsc TypeScript書類.ts」  

・TypeScript書類.jsなどを実行  
　「node TypeScript書類.js」  

・TypeScript書類.tsなどをGo言語でコンパイル  
　「tsgo TypeScript書類.ts」  
※TypeScript ver.7 ベータ版（2026年4月）から

・TypeScriptの設定書類「tsconfig.json」書類を作る  
　「npx tsc --init」  
※これが無いとTypeScriptだと認識せずに動かない場合もある  
※コマンドを実行したフォルダーに書類が出来る  

### スマホのアプリを（React Native + TypeScript + expoなどで）開発し公開
・expoでプロジェクトを作成  
　「npx create-expo-app MyProject --template expo-template-blank-typescript」  

・ プロジェクトをまとめる（package.jsonを作成）  
　「npm init -y」  

・ ビルドツールのインストール（最初の1回のみ）  
　「npm install -g eas-cli」  

・ Android用のファイル (.apk / .aab)を作る  
　「eas build --platform android」  
※.apkはスマホに直接入れるテスト（動作確認）用で、.aabはGoogleストアで公開用（完成品）  

・ iPhone（iOS）用のファイル (.ipa)を作る  
　「eas build --platform ios」  

### なぜReact NativeでTypeScriptを使うのか？　～TypeScriptは開発しやすい～

それはスマホのアプリの開発特有の理由があります。

* **「動かしてみるまで分からない」を防ぐ**:
動的型付け（JavaScript。React Native）だと、スマホの実機で動かして特定のボタンを押した瞬間に「あ、型が違ってクラッシュした！」ということが起きます。TypeScriptを使えば、**書いている最中（コンパイル時）に、そのミスを100%防げます。**
* **スマホの複雑な「部品（Props）」を管理する**:
React Nativeの部品（`<View>` や `<Text>`）には、Web（HTMLなどを使うReactなど）よりも細かい設定（プロパティ）が無数にあります。TypeScriptを使うと、エディタが「ここにはこの型を入れてね」とガイドしてくれるため、辞書を引かずに開発できます。2026年現在はTypeScriptの開発元のマイクロソフト社のVSC（Visual Studio Code）や、それの派生なAIエディタであるCursorが主流です。TypeScriptは他の言語と違い構造がシンプルなので、開発速度などが向上します。

### .tsと.tsxの違い
2つの違いは、一言で言うと「HTMLのような見た目のコード（UI）を書くかどうか」です。どちらもTypeScriptであることに変わりはありませんが、用途によって使い分けます。

#### .ts （純粋なTypeScript）
**ロジックや計算、データ処理**専用のファイルです。

* **中身:** 変数、関数、クラス、型の定義など。
* **中身の例:** `function add(a: number, b: number) { ... }`  

**用途:**
* サーバーサイドの処理（Node.jsなど）
* 計算ロジック
* APIからデータを取得する処理

#### .tsx （TypeScript + JSX）
**React や React Native で「画面（UI）」を作るため**のファイルです。

* **中身:** TypeScriptの中に、HTMLによく似た「JSX（JavaScript XML）」という書き方が混ざります。
* **中身の例:** `return <View><Text>こんにちは</Text></View>`  

**用途:**
* スマホアプリの画面表示
* Webサイトのコンポーネント作成

| 拡張子 | 正式名称 | 主な中身 | 使う場面 |
| --- | --- | --- | --- |
| **.ts** | TypeScript | 命令や計算のみ | 計算用の関数、データ保存の仕組みなど |
| **.tsx** | TypeScript XML | 命令 + **タグ（UI）** | ボタン、テキスト、画面全体のレイアウトなど |

#### どっちを使えばいい？
迷ったら以下の基準で選んでください。

* `<View>` や `<Text>`、`<div>` などの「タグ」を一つでも書くなら `.tsx`
* 「タグ」は書かず、計算やデータの加工だけなら `.ts`

Cursorなどのエディタは、この拡張子を見て「あ、このファイルは画面を作るんだな（JSXの補完を出そう）」と判断しています。
