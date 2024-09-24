import "./Form.css";
import FormInput from '../FormInput/FormInput.js'
import Button from '../Button/Button.js'

const Form = () => {
  function handleClickSubmit(){
    console.log('Clicou no botão do formulário.')
  }
  return (
    
    <form className="form">
      <FormInput inputName='Nome' id='nome' type='text'/>
      <FormInput inputName='Email' id='email' type='email'/>
      <Button text='Enviar'type='submit'onClick={handleClickSubmit}/>
      {/* <Button text='Clique aqui'type='submit'/> */}
    </form>
  );
};
export default Form;
