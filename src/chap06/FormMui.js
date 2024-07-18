import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

export default function FormMui() {
  // フォームの初期値を設定
  const defaultValues = {
    name: '名無権兵衛',
    email: 'admin@example.com',
    gender: 'male',
    memo: ''
  };

  // useFormフックを利用してフォームの状態を管理
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues
  });

  // フォーム送信成功時に呼ばれる関数
  const onsubmit = data => console.log(data);
  
  // フォーム送信失敗時に呼ばれる関数
  const onerror = err => console.log(err);

  return (
    // フォームのsubmitイベントにhandleSubmitをバインド
    <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
      
      <div>
        {/* 名前の入力フィールド */}
        <TextField label="名前" margin="normal"
          {...register('name', {
            required: '名前は必須入力です。',
            maxLength: {
              value: 20,
              message: '名前は20文字以内にしてください。'
            }
          })}
          // エラーがある場合に表示
          error={'name' in errors}
          helperText={errors.name?.message} />
      </div>

      <div>
        {/* 性別のラジオボタン */}
        <FormControl>
          <FormLabel component="legend">性別：</FormLabel>
          <RadioGroup name="gender">
            <FormControlLabel value="male" control={<Radio />} label="男性"
              {...register('gender', {
                required: '性別は必須です。',
              })}
            />
            <FormControlLabel value="female" control={<Radio />} label="女性"
              {...register('gender', {
                required: '性別は必須です。',
              })}
            />
          </RadioGroup>
          {/* エラーがある場合に表示 */}
          <FormHelperText error={'gender' in errors}>
            {errors.gender?.message}
          </FormHelperText>
        </FormControl>
      </div>

      <div>
        {/* メールアドレスの入力フィールド */}
        <TextField type="email" label="メールアドレス" margin="normal"
          {...register('email', {
            required: 'メールアドレスは必須入力です。',
            pattern: {
              value: /([a-z\d+\-.]+)@([a-z\d-]+(?:\.[a-z]+)*)/i,
              message: 'メールアドレスの形式が不正です。'
            }
          })}
          // エラーがある場合に表示
          error={'email' in errors}
          helperText={errors.email?.message} />
      </div>

      <div>
        {/* メモの入力フィールド */}
        <TextField label="メモ" margin="normal" multiline
          {...register('memo', {
            required: '備考は必須入力です。',
            minLength: {
              value: 10,
              message: '備考は10文字以上にしてください。'
            },
          })}
          // エラーがある場合に表示
          error={'memo' in errors}
          helperText={errors.memo?.message} />
      </div>

      <div>
        {/* 送信ボタン */}
        <Button variant="contained" type="submit">送信</Button>
      </div>
    </form>
  );
}
// 解説
// インポート文:

// @mui/materialからreact-hook-form必要なコンポーネントとフックをインポートします。
// デフォルト値:

// フォームの初期値を定義しています。これはフォームが初期化されたときに表示される当然値です。
// useFormフック:

// useFormregisterフックを使用してフォームの状態管理を行いhandleSubmitますerrors。
// onSubmitとonError関数:

// onsubmitはフォームが正常に送信されたときに呼ばれる関数です。
// onerrorはフォーム
// <form>要素:

// フォーム全体を<form>タグで囲み、onSubmitイベントにhandleSubmit関数をバインドしています。
// noValidateプロパティはブラウザの安全の検証を有効にします。
// 名前の入力フィールド:

// TextFieldコンポ
// registerを使用してフォームのバリデーションルールを設定し、エラーメッセージを表示します。
// 性別のラジオボタン:

// RadioGroupをFormControlLabel使用してその選択肢を作成します。
// registerを使用してバリデーションルールを設定し、エラーメッセージを表示します。
// メールアドレスの入力フィールド:

// TextFieldコンポーネントを使ってメールアドレス
// registerを使用してバリデーションルールを設定し、エラーメッセージを表示します。
// メモの入力フィールド:

// TextFieldコンポーネントを使用してメモの入力フィールドを作成します。
// registerを使用してバリデーションルールを設定し、エラーメッセージを表示します。
// 送信ボタン:

// Buttonコンポーネントを使用して送信ボタンを作成します。
// ボタンをクリックする