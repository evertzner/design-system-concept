import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button, Input, Label, TheButton } from '../lib/main.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Button>Click me</Button>
    <Input placeholder='Insert your value' />
    <Label>Some Label</Label>
    <TheButton />
  </React.StrictMode>
);
