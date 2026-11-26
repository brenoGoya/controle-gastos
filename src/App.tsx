import { useState } from "react";
import { FormTransacao } from "./components/FormTransacao";
import type { Transacao } from "./types";

export default function App() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);

  const adicionar = (t: Transacao) => setTransacoes((ts) => [...ts, t]);

  return (
    <main className="mx-auto max-w-5xl space-y-6 p-6 text-slate-800">
      <h1 className="text-2xl font-bold">Controle de Gastos</h1>
      <FormTransacao onAdicionar={adicionar} />
      <pre className="text-xs text-slate-500">
        {JSON.stringify(transacoes, null, 2)}
      </pre>
    </main>
  );
}
