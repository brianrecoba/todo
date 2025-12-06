
import TrashIcon from "./assets/icons/trash-regular.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react"
import PlusRegular from "./assets/icons/Plus-Regular.svg?react"


import Text from "./components/text";
import Icon from "./components/icon";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input-text";
import InputCheckbox from "./components/input-checkbox";
import Card from "./components/card";
import Container from "./components/container";


export default function App() {

  return (
    <Container>
      <div className="grid gap-3">
      <div className="flex flex-col gap-1">
        <Text variant={"body-md"} className="text-green-base">Olá Mundo</Text>
        <Text variant={"body-md-bold"} className="text-pink-base">Olá Mundo</Text>
        <Text variant={"body-sm-bold"} className="text-pink-dark">Olá Mundo</Text>
      </div>

      <div className="flex gap-2"> 
        <Icon svg={TrashIcon} />
        <Icon  svg={SpinnerIcon} animate/>
      </div>

      <div>
        <Badge>2 de 5</Badge>
        <Badge variant={"secondary"}>5</Badge>
        
      </div>

      <div>
        <Button icon={PlusRegular}>Nova tarefa</Button>
        <Button >Nova tarefa</Button>
      </div>
      <div>
        <ButtonIcon icon={TrashIcon} variant={"secondary"}/>
        <ButtonIcon icon={TrashIcon} variant={"tertiary"}/>
        <ButtonIcon icon={TrashIcon} disabled/>
      </div>
      <div>
        <InputText/>
      </div>
      <div>
        <InputCheckbox/>
      </div>
      <div>
        <Card size={"md"}>
          Olá Mundo
        </Card>
      </div>
    </div>
    </Container>
    
  )
}

