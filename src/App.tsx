import { useState } from "react";
import { FormTransacao } from "./components/FormTransacao";
import type { FiltroCategoria, FiltroTipo, Transacao } from "./types";
import { ListaTransacoes } from "./components/ListaTransacoes";
import { Resumo } from "./components/Resumo";
import { Filtros } from "./components/Filtros";

export default function App() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);

  const [filtroCategoria, setFiltroCategoria] =
    useState<FiltroCategoria>("todas");

  const [filtroTipo, setFiltroTipo] = useState<FiltroTipo>("todos");

  const adicionar = (t: Transacao) => setTransacoes((ts) => [...ts, t]);

  const alternarPaga = (id: string) =>
    setTransacoes((ts) =>
      ts.map((t) => (t.id === id ? { ...t, paga: !t.paga } : t)),
    );

  const remover = (id: string) =>
    setTransacoes((ts) => ts.filter((t) => t.id !== id));

  const visiveis = transacoes.filter(
    (t) =>
      (filtroCategoria === "todas" || t.categoria === filtroCategoria) &&
      (filtroTipo === "todos" || t.tipo === filtroTipo),
  );

  return (
    <main className="mx-auto max-w-5xl space-y-6 p-6 text-slate-800">
      <h1 className="text-2xl font-bold">Controle de Gastos</h1>
      <div className="grid gap-6 md:grid-cols-[320px_1fr]">
        <aside className="md:self-start">
          <FormTransacao onAdicionar={adicionar} />
        </aside>
        <section className="space-y-4">
          <Resumo transacoes={transacoes} />
          <Filtros
            categoria={filtroCategoria}
            tipo={filtroTipo}
            onCategoria={setFiltroCategoria}
            onTipo={setFiltroTipo}
          />
          <ListaTransacoes
            transacoes={visiveis}
            onRemover={remover}
            onAlternarPaga={alternarPaga}
          />
        </section>
      </div>
    </main>
  );
}
