# ![TypeScript 速習　～サーバーだけでなくスマホのアプリも作る～](images/tss_header.png)
## TypeScriptを使う長所
TypeScriptとは、JavaScriptに「型」の概念を追加した静的型付け言語です。JavaScriptの全ての機能を備えた「超集合（スーパーセット）」であり、2026年現在、Webサイト構築におけるフロントエンドからサーバーサイドまでを担う主要な言語となっています。  

最大の特長は、プログラムを実行する前の「コンパイル」段階でエラーを検知できる点です。これにより、開発者はデータの種類（数値や文字列など）を厳格に管理でき、大規模な開発でもバグの混入を劇的に減らすことができます。 

## TypeScript関連コマンド
### インストールや環境設定
* Node.jsをインストール 
Windows
```bash
nvm install --lts
```
※`--lts` は「長期サポート版」という意味で、仕事で使うならこれが一番安定します。  
※インストーラーを公式サイトから`.msi`や`.pkg`をダウンロードして入れる方法もありますが、「権限エラー（sudoが必要になる）」や「バージョンの切り替えができない」といったトラブルが起きやすいので、プロは`--lts`となります。

* インストールできたかをバージョンで確認  
```bash
tsc -v
```
```bash
npx tsc -v
```
※現実的にはnpxは使うので「`npx tsc -v`」  

### プログラミングをする
現実的にTypeScriptで開発で、多く使用する書類名は「`App.tsx`」です。`App.tsx`はサーバーサイドスクリプトだとWebブラウザが最初に読み込む、index.htmlのようなもので、コンパイル後の`App.js`をWebブラウザが最初に読み込みます。

* TypeScriptで実行  
```bash
npx ts-node  App.tsx
```

* JavaScriptにコンパイル  
```bash
tsc App.tsx
```
`App.js`が生成される

* JavaScript書類を実行  
```bash
node App.js
```

* Go言語でコンパイル  
```bash
tsgo App.tsx
```
※TypeScript ver.7 ベータ版（2026年4月）からリリースで、劇的に速度が早くなる

* 設定書類「tsconfig.json」書類を作る  
```bash
npx tsc --init
```
※これが無いとTypeScriptだと認識せずに動かない場合もある  
※コマンドを実行したフォルダーに書類が出来る  

### スマホのアプリを（React Native + TypeScript + expoなどで）開発し公開
* expoでプロジェクトを作成  
```bash
npx create-expo-app MyProject --template expo-template-blank-typescript
```

* プロジェクトをまとめる（package.jsonを作成）  
```bash
npm init -y
```

* コンパイルする　　
上記の「TypeScript書類.tsなどをJavaScriptにコンパイル」か、  
下記の「一括でコンパイルする（実際の大規模システムなどでの開発方法）」を参照

* ビルドツールのインストール（最初の1回のみ）  
```bash
npm install -g eas-cli
```  

* ビルドする
🔨Android用のファイル (.apk / .aab)を作る  
```bash
eas build --platform android
```
※.apkはスマホに直接入れるテスト（動作確認）用で、.aabはGoogleストアで公開用（完成品）  

🔨iPhone（iOS）用のファイル (.ipa)を作る
```bash
eas build --platform ios
```

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

### 一括でコンパイルする（実際の大規模システムなどでの開発方法）
プロジェクト内のTypeScript書類（`.ts` や `.tsx`）を、一括ですべてコンパイルするには、以下のコマンドを使用します。

#### 基本のコマンド
プロジェクトのルートディレクトリ（`tsconfig.json` がある場所）で、引数なしで実行します。

```bash
npx tsc
```

これだけで、`tsconfig.json` の設定に従い、プロジェクト内のすべてのファイルがスキャンされ、コンパイル（JavaScriptへの変換）が行われます。

#### 便利なオプション
状況に合わせて以下のオプションを使い分けると、開発効率がさらに上がります。

* **自動更新（ウォッチモード）**:
```bash
npx tsc -w
```

ファイルを保存するたびに、変更があったファイルだけを**自動で再コンパイル**します。
* **エラーチェックのみ行う**:
```bash
npx tsc --noEmit
```

JavaScriptファイルを書き出さず、**型エラーがあるかどうかだけ**を確認します。
* **特定のファイルを指定してコンパイル**:
```bash
npx tsc src/*.ts
```
フォルダ内の特定のファイルだけを対象にする場合に便利です。

#### 注意点： `tsconfig.json` の役割

この一括コンパイルが正しく動くためには、フォルダ内に **`tsconfig.json`** という設定書類が必要です。もし、まだ作成していない場合は、以下のコマンドで作成してください。

```bash
npx tsc --init
```

`.ts`（ロジック）も `.tsx`（UI部品）も、このコマンド一つでまとめてJavaScriptに変換し、実行可能な状態に整えることができます。
