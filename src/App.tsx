import React from 'react';
import Card from './components/Card/Card';
// @ts-ignore
import icon1 from './icons/Image.jpg'; // Путь к вашей иконке
// @ts-ignore
import icon2 from './icons/SecondStepIcon.jpg'; // Путь к вашей иконке
// @ts-ignore
import icon3 from './icons/thirdStep.png';
import Button from "./components/Button/Button"; // Путь к вашей иконке
// @ts-ignore
import './App.module.scss';

const App: React.FC = () => {
    return (
        <div className="App" >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
            <Card
                title="Получите партнерскую ссылку"
                icon={icon1}
                number={1}
                numberBackground="linear-gradient(180deg, #2920A5 0%, #6377E1 100%)"
                numberBorderImageSource="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.32) 100%)"
                backgroundColor="linear-gradient(180deg, #6377E1 0%, #2920A5 100%)"
                textColor="#fff"
                opacity={1}
                borderRadius="20px"
                borderImageSource="linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, #475FDF 100%)"
            />
            <Card
                title="Расскажите о iiii.COM"
                icon={icon2}
                number={2}
                numberBackground="linear-gradient(180deg, #E163E1 0%, #741595 100%)"
                numberBorderImageSource="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.32) 100%)"
                backgroundColor="linear-gradient(180deg, #E163E1 0%, #741595 100%)"
                textColor="#fff"
                opacity={1}
                borderRadius="20px"
                borderImageSource="linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, #B247DF 100%)"
            />
            <Card
                title="Получайте хороший процент от покупок по вашей ссылке!"
                icon={icon3}
                number={3}
                numberBackground="linear-gradient(180deg, #55CE00 0%, #014D1D 100%)"
                numberBorderImageSource="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.32) 100%)"
                backgroundColor="linear-gradient(180deg, #55CE00 0%, #014D1D 100%)"
                textColor="#fff"
                opacity={1}
                borderRadius="20px"
                borderImageSource="linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, #3A8207 100%)"
            />
        </div>
        <Button text="Стать партнером"/>
        </div>
    );
};

export default App;