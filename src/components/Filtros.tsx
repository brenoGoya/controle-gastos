import { CATEGORIAS, type FiltroCategoria, type FiltroTipo } from "../types";

type FiltrosProps = {
  categoria: FiltroCategoria;
  tipo: FiltroTipo;
  onCategoria: (categoria: FiltroCategoria) => void;
  onTipo: (tipo: FiltroTipo) => void;
};

const opcoesCategoria: FiltroCategoria[] = ["todas", ...CATEGORIAS];
const opcoesTipo: FiltroTipo[] = ["todos", "receita", "despesa"];

function estiloBotao(ativo: boolean) {
  return `rounded-full px-3 py-1 text-sm transition ${ativo ? "bg-slate-800 text-white" : "bg-slate-100 hover:bg-slate-200"}`;
}

export function Filtros({
  categoria,
  tipo,
  onCategoria,
  onTipo,
}: Readonly<FiltrosProps>) {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {opcoesCategoria.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => onCategoria(c)}
            className={estiloBotao(categoria === c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {opcoesTipo.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => onTipo(t)}
            className={estiloBotao(tipo === t)}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
