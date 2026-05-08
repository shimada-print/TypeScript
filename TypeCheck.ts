// 1. 基本的な型の定義
const userName: string = "エンジニア";
const userAge: number = 25;
const isSuccess: boolean = true;

// 2. 配列の型
const techStack: string[] = ["TypeScript", "Node.js", "VBScript"];

// 3. オブジェクトの型（インターフェース）
interface UserProfile {
    id: number;
    name: string;
    role: "Admin" | "User"; // 決まった文字しか許さない「リテラル型」
}

const myProfile: UserProfile = {
    id: 1,
    name: "Taro",
    role: "Admin" 
};

// --- 実行表示 ---
console.log("--- TypeScript型チェック開始 ---");
console.log(`名前: ${userName} (Type: ${typeof userName})`);
console.log(`年齢: ${userAge} (Type: ${typeof userAge})`);
console.log(`技術スタック: ${techStack.join(", ")}`);
console.log(`権限: ${myProfile.role}`);

// 4. 【実験】型エラーをわざと起こしてみる
// 下のコメントアウトを外すと、実行（ts-node）した瞬間にエラーで止まります。
//これがTypeScriptが「守ってくれている」証拠です。

// userAge = "25歳"; // 数値型に文字列を入れようとすると怒られる
// myProfile.role = "Guest"; // AdminかUser以外を入れると怒られる