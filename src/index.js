import "./styles.css";
import JSON from "./data.json";
import Concatenar from "./concatenar";
import Media from "./media";
import Question from "./question";

document.getElementById("app").innerHTML = `
<div class="que-container">
  ${Question}
</div>
<div>
  <div class="concat-container">
    <span>Resultado de concatenar:</span>
    <p>${Concatenar(JSON)}</p>
  </div>
  <div class="avg-container">
    <span>Resultado de media:</span>
    <p>${Media(JSON)}</p>
  </div>
</div>
`;
