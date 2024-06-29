import { useForm } from 'react-hook-form';

export default function FormBasic() {
    // 既定値を準備
    const defaultValues = {
        name: '名無権兵衛',
        email: 'admin@example.com',
        gender: 'male',
        memo: ''
    };

    // フォームを初期化
    const { register, handleSubmit, 
        formState: { errors, isDirty, isValid, isSubmitting } } = useForm({
        defaultValues
    });

    // サブミット時の処理
    const onSubmit = data => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
                console.log(data);
            }, 4000);
        });
    };

    const onError = err => console.log(err);



    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
            {/* 検証ルールなどをフォームに紐付け */}
            <div>
                <label htmlFor="name">名前:</label><br />
                <input
                    id="name"
                    type="text"
                    {...register('name', {
                        required: '名前は必須入力です。',
                        maxLength: {
                            value: 20,
                            message: '名前は20文字以内にしてください。'
                        }
                    })}
                />
                <div>{errors.name?.message}</div>
            </div>
            <div>
                <label htmlFor="gender">性別:</label><br />
                <label>
                    <input
                        type="radio"
                        value="male"
                        {...register('gender', {
                            required: '性別は必須です。',
                        })}
                    />男性
                </label>
                <label>
                    <input
                        type="radio"
                        value="female"
                        {...register('gender', {
                            required: '性別は必須です。',
                        })}
                    />女性
                </label>
                <div>{errors.gender?.message}</div>
            </div>
            <div>
                <label htmlFor="email">メールアドレス:</label><br />
                <input
                    id="email"
                    type="email"
                    {...register('email', {
                        required: 'メールアドレスは必須入力です。',
                        pattern: {
                            value: /^([a-z\d+. _%-]+)@([a-z\d-]+\.)+[a-z]{2,4}$/i,
                            message: 'メールアドレスの形式が不正です。'
                        }
                    })}
                />
                <div>{errors.email?.message}</div>
            </div>
            <div>
                <label htmlFor="memo">備考:</label><br />
                <textarea
                    id="memo"
                    {...register('memo', {
                        required: '備考は必須入力です。',
                        minLength: {
                            value: 10,
                            message: '備考は10文字以上にしてください。'
                        },
                        validate: {
                            ng: value => {
                                // 不適切ワードを準備
                                const ngs = ['暴力', '死', 'グロ'];
                                // 入力文字列に不適切ワードが含まれているかを判定
                                for (const ng of ngs) {
                                    if (value.includes(ng)) {
                                        return `備考に"${ng}"というNGワードが含まれています。`;
                                    }
                                }
                                return true; // バリデーション成功
                            }
                        },
                    })}/>
                <div>{errors.memo?.message}</div>
            </div>
            <div>
                <button type="submit"
                  disabled={!isDirty || !isValid || isSubmitting}>送信</button>
                {isSubmitting && <div>...送信中...</div>}
            </div>
        </form>
    );
}



// このコードは、React Hook Formというライブラリを使ってフォームを管理するための記述です。useFormフックは、フォームの状態管理やバリデーションなどを簡単に実装するために使用されます。以下に詳細を説明します。

// useFormフックの使用
// useFormフックを使うと、フォームの状態管理、バリデーション、フォームの送信処理などを簡単に行うことができます。

// const { register, handleSubmit, formState: { errors } } = useForm({
//     defaultValues
// });

// 1. useFormフックの呼び出し
// useFormフックを呼び出して、フォームの初期化を行います。このフックはオブジェクトを返し、その中にフォームを管理するためのさまざまなプロパティとメソッドが含まれています。


// const { register, handleSubmit, formState: { errors } } = useForm({
//     defaultValues
// });
// この部分で、defaultValuesを渡して、フォームの初期値を設定しています。

// 2. register
// registerは、フォームの入力フィールドをReact Hook Formに登録するための関数です。この関数を使うことで、フォームフィールドの値やバリデーションルールを簡単に管理できます。

// 例:

// javascript
// コードをコピーする
// <input
//     id="name"
//     type="text"
//     {...register('name', {
//         required: '名前は必須入力です。',
//         maxLength: {
//             value: 20,
//             message: '名前は20文字以内にしてください。'
//         }
//     })}
// />
// 3. handleSubmit
// handleSubmitは、フォームが送信されたときに呼び出される関数を登録します。この関数は、2つの引数を取ります。1つ目はフォームデータを受け取るコールバック関数、2つ目はバリデーションエラーが発生したときに呼び出されるコールバック関数です。

// 例:

// javascript
// コードをコピーする
// <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
//     {/* フォームフィールド */}
// </form>
// 4. formState: { errors }
// formStateオブジェクトは、フォームの状態に関する情報を提供します。
// その中のerrorsプロパティは、各フィールドのバリデーションエラーを格納します。

// 例:

// javascript
// コードをコピーする
// <div>{errors.name?.message}</div>
// まとめ
// このコードスニペットでは、useFormフックを使ってフォームの初期値を設定し、入力フィールドを登録し、
// フォームの送信ハンドラーとエラーメッセージの表示を管理しています。
// これにより、React Hook Formを使った簡潔で強力なフォーム管理が可能になります。