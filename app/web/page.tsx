import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
export default function Page() {
  return (
    <div>
      <Button appName="docs" className={styles.secondary}>
        Open alert
      </Button>
      Hello World
    </div>
  );
}
