import { useEffect, useState } from 'react';
import Joyride, { CallBackProps, STATUS, Step } from 'react-joyride';
import './style.css'; // Certifique-se de que este arquivo contém os estilos de hover

const TourGuide = () => {
  const [run, setRun] = useState(false); // Controla se o tour está rodando
  const [steps] = useState<Step[]>([
    {
        target: 'body',
        content: (
          <div>
            <h2 className="joyride-title" style={{color:'#4682b4'}}>Bem-vindo ao Romi Pulse!</h2>
            <p>Aprenda a utilizar a plataforma de Indústria 4.0 da Romi S.A.</p>
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
        content: 'No módulo Fábrica, veja gráficos interativos e dados detalhados das suas máquinas para uma gestão eficaz.',
        placement: 'bottom',
      },
      {
        target: '.card-locacao',
        content: 'No módulo Locação, monitore o uso dos equipamentos alugados e visualize sua disponibilidade para uma gestão eficiente.',
        placement: 'bottom',
      },
      {
        target: '.img',
        content: 'O ícone de Notificações aparece para comunicados ou alertas importantes. Clique nele para acessar as mensagens.',
        placement: 'bottom',
      },
      {
        target: '.user',
        content: 'Clique no ícone de Usuário para sair da sua conta.',
        placement: 'bottom',
      },
      {
        target: 'body',
        content: 'Agora que você conhece os principais recursos, sinta-se à vontade para explorar a plataforma e aproveitar as ferramentas disponíveis.',
        placement: 'center',
      }
  ]);

  useEffect(() => {
    setRun(true); // Inicia o tour automaticamente quando o componente é montado
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
        //showProgress // Mostra o progresso no botão
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
            },
            buttonBack: {
                color: '#4682b4', 
                border: '2px solid #4682b4', 
                borderRadius: '4px', 
                marginRight: 10, 
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
                borderRadius: '4px', // Borda arredondada no modal
                textAlign: 'center', // Alinhamento do texto
            },
            tooltipContent: {
                padding: '15px', // Espaçamento interno no conteúdo do modal 
            },
            beacon: {
                display: 'none', // Remove completamente o beacon
              },
        }}
    />
  );
};

export default TourGuide;
