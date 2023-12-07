import { AndroidSvg } from "../../assets/img/AndroidSvg"
import { IconSvg } from "../../assets/img/IconSvg"
import { But } from "../custom_tools/But"
import { SelectBut } from "../custom_tools/SelectBut"
import { FormBlock } from "./FormBlock"
import { RegionText } from "./RegionText"
import { Link } from 'react-router-dom'

const WelcomePage = () => {

  const changeRegion = () => {
    
  }
  
  const welcome_content = [
    {title: "Имя", blocks: [<input name="name"/>]},
    {title: "Пол", blocks: [<SelectBut text="Мужской"/>, <SelectBut text="Женский"/>]},
    {title: "Возраст", blocks: [
    <SelectBut newclass="age" text="<14"/>, 
    <SelectBut newclass="age" text="14-17"/>, 
    <SelectBut newclass="age" text="18-22"/>, 
    <SelectBut newclass="age" text="23-26"/>, 
    <SelectBut newclass="age" text="27-35"/>, 
    <SelectBut newclass="age" text=">35"/>
  ]},
    {title: "Регион", blocks: [<RegionText />, <But func={changeRegion} text="Изменить"/>]},
  ]


    return <div className="container_welcome">
      <div className='block-1 block'>
        <IconSvg />
        <h3>Квизи</h3>
        <p>вопросы и ответы</p>
        <div className='form'>
          {welcome_content.map(el => <FormBlock content={el}/>)}
          <But newclass="follow_but" text="Начать!"/>
        </div>
        <Link className="android_link" to="/"><AndroidSvg /> Скачать android-приложение (.apk)</Link>
      </div>
      {/*<div className='block-2 block'>
        <img src={require('../../assets/img/screens.png')}/>
        <Link to="/"><AndroidSvg /> Скачать android-приложение (.apk)</Link>
</div>*/}
    </div>
}

export default WelcomePage