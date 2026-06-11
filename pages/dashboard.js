import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const stats = [
  { label: 'Total Revenue', value: '$128.4K', change: '+18.3%', detail: 'vs last month' },
  { label: 'New Users', value: '3,214', change: '+12.1%', detail: 'this week' },
  { label: 'Products Sold', value: '1,042', change: '+9.7%', detail: 'in 30 days' },
  { label: 'Customer Rating', value: '4.9/5', change: '+0.2%', detail: 'average score' },
]

const areaData = [
  { month: 'Jan', sales: 4200, leads: 2400 },
  { month: 'Feb', sales: 5300, leads: 2100 },
  { month: 'Mar', sales: 6100, leads: 2900 },
  { month: 'Apr', sales: 7200, leads: 3400 },
  { month: 'May', sales: 8800, leads: 4200 },
  { month: 'Jun', sales: 9700, leads: 5000 },
  { month: 'Jul', sales: 10400, leads: 5600 },
]

const trafficData = [
  { name: 'Organic', value: 56 },
  { name: 'Paid', value: 22 },
  { name: 'Referral', value: 14 },
  { name: 'Social', value: 8 },
]

const barData = [
  { week: 'W1', visitors: 4200, sessions: 3200 },
  { week: 'W2', visitors: 5200, sessions: 4100 },
  { week: 'W3', visitors: 6100, sessions: 4600 },
  { week: 'W4', visitors: 7000, sessions: 5200 },
]

const transactions = [
  { id: 'TRX-0018', customer: 'Aurora Ray', amount: '$1,342', status: 'Completed' },
  { id: 'TRX-0021', customer: 'Miles Foster', amount: '$924', status: 'Pending' },
  { id: 'TRX-0027', customer: 'Sienna Cole', amount: '$2,180', status: 'Completed' },
  { id: 'TRX-0032', customer: 'Noah Banks', amount: '$678', status: 'Refunded' },
]

const navItems = [
  { label: 'Overview', active: true },
  { label: 'Analytics' },
  { label: 'Sales' },
  { label: 'Messages' },
  { label: 'Settings' },
]

const COLORS = ['#7c3aed', '#2563eb', '#22c55e', '#f97316']

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-[1600px] px-6 py-8">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.8)] backdrop-blur-xl">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-violet-300/80">Analytics</p>
                <h1 className="mt-2 text-3xl font-semibold text-white">Studio Board</h1>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-300 ring-1 ring-violet-500/20">
                S
              </div>
            </div>

            <div className="space-y-1 rounded-3xl bg-slate-950/80 p-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm transition ${
                    item.active
                      ? 'bg-violet-500/10 text-violet-100 shadow-[0_10px_30px_-20px_rgba(124,58,237,0.9)]'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}>
                  <span>{item.label}</span>
                  {item.active ? <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-[10px] uppercase tracking-[0.25em] text-violet-200">Active</span> : null}
                </button>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-5 shadow-xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Growth Summary</p>
              <p className="mt-4 text-2xl font-semibold text-white">+24.7%</p>
              <p className="mt-2 text-sm text-slate-400">Higher engagement across campaigns and product launches.</p>
              <button className="mt-6 inline-flex rounded-2xl bg-violet-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
                View insights
              </button>
            </div>
          </aside>

          <section className="space-y-6">
            <header className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.8)] backdrop-blur-xl">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-violet-300/80">Dashboard</p>
                  <h2 className="mt-2 text-4xl font-semibold text-white">Overview</h2>
                  <p className="mt-2 max-w-2xl text-sm text-slate-400">Performance trends, active campaigns, and pipeline analytics in one place.</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-300">
                    Jun 1 - Jun 30, 2026
                  </div>
                  <button className="rounded-2xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-violet-500/20 transition hover:bg-violet-400">
                    Create report
                  </button>
                </div>
              </div>
            </header>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <article key={item.label} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.8)] transition hover:-translate-y-0.5 hover:bg-slate-900">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                      <p className="mt-4 text-3xl font-semibold text-white">{item.value}</p>
                    </div>
                    <div className="rounded-2xl bg-violet-500/10 px-3 py-2 text-sm font-semibold text-violet-200">{item.change}</div>
                  </div>
                  <p className="mt-4 text-sm text-slate-400">{item.detail}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-4 xl:grid-cols-[1.75fr_1fr]">
              <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.8)]">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Sales Trend</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">Monthly revenue</h3>
                  </div>
                  <div className="rounded-2xl bg-slate-950/80 px-4 py-2 text-sm text-slate-300">+14.8% vs previous month</div>
                </div>
                <div className="h-[320px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={areaData} margin={{ top: 0, right: 0, left: -16, bottom: 0 }}>
                      <defs>
                        <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.35} />
                          <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid stroke="#334155" strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" stroke="#94a3b8" tickLine={false} axisLine={false} />
                      <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                      <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: 16, border: '1px solid rgba(148,163,184,0.15)' }} />
                      <Area type="monotone" dataKey="sales" stroke="#8b5cf6" fill="url(#salesGradient)" strokeWidth={3} activeDot={{ r: 6 }} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </article>

              <article className="grid gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.8)]">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Traffic sources</p>
                  <h3 className="text-2xl font-semibold text-white">Visitor distribution</h3>
                </div>
                <div className="h-[260px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={trafficData} innerRadius={72} outerRadius={112} dataKey="value" stroke="transparent">
                        {trafficData.map((entry, index) => (
                          <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: 16, border: '1px solid rgba(148,163,184,0.15)' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-3 rounded-3xl bg-slate-950/70 p-4">
                  {trafficData.map((item, index) => (
                    <div key={item.name} className="flex items-center justify-between gap-3 text-sm">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-3.5 w-3.5 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                        <span className="text-slate-300">{item.name}</span>
                      </div>
                      <span className="font-semibold text-white">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <div className="grid gap-4 xl:grid-cols-[1.4fr_0.9fr]">
              <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.8)]">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Weekly overview</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">Visitor engagement</h3>
                  </div>
                  <div className="rounded-2xl bg-slate-950/70 px-4 py-2 text-sm text-slate-300">Last 7 days</div>
                </div>
                <div className="h-[260px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData} margin={{ top: 0, right: 0, left: -16, bottom: 0 }}>
                      <CartesianGrid stroke="#334155" strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="week" stroke="#94a3b8" tickLine={false} axisLine={false} />
                      <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                      <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: 16, border: '1px solid rgba(148,163,184,0.15)' }} />
                      <Legend wrapperStyle={{ color: '#94a3b8' }} />
                      <Bar dataKey="visitors" fill="#6366f1" radius={[10, 10, 0, 0]} barSize={18} />
                      <Bar dataKey="sessions" fill="#22c55e" radius={[10, 10, 0, 0]} barSize={18} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </article>

              <article className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.8)]">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Active campaigns</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">Campaign performance</h3>
                </div>
                <div className="space-y-3">
                  <div className="rounded-3xl bg-slate-950/70 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm text-slate-300">Email campaigns</p>
                      <span className="text-sm font-semibold text-white">78%</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full rounded-full bg-violet-500" style={{ width: '78%' }} />
                    </div>
                  </div>
                  <div className="rounded-3xl bg-slate-950/70 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm text-slate-300">Social ads</p>
                      <span className="text-sm font-semibold text-white">64%</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full rounded-full bg-sky-500" style={{ width: '64%' }} />
                    </div>
                  </div>
                  <div className="rounded-3xl bg-slate-950/70 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm text-slate-300">Product launches</p>
                      <span className="text-sm font-semibold text-white">92%</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full rounded-full bg-emerald-500" style={{ width: '92%' }} />
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.8)]">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Transactions</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">Recent activity</h3>
                </div>
                <button className="rounded-2xl bg-slate-950/70 px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
                  View all
                </button>
              </div>
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70">
                <table className="w-full min-w-[600px] divide-y divide-slate-800 text-sm text-slate-300">
                  <thead className="bg-slate-950/90 text-slate-400">
                    <tr>
                      <th className="px-6 py-4 text-left">Transaction ID</th>
                      <th className="px-6 py-4 text-left">Customer</th>
                      <th className="px-6 py-4 text-left">Amount</th>
                      <th className="px-6 py-4 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {transactions.map((tx) => (
                      <tr key={tx.id} className="transition hover:bg-white/5">
                        <td className="px-6 py-4 font-medium text-white">{tx.id}</td>
                        <td className="px-6 py-4">{tx.customer}</td>
                        <td className="px-6 py-4">{tx.amount}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                            tx.status === 'Completed'
                              ? 'bg-emerald-500/15 text-emerald-300'
                              : tx.status === 'Pending'
                              ? 'bg-amber-500/15 text-amber-300'
                              : 'bg-red-500/15 text-red-300'
                          }`}>
                            {tx.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          </section>
        </div>
      </div>
    </main>
  )
}
