import './MenuBotoes.css';

export default function MenuBotoes() {
  return (
    <div className = "menuBotoes">

      <button type="button" id="btnProfessores" className="btn btn-secondary">Professores</button>
      <button type="button" id="btnDisciplinas" className="btn btn-success">Disciplinas</button>
    </div>
  );
}

