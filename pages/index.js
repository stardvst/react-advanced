import Button from '../components/button';
import styles from '../styles/Home.module.css';

export default function Home() {
  const props = {
    increment: 2,
    underline: true,
  };

  return (
    <div className={styles.container}>
      <Button {...props} color="black" />
      <Button {...props} color="blue" />
      <Button {...props} color="green" />
    </div>
  );
}
