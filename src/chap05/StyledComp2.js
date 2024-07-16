// styled-componentsライブラリからstyledをインポートします
import styled from 'styled-components';

// MyButtonコンポーネントを定義します。このコンポーネントは、プロパティとしてクラス名と子要素を受け取ります
export function MyButton({ className, children }) {
  return (
    // クラス名を動的に設定するためにclassNameを使用します
    <button type="button" className={className}>
      {/* 子要素をボタン内に表示します */}
      {children}
    </button>
  );
}

// styled-componentsを使用して、MyButtonコンポーネントにスタイルを適用します
export const MyStyledButton = styled(MyButton)`
  // ブロックレベル要素として表示します
  display: block;
  // ボタンの背景色をロイヤルブルーに設定します
  background-color: royalblue;
  // テキストの色を白に設定します
  color: white;
  // フォントを太字に設定します
  font-weight: bold;
  // ボタンの幅を80pxに設定します
  width: 80px;
  // ボタンの高さを50pxに設定します
  height: 50px;
`;
