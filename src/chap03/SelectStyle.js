import './SelectStyle.css';
import cn from 'classnames';

export default function SelectStyle({ mode }) {
    return (
        // mode属性によって切り替え
        <div className={cn('box', mode === 'light' ? 'light' : 'dark')}>
            こんにちは世界
        </div>
    );
}