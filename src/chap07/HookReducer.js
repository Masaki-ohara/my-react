import { useReducer } from "react";

export default function HookReducer({ init }) {
    // state+Reducerの準備
    const [state, dispatch] = useReducer(
        // Reduer関数
        (state, action) => {
            switch (action.type) {
                case 'update':
                    return { count: state.count + 1 };
                default:
                    return state;
            }
        },
        // stateの初期値
        {
            count: init
        }
    );

    // Reducer経由でstateを更新
    const handleClick = () => {
        dispatch({ type: 'update' });
    };
    return (
        <>
          <button onClick={handleClick}>カウント</button>
          <p>{state.count}回、クリックされました。</p>
        </>
    );
}