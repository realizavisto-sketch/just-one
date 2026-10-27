import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  THEME,
  analysisSteps,
  checklist,
  comparisonRows,
  controlItems,
  fieldQuestions,
  flashcards,
  glossary,
  keyNumbers,
  legalMilestones,
  qaItems,
  quizQuestions,
  studyPlan,
} from "@/data/tcc-study";

export const Route = createFileRoute("/")({
  component: StudyTool,
});

type Tab =
  | "inicio"
  | "flashcards"
  | "quiz"
  | "perguntas"
  | "comparativo"
  | "glossario"
  | "campo"
  | "marcos"
  | "checklist";

const TABS: { id: Tab; label: string; emoji: string }[] = [
  { id: "inicio", label: "Início", emoji: "🏠" },
  { id: "flashcards", label: "Flashcards", emoji: "🃏" },
  { id: "quiz", label: "Simulado", emoji: "🎯" },
  { id: "perguntas", label: "Perguntas e Respostas", emoji: "💬" },
  { id: "comparativo", label: "Antigo x Novo", emoji: "⚖️" },
  { id: "glossario", label: "Glossário", emoji: "📖" },
  { id: "campo", label: "Questionário de Campo", emoji: "📋" },
  { id: "marcos", label: "Marcos e Números", emoji: "📊" },
  { id: "checklist", label: "Checklist do TCC", emoji: "✅" },
];

function load<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function save(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Armazenamento indisponível: o app continua funcionando sem persistência.
  }
}

function shuffle<T>(items: T[]): T[] {
  return [...items].sort(() => Math.random() - 0.5);
}

function StudyTool() {
  const [tab, setTab] = useState<Tab>("inicio");

  // Flashcards
  const [theme, setTheme] = useState<string>("Todos");
  const [deck, setDeck] = useState(() => flashcards);
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<number[]>(() => load("estudatcc-known", []));

  // Quiz
  const [quizOrder, setQuizOrder] = useState(() => quizQuestions);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);

  // Perguntas e respostas / glossário
  const [qaSearch, setQaSearch] = useState("");
  const [qaTheme, setQaTheme] = useState("Todos");
  const [openQa, setOpenQa] = useState<number | null>(1);
  const [glossarySearch, setGlossarySearch] = useState("");

  // Campo
  const [fieldSection, setFieldSection] = useState("Todos");
  const [copied, setCopied] = useState(false);

  // Checklist
  const [done, setDone] = useState<number[]>(() => load("estudatcc-checklist", []));

  useEffect(() => save("estudatcc-known", known), [known]);
  useEffect(() => save("estudatcc-checklist", done), [done]);

  const themes = useMemo(
    () => ["Todos", ...Array.from(new Set(flashcards.map((c) => c.theme)))],
    [],
  );
  const filteredDeck = useMemo(
    () => (theme === "Todos" ? deck : deck.filter((c) => c.theme === theme)),
    [deck, theme],
  );
  const currentCard = filteredDeck[Math.min(cardIndex, Math.max(filteredDeck.length - 1, 0))];
  const knownCount = flashcards.filter((c) => known.includes(c.id)).length;

  const filteredQa = qaItems.filter((item) => {
    const matchesTheme = qaTheme === "Todos" || item.theme === qaTheme;
    const haystack = `${item.question} ${item.answer}`.toLowerCase();
    return matchesTheme && haystack.includes(qaSearch.toLowerCase());
  });

  const filteredGlossary = glossary.filter((item) =>
    `${item.term} ${item.meaning} ${item.example}`
      .toLowerCase()
      .includes(glossarySearch.toLowerCase()),
  );

  const fieldSections = useMemo(
    () => ["Todos", ...Array.from(new Set(fieldQuestions.map((q) => q.section)))],
    [],
  );
  const filteredField =
    fieldSection === "Todos"
      ? fieldQuestions
      : fieldQuestions.filter((q) => q.section === fieldSection);

  const checklistProgress = Math.round((done.length / checklist.length) * 100);
  const quizQuestion = quizOrder[quizIndex];

  function applyTheme(next: string) {
    setTheme(next);
    setCardIndex(0);
    setFlipped(false);
  }

  function markCard(id: number, knewIt: boolean) {
    setKnown((prev) => {
      const next = knewIt ? [...new Set([...prev, id])] : prev.filter((item) => item !== id);
      return next;
    });
    setFlipped(false);
    setCardIndex((prev) => Math.min(prev + 1, filteredDeck.length - 1));
  }

  function answerQuiz(optionIndex: number) {
    if (selected !== null) return;
    setSelected(optionIndex);
    if (optionIndex === quizQuestion.correctIndex) setScore((prev) => prev + 1);
  }

  function nextQuiz() {
    if (quizIndex + 1 >= quizOrder.length) {
      setQuizDone(true);
    } else {
      setQuizIndex((prev) => prev + 1);
      setSelected(null);
    }
  }

  function restartQuiz() {
    setQuizOrder(shuffle(quizQuestions));
    setQuizIndex(0);
    setSelected(null);
    setScore(0);
    setQuizDone(false);
  }

  async function copyFieldQuestions() {
    const text = fieldQuestions
      .map(
        (q) =>
          `${q.id}. [${q.section} | ${q.type}] ${q.question}${q.options ? `\n   Opções: ${q.options.join(" | ")}` : ""}`,
      )
      .join("\n\n");
    try {
      await navigator.clipboard.writeText(
        `QUESTIONÁRIO — ${THEME.subtitle}\n${THEME.place}\n\n${text}\n\nObservação ética: participação voluntária e anônima, para fins exclusivamente acadêmicos.`,
      );
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f6f3ec] text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <div>
            <p className="text-lg font-black tracking-tight">
              📚 {THEME.title} <span className="text-teal-700">· Vistorias em MG</span>
            </p>
            <p className="text-xs text-slate-500">Ferramenta de estudos · Administração · TCC</p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="rounded-full bg-teal-100 px-3 py-1 font-semibold text-teal-800">
              {knownCount}/{flashcards.length} flashcards dominados
            </span>
            <span className="rounded-full bg-amber-100 px-3 py-1 font-semibold text-amber-800">
              {checklistProgress}% do TCC
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16">
        <nav className="mt-5 flex gap-2 overflow-x-auto pb-2">
          {TABS.map((item) => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                tab === item.id
                  ? "bg-slate-900 text-white shadow"
                  : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100"
              }`}
            >
              {item.emoji} {item.label}
            </button>
          ))}
        </nav>

        {tab === "inicio" && (
          <section className="mt-4 space-y-6">
            <div className="overflow-hidden rounded-3xl bg-slate-900 p-6 text-white shadow-xl sm:p-10">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-300">
                Seu TCC, organizado para estudar todos os dias
              </p>
              <h1 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
                Terceirização das vistorias de identificação veicular em Minas Gerais
              </h1>
              <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
                {THEME.focus}. Aqui você revisa conceitos, treina com simulado, ensaia a defesa e
                ainda sai com o questionário de campo pronto para a ECV de Boa Esperança.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="bg-amber-400 text-slate-900 hover:bg-amber-300"
                  onClick={() => setTab("flashcards")}
                >
                  Começar pelos flashcards →
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10"
                  onClick={() => setTab("quiz")}
                >
                  Fazer o simulado
                </Button>
              </div>
              <p className="mt-5 text-xs text-slate-400">
                📍 {THEME.place} · Seu progresso fica salvo neste navegador.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { n: flashcards.length, label: "Flashcards", action: "flashcards" as Tab },
                { n: quizQuestions.length, label: "Questões do simulado", action: "quiz" as Tab },
                {
                  n: fieldQuestions.length,
                  label: "Perguntas de campo prontas",
                  action: "campo" as Tab,
                },
                {
                  n: checklist.length,
                  label: "Itens no checklist do TCC",
                  action: "checklist" as Tab,
                },
              ].map((item) => (
                <button key={item.label} onClick={() => setTab(item.action)} className="text-left">
                  <Card className="h-full transition hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-4xl font-black text-teal-700">{item.n}</CardTitle>
                      <CardDescription className="text-sm font-medium text-slate-700">
                        {item.label}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </button>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>🎯 A tese em 30 segundos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm leading-relaxed text-slate-700">
                  <p>
                    A execução da vistoria passou para empresas credenciadas, mas o Estado continua
                    responsável por regular e fiscalizar.
                  </p>
                  <p>
                    A pergunta que importa é: isso melhorou a vida do cidadão e a gestão pública na
                    prática, ou só mudou quem faz o serviço?
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>👤 Para o cidadão</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm leading-relaxed text-slate-700">
                  <p>Tempo, agendamento, acesso, custo, clareza e confiança no laudo.</p>
                  <p>
                    Rapidez sem rigor não é qualidade. Confiança é o ativo mais valioso do laudo.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>🏛️ Para a administração</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm leading-relaxed text-slate-700">
                  <p>Credenciamento, auditoria, indicadores, sanções e transparência.</p>
                  <p>O trabalho muda de executar para gerir o sistema com controle efetivo.</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>🗓️ Plano de estudos de 7 dias</CardTitle>
                <CardDescription>
                  Um tema por dia, sem atropelo. Clique no dia para ir direto ao conteúdo.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 md:grid-cols-2">
                {studyPlan.map((day) => (
                  <div key={day.day} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                    <p className="text-sm font-black">
                      {day.day} · <span className="text-teal-700">{day.focus}</span>
                    </p>
                    <p className="mt-1 text-sm text-slate-700">{day.task}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <p className="rounded-2xl bg-amber-50 p-4 text-xs leading-relaxed text-amber-900 ring-1 ring-amber-200">
              ⚠️ Material de estudo e roteiro de pesquisa. Ele organiza conceitos e percepções para
              o seu TCC, mas não substitui as fontes oficiais, a legislação vigente e a orientação
              do seu orientador. Antes de citar qualquer regra, confirme a base legal e os dados
              locais de Boa Esperança.
            </p>
          </section>
        )}

        {tab === "flashcards" && (
          <section className="mt-4 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-black">🃏 Flashcards</h2>
              <div className="flex gap-2">
                <select
                  value={theme}
                  onChange={(e) => applyTheme(e.target.value)}
                  className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
                >
                  {themes.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
                <Button
                  variant="outline"
                  onClick={() => {
                    setDeck(shuffle(flashcards));
                    setCardIndex(0);
                    setFlipped(false);
                  }}
                >
                  🔀 Embaralhar
                </Button>
              </div>
            </div>

            {currentCard ? (
              <Card className="overflow-hidden shadow-xl">
                <div className="flex items-center justify-between bg-slate-900 px-6 py-3 text-sm font-semibold text-white">
                  <span>{currentCard.theme}</span>
                  <span>
                    {Math.min(cardIndex + 1, filteredDeck.length)} / {filteredDeck.length}
                  </span>
                </div>
                <button
                  onClick={() => setFlipped((prev) => !prev)}
                  className="block w-full text-left"
                >
                  <CardContent className="min-h-[260px] p-6 sm:p-10">
                    <p className="text-xs font-bold uppercase tracking-widest text-teal-700">
                      {flipped ? "Resposta" : "Pergunta · clique para virar"}
                    </p>
                    <p className="mt-4 text-2xl font-bold leading-snug sm:text-3xl">
                      {flipped ? currentCard.answer : currentCard.question}
                    </p>
                    {!flipped && (
                      <p className="mt-6 text-sm text-slate-500">💡 Dica: {currentCard.hint}</p>
                    )}
                  </CardContent>
                </button>
                <div className="flex flex-wrap gap-2 border-t bg-slate-50 px-6 py-4">
                  <Button
                    variant="outline"
                    onClick={() => setCardIndex((prev) => Math.max(prev - 1, 0))}
                    disabled={cardIndex === 0}
                  >
                    ← Anterior
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      setCardIndex((prev) => Math.min(prev + 1, filteredDeck.length - 1))
                    }
                  >
                    Próximo →
                  </Button>
                  <Button
                    className="bg-red-600 hover:bg-red-500"
                    onClick={() => markCard(currentCard.id, false)}
                  >
                    Ainda não sei
                  </Button>
                  <Button
                    className="bg-teal-700 hover:bg-teal-600"
                    onClick={() => markCard(currentCard.id, true)}
                  >
                    Já sei ✓
                  </Button>
                </div>
              </Card>
            ) : (
              <p>Nenhum flashcard neste tema.</p>
            )}
            <p className="text-sm text-slate-600">
              Progresso geral:{" "}
              <strong>
                {knownCount}/{flashcards.length}
              </strong>{" "}
              marcados como dominados. Marcar “Já sei” avança automaticamente para o próximo card.
            </p>
          </section>
        )}

        {tab === "quiz" && (
          <section className="mt-4 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-black">🎯 Simulado</h2>
              <Button variant="outline" onClick={restartQuiz}>
                🔄 Recomeçar embaralhado
              </Button>
            </div>

            {quizDone ? (
              <Card className="p-6 text-center shadow-xl sm:p-10">
                <p className="text-5xl">🏆</p>
                <h3 className="mt-3 text-3xl font-black">
                  Você acertou {score} de {quizOrder.length}!
                </h3>
                <p className="mx-auto mt-3 max-w-xl text-slate-600">
                  {score >= 10
                    ? "Excelente! Você já domina a lógica do tema. Agora vale ensaiar a defesa em voz alta."
                    : score >= 7
                      ? "Muito bem! Revise os temas em que errou nos flashcards e faça o simulado de novo."
                      : "Bom começo! Volte aos flashcards, principalmente nos temas das questões erradas, e tente novamente."}
                </p>
                <Button className="mt-6" size="lg" onClick={restartQuiz}>
                  Fazer de novo
                </Button>
              </Card>
            ) : quizQuestion ? (
              <Card className="shadow-xl">
                <CardHeader>
                  <div className="flex justify-between text-sm font-semibold text-slate-500">
                    <span>{quizQuestion.theme}</span>
                    <span>
                      Questão {quizIndex + 1} / {quizOrder.length} · Acertos: {score}
                    </span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full bg-teal-600 transition-all"
                      style={{ width: `${((quizIndex + 1) / quizOrder.length) * 100}%` }}
                    />
                  </div>
                  <CardTitle className="pt-4 text-xl leading-snug sm:text-2xl">
                    {quizQuestion.question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {quizQuestion.options.map((option, index) => {
                    const isCorrect = selected !== null && index === quizQuestion.correctIndex;
                    const isWrong = selected === index && index !== quizQuestion.correctIndex;
                    return (
                      <button
                        key={option}
                        onClick={() => answerQuiz(index)}
                        disabled={selected !== null}
                        className={`w-full rounded-xl border p-4 text-left text-sm font-medium transition ${
                          isCorrect
                            ? "border-teal-600 bg-teal-50 text-teal-900"
                            : isWrong
                              ? "border-red-500 bg-red-50 text-red-900"
                              : "border-slate-200 bg-white hover:bg-slate-50"
                        }`}
                      >
                        <strong className="mr-2">{String.fromCharCode(65 + index)}.</strong>{" "}
                        {option}
                      </button>
                    );
                  })}
                  {selected !== null && (
                    <div className="rounded-xl bg-amber-50 p-4 text-sm leading-relaxed text-amber-900 ring-1 ring-amber-200">
                      <strong>Por quê?</strong> {quizQuestion.explanation}
                      <div className="mt-4">
                        <Button onClick={nextQuiz}>
                          {quizIndex + 1 >= quizOrder.length
                            ? "Ver resultado"
                            : "Próxima questão →"}
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : null}
          </section>
        )}

        {tab === "perguntas" && (
          <section className="mt-4 space-y-4">
            <h2 className="text-2xl font-black">
              💬 Perguntas e Respostas para estudar e defender
            </h2>
            <div className="flex flex-wrap gap-2">
              <input
                value={qaSearch}
                onChange={(e) => setQaSearch(e.target.value)}
                placeholder="Buscar: problema, metodologia, conclusão..."
                className="min-w-[240px] flex-1 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
              />
              <select
                value={qaTheme}
                onChange={(e) => setQaTheme(e.target.value)}
                className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
              >
                {["Todos", ...Array.from(new Set(qaItems.map((item) => item.theme)))].map(
                  (item) => (
                    <option key={item}>{item}</option>
                  ),
                )}
              </select>
            </div>
            <div className="space-y-3">
              {filteredQa.map((item) => (
                <Card key={item.id}>
                  <button
                    onClick={() => setOpenQa(openQa === item.id ? null : item.id)}
                    className="w-full text-left"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-start justify-between gap-3 text-base leading-snug">
                        <span>{item.question}</span>
                        <span className="shrink-0 text-teal-700">
                          {openQa === item.id ? "−" : "+"}
                        </span>
                      </CardTitle>
                      <CardDescription>{item.theme}</CardDescription>
                    </CardHeader>
                  </button>
                  {openQa === item.id && (
                    <CardContent className="text-sm leading-relaxed text-slate-700">
                      {item.answer}
                    </CardContent>
                  )}
                </Card>
              ))}
              {filteredQa.length === 0 && (
                <p className="text-sm text-slate-500">
                  Nenhuma pergunta encontrada com esse filtro.
                </p>
              )}
            </div>
          </section>
        )}

        {tab === "comparativo" && (
          <section className="mt-4 space-y-4">
            <h2 className="text-2xl font-black">⚖️ Modelo antigo x modelo terceirizado</h2>
            <p className="text-sm text-slate-600">
              Use esta tabela para montar a discussão do TCC. O ponto não é dizer que um modelo é
              perfeito, e sim mostrar onde cada um ganha, onde perde e o que precisa de controle.
            </p>
            <div className="overflow-x-auto rounded-2xl bg-white shadow ring-1 ring-slate-200">
              <table className="min-w-[640px] w-full text-left text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-4">Aspecto</th>
                    <th className="p-4">Modelo antigo</th>
                    <th className="p-4">Modelo terceirizado (ECV)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr key={row.aspect} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-bold">{row.aspect}</td>
                      <td className="p-4 text-slate-700">{row.oldModel}</td>
                      <td className="p-4 text-slate-700">{row.newModel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-teal-200 bg-teal-50">
                <CardHeader>
                  <CardTitle className="text-teal-900">✅ Ganhos possíveis</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-teal-900">
                  Mais pontos de atendimento, agendamento mais ágil, menor espera e foco do Estado
                  em fiscalizar.
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-900">⚠️ Riscos a vigiar</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-red-900">
                  Qualidade desigual, custo percebido, fiscalização fraca e perda de confiança no
                  laudo.
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {tab === "glossario" && (
          <section className="mt-4 space-y-4">
            <h2 className="text-2xl font-black">📖 Glossário</h2>
            <input
              value={glossarySearch}
              onChange={(e) => setGlossarySearch(e.target.value)}
              placeholder="Buscar um termo: ECV, laudo, credenciamento..."
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            />
            <div className="grid gap-3 md:grid-cols-2">
              {filteredGlossary.map((item) => (
                <Card key={item.term}>
                  <CardHeader>
                    <CardTitle>{item.term}</CardTitle>
                    <CardDescription>{item.meaning}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-600">
                    Exemplo: {item.example}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {tab === "campo" && (
          <section className="mt-4 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-2xl font-black">📋 Questionário de campo pronto</h2>
                <p className="mt-1 max-w-2xl text-sm text-slate-600">
                  18 perguntas fechadas e anônimas para a ECV de Boa Esperança, dentro da sua ideia
                  de 10 a 20 perguntas, com contexto, modelo atual e comparação antigo x novo. Quem
                  nunca fez vistoria no modelo antigo responde 14; quem já fez, responde as 18.
                </p>
              </div>
              <Button onClick={copyFieldQuestions}>
                {copied ? "Copiado! ✓" : "📋 Copiar questionário"}
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {fieldSections.map((section) => (
                <button
                  key={section}
                  onClick={() => setFieldSection(section)}
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${fieldSection === section ? "bg-slate-900 text-white" : "bg-white ring-1 ring-slate-200"}`}
                >
                  {section}
                </button>
              ))}
            </div>
            <div className="space-y-3">
              {filteredField.map((question) => (
                <Card key={question.id}>
                  <CardHeader>
                    <CardTitle className="text-base leading-snug">
                      {question.id}. {question.question}
                    </CardTitle>
                    <CardDescription>
                      {question.section} · {question.type}
                    </CardDescription>
                  </CardHeader>
                  {question.options && (
                    <CardContent className="flex flex-wrap gap-2">
                      {question.options.map((option) => (
                        <span
                          key={option}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200"
                        >
                          {option}
                        </span>
                      ))}
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
            <p className="rounded-2xl bg-teal-50 p-4 text-sm text-teal-900 ring-1 ring-teal-200">
              🛡️ Texto sugerido antes da aplicação: “Esta pesquisa é para um TCC de Administração, a
              participação é voluntária e anônima, e as respostas serão usadas apenas para fins
              acadêmicos. Não escreva seu nome, CPF, placa, telefone ou qualquer dado que
              identifique você.”
            </p>
            <div className="space-y-3">
              <h3 className="text-xl font-black">🔍 Como analisar as respostas depois</h3>
              <p className="text-sm text-slate-600">
                Não colete antes da autorização formal da ECV e da confirmação por escrito da
                orientadora sobre a dispensa. Depois, siga os passos abaixo, sem expor cruzamentos
                com pouquíssimas respostas.
              </p>
              {analysisSteps.map((item) => (
                <Card key={item.step}>
                  <CardHeader>
                    <CardTitle className="text-base">{item.step}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-slate-700">
                      {item.guidance}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
        )}

        {tab === "marcos" && (
          <section className="mt-4 space-y-6">
            <div>
              <h2 className="text-2xl font-black">📊 Marcos, números e controle</h2>
              <p className="mt-1 max-w-3xl text-sm text-slate-600">
                Os números e as normas abaixo vêm do TCC enviado, com as fontes citadas nele, como
                ALMG e CET-MG. Antes de citar qualquer valor no trabalho final, confirme a base
                legal e a data de referência com o orientador.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-black">Números-chave do TCC</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {keyNumbers.map((item) => (
                  <Card key={item.label}>
                    <CardHeader>
                      <CardTitle className="text-2xl font-black text-teal-700">
                        {item.value}
                      </CardTitle>
                      <CardDescription className="font-semibold text-slate-800">
                        {item.label}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-slate-600">{item.note}</CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-black">Linha do tempo normativa</h3>
              {legalMilestones.map((item) => (
                <Card key={item.norm}>
                  <CardHeader>
                    <CardTitle className="text-base">{item.norm}</CardTitle>
                    <CardDescription>{item.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm leading-relaxed text-slate-700">
                    {item.what}
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-black">Como o Estado controla as ECVs</h3>
              {controlItems.map((item) => (
                <Card key={item.mechanism}>
                  <CardHeader>
                    <CardTitle className="text-base">{item.mechanism}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-slate-700">
                      {item.how}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
        )}

        {tab === "checklist" && (
          <section className="mt-4 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-black">✅ Checklist do TCC</h2>
              <span className="rounded-full bg-teal-100 px-3 py-1 text-sm font-bold text-teal-800">
                {checklistProgress}% concluído
              </span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full bg-teal-600 transition-all"
                style={{ width: `${checklistProgress}%` }}
              />
            </div>
            <div className="space-y-2">
              {checklist.map((item) => {
                const checked = done.includes(item.id);
                return (
                  <label
                    key={item.id}
                    className={`flex cursor-pointer items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-slate-200 ${checked ? "opacity-70" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() =>
                        setDone((prev) =>
                          checked ? prev.filter((id) => id !== item.id) : [...prev, item.id],
                        )
                      }
                      className="mt-1 h-5 w-5 accent-teal-700"
                    />
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-wide text-teal-700">
                        {item.chapter}
                      </span>
                      <span className={`text-sm font-medium ${checked ? "line-through" : ""}`}>
                        {item.task}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
            <Button variant="outline" onClick={() => setDone([])}>
              Limpar checklist
            </Button>
          </section>
        )}
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        EstudaTCC · Terceirização das vistorias de identificação veicular em Minas Gerais · Boa
        Esperança (MG)
      </footer>
    </div>
  );
}
