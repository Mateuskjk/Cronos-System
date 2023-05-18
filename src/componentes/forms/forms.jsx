import Form from "../forms/form.module.css"
function FormScreen () {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return(
    <>
      <div className={Form.area + " formContainer"}>
        <div className={Form.formulario}>
          <form className={Form.formularioCamp} onSubmit={handleSubmit}>
            <fieldset className={Form.formularioElement}>
              <h5>CRIE SUA ATIVIDADE</h5>
              <input type="text" placeholder="Nome da sua Atividade" className={Form.nameCamp}/><br />
              <textarea name="description" id="descriptionCamp" cols="30" rows="10" placeholder="Descricao" className={Form.descriptionCamp}></textarea><br />
              <input type="text" placeholder="Start Date" className={Form.dateCampS}/><br />
              <input type="text" placeholder="Start End" className={Form.dateCampE}/><br />
              <button type="submit" className={Form.submitBtn}><p>Next</p></button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  )
}
export default FormScreen