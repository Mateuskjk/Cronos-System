import styles from "../../styles.module.css"
import ActivityCard from "../cards/activityCard"

function CartoesTres() {
  return (
    <div className={styles.fieldsTres}>
      <h1>Finalizado</h1>
      <div>
        <ActivityCard  className = {styles.cardsThree} />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
    </div>
  )
}
export default CartoesTres