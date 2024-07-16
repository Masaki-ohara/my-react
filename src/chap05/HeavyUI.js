function sleep(delay) {
    let start = Date.now(); // 現在の時間を取得してstartに代入
    while (Date.now() - start < delay); // 現在の時間からstartを引いた値がdelayより小さい間ループする
}

// delayミリ秒の遅延を発生
export default function HeavyUI({ delay }) {
    sleep(delay); // 指定されたdelayミリ秒だけ処理を停止
    return <p>遅延時間は{delay}ミリ秒</p>; // 遅延時間を表示するpタグを返す
}
