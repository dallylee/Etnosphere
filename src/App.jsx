import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  Users,
  Target,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
  Calculator,
  ArrowRight,
  Globe,
  Star,
  ShieldCheck,
  LayoutDashboard,
  PieChart,
  Briefcase,
  MapPin,
  Menu,
  X,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Info,
  Calendar,
  Euro,
  MessageSquare,
  Lock,
  Smartphone,
  MousePointer,
  Eye,
  Clock
} from 'lucide-react';

// --- Shared Components ---

const SectionHeader = ({ badge, title, subtitle }) => (
  <div className="mb-10 text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
    {badge && (
      <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-3 shadow-sm">
        {badge}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-serif leading-tight">{title}</h2>
    <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

const InsightCard = ({ icon: Icon, title, description, colorClass, delay }) => (
  <div className={`bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col animate-in fade-in slide-in-from-bottom-4`} style={{ animationDelay: `${delay}ms` }}>
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colorClass} shadow-inner`}>
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold text-slate-800 mb-3">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed flex-grow">{description}</p>
  </div>
);

const ExpandableText = ({ title, children, icon: Icon, defaultOpen = false, accentColor = "indigo" }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const colors = {
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
    amber: "bg-amber-50 text-amber-700 border-amber-100",
    rose: "bg-rose-50 text-rose-700 border-rose-100",
    slate: "bg-slate-50 text-slate-700 border-slate-100"
  };

  return (
    <div className={`rounded-xl border transition-all duration-300 ${isOpen ? 'bg-white shadow-md border-slate-200' : 'bg-white border-slate-100 shadow-sm'}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-5 text-left group">
        <div className="flex items-center gap-4">
          <div className={`p-2 rounded-lg transition-colors ${isOpen ? colors[accentColor] : 'bg-slate-50 text-slate-500 group-hover:bg-slate-100'}`}>
            {Icon && <Icon size={20} />}
          </div>
          <span className={`font-bold text-lg ${isOpen ? 'text-slate-900' : 'text-slate-700 group-hover:text-indigo-600'} transition-colors`}>{title}</span>
        </div>
        <div className={`p-1 rounded-full text-slate-400 transition-all duration-300 ${isOpen ? 'bg-slate-100 rotate-180 text-slate-600' : 'group-hover:bg-slate-50'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 pt-0 text-slate-600 leading-7 border-t border-slate-50">
          <div className="pt-4 space-y-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ value, label, trend, icon: Icon, description }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
    <div className="flex items-start justify-between mb-4">
      <div className="bg-slate-50 p-3 rounded-full text-indigo-600 group-hover:bg-indigo-50 transition-colors">
        <Icon size={24} />
      </div>
      {trend && <div className="text-xs font-bold px-2 py-1 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">{trend}</div>}
    </div>
    <div className="space-y-1">
      <div className="text-3xl font-black text-slate-900 tracking-tight">{value}</div>
      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{label}</div>
    </div>
    {description && (
      <div className="mt-4 pt-4 border-t border-slate-50 text-sm text-slate-600 leading-relaxed">
        {description}
      </div>
    )}
  </div>
);

const RevenueCalculator = () => {
  const [price, setPrice] = useState(35);
  const [guests, setGuests] = useState(150);

  const currentRevenue = price * guests * 52;
  const targetPrice = 65;
  const targetRevenue = targetPrice * guests * 52;
  const uplift = targetRevenue - currentRevenue;

  return (
    <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden mt-12">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/3"></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <Calculator size={28} className="text-indigo-300" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-serif">Revenue Potential Simulator</h3>
              <p className="text-indigo-200 text-sm">Model the impact of strategic repricing</p>
            </div>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-lg flex items-center gap-2">
            <TrendingUp size={16} className="text-emerald-400" />
            <span className="text-emerald-300 font-medium text-sm">High-Leverage Opportunity</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm font-medium text-indigo-200">Current Average Ticket (€)</label>
                <span className="text-2xl font-bold text-white bg-white/5 px-3 py-1 rounded-lg border border-white/10">€{price}</span>
              </div>
              <input type="range" min="20" max="60" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400 hover:accent-indigo-300 transition-all" />
              <div className="flex justify-between text-xs text-indigo-400 font-mono">
                <span>€20</span>
                <span>Current Market avg ~€35</span>
                <span>€60</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm font-medium text-indigo-200">Weekly Guest Volume</label>
                <span className="text-2xl font-bold text-white bg-white/5 px-3 py-1 rounded-lg border border-white/10">{guests}</span>
              </div>
              <input type="range" min="50" max="500" value={guests} onChange={(e) => setGuests(Number(e.target.value))} className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400 hover:accent-indigo-300 transition-all" />
              <div className="flex justify-between text-xs text-indigo-400 font-mono">
                <span>50 pax</span>
                <span>Optimized Cap</span>
                <span>500 pax</span>
              </div>
            </div>

            <div className="p-5 bg-indigo-600/20 rounded-xl border border-indigo-500/30 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Info size={18} className="text-indigo-300 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-indigo-100 leading-relaxed">
                  <strong>Strategic Benchmark:</strong> Repositioning to the <strong>€65+</strong> regional standard (Prague/Budapest) is the single most powerful lever for immediate commercial improvement.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6 bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-md">
            <div className="space-y-2">
              <p className="text-indigo-300 text-sm font-bold uppercase tracking-widest">Projected Annual Uplift</p>
              <div className="flex items-baseline gap-2">
                <p className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  +€{uplift.toLocaleString()}
                </p>
              </div>
              <p className="text-xs text-indigo-300/80">Additional net revenue vs. current pricing model</p>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-indigo-400 text-xs uppercase mb-1">Current Annual Rev</p>
                <p className="text-xl font-semibold text-white/60">€{currentRevenue.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-indigo-400 text-xs uppercase mb-1">Target Annual Rev</p>
                <p className="text-xl font-bold text-white">€{targetRevenue.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StrategyCard = ({ type, title, focus, risk, recommended, details, rationale, validation, tradeOffs }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`relative flex flex-col h-full rounded-2xl border transition-all duration-500 ${recommended ? 'border-indigo-500 bg-white shadow-xl ring-4 ring-indigo-50 z-10' : 'border-slate-200 bg-white hover:border-indigo-200 shadow-sm hover:shadow-lg'}`}>
      {recommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-6 py-1.5 rounded-full shadow-lg uppercase tracking-wider flex items-center gap-2">
          <Star size={12} fill="currentColor" /> Recommended Path
        </div>
      )}

      <div className="p-8 pb-4 flex-grow">
        <div className="mb-6 flex justify-between items-start">
          <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md ${recommended ? 'bg-indigo-50 text-indigo-700 border border-indigo-100' : 'bg-slate-100 text-slate-500 border border-slate-200'}`}>
            {type}
          </span>
          {isExpanded ? <ChevronUp className="text-slate-400" size={20} /> : <ChevronDown className="text-slate-400" size={20} />}
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">{focus}</p>

        <div className="space-y-3 mb-6">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="flex items-start gap-2 mb-1">
              <CheckCircle2 size={14} className="text-emerald-500 mt-0.5" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Key Action</span>
            </div>
            <p className="text-sm text-slate-800 font-medium pl-6">{details.action}</p>
          </div>

          <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
            <div className="flex items-start gap-2 mb-1">
              <AlertTriangle size={14} className="text-rose-500 mt-0.5" />
              <span className="text-xs font-bold text-rose-700 uppercase tracking-wide">Primary Risk</span>
            </div>
            <p className="text-sm text-rose-900 italic pl-6">{risk}</p>
          </div>
        </div>
      </div>

      <button onClick={() => setIsExpanded(!isExpanded)} className={`w-full py-4 text-xs font-bold uppercase tracking-widest transition-colors border-t ${recommended ? 'text-indigo-600 hover:bg-indigo-50 border-indigo-100' : 'text-slate-500 hover:bg-slate-50 border-slate-100'}`}>
        {isExpanded ? 'Close Analysis' : 'Full Analysis'}
      </button>

      {isExpanded && (
        <div className="px-8 pb-8 pt-2 animate-in slide-in-from-top-2 duration-300 bg-slate-50/30">
          <div className="space-y-6 pt-4 border-t border-dashed border-slate-200">
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-2">Strategic Rationale</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{rationale}</p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-2">Trade-offs</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{tradeOffs}</p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-2">Validation Metrics</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                {validation.map((metric, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></div>
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [activeSection, setActiveSection] = useState('executive');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'executive', label: 'Summary', icon: LayoutDashboard },
    { id: 'market', label: 'Market Landscape', icon: Globe },
    { id: 'diagnosis', label: 'Strategic Audit', icon: BarChart3 },
    { id: 'strategy', label: 'Growth Roadmap', icon: MapPin },
    { id: 'metrics', label: 'Success Metrics', icon: TrendingUp },
  ];

  const NavButton = ({ active, onClick, children, icon: Icon }) => (
    <button onClick={onClick} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${active ? 'bg-slate-900 text-white shadow-lg transform scale-105' : 'text-slate-500 hover:text-slate-800 hover:bg-white hover:shadow-sm'}`}>
      <Icon size={16} />
      <span className="hidden lg:inline">{children}</span>
    </button>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'executive':
        return (
          <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Hero Header */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold tracking-wide border border-indigo-100">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                  Owner Insight Pack & Strategic Roadmap
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] font-serif tracking-tight">
                  From Niche Service to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Destination Brand</span>
                </h1>
                <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
                  A data-driven roadmap to transform EtnoSphere into Zagreb's premier "Evening Gap" solution, creating a long-term cultural asset.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button onClick={() => setActiveSection('strategy')} className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all hover:-translate-y-1 flex items-center gap-2 group">
                    View Strategic Roadmap
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button onClick={() => setActiveSection('diagnosis')} className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors">
                    Current Position
                  </button>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <InsightCard icon={Target} title="The 'Evening Gap'" description="Zagreb's maturing tourism market has a structural lack of high-quality cultural entertainment for the 35-65 demographic. Demand exists; product packaging is the missing link." colorClass="bg-indigo-50 text-indigo-600" delay={100} />
                <InsightCard icon={TrendingUp} title="Pricing Power" description="Current offers are critically undervalued. Repositioning to the €65+ international standard is the single most powerful lever for immediate commercial improvement." colorClass="bg-emerald-50 text-emerald-600" delay={200} />
                <InsightCard icon={AlertTriangle} title="Growth Constraints" description="The primary bottlenecks are internal—specifically brand fragmentation and high-friction booking processes—not a lack of external market demand." colorClass="bg-amber-50 text-amber-600" delay={300} />
                <InsightCard icon={ShieldCheck} title="Strategic Pivot" description="Opportunity to shift from a 'troupe for hire' to a 'destination brand' (The 'Moulin Rouge' of Zagreb) that generates its own pull demand." colorClass="bg-rose-50 text-rose-600" delay={400} />
              </div>
            </div>

            {/* Deep Dive Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-slate-200 flex-grow"></div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Deep Dive: Foundational Conclusions</h3>
                <div className="h-px bg-slate-200 flex-grow"></div>
              </div>

              <div className="grid gap-4 max-w-4xl mx-auto">
                <ExpandableText title="Zagreb's Maturing Market & The 'Evening Gap'" icon={Globe} accentColor="indigo">
                  <p>Zagreb has successfully evolved beyond its historical status as a transient stopover, establishing itself as a year-round, standalone city-break destination. However, a detailed analysis of the visitor experience reveals a distinct market vacuum for evening entertainment.</p>
                  <p className="mt-2">The current landscape is bifurcated: high-energy clubs for youth on one end, and passive dining on the other. There is a pronounced lack of a "middle ground" offering for the 35-65 demographic, families, and corporate groups. This <strong>"Evening Gap"</strong> represents the single largest underserved niche in the city's tourism ecosystem.</p>
                </ExpandableText>

                <ExpandableText title="Internal Constraints vs. External Demand" icon={AlertTriangle} accentColor="amber">
                  <p>The core challenge is not a lack of demand, but a lack of a professionally packaged and visible product to capture it. Market conditions are primed for a well-executed offering, but EtnoSphere is currently held back by internal factors.</p>
                  <p className="mt-2">Specifically, brand fragmentation (confusion with competitors) and a high-friction booking process (lack of instant online confirmation) are acting as artificial ceilings on growth. Operational and digital transformation must be top priorities to unlock volume.</p>
                </ExpandableText>

                <ExpandableText title="The 'Destination Brand' Opportunity" icon={Star} accentColor="emerald">
                  <p>A compelling opportunity exists to pivot from a fragmented service provider to Zagreb's definitive "destination brand" for evening entertainment. This implies a strategic shift moving towards building a singular, high-profile attraction that generates "pull" demand from all market segments.</p>
                  <p className="mt-2">Rather than pursuing customers separately, a strong destination brand (akin to a "Moulin Rouge" or local equivalent) naturally attracts both FITs and B2B partners who want to be associated with the market leader.</p>
                </ExpandableText>

                <ExpandableText title="Pricing Alignment Strategy" icon={Euro} accentColor="rose">
                  <p>Comparative analysis with Prague and Budapest reveals that EtnoSphere is significantly under-monetized. Regional benchmarks for similar dinner-shows range from €65 to €90. Current pricing leaves substantial revenue on the table and actually hurts the "premium" perception of the brand.</p>
                  <p className="mt-2">Repositioning to a higher price point, justified by an "all-inclusive" or premium package, is necessary not just for margin, but for brand signaling.</p>
                </ExpandableText>
              </div>
            </div>
          </div>
        );

      case 'market':
        return (
          <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionHeader badge="Market Landscape" title="Zagreb's Tourism Renaissance" subtitle="Understanding the macro-dynamics driving demand for evening cultural experiences." />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard icon={Users} value="1.3M" label="Annual Visitors" trend="+21% YoY Growth" description="Zagreb's tourism is rebounding strongly, with continental region resilience driving year-on-year increases." />
              <StatCard icon={MapPin} value="2.2" label="Avg Nights Stay" trend="High Intensity" description="Short 'city break' stays create intense demand for curated 'dinner slots'—only 2 nights to capture." />
              <StatCard icon={Calendar} value="Dual" label="Peak Seasonality" trend="Summer + Advent" description="Unique dual-peak (Summer & Winter) mitigates business risk, supporting year-round operations." />
              <StatCard icon={Euro} value="€30/hr" label="Interactive Benchmark" trend="Workshop Value" description="Tourists already pay ~€30/hr for workshops (e.g. 'Hearts of Zagreb') without food. Bundling opportunity." />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="col-span-1 lg:col-span-2 space-y-8">
                <h3 className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-200 pb-4">Detailed Customer Segmentation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                        <Users size={24} />
                      </div>
                      <h4 className="font-bold text-slate-900">B2C Leisure (FITs)</h4>
                    </div>
                    <p className="text-slate-500 text-sm mb-4">Couples & families planning independently.</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" /> Barrier: Fear of "tourist traps"
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" /> Need: Instant mobile booking
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-purple-50 p-3 rounded-lg text-purple-600">
                        <Briefcase size={24} />
                      </div>
                      <h4 className="font-bold text-slate-900">B2B Trade (DMCs)</h4>
                    </div>
                    <p className="text-slate-500 text-sm mb-4">Gatekeepers for high-value groups.</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" /> Need: Commissionable net rates
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" /> Need: Reliability for large groups
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-amber-50 p-3 rounded-lg text-amber-600">
                        <Lightbulb size={24} />
                      </div>
                      <h4 className="font-bold text-slate-900">Corporate Groups</h4>
                    </div>
                    <p className="text-slate-500 text-sm mb-4">High-value incentive events.</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" /> Driver: Customization & Branding
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" /> Standard: Flawless execution
                      </li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-center">
                    <h4 className="font-bold text-slate-900 mb-2">The "Active" Shift</h4>
                    <p className="text-sm text-slate-600 mb-4">Modern tourists prefer participation over observation. Interactive experiences command a premium.</p>
                    <div className="text-xs font-bold uppercase text-indigo-600 tracking-wider">Opportunity: Hands-on Elements</div>
                  </div>
                </div>
              </div>

              <div className="col-span-1 bg-gradient-to-b from-indigo-900 to-slate-900 text-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-xl font-bold font-serif mb-6 flex items-center gap-2">
                  <Globe size={20} className="text-indigo-400" /> Regional Context
                </h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-indigo-500 pl-4">
                    <h4 className="text-sm font-bold text-indigo-200 uppercase mb-1">Prague Benchmark</h4>
                    <div className="text-2xl font-bold mb-1">€65 - €90</div>
                    <p className="text-xs text-slate-400">"Folklore Garden" uses all-inclusive pricing (unlimited drinks) to remove price anxiety.</p>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-4">
                    <h4 className="text-sm font-bold text-emerald-200 uppercase mb-1">Budapest Benchmark</h4>
                    <div className="text-2xl font-bold mb-1">€70+</div>
                    <p className="text-xs text-slate-400">Succesfully bundles culture with premium dining experiences.</p>
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-sm italic text-slate-300">
                      "Zagreb is significantly under-monetized compared to regional peers. The gap is in packaging, not product quality."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-200 pb-4">Behavioral Analysis</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <MousePointer size={18} className="text-rose-500" /> Digital Friction Analysis
                  </h4>
                  <p className="text-slate-600 text-sm mb-4">Current audit reveals critical drop-off points in the customer journey.</p>
                  <ul className="space-y-3">
                    <li className="text-sm text-slate-600 flex gap-2">
                      <AlertTriangle size={16} className="text-rose-400 flex-shrink-0" /> No primary CTA button on homepage.
                    </li>
                    <li className="text-sm text-slate-600 flex gap-2">
                      <AlertTriangle size={16} className="text-rose-400 flex-shrink-0" /> Contact is phone/email only (non-actionable).
                    </li>
                    <li className="text-sm text-slate-600 flex gap-2">
                      <AlertTriangle size={16} className="text-rose-400 flex-shrink-0" /> Social links are a leakage path, taking users AWAY from booking.
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Eye size={18} className="text-indigo-500" /> The Trust Deficit
                  </h4>
                  <p className="text-slate-600 text-sm mb-4">International visitors have a high fear of "tourist traps."</p>
                  <ul className="space-y-3">
                    <li className="text-sm text-slate-600 flex gap-2">
                      <CheckCircle2 size={16} className="text-indigo-400 flex-shrink-0" /> Missing on-site social proof (TripAdvisor widgets).
                    </li>
                    <li className="text-sm text-slate-600 flex gap-2">
                      <CheckCircle2 size={16} className="text-indigo-400 flex-shrink-0" /> Lack of "Trusted By" logos for B2B credibility.
                    </li>
                    <li className="text-sm text-slate-600 flex gap-2">
                      <CheckCircle2 size={16} className="text-indigo-400 flex-shrink-0" /> Photography is strong (authentic), but not prominent enough.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'diagnosis':
        return (
          <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionHeader badge="Diagnostic Assessment" title="Current Market Position" subtitle="An honest audit of strengths, weaknesses, and the critical competitive landscape." />

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2 bg-rose-50 border border-rose-200 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-start relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200 rounded-full blur-[80px] opacity-60 -translate-y-1/2 translate-x-1/3"></div>
                <div className="bg-white p-4 rounded-xl shadow-sm text-rose-600 z-10 shrink-0">
                  <AlertTriangle size={32} />
                </div>
                <div className="z-10">
                  <h3 className="text-xl font-bold text-rose-900 mb-2">Critical Threat: Brand Confusion</h3>
                  <p className="text-rose-800 text-sm leading-relaxed mb-4">
                    <strong>Hearts of Zagreb</strong> is a <em>direct competitor</em>, not a subsidiary brand. Both entities operate from the identical venue at <strong>Hrvatska kuća</strong>. Negative reviews for the competitor (e.g., "Very bad experience" on Viator) inadvertently damage EtnoSphere's premium intent.
                  </p>
                  <div className="inline-block px-3 py-1 bg-rose-100 text-rose-800 text-xs font-bold rounded-full border border-rose-200">
                    Priority #1: Aggressive Differentiation
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <MessageSquare size={18} /> Brand Voice Audit
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-[10px] font-bold uppercase text-slate-400 mb-1">Current Perception</div>
                    <div className="text-sm font-medium text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100 italic">"Corporate, Archaic, Preservationist, Service Provider"</div>
                  </div>
                  <div className="flex justify-center text-slate-300">
                    <ArrowRight size={16} className="rotate-90" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase text-indigo-500 mb-1">Desired Perception</div>
                    <div className="text-sm font-bold text-indigo-900 bg-indigo-50 p-3 rounded-lg border border-indigo-100">"Experiential, Authentic, Destination, The 'Night Out'"</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-emerald-100 pb-4">
                  <div className="bg-emerald-100 text-emerald-700 p-2 rounded-lg">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900">Strengths to Amplify</h3>
                </div>
                <div className="space-y-4">
                  <ExpandableText title="Unmatched Authenticity" icon={Star} accentColor="emerald" defaultOpen={true}>
                    <p>The ability to draw on genuine folklore, "grandmothers' recipes," and credible performers is a powerful differentiator. Strong, authentic photography already signals "this is real," helping to overcome the hardest trust hurdle in tourism.</p>
                  </ExpandableText>
                  <ExpandableText title="Unique Historic Venue" icon={MapPin} accentColor="emerald">
                    <p>The use of <strong>Hrvatska kuća</strong> offers a museum-like, deeply atmospheric setting that generic restaurants cannot replicate. It provides a stronger stage for premium positioning than a typical dining room.</p>
                  </ExpandableText>
                  <ExpandableText title="Inherent B2B Flexibility" icon={Briefcase} accentColor="emerald">
                    <p>The core operational model is adaptable, allowing for customization for high-value corporate and incentive groups, both on-site and at external venues. This scalability is a key revenue engine.</p>
                  </ExpandableText>
                  <ExpandableText title="Visual Assets" icon={Eye} accentColor="emerald">
                    <p>Distinctive logo mark and recognisable theme. The logo has genuine character and craft cues; it is a strong anchor for a premium brand world if the rest of the system catches up.</p>
                  </ExpandableText>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-amber-100 pb-4">
                  <div className="bg-amber-100 text-amber-700 p-2 rounded-lg">
                    <AlertTriangle size={24} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900">Weaknesses to Address</h3>
                </div>
                <div className="space-y-4">
                  <ExpandableText title="High-Friction Booking Process" icon={Lock} accentColor="amber" defaultOpen={true}>
                    <p>The current lack of a modern, transactional website with instant online booking is a major conversion killer. Contact is phone/email only, which is a massive drop-off driver for mobile-first international guests.</p>
                  </ExpandableText>
                  <ExpandableText title="Dated Digital Presentation" icon={Smartphone} accentColor="amber">
                    <p>The current web presence reads like a printed leaflet uploaded to the web (texture, poster-like layout). This signals low digital investment, undermining B2B credibility. Contact details are not consistently "actionable" (click-to-call).</p>
                  </ExpandableText>
                  <ExpandableText title="Weak Trust Architecture" icon={ShieldCheck} accentColor="amber">
                    <p>Reviews, press, "trusted by", and proof inventory are not surfaced prominently on-site. This increases "tourist trap" fear and hurts agency confidence.</p>
                  </ExpandableText>
                  <ExpandableText title="Vague Positioning" icon={Target} accentColor="amber">
                    <p>The brand does not make the product unmistakable in 5 seconds (is it a ticketed show? a troupe for hire?). Key decision facts like duration, pricing, and inclusions are missing or not scannable.</p>
                  </ExpandableText>
                </div>
              </div>
            </div>

            {/* Competitor Table */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="px-8 py-8 border-b border-slate-100 bg-slate-50/50">
                <h3 className="font-bold text-xl text-slate-900 font-serif">Competitor Map</h3>
                <p className="text-slate-500 text-sm mt-1">Understanding the landscape to identify the gap.</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50 font-bold tracking-wider">
                    <tr>
                      <th className="px-8 py-4">Competitor</th>
                      <th className="px-6 py-4">Positioning</th>
                      <th className="px-6 py-4">Strengths</th>
                      <th className="px-6 py-4">Critical Weakness</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-5 font-bold text-slate-900">Hearts of Zagreb</td>
                      <td className="px-6 py-5"><span className="inline-block px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-bold">Direct Competitor</span></td>
                      <td className="px-6 py-5 text-slate-600">Strong workshop focus; same location.</td>
                      <td className="px-6 py-5 text-rose-600 font-medium">Volatile reviews; no dinner; cash-only friction.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-5 font-bold text-slate-900">Okrugljak</td>
                      <td className="px-6 py-5"><span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-bold">Indirect</span></td>
                      <td className="px-6 py-5 text-slate-600">Elite reputation; deep heritage; high-end clientele.</td>
                      <td className="px-6 py-5 text-slate-600">Suburban location requires taxi; prohibitively expensive.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-5 font-bold text-slate-900">Vinodol</td>
                      <td className="px-6 py-5"><span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-bold">Indirect</span></td>
                      <td className="px-6 py-5 text-slate-600">Central; high volume; consistent food quality.</td>
                      <td className="px-6 py-5 text-slate-600">No costumes/storytelling; high ambient noise.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-5 font-bold text-slate-900">LADO Ensemble</td>
                      <td className="px-6 py-5"><span className="inline-block px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs font-bold">Benchmark</span></td>
                      <td className="px-6 py-5 text-slate-600">The National "Gold Standard" for artistry.</td>
                      <td className="px-6 py-5 text-slate-600">Performs infrequently; inaccessible to spontaneous tourists.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'strategy':
        return (
          <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionHeader badge="The Roadmap" title="Strategic Pathways" subtitle="Three distinct options for growth were analyzed. One clear recommendation emerged." />

            <div className="grid lg:grid-cols-3 gap-8 items-start mb-12">
              <StrategyCard type="Path A" title="Premium B2B Partner" focus="Prioritise becoming the go-to provider for high-margin DMCs, MICE, and corporate events." details={{ action: "Partner Portal & Site Inspections" }} risk="Long sales cycles; Dependency on small # of agents." recommended={false} rationale="Targets the highest-spending segment and builds on existing B2B inclinations. Creates a defensible niche with less reliance on digital channels." tradeOffs="Ignores the massive volume of FIT tourists; Slow cash-flow generation due to B2B payment terms." validation={["Number of proposals sent to DMCs", "Conversion rate of B2B enquiries", "Average booking value per group", "Repeat business %"]} />
              <StrategyCard type="Path C" title="Hybrid Destination Brand" focus="Establish EtnoSphere as the definitive 'Night Out' cultural experience in Zagreb for all segments." details={{ action: "Blended Brand Building" }} risk="Complex execution; requires multi-channel mgmt." recommended={true} rationale="Creates the most resilient business. A strong B2C brand creates 'pull' demand that makes B2B sales easier ('Our delegates are asking for that famous show'). Aligns with the goal of becoming a destination asset." tradeOffs="Requires investment in both B2B relationship management AND B2C digital marketing simultaneously." validation={["Growth in B2C booking volume", "Growth in B2B sales pipeline", "Brand-name search volume (Brand Equity)", "Blended yield per seat"]} />
              <StrategyCard type="Path B" title="B2C Volume Leader" focus="Maximise visibility and revenue from individual leisure travellers (FITs) via OTAs." details={{ action: "OTA Dominance & Instant Booking" }} risk="High commissions (20-25%); Price sensitivity." recommended={false} rationale="Taps into the largest volume segment (FITs) and leverages the marketing power of global platforms like Viator/GetYourGuide." tradeOffs="Erodes margin due to high commissions; exposes brand to direct price comparison wars." validation={["Weekly B2C booking volume", "Ranking on TripAdvisor/Viator", "Direct website conversion rate", "CAC per booking"]} />
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 mb-12">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Tactical Execution Matrix</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { category: "Digital", title: "Transactional Website", text: "Replace brochure-ware with instant booking engine. Add Trust Modules." },
                  { category: "B2B", title: "Partner Portal", text: "Password-protected area with net rates & assets for DMCs." },
                  { category: "Product", title: "Tiered Pricing", text: "Standard vs Premium (All-inclusive) packages to max yield." },
                  { category: "Sales", title: "OTA Integration", text: "Launch on Viator/GetYourGuide with 24hr availability." },
                  { category: "Brand", title: "Consolidation", text: "Resolve 'Hearts of Zagreb' confusion immediately." },
                  { category: "Outreach", title: "Industry Nights", text: "Site inspection offensive for Hotel Concierges." },
                  { category: "Content", title: "Proof Inventory", text: "Gather and display high-quality reviews and press logos." },
                  { category: "Ops", title: "Customer Service", text: "Implement WhatsApp/Live Chat for instant international support." },
                  { category: "Legal", title: "IP Protection", text: "Secure trademarks to prevent further competitor encroachment." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-500 mb-2">{item.category}</div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-snug">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <RevenueCalculator />
          </div>
        );

      case 'metrics':
        return (
          <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionHeader badge="Validation" title="Balanced Scorecard" subtitle="Measuring success across the recommended Hybrid Path (Path C) using Leading and Lagging indicators." />

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center group">
                <div className="inline-flex p-4 rounded-2xl bg-indigo-50 text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <PieChart size={32} />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-2 font-serif">B2C Volume</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">Weekly growth in booking volume across all direct and OTA channels.</p>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-indigo-500 h-full w-3/4 rounded-full"></div>
                </div>
                <div className="mt-4 text-xs font-bold text-indigo-600 uppercase tracking-widest">Target: Consistent Growth</div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center group">
                <div className="inline-flex p-4 rounded-2xl bg-emerald-50 text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Briefcase size={32} />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-2 font-serif">B2B Pipeline</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">Number of qualified leads, proposals sent, and conversion rate.</p>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-emerald-500 h-full w-1/2 rounded-full"></div>
                </div>
                <div className="mt-4 text-xs font-bold text-emerald-600 uppercase tracking-widest">Target: Pipeline Velocity</div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center group">
                <div className="inline-flex p-4 rounded-2xl bg-purple-50 text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Target size={32} />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-2 font-serif">Brand Equity</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">Tracking "Brand-Name" search volume (e.g. "EtnoSphere Zagreb") to measure pull.</p>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-purple-500 h-full w-2/3 rounded-full"></div>
                </div>
                <div className="mt-4 text-xs font-bold text-purple-600 uppercase tracking-widest">Target: Market Recognition</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Clock size={20} className="text-amber-500" /> Leading Indicators
                </h4>
                <p className="text-sm text-slate-500 mb-4">Predictive metrics that signal future health.</p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
                    Web Traffic & Search Volume
                  </li>
                  <li className="flex gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
                    Social Engagement Rate
                  </li>
                  <li className="flex gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
                    Number of B2B Site Inspections
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <BarChart3 size={20} className="text-blue-500" /> Lagging Indicators
                </h4>
                <p className="text-sm text-slate-500 mb-4">Outcome metrics that confirm success.</p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                    Total Revenue & Yield per Seat
                  </li>
                  <li className="flex gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                    Net Promoter Score (NPS)
                  </li>
                  <li className="flex gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                    CAC (Customer Acquisition Cost)
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                <div>
                  <span className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-indigo-200 text-xs font-bold uppercase tracking-widest mb-4">Executive Decision</span>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold leading-tight">Final Recommendation</h3>
                </div>
                <p className="text-lg text-indigo-100/80 leading-relaxed">
                  Commit to <strong>Path C</strong>. By solving the "Evening Gap" and positioning as the accessible "Dinner Theater" to LADO's "Broadway," EtnoSphere creates a high-value, long-term brand asset.
                </p>
                <button onClick={() => setActiveSection('executive')} className="bg-white text-indigo-950 px-10 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all hover:scale-105 shadow-lg">
                  Return to Executive Summary
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 font-sans text-slate-800 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Sticky Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setActiveSection('executive')}>
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg group-hover:rotate-3 transition-transform">
              E
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-900 tracking-tight leading-none">EtnoSphere</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Strategic OS</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2 bg-slate-100/50 p-1.5 rounded-xl border border-slate-200/50">
            {navItems.map(item => (
              <NavButton key={item.id} active={activeSection === item.id} onClick={() => setActiveSection(item.id)} icon={item.icon}>
                {item.label}
              </NavButton>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 shadow-xl animate-in slide-in-from-top-5">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl text-sm font-bold transition-colors ${activeSection === item.id ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-20">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm gap-4">
        <p>© 2024 EtnoSphere Strategic Planning. Confidential.</p>
        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-100">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div> Live Document v2.4
        </div>
      </footer>
    </div>
  );
}
