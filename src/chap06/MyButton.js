import React from 'react';
import PropTypes from 'prop-types';
import '../stories/button.css';

function MyButton({
  primary = false,
  backgroundColor = null,
  size = 'medium',
  label = 'Button',
  handleClick,
  ...props
}) {
  // primary属性に応じてスタイルクラスを決定
  const mode = primary ? 'storybook-button-primary' : 'storybook-button--secondary';

  return (
    // Propsをもとにbutton要素を組み立て
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      onClick={handleClick}  // 正しいスペルに修正
      {...props}
    >
      {label}
    </button>
  );
}

// Propsの型情報を宣言
MyButton.propTypes = {
  /**
   * primaryカラーを有効にするか
   */
  primary: PropTypes.bool,
  /**
   * 背景色
   */
  backgroundColor: PropTypes.string,
  /**
   * ボタンの大きさ
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * ボタンのキャプション
   */
  label: PropTypes.string.isRequired,
  /**
   * clickハンドラー
   */
  handleClick: PropTypes.func,  // 正しいスペルに修正
};

export default MyButton;
