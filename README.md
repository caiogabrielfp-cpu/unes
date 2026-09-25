# UNFD | Universidade Federal de Direito

Site institucional da **UNFD**, uma universidade pública federal dedicada ao ensino jurídico, com ingresso por vestibular. O projeto foi desenvolvido em duas etapas para a disciplina de desenvolvimento web: a primeira com HTML e CSS puros, e a segunda refeita com Bootstrap.

## Acesse o site

| Versão | Link |
|--------|------|
| Atividade 1 (HTML e CSS) | https://caiogabrielfp-cpu.github.io/unes/ |
| Atividade 2 (Bootstrap) | https://caiogabrielfp-cpu.github.io/unes/unfd-bootstrap/ |

## Identidade visual

- **Cores:** vinho bem escuro como cor principal e dourado como destaque, em tema escuro por padrão, com opção de tema claro.
- **Logo:** um símbolo que é metade cérebro e metade balança da justiça, unindo conhecimento e Direito.
- **Ilustrações:** todas as ilustrações são vetoriais, feitas com CSS e SVG, sem nenhuma fotografia.

## Atividade 1: HTML e CSS

Site com três páginas (Home, Sobre e Contato), construído a partir do mockup proposto, usando:

- HTML5 semântico (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`)
- Flexbox para os layouts e os cards
- CSS organizado em arquivos globais, de componentes e de páginas
- Variáveis CSS para o tema escuro e o claro, com troca por JavaScript
- Layout responsivo para celular e desktop

## Atividade 2: Estado da Arte (Bootstrap)

A mesma UNFD refeita com **Bootstrap 5.3**, com foco em design, usabilidade e responsividade.

### Recursos do Bootstrap utilizados

| # | Recurso | Onde aparece |
|---|---------|--------------|
| 1 | Navbar responsiva | Header flutuante de todas as páginas |
| 2 | Offcanvas | Menu lateral que abre no celular |
| 3 | Grid (`container`, `row`, `col-*`) | Layout de todas as páginas |
| 4 | Carousel | Destaques da Home |
| 5 | Cards | Diferenciais da Home e os 5 motivos do Sobre |
| 6 | Buttons | Chamadas para ação em todo o site |
| 7 | Modal | "Quero receber o edital" na Home |
| 8 | Forms (floating labels, select, checkbox e validação) | Modal da Home e página Contato |
| 9 | Toast | Confirmação depois de enviar um formulário |
| 10 | Nav pills com abas | Missão, Visão e Valores no Sobre |
| 11 | Accordion | Perguntas frequentes sobre o vestibular |
| 12 | Breadcrumb | Topo das páginas Sobre e Contato |
| 13 | List group | Outros canais no Contato |
| 14 | Badge | "Edital em breve" na Home |
| 15 | Tooltip | Botão de troca de tema |
| 16 | Color modes (`data-bs-theme`) | Tema escuro e claro |
| 17 | Utilitários (espaçamento, flex e display) | Em todo o site |
| 18 | Bootstrap Icons | Ícones dos cards, dos canais e do botão de tema |

### Estilos personalizados

O arquivo `css/style.css` sobrescreve as variáveis do Bootstrap (`--bs-*`) para dar uma cara própria ao site:

- Paleta vinho e dourado nos dois temas
- Fonte **Baloo Bhai 2** em todo o site
- Header em formato de ilha flutuante, com efeito de vidro fosco e menu em pílula
- Botão dourado próprio (`.btn-unfd`) com um indicador pulsante no botão do vestibular
- Formas orgânicas e pontilhado no topo das páginas
- Ajustes no carrossel, accordion, formulários e menu para funcionarem bem nos dois temas

### Bootstrap x Tailwind

O **Bootstrap** entrega componentes prontos, como navbar, modal e carrossel: basta aplicar as classes e personalizar as variáveis. O **Tailwind CSS** trabalha com classes utilitárias pequenas (`p-4`, `bg-red-900`, `rounded-xl`), que são combinadas direto no HTML para montar cada componente do zero. O Tailwind dá mais liberdade visual, e o Bootstrap é mais rápido para quem quer componentes funcionando logo de cara.

## Tecnologias

- HTML5
- CSS3 (Flexbox, Grid e variáveis CSS)
- JavaScript
- Bootstrap 5.3 e Bootstrap Icons
- Google Fonts
- GitHub Pages

## Como rodar no computador

1. Clone ou baixe este repositório.
2. Abra o `index.html` da atividade desejada no navegador, ou use a extensão **Live Server** do VS Code.

Na Atividade 2 é preciso estar com internet, porque o Bootstrap, os ícones e as fontes são carregados por CDN.

## Observação

Os formulários são apenas visuais: eles validam os campos e mostram a confirmação, mas não enviam dados, já que isso precisaria de um back-end.

---

Desenvolvido por [@caiogabrielfp-cpu](https://github.com/caiogabrielfp-cpu).