"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Calendar as CalendarIcon,
  Clock,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const TABLE_OPTIONS = [
  { id: "1", label: "Solo", seats: 1, description: "Table pour une personne" },
  { id: "2", label: "Duo", seats: 2, description: "Table pour deux personnes" },
  { id: "4", label: "Groupe", seats: 4, description: "Table pour quatre personnes" },
  { id: "6", label: "Célébration", seats: 6, description: "Table pour six personnes" },
  { id: "8", label: "Événement", seats: 8, description: "8 personnes et plus" },
];

const TIME_SLOTS = [
  "16:00", "17:00", "18:00", "19:00", "20:00", "20:30",
  "21:00", "21:30", "22:00", "22:30", "23:00", "00:00",
  "00:30", "01:00", "02:00", "03:00",
];

function getNextDays(count: number) {
  const days = [];
  const today = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

const STEPS = ["Table", "Date & Heure", "Coordonnées", "Confirmation"];

export default function ReservationsPage() {
  const [step, setStep] = useState(0);
  const [tableId, setTableId] = useState<string | null>(null);
  const [dateIso, setDateIso] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const days = useMemo(() => getNextDays(14), []);
  const selectedTable = TABLE_OPTIONS.find((t) => t.id === tableId);

  const canGoNext = () => {
    if (step === 0) return Boolean(tableId);
    if (step === 1) return Boolean(dateIso && time);
    if (step === 2) return name.trim().length > 1 && phone.trim().length > 5;
    return true;
  };

  const handleNext = () => {
    if (step < STEPS.length - 1) setStep(step + 1);
  };
  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const formattedDate = dateIso
    ? new Date(dateIso).toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
    : null;

  return (
    <main className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Visual side */}
        <div className="relative hidden overflow-hidden lg:block">
          <Image
            src="/images/night-3.jpg"
            alt="Ambiance Shanzoo Tanger"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
          <div className="absolute inset-0 flex flex-col justify-between p-12">
            <Link
              href="/"
              className="w-fit text-sm uppercase tracking-[0.3em] text-white/80 transition-colors hover:text-white"
            >
              ← Shanzoo
            </Link>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                Tanger
              </p>
              <h1 className="mt-4 text-5xl font-light leading-tight text-white xl:text-6xl">
                Réservez
                <br />
                votre soirée.
              </h1>
              <p className="mt-6 max-w-sm text-white/70">
                Eat. Drink. Chill. Ouvert tous les soirs de 16h00 à 04h00.
                Spécial Espagnol &amp; Italien, cocktails signature et shows en direct.
              </p>
            </div>
          </div>
        </div>

        {/* Form side */}
        <div className="flex items-center justify-center px-6 py-12 md:px-16">
          <div className="w-full max-w-md">
            {!submitted ? (
              <>
                {/* Mobile back link */}
                <Link
                  href="/"
                  className="mb-8 inline-block text-sm text-muted-foreground hover:text-foreground lg:hidden"
                >
                  ← Retour à l'accueil
                </Link>

                {/* Progress */}
                <div className="mb-10 flex items-center gap-2">
                  {STEPS.map((label, i) => (
                    <div key={label} className="flex flex-1 items-center gap-2">
                      <div
                        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-xs font-medium transition-colors ${
                          i <= step
                            ? "border-foreground bg-foreground text-background"
                            : "border-border text-muted-foreground"
                        }`}
                      >
                        {i + 1}
                      </div>
                      {i < STEPS.length - 1 && (
                        <div
                          className={`h-px flex-1 transition-colors ${
                            i < step ? "bg-foreground" : "bg-border"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-medium text-foreground">
                  {STEPS[step]}
                </h2>

                {/* Step 0: Table */}
                {step === 0 && (
                  <div className="mt-8 space-y-3">
                    {TABLE_OPTIONS.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setTableId(option.id)}
                        className={`flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all ${
                          tableId === option.id
                            ? "border-foreground bg-secondary"
                            : "border-border hover:border-foreground/50"
                        }`}
                      >
                        <div
                          className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border ${
                            tableId === option.id
                              ? "border-foreground bg-foreground text-background"
                              : "border-border text-muted-foreground"
                          }`}
                        >
                          <Users size={18} />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground">
                            {option.label}{" "}
                            <span className="text-muted-foreground">
                              · {option.seats}{option.seats === 8 ? "+" : ""} pers.
                            </span>
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {option.description}
                          </p>
                        </div>
                        {tableId === option.id && (
                          <CheckCircle2
                            size={20}
                            className="flex-shrink-0 text-foreground"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {/* Step 1: Date & Time */}
                {step === 1 && (
                  <div className="mt-8 space-y-8">
                    <div>
                      <p className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
                        <CalendarIcon size={16} /> Choisissez une date
                      </p>
                      <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-2">
                        {days.map((d) => {
                          const iso = d.toISOString().slice(0, 10);
                          const isActive = dateIso === iso;
                          return (
                            <button
                              key={iso}
                              type="button"
                              onClick={() => setDateIso(iso)}
                              className={`flex w-16 flex-shrink-0 flex-col items-center rounded-xl border py-3 transition-colors ${
                                isActive
                                  ? "border-foreground bg-foreground text-background"
                                  : "border-border text-foreground hover:border-foreground/50"
                              }`}
                            >
                              <span className="text-xs uppercase opacity-70">
                                {d.toLocaleDateString("fr-FR", { weekday: "short" })}
                              </span>
                              <span className="text-lg font-medium">
                                {d.getDate()}
                              </span>
                              <span className="text-[10px] uppercase opacity-70">
                                {d.toLocaleDateString("fr-FR", { month: "short" })}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <p className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
                        <Clock size={16} /> Choisissez une heure
                      </p>
                      <div className="grid grid-cols-4 gap-2">
                        {TIME_SLOTS.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setTime(t)}
                            className={`rounded-lg border py-2 text-sm transition-colors ${
                              time === t
                                ? "border-foreground bg-foreground text-background"
                                : "border-border text-foreground hover:border-foreground/50"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Contact */}
                {step === 2 && (
                  <div className="mt-8 space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Votre nom"
                        className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                        <Phone size={14} /> Téléphone
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+212 6XX XXX XXX"
                        className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                        <Mail size={14} /> Email (optionnel)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="vous@email.com"
                        className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                        <MessageSquare size={14} /> Demande spéciale (optionnel)
                      </label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Anniversaire, allergies, préférences de placement..."
                        rows={3}
                        className="w-full resize-none rounded-xl border border-border bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Confirmation review */}
                {step === 3 && (
                  <div className="mt-8 space-y-4 rounded-2xl border border-border p-6">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <span className="text-sm text-muted-foreground">Table</span>
                      <span className="font-medium text-foreground">
                        {selectedTable?.label} · {selectedTable?.seats}
                        {selectedTable?.seats === 8 ? "+" : ""} pers.
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <span className="text-sm text-muted-foreground">Date</span>
                      <span className="font-medium capitalize text-foreground">
                        {formattedDate}
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <span className="text-sm text-muted-foreground">Heure</span>
                      <span className="font-medium text-foreground">{time}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <span className="text-sm text-muted-foreground">Nom</span>
                      <span className="font-medium text-foreground">{name}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Téléphone</span>
                      <span className="font-medium text-foreground">{phone}</span>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="mt-10 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={step === 0}
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground disabled:opacity-0"
                  >
                    <ArrowLeft size={16} /> Retour
                  </button>

                  {step < STEPS.length - 1 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!canGoNext()}
                      className="flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      Continuer <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
                    >
                      Confirmer la réservation <CheckCircle2 size={16} />
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-background">
                  <CheckCircle2 size={28} />
                </div>
                <h2 className="mt-6 text-3xl font-medium text-foreground">
                  Réservation confirmée
                </h2>
                <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                  Merci {name.split(" ")[0]}, votre table pour{" "}
                  {selectedTable?.seats}
                  {selectedTable?.seats === 8 ? "+" : ""} personne(s) est réservée
                  le <span className="capitalize">{formattedDate}</span> à {time}.
                  Nous vous confirmerons par téléphone au {phone}.
                </p>
                <Link
                  href="/"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  Retour à l'accueil
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
