import styles from "../componentes/styles.module.css"
// import ButtonsNav from "./homePage/buttons/Buttons"
// import Cartoes from "./homePage/fieldsCards/FieldsCards"
// import CartoesDois from "./homePage/fieldsCards/FieldsCardsTwo"
// import CartoesTres from "./homePage/fieldsCards/FieldsCardsThree"
import FormScreen from "./forms/forms"




const HomeScreen = () => {
  return (
    <div className={styles.container}>
      <header>
        {/* <ButtonsNav /> */}
        <section>
          {/* <Cartoes />
          <CartoesDois />
          <CartoesTres />  */}
        </section>
      </header>
      <section>
      <FormScreen />
      </section> 
    </div>
  )
}

export default HomeScreen