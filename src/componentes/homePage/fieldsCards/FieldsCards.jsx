import styles from "../../styles.module.css"
import ActivityCard from "../cards/activityCard"

function Cartoes() {
  return(
    <div className={styles.componentes}>
      <div className={styles.field}>
        <h1>A Fazer</h1>
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
    </div>

  )
}
export default Cartoes