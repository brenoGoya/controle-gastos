import { useState } from "react";
import { FormTransacao } from "./components/FormTransacao";
import type { Transacao } from "./types";
import { ListaTransacoes } from "./components/ListaTransacoes";

export default function App() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);

  const adicionar = (t: Transacao) => setTransacoes((ts) => [...ts, t]);

  const alternarPaga = (id: string) =>
    setTransacoes((ts) =>
      ts.map((t) => (t.id === id ? { ...t, paga: !t.paga } : t)),
    );

  const remover = (id: string) =>
    setTransacoes((ts) => ts.filter((t) => t.id !== id));

  return (
    <main className="mx-auto max-w-5xl space-y-6 p-6 text-slate-800">
      <h1 className="text-2xl font-bold">Controle de Gastos</h1>
      <FormTransacao onAdicionar={adicionar} />
      <ListaTransacoes
        transacoes={transacoes}
        onRemover={remover}
        onAlternarPaga={alternarPaga}
      />
    </main>
  );
}
