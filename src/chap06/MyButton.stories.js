import React from 'react';
import MyButton from './MyButton';
import { action } from '@storybook/addon-actions';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// 基本情報を宣言
export default {
  title: 'MyApp/MyButton', // Storybookのサイドバーに表示されるタイトル
  component: MyButton,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large']
      },
      control: { type: 'select' },
      description: 'ボタンの大きさ'
    },
    primary: {
      type: 'boolean',
      description: 'primaryカラーを有効にするか',
    },
    backgroundColor: {
      type: 'string',
      description: '背景色',
    },
    label: {
      type: 'string',
      description: 'ボタンのキャプション'
    },
    onClick: {
      type: 'function',
      description: 'clickハンドラー',
      action: 'clicked'
    },
  },
  // decorators: [
  //   Story => (
  //     <div style={{
  //       height: 150,
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       backgroundColor: '#ccc',
  //     }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Index = {
  args: {
    primary: true,
    size: 'medium',
    label: 'ボタン',
    onClick: action('clicked'),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  }
};

export const White = {
  args: {
    size: 'small',
    label: 'ボタン',
    backgroundColor: '#fff',
    onClick: action('clicked'),
  },
};

export const Yellow = {
  args: {
    ...White.args,
    backgroundColor: 'lightyellow'
  }
};
