# UNFD | Atividade 2 "Estado da Arte"

Site da Universidade Federal de Direito (UNFD), refeito a partir da Atividade 1 usando **Bootstrap 5.3**. O site abre no tema escuro vinho e tem um botão para trocar para o tema claro.

## Como abrir

Abra o `index.html` no navegador ou use a extensão Live Server do VS Code. É preciso estar com internet, porque o Bootstrap, os ícones e as fontes são carregados por CDN.

## Recursos do Bootstrap utilizados

| # | Recurso | Onde aparece |
|---|---------|--------------|
| 1 | Navbar responsiva (`navbar-expand-lg`, `sticky-top`) | Topo de todas as páginas |
| 2 | Offcanvas | Menu lateral que abre no celular |
| 3 | Grid (`container`, `row`, `col-*`) | Layout de todas as páginas |
| 4 | Carousel (com `carousel-fade`, indicadores e setas) | Destaques da Home |
| 5 | Cards | Diferenciais da Home e 5 motivos do Sobre |
| 6 | Buttons | Chamadas para ação em todo o site |
| 7 | Modal | "Quero receber o edital" na Home |
| 8 | Forms (floating labels, select, checkbox, validação) | Modal da Home e página Contato |
| 9 | Toast | Confirmação depois de enviar um formulário |
| 10 | Nav pills com abas (Tabs) | Missão, Visão e Valores no Sobre |
| 11 | Accordion | Perguntas frequentes do vestibular no Sobre |
| 12 | Breadcrumb | Topo das páginas Sobre e Contato |
| 13 | List group | Outros canais no Contato |
| 14 | Badge | "Edital em breve" na Home |
| 15 | Tooltip | Botão de tema |
| 16 | Color modes (`data-bs-theme`) | Tema escuro e claro |
| 17 | Utilitários (espaçamento, flex, display) | Em todo o site |
| 18 | Bootstrap Icons | Ícones dos cards, canais e botão de tema |

## Estilos personalizados

O arquivo `css/style.css` sobrescreve as variáveis do Bootstrap (`--bs-*`) para criar a identidade da UNFD: paleta vinho e dourado, fonte Baloo Bhai 2 em todo o site, header flutuante com efeito de vidro e menu em formato de pílula, botão dourado próprio (`.btn-unfd`), formas orgânicas e pontilhado no topo das páginas, além de ajustes no carrossel, accordion, formulários e menu para os dois temas.

## Bootstrap x Tailwind

O **Bootstrap** entrega componentes prontos (navbar, modal, carrossel), bastando aplicar as classes e personalizar as variáveis. O **Tailwind CSS** trabalha com classes utilitárias pequenas (`p-4`, `bg-red-900`, `rounded-xl`) que são combinadas direto no HTML para montar cada componente do zero. O Tailwind dá mais liberdade visual, e o Bootstrap é mais rápido para quem quer componentes funcionando logo de cara.
