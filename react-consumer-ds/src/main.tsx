import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Button, Input, Label } from 'react-ts-ds';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Button>Click me!</Button>
    <Input placeholder='Some input' />
    <Label>This is a label</Label>
  </React.StrictMode>
);
