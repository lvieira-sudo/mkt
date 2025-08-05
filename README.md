# Marketing Dashboard

Painel estático em HTML/CSS/JS que apresenta indicadores chave de marketing, como tráfego, conversões, engajamento e ROI.

## Estrutura do Projeto

```bash
seu-repo/
├── index.html   # Layout principal do dashboard com sections para cada métrica
├── style.css    # Estilos, animações e responsividade
└── script.js    # Dados de exemplo e configurações dos gráficos
```

## Tecnologias Utilizadas

* HTML5 sem frameworks adicionais (exceto CDN)
* CSS3 (incluindo gradientes, animações e responsividade via Tailwind)
* JavaScript (ES6+) para lógica de gráficos e interatividade
* [Chart.js](https://www.chartjs.org/) (via CDN) para visualizações
* [Tailwind CSS](https://tailwindcss.com/) (via CDN) para utilitários de estilo
* Fonte "Inter" do Google Fonts

## Como Executar Localmente

1. Clone este repositório:

   ```bash
   git clone https://github.com/SEU_USUARIO/seu-repo.git
   ```
2. Acesse a pasta do projeto:

   ```bash
   cd seu-repo
   ```
3. Abra o arquivo `index.html` diretamente no navegador ou sirva com um servidor local:

   ```bash
   npx http-server .
   ```
4. Visite `http://localhost:8080` para ver o dashboard.

## Deploy com GitHub Pages

1. Faça commit e push na branch `main`.
2. No GitHub, acesse **Settings > Pages**.
3. Em **Source**, selecione **main** / **Root** e salve.
4. Aguarde alguns minutos e abra:

   ```
   https://SEU_USUARIO.github.io/seu-repo/
   ```

## Personalização

* **Dados:** edite os arrays e objetos em `script.js` com suas métricas reais (ex.: visitas, leads, taxa de conversão).
* **Estilos:** ajuste cores, fontes e espaçamentos em `style.css` ou via classes do Tailwind.
* **Layout:** modifique o HTML em `index.html` para adicionar/remover seções de métricas.

## Contribuição

Pull requests são bem-vindas! Para mudanças significativas, abra uma issue primeiro para alinharmos requisitos.

## Licença

Este projeto está sob a [MIT License](https://opensource.org/licenses/MIT). Sinta-se livre para usar, modificar e distribuir.
