import { useState, type SubmitEvent } from "react";
import {
  type TipoTransacao,
  type Categoria,
  type Transacao,
  CATEGORIAS,
} from "../types";

type FormTransacaoProps = {
  onAdicionar: (transacao: Transacao) => void;
};

export function FormTransacao({ onAdicionar }: Readonly<FormTransacaoProps>) {
  // Os useState que aprendemos na aula. Fundamental para entender sobre o estado em React(imutabilidade) que controla o valor da mudança da variável é sempre a função set.
  const [descricao, setDescricao] = useState(""); // Começa com o valor ""
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState<Categoria>("mercado"); // Estado inicia um tipo Categoria para limitar entre:  "mercado", "transporte", "contas", "renda",
  const [tipo, setTipo] = useState<TipoTransacao>("despesa"); // Mesma coisa
  const [enviado, setEnviado] = useState(false);

  const valorNumero = Number(valor); // O valor do input no html vem como string.
  const erroDescricao =
    descricao.trim().length < 3
      ? "A descrição precisa ter pelo menos 3 letras."
      : "";
  const erroValor = valorNumero > 0 ? "" : "Informe um valor maior que zero.";

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviado(true);

    // Verifica para ver os erros e ja sai da função
    if (erroDescricao || erroValor) return;

    onAdicionar({
      id: crypto.randomUUID(), // gera id automatico
      descricao: descricao.trim(),
      valor: valorNumero, // pega o valor formatado em número
      categoria,
      tipo,
      paga: false,
    });

    // Aqui reseta os valores dos campos
    setDescricao("");
    setValor("");
    setEnviado(false);
  }
  const campo =
    "w-full rounded border border-slate-300 px-3 py-2 focus:outline-2 focus:outline-slate-500";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 rounded-lg border border-slate-200 p-4"
    >
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        Nova transação
      </h2>

      <label className="block text-sm">
        <span>Descrição</span>
        <input
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className={campo}
        />
      </label>
      {enviado && erroDescricao && (
        <p className="text-sm text-red-600">{erroDescricao}</p>
      )}

      <label className="block text-sm">
        <span>Valor (R$)</span>
        <input
          type="number"
          step="0.01"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          className={campo}
        />
      </label>
      {enviado && erroValor && (
        <p className="text-sm text-red-600">{erroValor}</p>
      )}

      <label className="block text-sm">
        <span>Categoria</span>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value as Categoria)}
          className={campo}
        >
          {CATEGORIAS.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <div className="flex gap-4 text-sm">
        {(["receita", "despesa"] as const).map((t) => (
          <label key={t} className="flex items-center gap-1">
            <input
              type="radio"
              name="tipo"
              checked={tipo === t}
              onChange={() => setTipo(t)}
            />
            {t}
          </label>
        ))}
      </div>

      <button
        type="submit"
        className="w-full rounded bg-slate-800 px-4 py-2 text-white transition hover:bg-slate-700 active:scale-95"
      >
        Adicionar
      </button>
    </form>
  );
}
