import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import yup from './yup.jp.js';

const schema = yup.object({
    name: yup
      .string()
      .label('名前')
      .required()
      .max(20),
    gender: yup
      .string()
      .label('性別')
      .required(),
    email: yup
      .string()
      .label('メールアドレス')
      .required()
      .email(),
    memo: yup
    .string()
    .label('備考')
    .required()
    .min(10)
});

export default function FormJapan() {
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
