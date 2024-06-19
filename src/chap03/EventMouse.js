import { useState } from 'react';

export default function EventMouse({ beforeSrc, afterSrc, alt }) {
    // 現在表示している画像
    // EventMouse コンポーネントを定義し、beforeSrc, afterSrc, alt の 3 つのプロパティを受け取る。
    const [current, setCurrent] = useState(beforeSrc);
    // current: 現在表示されている画像のソースを保持する state。
    // setCurrent: current を更新するための関数。
    // 初期値は beforeSrc
    // mouseover/mouseleaveイベントハンドラーを準備
    const handleEnter = () => setCurrent(afterSrc);
    const handleLeave = () => setCurrent(beforeSrc);
    //handleEnter: マウスが画像に乗ったときに呼び出される関数。current を afterSrc に更新。
    // handleLeave: マウスが画像から離れたときに呼び出される関数。current を beforeSrc に更新。
    return(
        <img src={current} alt={alt}
        onMouseEnter={handleEnter} onMouseLeave={handleLeave} />
    );
//     <img> 要素をレンダリング。
// src 属性には現在の画像ソース (current) を指定。
// alt 属性には受け取った alt テキストを指定。
// onMouseEnter 属性には handleEnter 関数を指定。
// onMouseLeave 属性には handleLeave 関数を指定。
}


// 動作の説明
// コンポーネントが初めてレンダリングされると、current は beforeSrc に設定されるため、beforeSrc 画像が表示される。
// マウスが画像に乗ると、handleEnter 関数が呼び出され、current が afterSrc に更新されるため、afterSrc 画像が表示される。
// マウスが画像から離れると、handleLeave 関数が呼び出され、current が beforeSrc に戻るため、再び beforeSrc 画像が表示される。
// これにより、ユーザーが画像にマウスを乗せると、画像が切り替わり、マウスを離すと元の画像に戻る動作が実現されます。