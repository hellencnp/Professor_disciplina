import './MenuBotoes.css';

export default function MenuBotoes() {
  return (
    <div className = "menuBotoes">

      <a type="button" id="btnProfessores" className="btn btn-secondary"href="/professores">Professores</a>
      <a type="button" id="btnDisciplinas" className="btn btn-success" href="/disciplinas">Disciplinas</a>
    </div>
  );
}
