/**
 * Brasilianportugali (pt-BR) · longstays. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/longstays.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['ahvl531', 'kuluttajaliittoVuokra', 'rakli', 'dvvTilapainen', 'dvv'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Um mês ou um inverno na Lapônia: apartamento ou cabana',
  metaDescription:
    'Ficar um mês ou um inverno na Lapônia finlandesa: apartamento mobiliado para alugar, cabana por semana ou moradia oferecida pelo empregador.',
  breadcrumb: 'Estadias longas',
  hero: {
    eyebrow: 'De um mês a um inverno',
    title: 'Um mês na Lapônia.',
    subtitle:
      'Um apartamento mobiliado para alugar, uma cabana por semana ou moradia oferecida pelo empregador: três jeitos de viver na Lapônia de um mês a um inverno inteiro, e o que cada contrato exige de você.',
  },
  authorNote:
    'Legislação do Finlex (Lei de Locação Residencial 481/1995, alteração 531/2026), comunicação de endereço da Agência de Serviços de Dados Digitais e Populacionais, detalhes das cabanas do feed de produtos da Lomarengas. Verificado em 15 de novembro de 2026.',
  intro: [
    'Um mês de trabalho remoto em Levi, um inverno em Rovaniemi ou uma temporada em uma estação de esqui: uma estadia mais longa na Lapônia costuma se resumir a uma de três opções. Elas diferem no preço, mas ainda mais no tipo de contrato que você acaba tendo e no que a lei passa a proteger.',
    'Se você está vindo a passeio, e não para morar, os hotéis e as cabanas estão no nosso site irmão <a href="https://laplandstays.com/br/" target="_blank" rel="noopener">laplandstays.com</a> e as vilas em <a href="https://laplandluxuryvillas.com/br/" target="_blank" rel="noopener">laplandluxuryvillas.com</a>.',
  ],
  sections: [
    {
      id: 'three-ways',
      kicker: 'Três jeitos',
      h2: 'Um apartamento, uma cabana ou moradia de funcionários.',
      cards: [
        {
          title: 'Apartamento mobiliado para alugar',
          body: 'Um <strong>contrato de locação residencial</strong>, para uma estadia mais longa em geral por prazo determinado. A lei de locação protege você: a caução é de no máximo três meses de aluguel e, a partir de 1º de outubro de 2026, deve ser devolvida em até 14 dias.',
          href: '/rentals',
          linkLabel: 'Aluguel cidade por cidade',
        },
        {
          title: 'Cabana por semana',
          body: 'As cabanas de temporada são alugadas por semana por meio de uma agência, e as condições costumam ser as de reserva e cancelamento da agência. A lei de locação cobre um apartamento alugado para morar, não a atividade de empresas de hospedagem. Veja abaixo as cabanas disponíveis, com fotos.',
        },
        {
          title: 'Moradia de funcionários',
          body: 'No trabalho sazonal, a moradia muitas vezes vem com o emprego. Antes de assinar, pergunte se o apartamento faz parte do contrato de trabalho e o que acontece com ele se o emprego terminar no meio da temporada.',
          href: '/seasonal-worker-housing',
          linkLabel: 'Moradia para trabalhadores sazonais',
        },
      ],
    },
    {
      id: 'contract',
      kicker: 'O contrato',
      h2: 'Um contrato por prazo determinado não pode ser encerrado antes.',
      bullets: [
        '<strong>Um contrato por prazo determinado vale até a data escrita nele.</strong> O locatário não pode dar aviso prévio no meio do prazo. Ele só pode terminar antes por acordo com o locador ou nas situações específicas previstas na lei (União Finlandesa de Consumidores, lei de locação).',
        '<strong>Se você não sabe por quanto tempo vai ficar,</strong> peça um contrato por prazo indeterminado. O locatário pode rescindi-lo com aviso prévio, e o prazo de aviso prévio do locatário não muda na reforma de 1º de outubro de 2026 (Rakli).',
        '<strong>Contratos curtos em sequência:</strong> se o mesmo locatário recebe mais de duas vezes seguidas um contrato por prazo determinado de três meses ou menos, o contrato passa a valer como por prazo indeterminado, seja qual for a data final que ele traga.',
        '<strong>A lei de locação não cobre tudo.</strong> Ela se aplica a um apartamento alugado para morar, mas não à atividade de empresas de hospedagem (Lei de Locação Residencial, artigos 1 e 2). Antes de assinar, pergunte se você está recebendo um contrato de locação residencial ou um contrato de hospedagem.',
        '<strong>A caução</strong> é de no máximo três meses de aluguel. A partir de 1º de outubro de 2026, ela deve ser devolvida, ou a sua retenção comunicada, em até 14 dias após o fim da locação.',
      ],
    },
    {
      id: 'address',
      kicker: 'Comunicação de endereço',
      h2: 'Três meses ou mais: comunique o seu endereço.',
      paras: [
        'Segundo a Agência de Serviços de Dados Digitais e Populacionais, você comunica uma mudança sempre que o seu endereço de residência muda e a estadia dura pelo menos três meses. Se você voltar ao mesmo endereço permanente em até um ano, a mudança é temporária e o seu endereço permanente continua em vigor.',
        'A comunicação pode ser feita a partir de um mês antes do dia da mudança e, no máximo, até uma semana depois dela. Para uma mudança definitiva, o restante, como pneus de inverno, contrato de eletricidade e posto de saúde, está na <a href="/moving-to-lapland/">lista de tarefas da mudança</a>.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Posso alugar um apartamento na Lapônia por um mês?',
      a: 'Sim. Um contrato por prazo determinado também pode ser curto, e as cabanas de temporada são alugadas por semana. Procure nos portais de aluguel a palavra “kalustettu” (mobiliado). Antes de assinar, pergunte se é um contrato de locação residencial ou de hospedagem, porque a lei de locação protege apenas o primeiro.',
    },
    {
      q: 'Preciso comunicar o meu endereço se passar o inverno na Lapônia?',
      a: 'Sim, se a estadia durar pelo menos três meses. Se você voltar ao mesmo endereço permanente em até um ano, a mudança é temporária e o seu endereço permanente continua em vigor (Agência de Serviços de Dados Digitais e Populacionais).',
    },
    {
      q: 'Posso encerrar um contrato por prazo determinado se o meu emprego terminar?',
      a: 'Em geral, não. Um contrato por prazo determinado vale até a data escrita nele. Combine com o locador um fim antecipado ou escolha desde o início um contrato por prazo indeterminado, no qual o locatário pode dar aviso prévio.',
    },
  ],
  sources: pickSources('pt-BR', SOURCES, common.sourceLabels),
};

export default copy;
