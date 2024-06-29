import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

// ngルールを追加
yup.addMethod(yup.string, 'ng', function() {
  return this.test('ng',
  ({ label }) => `${label}にNGワードが含まれています。`,
  value  => {
    // 不適切ワードを準備
    const ngs = ['暴力', '死', 'グロ'];
    // 入力文字列に不適切ワードが含まれています
    for (const ng of ngs) {
      if (value.includes(ng)) {
        return false;
      }
    }
    return true;
  });
});

// 検証ルールを準備
const schema = yup.object({
    name: yup
      .string()
      .required('名前は入力必須です。')
      .max(20, '名前は20文字以内で入力してください'),
    gender: yup
      .string()
      .required('性別は必須入力です。'),
    email: yup
      .string()
      .required('メールアドレスは必須入力です。')
      .email('メールアドレスの形式が不正です。'),
    memo: yup
      .string()
      .required('備考は必須入力です。')
      .min(10, '備考は10文字以上で入力してください。')
      .ng()
});

export default function FormYup() {
    const { register, handleSubmit, formState: { errors }} = useForm({
        defaultValues: {
            name: '名無権兵衛',
            email: 'admin@example.com',
            gender: 'male',
            memo: ''
        },
         // yupに検証を委ねる
         resolver: yupResolver(schema),
    });

    // サブミット時の処理を準備
    const onSubmit = data => console.log(data);
    const onError = err => console.log(err);

    return (
    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <div>
            <label htmlFor="name">名前:</label><br />
            <input id="name" type="text"
              {...register('name')} />
            <div>{errors.name?.message}</div>
        </div>
        <div>
            <label htmlFor="gender">性別:</label><br />
            <label>
            <input type="radio" value="male"
              {...register('gender')} />男性
            </label>
            <label>
            <input type="radio" value="female"
              {...register('gender')} />女性
            </label>
            <div>{errors.gender?.message}</div>
        </div>
        <div>
            <label htmlFor="email">メールアドレス:</label><br />
            <input id="email" type="email"
              {...register('email')} />
            <div>{errors.email?.message}</div>
        </div>
        <div>
            <label htmlFor="memo">備考:</label><br />
            <textarea id="memo"
              {...register('memo')} />
            <div>{errors.memo?.message}</div>
        </div>
        <div>
            <button type="submit">送信</button>
        </div>
    </form>
    );
}
