import Skills from './Skills';
import Button from './Button';
function SkillsList() {
  return (
    <div className="skillsList">
      <Skills skill="react " emoji="🦾" color="green" />
      <Skills skill="HTML+ CSS" emoji="🦾" />
      <Skills skill="JavaScript" emoji="🦾"></Skills>
      <Button button="Click me"></Button>
    </div>
  );
}
export default SkillsList;
