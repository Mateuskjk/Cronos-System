import styles from "../../styles.module.css"
import ActivityCard from "../cards/activityCard"

function CartoesDois() {
  return(
    <div className={styles.fieldsDois}>
      <h1>Fazendo</h1>
      <div>
      <ActivityCard className = {styles.cardsTwo} />
      </div>
    </div>
  )
}

export default CartoesDois