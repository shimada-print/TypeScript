// HelloTypeScript.ts

// メッセージを定義
const message: string = "ようこそ、TypeScriptの世界へ";

// コンソールに表示
console.log(message);

// 「偶数・奇数」の判定
console.log("--- 0から10までの判定 ---");
for (let i: number = 0; i <= 10; i++) {
    const type: string = i % 2 === 0 ? "偶数" : "奇数";
    console.log(`${i}: ${type}`);
}
