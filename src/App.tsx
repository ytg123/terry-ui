import React from 'react';
import { Button } from "@/components";


export default function App() {
  return (
    <main className='semi-always-light'>
      <h1>React + TypeScript + Vite Template</h1>
      <Button type='primary'>Primary Button</Button>
      <Button type='danger'>Danger Button</Button>
      <Button type='default'>Default Button</Button>
      <Button type='link' href='https://www.semi.design/zh-CN/index'>Link Button</Button>
      <Button type='primary' size='small'>Small Primary Button</Button>
      <Button type='danger' size='small'>Small Danger Button</Button> 
      <Button type='default' size='small'>Small Default Button</Button>
      <Button type='link' size='small' href='https://www.semi.design/zh-CN/index'>Small Link Button</Button>
      <Button type='primary' size='large'>Large Primary Button</Button>
      <Button type='danger' size='large'>Large Danger Button</Button>
      <Button type='default' size='large'>Large Default Button</Button>
      <Button type='link' size='large' href='https://www.semi.design/zh-CN/index'>Large Link Button</Button>
      <Button type='primary' disabled>Disabled Primary Button</Button>
      <Button type='danger' disabled>Disabled Danger Button</Button>
      <Button type='default' disabled>Disabled Default Button</Button>
      <Button type='link' disabled href='https://www.semi.design/zh-CN/index'>Disabled Link Button</Button>
      <Button type='primary' loading>Loading Primary Button</Button>
    </main>
  );
}
