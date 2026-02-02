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

export const buildPromptBandResume = (bandName) => {
  if (!bandName || bandName.trim() === "") {
    throw new Error("Nome da banda é obrigatório para construir o prompt.");
  }

  return `Você é um crítico musical descontraído e conhecedor. Escreva um resumo envolvente sobre a banda "${bandName}" seguindo estas diretrizes:

**Estrutura (máximo 20-50 palavras):**
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

export const buildPromptMusicResume = (musicTitle, bandName) => {
  if (!musicTitle || musicTitle.trim() === "") {
    throw new Error("Título da música é obrigatório para construir o prompt.");
  }

  if (!bandName || bandName.trim() === "") {
    throw new Error("Nome da banda é obrigatório para construir o prompt.");
  }

  return `Você é um crítico musical descontraído, sincero e apaixonado por música. Escreva um resumo envolvente sobre a música "${musicTitle}" da banda "${bandName}" seguindo estas diretrizes:

**IMPORTANTE - Autenticidade em Primeiro Lugar:**
- Seja HONESTO: se você não conhece a banda/música, diga claramente
- Se a banda ou música não existe ou parece inventada, mencione isso de forma amigável
- Se conhece, mostre entusiasmo genuíno; se não conhece, admita sem problema

**Estrutura (20-50 palavras):**
1. **Verificação:** A banda e a música existem? Você as conhece?
2. **Apresentação:** Quem são, de onde vêm e quando surgiram
3. **Sobre a Música:** O que torna "${musicTitle}" especial? (letra, melodia, produção)
4. **Estilo Musical:** Descreva com analogias criativas (ex: "mistura o peso do Sabbath com a melancolia do Radiohead")
5. **Contexto:** Em qual álbum está? Que fase da banda representa?
6. **Curiosidade:** Algo surpreendente sobre a música ou banda (história de gravação, significado oculto, etc)
7. **Impacto:** Por que essa música/banda importa?

**Tom e Estilo:**
- Escreva como se estivesse numa conversa animada com um amigo em um bar
- Use linguagem brasileira natural e acessível
- Seja específico, não genérico ("a guitarra no refrão explode" > "tem guitarras legais")
- Mostre paixão, mas seja crítico quando necessário
- Humor e referências culturais são bem-vindos

**Evite Absolutamente:**
- Mentir ou inventar informações
- Listas mecânicas de álbuns/anos
- Clichês vazios ("lendários", "icônicos", "revolucionários" sem justificar)
- Biografias Wikipedia-style
- Descrições vagas ("som único", "letras profundas" sem exemplos)

**Se não conhecer:** Diga algo como "Ó, de boa, essa eu não conheço não... Pode ser algo mais underground ou você digitou errado? Me conta mais!"

Escreva em português brasileiro com energia, honestidade e personalidade! 🎸🎶`;
};
