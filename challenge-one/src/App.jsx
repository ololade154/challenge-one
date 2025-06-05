import Header from './components/Header';
import Main from './components/Main';
import Content from './components/Content';
import SkillsList from './components/SkillsList';

import './index.css';
function App() {
  return (
    <div className="card">
      <Header></Header>
      <Main></Main>
      <Content></Content>
      <SkillsList></SkillsList>
    </div>
  );
}

export default App;
