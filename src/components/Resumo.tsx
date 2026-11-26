import type { Transacao } from "../types";
import { formatarMoeda } from "../utils/moeda";

type ResumoProps = {
  transacoes: Transacao[];
};

export function Resumo({ transacoes }: Readonly<ResumoProps>) {
  const receitas = transacoes
    .filter((t) => t.tipo === "receita")
    .reduce((soma, t) => soma + t.valor, 0);

  const despesas = transacoes
    .filter((t) => t.tipo === "despesa")
    .reduce((soma, t) => soma + t.valor, 0);

  const saldo = receitas - despesas;

  const caixa = "rounded-lg border border-slate-200 p-3";

  return (
    <div className="grid gap-3 sm:grid-cols-3 text-sm">
      <div className={caixa}>
        <p className="text-slate-500">Receitas</p>
        <p className="font-semibold text-emerald-700">
          {formatarMoeda(receitas)}
        </p>
      </div>
      <div className={caixa}>
        <p className="text-slate-500">Despesas</p>
        <p className="font-semibold text-red-600">{formatarMoeda(despesas)}</p>
      </div>
      <div className={caixa}>
        <p className="text-slate-500">Saldo</p>
        <p
          className={
            saldo < 0
              ? "font-semibold text-red-600"
              : "font-semibold text-slate-800"
          }
        >
          {formatarMoeda(saldo)}
        </p>
      </div>
    </div>
  );
}
