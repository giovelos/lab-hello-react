import'./App.css'
import ProfileCard from './components/ProfileCard';

function App() {
    return(
    <div className="App">
        <ProfileCard nome="Giovana" Idade="41" cidade="Brasília"/>
        </div>
    );
}
export default App;

function ProfileCard(props) {
    return (
        <div>
            <p>Nome: <span>Giovana</span></p>
            <p>Idade: <span>41</span></p>
            <p>Cidade: <span>Brasília</span></p>
        </div>
    )
}
export default ProfileCard

function ProfileCard({nome, idade, cidade}) {
    return (
        <div>
            <p>Nome: <span>{nome}</span></p>
            <p>Idade: <span>{idade}</span></p>
            <p>Cidade: <span>{cidade}</span></p>
        </div>
    )
}

export default ProfileCard
