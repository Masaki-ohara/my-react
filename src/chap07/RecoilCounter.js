import { useRecoilState } from 'recoil';
import { counterAtom } from '../store/atom';

export default function RecoilCounter() {
    //Recoil管理下の値とセッターを取得
    const [counter, setCounter] =  useRecoilState (counterAtom);

    const handleClick = () => {
        setCounter(c => c + 1);
    };

    return (
        <>
          <button onClick={handleClick}>カウント</button>
          <p>{counter}回、クリックされました。</p>
        </>
    )
}