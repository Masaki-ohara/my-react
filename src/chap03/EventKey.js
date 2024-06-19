import React from 'react';

export default function EventKey() {
    // ctrl + q でヘルプメッセージを表示
    const handleKey = e => {
        if (e.ctrlKey && e.key === 'q') {
            alert('名前は20文字以内で入力してください');
        }
    };

//     キーが押されたときに呼び出されるイベントハンドラー関数です。
// e.ctrlKeyがtrueであり、e.keyが'q'である場合にアラートを表示します。

    return(
        <form>
            <label>
                名前:
                <input type="text" size="20" onKeyDown={handleKey} />
                {/* onkeydown属性は、要素の上で何らかのキーを
                押された際に発生するイベントの処理を設定するための属性です */}
            </label>
            {/* このコンポーネントを使用することで、ユーザーがテキスト
            入力フィールドにフォーカスしている間
            にCtrl + qを押すと、指定されたメッセージがアラートで表示されます。 */}
        </form>
    );
}
