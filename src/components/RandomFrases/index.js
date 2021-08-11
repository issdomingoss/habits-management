import React from "react";
import { useState } from "react";

const RandomFrases = () => {
  const [frases, setFrases] = useState([
    {
      id: 1,
      frase: " Dreaming big and dreaming small gives the same work.",
      transcript: " Sonhar grande e sonhar pequeno dá o mesmo trabalho.",
    },
    {
      id: 2,
      frase:
        " One important key to success is self-confidence. An important key to self-confidence is preparation.",
      transcript:
        "Uma importante chave para o sucesso é a auto-confiança. Uma importante chave para autoconfiança, é a preparação.",
    },
    {
      id: 3,
      frase:
        " Successful people have fear, successful people have doubts, and successful people have worries. They just don’t let these feelings stop them.",
      transcript:
        " Pessoas bem-sucedidas têm medo, pessoas bem-sucedidas têm dúvidas, e pessoas bem-sucedidas têm preocupações. Elas só não deixam esses sentimentos dominarem sua vida.",
    },
    {
      id: 4,
      frase: "Are necessary too many years of work to succeed overnight.",
      transcript:
        " São necessários muitos anos de trabalho para fazer sucesso do dia para a noite.",
    },
    {
      id: 5,
      frase: "Be the change you want to see in the world.",
      transcript: " Seja a mudança que você quer ver no mundo.",
    },
    {
      id: 6,
      frase: "Change your thoughts and you change your world.",
      transcript: "Mude seus pensamentos e você muda seu mundo.",
    },
    {
      id: 7,
      frase:
        "Do not be embarrassed by your failures, learn from them and start again.",
      transcript:
        " Não se sinta envergonhado por seus fracassos, aprenda com eles e comece de novo.",
    },
    {
      id: 8,
      frase:
        "Dream as if you will live forever. Live as if you will die today.",
      transcript:
        " Sonhe como se você fosse viver para sempre. Viva como se você fosse morrer hoje.",
    },
    {
      id: 9,
      frase:
        "If you want to do it, do it now. If you don’t, you’re going to regret it.",
      transcript:
        " Se você quer fazer algo, faça agora. Se não fizer, você se arrependerá.",
    },
    {
      id: 10,
      frase:
        "Logic will get you from A to B. Imagination will take you everywhere.",
      transcript:
        " A lógica pode levar de um ponto A a um ponto B. A imaginação pode te levar a qualquer lugar.",
    },
    {
      id: 11,
      frase: "Nothing is impossible, the word itself says I’m possible!",
      transcript: " Nada é impossível, a palavra já diz ‘Eu sou possível’!",
    },
    {
      id: 12,
      frase:
        "Nothing is less productive than to make more efficient what should not be done at all.",
      transcript:
        " Nada é menos produtivo do que tornar eficiente algo que nem deveria ser feito.",
    },
    {
      id: 13,
      frase: "Once a year, go someplace you’ve never been before.",
      transcript: " Uma vez por ano, vá a algum lugar que nunca foi antes.",
    },
    {
      id: 14,
      frase:
        "Remember that not getting what you want is sometimes a wonderful stroke of luck",
      transcript:
        " Lembre-se que não conseguir o que você quer é, às vezes, um incrível lance de sorte.",
    },
    {
      id: 15,
      frase: "Speak less. Listen more.",
      transcript: " Fale menos. Escute mais.",
    },
    {
      id: 16,
      frase:
        "The only place where success comes before work is in the dictionary.",
      transcript:
        " O único lugar em que o sucesso vem antes do trabalho é no dicionário.",
    },
    {
      id: 17,
      frase: "You can get what you want or you can just get old.",
      transcript:
        " Você pode conseguir tudo o que quer ou simplesmente ficar velho.",
    },
    {
      id: 18,
      frase: "Be content to act, and leave the talking to others.",
      transcript: " Fique contente em agir. Deixa a fala para os outros.",
    },
    {
      id: 19,
      frase: "Believe in yourself!",
      transcript: " Acredite em si mesmo!",
    },
    {
      id: 20,
      frase: "Don’t be afraid to give up the good to go for the great. ",
      transcript: " Não tenha medo de desistir do bom para ir atrás do ótimo.",
    },
    {
      id: 21,
      frase:
        "Don’t visualize the success. Visualize the steps you take to make success happen. ",
      transcript:
        " Não visualize o sucesso. Visualize os passos que você deve tomar para chegar ao sucesso.",
    },
    {
      id: 22,
      frase: "Follow your dreams, work hard, practice and persevere.",
      transcript: " Siga seus sonhos, trabalhe duro, pratique e persista.",
    },
    {
      id: 23,
      frase: "Follow your dreams.",
      transcript: " Siga os seus sonhos.",
    },
    {
      id: 24,
      frase:
        "I’m a great believer in luck, and I find the harder I work, the more luck I have. ",
      transcript:
        " Eu sou um grande crente na sorte, e eu descobri que quanto mais eu trabalho duro, mais sorte eu tenho.",
    },
    {
      id: 25,
      frase: "If at first you don’t succeed, try, try again. ",
      transcript:
        " Se na primeira vez você não teve sucesso, tente, tente de novo.",
    },
    {
      id: 26,
      frase: "If you can dream it, you can do it.",
      transcript: " Se você consegue sonhar, você consegue tornar realidade.",
    },
    {
      id: 27,
      frase:
        "If you love life, do not waste time, for time is what life is made up of. ",
      transcript:
        " Se você ama a vida, não perca tempo, porque tempo é do que a vida é feita.",
    },
    {
      id: 28,
      frase:
        "It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is most adaptable to change. ",
      transcript:
        " Não é a espécie mais forte que sobrevive, nem a mais inteligente que sobrevive. É aquela que é mais adaptável à mudança. ",
    },
    {
      id: 29,
      frase: "Just go out there and do what you have got to do.",
      transcript: " Apenas vá e faça o que tem que fazer.",
    },
    { id: 30, frase: "Make it happen!", transcript: " Faça acontecer!" },
    {
      id: 31,
      frase: "Small deeds done are better than great deeds planned. ",
      transcript:
        " Pequenas ações feitas são melhores do que grandes ações planejadas.",
    },
    {
      id: 32,
      frase:
        "Starting a company is like throwing yourself off the cliff and assembling an airplane on the way down.",
      transcript:
        " Empreender é como se atirar do penhasco e construir um avião na queda.",
    },
    {
      id: 33,
      frase:
        "Success depends on a conscious effort to change your own destiny.",
      transcript:
        " O sucesso depende de um esforço consciente para mudar o próprio destino.",
    },
    {
      id: 34,
      frase:
        "Success usually comes to those who are too busy to be looking for it. ",
      transcript:
        " O sucesso normalmente vem para quem está ocupado demais para procurar por ele. ",
    },
    {
      id: 35,
      frase: "The only way to do great work is to love what you do.",
      transcript:
        " A única maneira de fazer um excelente trabalho é amar o que você faz.",
    },
    {
      id: 36,
      frase:
        "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
      transcript:
        " Há apenas uma maneira de evitar críticas: não faça nada, não diga nada, não seja nada.",
    },
    {
      id: 37,
      frase: "When you cease to dream, you cease to live.",
      transcript: " Quando você deixa de sonhar, você deixa de viver.",
    },
    {
      id: 38,
      frase: "When you don’t take any risks, you risk everything.",
      transcript: " Quando você não arrisca nada, você arrisca tudo.",
    },
    {
      id: 39,
      frase: "You can do anything!",
      transcript: " Você pode fazer qualquer coisa!",
    },
    { id: 40, frase: "You can do it!", transcript: " Você consegue!" },
    {
      id: 41,
      frase: "You can never quit. Winners never quit, and quitters never win. ",
      transcript:
        " Você nunca pode desistir. Ganhadores nunca desistem e desistentes nunca ganham.",
    },
  ]);

  const [transcriptPortuguese, setTranscriptPortuguese] = useState("");
  const [fraseEnglish, setFraseEnglish] = useState("");

  const getRandomFrase = () => {
    let number = "";
    let texto = [];
    number = Math.floor(Math.random() * (41 - 1 + 1)) + 1;
    texto = frases.filter((item) => item.id === number);
    setTranscriptPortuguese(texto.map((item) => item.transcript));
    setFraseEnglish(texto.map((item) => item.frase));
  };

  console.log(transcriptPortuguese);
  return (
    <>
      <h3>
        Remover o Botão que esta em Random Frases em Components e Colocar no
        Botão de Login
      </h3>

      <button onClick={() => getRandomFrase()}>Gerar Frase</button>
      <br></br>
      <h3>{fraseEnglish}</h3>
      <br></br>
      <h5>{transcriptPortuguese}</h5>
    </>
  );
};
export default RandomFrases;
