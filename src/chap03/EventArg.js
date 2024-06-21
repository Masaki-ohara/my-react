export default function EventArgs() {
    // 独自の引数を追加したイベントハンドラー
    const current = (e, type) => {
        const d = new Date();
        switch(type) {
            case 'date':
                console.log(`${e.target.id}: ${d.toLocaleDateString()}`);
                break;
            case 'time':
                console.log(`${e.target.id}: ${d.toLocaleTimeString()}`);
                break;
            default:
                console.log(`${e.target.id}: ${d.toLocaleString()}`);
                break;
        }
    };
//     イベントハンドラーcurrentの違い。
// 引数e（イベントオブジェクト）とtype（タイプ）ます。
// 現在の日時typeに基づいて日付または時刻をコンソールに出力します。
return (
    <div>
        {/* アロー関数経由で、ハンドラーを呼び出す */}
        <button id="dt" onClick={e => current(e, 'datetime')}>現在日時</button>
        {/* 'datetime' を引数として渡して current 関数を呼び出す */}
        <button id="date" onClick={e => current(e, 'date')}>現在日付</button>
        {/* 'date' を引数として渡して current 関数を呼び出す */}
        <button id="time" onClick={e => current(e, 'time')}>現在時刻</button>
        {/* 'time' を引数として渡して current 関数を呼び出す */}
    </div>
    );
}