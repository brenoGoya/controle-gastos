import type { Transacao } from "../types";
import { formatarMoeda } from "../utils/moeda";

type ListaTransacoesProps = {
  transacoes: Transacao[];
  onRemover: (id: string) => void;
  onAlternarPaga: (id: string) => void;
};

export function ListaTransacoes({
  transacoes,
  onRemover,
  onAlternarPaga,
}: Readonly<ListaTransacoesProps>) {
  if (transacoes.length === 0) {
    return (
      <p className="text-sm text-slate-500">Nenhuma transação encontrada.</p>
    );
  }

  return (
    <ul className="space-y-2">
      {transacoes.map((t) => (
        <li
          key={t.id}
          className="flex items-center gap-3 rounded-lg border border-slate-200 p-3"
        >
          <div className="flex-1">
            <p className={t.paga ? "text-slate-400" : ""}>{t.descricao}</p>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs">
              {t.categoria}
            </span>
          </div>

          {t.tipo === "despesa" && (
            <label className="flex items-center gap-1 text-xs text-slate-500">
              <input
                type="checkbox"
                checked={t.paga}
                onChange={() => onAlternarPaga(t.id)}
              />
              <span>paga</span>
            </label>
          )}

          <span
            className={
              t.tipo === "receita"
                ? "font-semibold text-emerald-700"
                : "font-semibold text-red-600"
            }
          >
            {t.tipo === "receita" ? "+" : "−"} {formatarMoeda(t.valor)}
          </span>

          <button
            type="button"
            onClick={() => onRemover(t.id)}
            aria-label={`Remover ${t.descricao}`}
            className="text-slate-400 hover:text-red-600"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}
