import React from 'react';
import { createRoot } from 'react-dom/client';
import { Check, ShieldCheck, Zap, HelpCircle, Star } from 'lucide-react';
import './styles.css';

const packs = [
  { robux: '400', price: 'R$ 9,90', label: 'Starter' },
  { robux: '800', price: 'R$ 17,90', label: 'Basic' },
  { robux: '1.700', price: 'R$ 34,90', label: 'Plus', popular: true },
  { robux: '3.200', price: 'R$ 59,90', label: 'Premium' },
  { robux: '5.500', price: 'R$ 94,90', label: 'Mega' },
  { robux: '10.000', price: 'R$ 159,90', label: 'Ultimate' }
];

function App() {
  return <div className="page">
    <header className="nav"><div className="logo"><span className="logoMark">R</span><span>ROBUX<span className="muted"> SHOP</span></span></div><div className="secure"><ShieldCheck size={17}/> Compra segura</div></header>
    <main>
      <section className="hero"><div className="eyebrow"><Zap size={15}/> ENTREGA RÁPIDA</div><h1>Escolha seu pacote<br/><span>de Robux</span></h1><p>Selecione a quantidade que deseja e avance para finalizar sua compra.</p></section>
      <section className="packs"><div className="sectionTitle"><h2>Pacotes disponíveis</h2><span>6 opções</span></div><div className="grid">{packs.map(p => <article className={`card ${p.popular ? 'popular' : ''}`} key={p.robux}>{p.popular && <div className="popularTag"><Star size={13} fill="currentColor"/> MAIS ESCOLHIDO</div>}<div className="coin">R</div><div className="label">{p.label}</div><div className="amount">{p.robux} <small>ROBUX</small></div><div className="price">{p.price}</div><button>Comprar agora <span>→</span></button><div className="instant"><Check size={14}/> Processamento rápido</div></article>)}</div></section>
      <section className="steps"><div><span>01</span><b>Escolha</b><p>Selecione seu pacote.</p></div><div><span>02</span><b>Pagamento</b><p>Finalize de forma segura.</p></div><div><span>03</span><b>Receba</b><p>Confira as instruções da compra.</p></div></section>
      <section className="faq"><h2>Ficou com alguma dúvida?</h2><div className="faqBox"><HelpCircle size={20}/><div><b>Como funciona a compra?</b><p>Após selecionar um pacote, você será direcionado para as próximas instruções de pagamento e entrega.</p></div></div></section>
    </main>
    <footer><span>© 2026 Robux Shop</span><span>Esta página não é uma página oficial da Roblox.</span></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />);
