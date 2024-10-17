import { useEffect, useState } from 'react';
import Joyride, { CallBackProps, STATUS, Step } from 'react-joyride';
import Background from "../../assets/background-romi.svg";
import RomiLogo from "../../assets/LOGO-ROMI-PULSE-AZUL 1.svg";


const TourGuide = () => {
  const [run, setRun] = useState(false); // Controla se o tour está rodando
  const [steps] = useState<Step[]>([
    {
      target: 'body',
      content: (
        <div>
          <img src={RomiLogo} alt="" />
          <p>Bem-vindo! Aprenda a utilizar a plataforma de Indústria 4.0 da Romi S.A.</p>
        </div>
      ),
      placement: 'center',
    },
    {
      target: '.cards-container',
      content: 'Ao entrar na plataforma, a tela principal estará organizada em seções distintas.',
      placement: 'bottom',
    },
    {
      target: '.card-fabrica',
      content: 'Módulo Fábrica, veja gráficos interativos e dados detalhados das suas máquinas para uma gestão eficaz.',
      placement: 'bottom',
    },
    {
      target: '.card-locacao',
      content: 'Módulo Locação, monitore o uso dos equipamentos alugados e visualize sua disponibilidade para uma gestão eficiente.',
      placement: 'bottom',
    },
    {
      target: '.img',
      content: 'O ícone de Notificações mostra comunicados ou alertas importantes. Clique nele para acessar as mensagens.',
      placement: 'bottom',
    },
    {
      target: '.user',
      content: 'Ao clicar no ícone de Usuário você terá a opção de sair da sua conta.',
      placement: 'bottom',
    },
    {
      target: 'body',
      content:'Agora que você conhece os principais recursos, sinta-se à vontade para explorar a plataforma e aproveitar as ferramentas disponíveis.',
      placement: 'center',
    }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRun(true); // Inicia o tour após 3 segundos
    }, 3000); // 3000 milissegundos = 3 segundos

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
  }, []);

  const handleTourCallback = (data: CallBackProps) => {
    const { status } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];
    if (finishedStatuses.includes(status)) {
      setRun(false); // Finaliza o tour

    }
  };

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      scrollToFirstStep
      // showProgress // Mostra o progresso no botão
      showSkipButton
      hideCloseButton
      callback={handleTourCallback}
      locale={{ // Texto para botões
        back: 'Voltar', 
        close: 'Fechar', 
        last: 'Finalizar', 
        next: 'Próximo', 
        skip: 'Pular', 
      }}
      styles={{
        options: {
          arrowColor: '#0067a6', // Cor da seta
          backgroundColor: '#fff', // Cor de fundo do modal
          overlayColor: 'rgba(0, 0, 0, 0.6)', // Cor do overlay (fundo escuro ao redor do foco)
          textColor: '#000', // Cor do texto
          width: 500, // Largura do modal
          zIndex: 1000, // Controle da ordem de empilhamento
        },
        buttonNext: {
          backgroundColor: '#4682b4', 
          color: '#fff', 
          paddingBottom: 10,
          paddingTop: 10,
          paddingLeft: 20,
          paddingRight: 20,
          fontWeight: 600,
        },
        buttonBack: {
          color: '#4682b4', 
          marginRight: 10, 
          fontWeight: 500,
        },
        buttonSkip: {
          color: '#bababa', 
          fontWeight: 500,
          display: 'flex',
          justifyContent: 'flex-start',
          marginLeft: 20,
        },
        tooltip: {
          border: '2px solid #0067a6', // Borda do modal
          borderRadius: '24px', // Borda arredondada no modal
          textAlign: 'center', // Alinhamento do texto
          fontWeight: 500,
          fontSize: 19,
          backgroundImage: `url(${Background})`, // Define a imagem de fundo
          backgroundSize: 'cover', // Faz com que a imagem cubra todo o modal
          backgroundPosition: 'center', // Centraliza a imagem
          color: '#000', // Cor do texto sobre a imagem
        },
        tooltipContent: {
          // padding: '15px', // Espaçamento interno no conteúdo do modal 
        },
      }}
    />
  );
};

export default TourGuide;
