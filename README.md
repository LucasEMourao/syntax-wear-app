# Syntax Wear E-commerce

![Syntax Wear Banner](src/assets/images/about.jpg)

> **Syntax Wear**: Where style, comfort, and durability meet.

This repository contains the source code for **Syntax Wear**, a modern Front-end e-commerce application specialized in footwear. The project was developed focusing on performance, user experience (UX), and software engineering best practices, utilizing the latest technologies in the React ecosystem.

## 🔗 Links
- **Aplicação Online (Vercel):** [https://syntax-wear-app-zeta.vercel.app](https://syntax-wear-app-zeta.vercel.app)
- **Repositório da API (Backend):** [https://github.com/LucasEMourao/syntax-wear-api](https://github.com/LucasEMourao/syntax-wear-api)

[🇧🇷 Versão em Português abaixo](#-versão-em-português)

## 🚀 Technologies Used

The project was built on a robust and typed stack:

-   **React**: Library for building user interfaces.
-   **TypeScript**: JavaScript superset for static typing and code safety.
-   **TanStack Router**: Next-generation type-safe routing for React, with URL state management and code-splitting.
-   **Tailwind CSS**: Utility-first CSS framework for fast and responsive styling.
-   **CSS Modules**: For scoped styling in complex components (e.g., Gallery).
-   **Vite**: Next-generation build tool, ensuring an extremely fast development environment.
-   **React Context API**: For global state management (Shopping Cart).
-   **React Hook Form & Zod**: For form management and validation (Shipping Calculation).

## ✨ Features

-   **Product Catalog**: Product visualization with mocked data, simulating a real API.
-   **Product Details**:
    -   Detailed view with images and descriptions.
    -   Automatic discount calculation for cash payments (PIX).
    -   Installment simulation.
-   **Shipping Calculation**: Integration for delivery time and cost simulation based on ZIP code.
-   **Shopping Cart**: Adding and managing items in the global cart.
-   **Interactive Gallery**: Responsive grid layout for highlighting collections and categories.
-   **Responsive Design**: Interface fully adapted for mobile and desktop devices.

## 📂 Project Structure

The folder structure follows a modular and scalable pattern:

```bash
src/
├── assets/          # Images and static resources
├── components/      # Reusable components (Button, Gallery, Overlay, etc.)
├── contexts/        # React Contexts (CartContext)
├── mocks/           # Mock Data for products
├── pages/           # Application routes (File-based routing from TanStack Router)
│   └── _app/        # Main layout and sub-routes (about, products, etc.)
├── utils/           # Utility functions (currency formatting, etc.)
└── main.tsx         # Application entry point
```

## 🔧 How to Run

Follow the steps below to run the project on your local machine:

### Prerequisites

-   Node.js (Version 18 or higher recommended)
-   Package manager (npm, yarn, or pnpm)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/ecommerce-syntax-wear.git
    cd ecommerce-syntax-wear/syntax-wear-app
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  **Access the application:**
    Open your browser and access `http://localhost:5173` (or the port indicated in the terminal).

## 🤝 Contribution

Contributions are always welcome! If you have any ideas to improve the project, feel free to:

1.  Fork the project.
2.  Create a Branch for your Feature (`git checkout -b feature/NewFeature`).
3.  Commit your changes (`git commit -m 'Adding new feature'`).
4.  Push to the Branch (`git push origin feature/NewFeature`).
5.  Open a Pull Request.

---

Developed with 💙 by [LucasEMourão](https://github.com/LucasEMourao)

---

# <a name="-versão-em-português"></a> 🇧🇷 Versão em Português

# Syntax Wear E-commerce

![Syntax Wear Banner](src/assets/images/about.jpg)

> **Syntax Wear**: Onde estilo, conforto e durabilidade se encontram.

Este repositório contém o código-fonte do **Syntax Wear**, uma aplicação Front-end de e-commerce moderna especializada em calçados. O projeto foi desenvolvido com foco em performance, experiência do usuário (UX) e boas práticas de engenharia de software, utilizando as tecnologias mais recentes do ecossistema React.

## 🔗 Links
- **Aplicação Online (Vercel):** [https://syntax-wear-app-zeta.vercel.app](https://syntax-wear-app-zeta.vercel.app)
- **Repositório da API (Backend):** [https://github.com/LucasEMourao/syntax-wear-api](https://github.com/LucasEMourao/syntax-wear-api)

## 🚀 Tecnologias Utilizadas

O projeto foi construído sobre uma stack robusta e tipada:

-   **React**: Biblioteca para construção de interfaces de usuário.
-   **TypeScript**: Superset do JavaScript para tipagem estática e segurança de código.
-   **TanStack Router**: Roteamento type-safe de última geração para React, com gerenciamento de estado de URL e code-splitting.
-   **Tailwind CSS**: Framework CSS utility-first para estilização rápida e responsiva.
-   **CSS Modules**: Para estilização escopada em componentes complexos (ex: Galeria).
-   **Vite**: Build tool de próxima geração, garantindo um ambiente de desenvolvimento extremamente rápido.
-   **React Context API**: Para gerenciamento de estado global (Carrinho de Compras).
-   **React Hook Form & Zod**: Para gerenciamento e validação de formulários (Cálculo de Frete).

## ✨ Funcionalidades

-   **Catálogo de Produtos**: Visualização de produtos com dados mockados, simulando uma API real.
-   **Detalhes do Produto**:
    -   Visualização detalhada com imagens e descrições.
    -   Cálculo automático de desconto para pagamentos à vista (PIX).
    -   Simulação de parcelamento.
-   **Cálculo de Frete**: Integração para simulação de prazo e custo de entrega baseada no CEP.
-   **Carrinho de Compras**: Adição e gerenciamento de itens no carrinho global.
-   **Galeria Interativa**: Layout de grid responsivo para destaque de coleções e categorias.
-   **Design Responsivo**: Interface totalmente adaptada para dispositivos móveis e desktops.

## 📂 Estrutura do Projeto

A estrutura de pastas segue um padrão modular e escalável:

```bash
src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes reutilizáveis (Button, Gallery, Overlay, etc.)
├── contexts/        # Contextos do React (CartContext)
├── mocks/           # Dados simulados (Mock Data) para produtos
├── pages/           # Rotas da aplicação (File-based routing do TanStack Router)
│   └── _app/        # Layout principal e sub-rotas (about, products, etc.)
├── utils/           # Funções utilitárias (formatação de moeda, etc.)
└── main.tsx         # Ponto de entrada da aplicação
```

## 🔧 Como Executar

Siga os passos abaixo para rodar o projeto em sua máquina local:

### Pré-requisitos

-   Node.js (Versão 18 ou superior recomendada)
-   Gerenciador de pacotes (npm, yarn ou pnpm)

### Instalação

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/ecommerce-syntax-wear.git
    cd ecommerce-syntax-wear/syntax-wear-app
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Execute o servidor de desenvolvimento:**

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

4.  **Acesse a aplicação:**
    Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no terminal).

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Se você tiver alguma ideia para melhorar o projeto, sinta-se à vontade para:

1.  Fazer um Fork do projeto.
2.  Criar uma Branch para sua Feature (`git checkout -b feature/NovaFeature`).
3.  Commitar suas mudanças (`git commit -m 'Adicionando nova feature'`).
4.  Fazer o Push para a Branch (`git push origin feature/NovaFeature`).
5.  Abrir um Pull Request.

---

Desenvolvido com 💙 por [LucasEMourão](https://github.com/LucasEMourao)

---