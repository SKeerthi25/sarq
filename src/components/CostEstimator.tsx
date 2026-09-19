import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from './Card';
import { Button } from './Button';
import { formatGBP } from '../lib/utils';
import { Calculator, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProjectCostConfig {
  name: string;
  baseRatePerSqM: number;
  minArea: number;
  maxArea: number;
  defaultArea: number;
  fixedBaseline: number;
  typicalWeeks: number;
}

const PROJECT_CONFIGS: Record<string, ProjectCostConfig> = {
  extension_rear: {
    name: 'Single Storey Rear / Side Extension',
    baseRatePerSqM: 2350,
    minArea: 15,
    maxArea: 60,
    defaultArea: 25,
    fixedBaseline: 25000,
    typicalWeeks: 14,
  },
  extension_wraparound: {
    name: 'L-Shaped Wrap-around Extension',
    baseRatePerSqM: 2650,
    minArea: 25,
    maxArea: 80,
    defaultArea: 40,
    fixedBaseline: 35000,
    typicalWeeks: 16,
  },
  loft_dormer: {
    name: 'Dormer / L-Section Loft Conversion',
    baseRatePerSqM: 1950,
    minArea: 20,
    maxArea: 60,
    defaultArea: 32,
    fixedBaseline: 22000,
    typicalWeeks: 10,
  },
  loft_mansard: {
    name: 'Mansard Loft Conversion (Conservation Grade)',
    baseRatePerSqM: 2400,
    minArea: 25,
    maxArea: 70,
    defaultArea: 38,
    fixedBaseline: 28000,
    typicalWeeks: 12,
  },
  refurb_full: {
    name: 'Full Period House Refurbishment',
    baseRatePerSqM: 1200,
    minArea: 80,
    maxArea: 350,
    defaultArea: 160,
    fixedBaseline: 30000,
    typicalWeeks: 20,
  },
  basement: {
    name: 'Subterranean Basement Excavation',
    baseRatePerSqM: 3800,
    minArea: 30,
    maxArea: 120,
    defaultArea: 55,
    fixedBaseline: 55000,
    typicalWeeks: 28,
  },
};

const FINISH_MULTIPLIERS = {
  standard: { label: 'Standard Builder Spec', mult: 1.0, desc: 'Quality trade finishes, standard ceramics, standard aluminium patio doors' },
  premium: { label: 'Premium Architectural', mult: 1.25, desc: 'Cortizo/Crittall glazing, wet underfloor heating, engineered oak, bespoke joinery' },
  luxury: { label: 'Bespoke Luxury / Prime', mult: 1.55, desc: 'Structural frameless glass, microcement/marble, Lutron smart lighting, handmade kitchens' },
};

export const CostEstimator: React.FC<{ className?: string }> = ({ className }) => {
  const navigate = useNavigate();
  const [projectKey, setProjectKey] = useState<string>('extension_wraparound');
  const [areaSqM, setAreaSqM] = useState<number>(40);
  const [finishLevel, setFinishLevel] = useState<'standard' | 'premium' | 'luxury'>('premium');

  const activeConfig = PROJECT_CONFIGS[projectKey];

  // Recalculate estimates
  const calculation = useMemo(() => {
    const rawCost = (activeConfig.fixedBaseline + (areaSqM * activeConfig.baseRatePerSqM)) * FINISH_MULTIPLIERS[finishLevel].mult;
    const lowerEstimate = Math.round((rawCost * 0.92) / 1000) * 1000;
    const upperEstimate = Math.round((rawCost * 1.08) / 1000) * 1000;

    const breakdown = {
      groundworks: Math.round(rawCost * 0.22),
      structureAndSteel: Math.round(rawCost * 0.28),
      glazingAndRoof: Math.round(rawCost * 0.18),
      mAndEFirstFix: Math.round(rawCost * 0.16),
      finishesAndJoinery: Math.round(rawCost * 0.16),
    };

    return {
      lowerEstimate,
      upperEstimate,
      midPoint: Math.round(rawCost),
      breakdown,
      sqFt: Math.round(areaSqM * 10.764),
    };
  }, [activeConfig, areaSqM, finishLevel]);

  const handleBookSurvey = () => {
    navigate('/request-a-quote', {
      state: {
        presetProjectType: activeConfig.name,
        presetArea: areaSqM,
        presetFinish: finishLevel,
      },
    });
  };

  return (
    <div className={className}>
      <Card variant="elevated" className="border-2 border-hairline p-6 sm:p-10 bg-card">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-hairline">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded bg-brand/10 text-brand flex items-center justify-center shrink-0">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <span className="micro-label text-brand">Domestic Construction Calculator</span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-ink">
                Instant London Cost Estimator
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-surface px-3 py-1.5 rounded border border-hairline text-xs font-mono text-muted">
            <span>2025/2026 London Rates</span>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          </div>
        </div>

        {/* Form Controls Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Inputs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Project Type */}
            <div>
              <label className="block font-heading text-sm font-bold uppercase tracking-wider text-ink mb-2">
                1. Select Scope of Work
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {Object.entries(PROJECT_CONFIGS).map(([key, config]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      setProjectKey(key);
                      setAreaSqM(config.defaultArea);
                    }}
                    className={`p-3 text-left rounded border transition-all text-xs sm:text-sm font-medium ${
                      projectKey === key
                        ? 'border-brand bg-brand/5 text-brand ring-1 ring-brand'
                        : 'border-hairline bg-surface/50 text-ink hover:border-brand/40'
                    }`}
                  >
                    {config.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Floor Area Slider */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label className="font-heading text-sm font-bold uppercase tracking-wider text-ink">
                  2. Approximate Floor Area
                </label>
                <div className="font-mono text-sm font-bold text-brand bg-brand/10 px-2.5 py-0.5 rounded">
                  {areaSqM} m² <span className="text-muted font-normal text-xs">({calculation.sqFt} sq ft)</span>
                </div>
              </div>
              <input
                type="range"
                min={activeConfig.minArea}
                max={activeConfig.maxArea}
                value={areaSqM}
                onChange={(e) => setAreaSqM(Number(e.target.value))}
                className="w-full h-2 bg-hairline rounded-lg appearance-none cursor-pointer accent-brand"
              />
              <div className="flex justify-between text-xs font-mono text-muted mt-1">
                <span>{activeConfig.minArea} m²</span>
                <span>{Math.round((activeConfig.minArea + activeConfig.maxArea) / 2)} m²</span>
                <span>{activeConfig.maxArea} m²</span>
              </div>
            </div>

            {/* 3. Finish Level */}
            <div>
              <label className="block font-heading text-sm font-bold uppercase tracking-wider text-ink mb-2">
                3. Specification & Finish Level
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {(Object.keys(FINISH_MULTIPLIERS) as Array<keyof typeof FINISH_MULTIPLIERS>).map((level) => {
                  const item = FINISH_MULTIPLIERS[level];
                  const isSelected = finishLevel === level;
                  return (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setFinishLevel(level)}
                      className={`p-3 text-left rounded border transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-brand bg-brand/5 text-brand ring-1 ring-brand'
                          : 'border-hairline bg-surface/50 text-ink hover:border-brand/40'
                      }`}
                    >
                      <div>
                        <div className="font-heading font-bold text-xs uppercase">{item.label}</div>
                        <div className="text-[11px] text-muted mt-1 line-clamp-2 leading-snug">{item.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded bg-surface-deep text-surface border border-hairline/20">
            <div>
              <span className="micro-label text-accent">Indicative Budget Range</span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  {formatGBP(calculation.lowerEstimate)}
                </span>
                <span className="font-mono text-lg text-surface/60 font-semibold">–</span>
                <span className="font-mono text-2xl sm:text-3xl font-bold text-accent">
                  {formatGBP(calculation.upperEstimate)}
                </span>
              </div>
              <p className="text-xs text-surface/70 mt-1 font-mono">
                Excl. VAT • Estimated Duration: ~{activeConfig.typicalWeeks} Weeks
              </p>

              {/* Structural breakdown bars */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-2.5 text-xs font-mono">
                <div className="text-[11px] text-surface/60 uppercase tracking-wider mb-2">Estimated Package Breakdown</div>
                <div className="flex justify-between text-surface/90">
                  <span>Groundworks & Substructure</span>
                  <span>{formatGBP(calculation.breakdown.groundworks)}</span>
                </div>
                <div className="flex justify-between text-surface/90">
                  <span>Steelwork & Shell</span>
                  <span>{formatGBP(calculation.breakdown.structureAndSteel)}</span>
                </div>
                <div className="flex justify-between text-surface/90">
                  <span>Glazing & Weatherproofing</span>
                  <span>{formatGBP(calculation.breakdown.glazingAndRoof)}</span>
                </div>
                <div className="flex justify-between text-surface/90">
                  <span>M&E First-Fix Services</span>
                  <span>{formatGBP(calculation.breakdown.mAndEFirstFix)}</span>
                </div>
                <div className="flex justify-between text-surface/90">
                  <span>Second-Fix & Joinery</span>
                  <span>{formatGBP(calculation.breakdown.finishesAndJoinery)}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <Button
                variant="accent"
                size="lg"
                pill
                className="w-full text-center"
                onClick={handleBookSurvey}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Lock In Estimate & Request Survey
              </Button>

              <div className="mt-4 flex items-start gap-2 text-[11px] text-surface/60 leading-tight">
                <AlertTriangle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  Indicative estimate only based on average SW London ground conditions. Final binding fixed quotation is provided following our complimentary technical site survey.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
