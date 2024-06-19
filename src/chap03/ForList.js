import React from 'react'; // Reactライブラリをインポート

// ForListコンポーネントを定義。srcプロパティを受け取る
export default function ForList({ src }) {
    return (
        <dl>
            {
                // src配列の各要素をmapメソッドで処理
                src.map(elem => (
                    // key属性に各要素のisbnを指定することで、要素が一意に識別されるようにする
                    <React.Fragment key={elem.isbn}>
                      <dt>
                          {/* elemオブジェクトのisbnプロパティを使ってリンクを作成 */}
                          <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
                             {/* elemオブジェクトのtitleプロパティとpriceプロパティを表示 */}
                             {elem.title} ({elem.price}円)
                          </a>
                      </dt>
                      {/* elemオブジェクトのsummaryプロパティを表示 */}
                      <dd>{elem.summary}</dd>
                    </React.Fragment>
                ))
            }
        </dl>
    );
}
