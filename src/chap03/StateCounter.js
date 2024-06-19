export default function StateCounter({ step, onUpdate}) {
    //ボタンクリックで親State(count)にstep値だけ加算
    const handleClick = () => onUpdate(step);
    return (
        <button className="cnt" onClick={handleClick}>
            <span>{step}</span>
        </button>
    );
}

// step: ボタンがクリックされたときに加算または減算される値。
// onUpdate: 親コンポーネントから渡される関数。step 値を引数として呼び出される。
// handleClick 関数:

// ボタンがクリックされたときに呼び出される。
// onUpdate 関数を呼び出し、step 値を渡す。
// レンダリング:

// ボタンをレンダリングし、step 値を表示する。
// ボタンがクリックされると、handleClick 関数が呼び出される。