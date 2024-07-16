import { yupResolver } from "@hookform/resolvers/yup";
import wrapPromise from "./wrapPromise";

// Promiseの状態を管理するオブジェクトを取得
const info = getInfo();
// Promiseの状態に応じて結果を表示するコンポーネント
export default function ThrowResult() {
    const result = info.get();
    return <p>{result}</p>;
}

// ThrowResult コンポーネントは 
// info オブジェクトの get メソッドを呼び出して結果を取得し、その結果を表示します。
// wrapPromise の get メソッドは、
// Promise が解決されるまで待機し、結果が得られるとそれを返します。
// Promise が拒否される場合はエラーをスローします。


// 非同期でデータを取得するための関数
function getInfo() {
    return wrapPromise(new Promise((resolve, reject) => {
        // 2000ミリ秒後に50パーセントの確率で成功/失敗メッセージを生成
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('Succeeded');
            } else {
                reject('error');
            }
        }, 2000);
    }));
// getInfo は新しい Promise を作成し、それを 
// wrapPromise 関数に渡して管理します。
// Promise は 2000 ミリ秒後に 50% 
// の確率で成功（resolve）または失敗（reject）を返します。
}