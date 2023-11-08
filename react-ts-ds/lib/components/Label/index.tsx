import React from 'react';
import styles from './styles.module.css';

export function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={styles.label} {...props} />;
}
