import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer>
      <div class="container">
       ® Copyright
      </div>
    </footer>
  );
});
