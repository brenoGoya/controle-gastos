export type Categoria = "mercado" | "transporte" | "contas" | "renda";

export type TipoTransacao = "receita" | "despesa";

export type Transacao = {
  id: string;
  descricao: string;
  valor: number;
  categoria: Categoria;
  tipo: TipoTransacao;
  paga: boolean;
};

export const CATEGORIAS: Categoria[] = [
  "mercado",
  "transporte",
  "contas",
  "renda",
];
