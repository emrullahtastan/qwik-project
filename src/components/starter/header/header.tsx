import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import { Link  } from '@builder.io/qwik-city';
export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container ", styles.wrapper]} style={"justify-content: flex-start; gap:10px;"}>
          <Link prefetch href="/">Home</Link>
          <Link prefetch href="/about">About</Link>
          <Link prefetch href="/products">Products</Link>
      </div>
    </header>
  );
});
