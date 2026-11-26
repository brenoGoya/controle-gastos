# Controle de Gastos Pessoais

Aplicação para registrar receitas e despesas do mês, com resumo e filtros.
Atividade 2 da disciplina Tecnologias para Interfaces de Aplicações Web (IFTM).

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS v4

## Como executar

    npm install
    npm run dev

## Funcionalidades

- Formulário controlado com validação (descrição com 3 letras ou mais e valor maior que zero)
- Lista de transações com remoção e marcação de despesa paga
- Resumo de receitas, despesas e saldo, calculado a partir das transações
- Filtros por categoria e por tipo
- Valores formatados em reais com Intl.NumberFormat
- Layout responsivo

## Componentes

- **App**: guarda o estado das transações e dos filtros e define as funções que os alteram.
- **FormTransacao**: formulário controlado; valida os campos e envia a nova transação ao App.
- **ListaTransacoes**: exibe as transações recebidas e aciona a remoção e a marcação de paga.
- **Resumo**: calcula receitas, despesas e saldo a partir das transações, sem estado próprio.
- **Filtros**: botões de categoria e tipo que alteram os filtros do App.

## Autor

Breno Goya — Análise e Desenvolvimento de Sistemas
