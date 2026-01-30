export const verifyUserObject = (obj = {}) => {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop) && prop !== "isLogged") {
      if (prop !== "id") {
        if (!obj[prop].trim()) {
          return false;
        }
      }
    }
  }
  return true;
};

export const verifyObject = (obj = {}) => {
  for (const prop in obj) {
    if (prop !== "id") {
      if (obj[prop] === null || obj[prop] === undefined || !obj[prop]) {
        return false;
      }
    }
  }
  return true;
};

export const buildPromptResume = (bandName) => {
  if (!bandName || bandName.trim() === "") {
    throw new Error("Nome da banda é obrigatório para construir o prompt.");
  }

  return `Você é um crítico musical descontraído e conhecedor. Escreva um resumo envolvente sobre a banda "${bandName}" seguindo estas diretrizes:

**Estrutura (máximo 150-200 palavras):**
- Ser sincero e dizer se a banda existe mesmo ou não, ou que vc não conhece
- Apresentação rápida: Quem são e de onde vêm
- Som característico: Descreva o estilo musical com analogias criativas
- Momento marcante: Um álbum, show ou fato que define a banda
- Curiosidade interessante: Algo surpreendente ou pouco conhecido
- Legado/Impacto: Por que importam para a música

**Tom:**
- Escreva como se estivesse recomendando para um amigo
- Use linguagem acessível, sem jargões excessivos
- Seja objetivo mas apaixonado
- Adicione pitadas de humor quando apropriado

**Evite:**
- Listas genéricas de álbuns
- Biografias cronológicas extensas
- Clichês ("lendários", "icônicos" em excesso)

Escreva em português brasileiro com personalidade e energia! 🎸`;
};
