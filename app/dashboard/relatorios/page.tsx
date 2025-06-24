"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Download, BarChart2, PieChart, LineChart, TrendingUp, TrendingDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Relatorios() {
  const [period, setPeriod] = useState("month")
  const [product, setProduct] = useState("all")

  // Dados simulados para os gráficos
  const usageData = {
    week: [65, 75, 70, 90, 85, 60, 70],
    month: [
      65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40,
    ],
    year: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
  }

  const productUsage = [
    { name: "Get Assistant", usage: 78, color: "bg-blue-500" },
    { name: "Get Files", usage: 45, color: "bg-green-500" },
  ]

  const costBreakdown = [
    { name: "Get Assistant", cost: 87.9, percentage: 64, color: "bg-blue-500" },
    { name: "Get Files", cost: 49.97, percentage: 36, color: "bg-green-500" },
  ]

  const usageMetrics = [
    {
      name: "Consultas de IA",
      current: 1245,
      previous: 980,
      change: 27,
      trend: "up",
    },
    {
      name: "Documentos Processados",
      current: 387,
      previous: 412,
      change: 6,
      trend: "down",
    },
    {
      name: "Tempo Economizado",
      current: "42h",
      previous: "35h",
      change: 20,
      trend: "up",
    },
    {
      name: "ROI Estimado",
      current: "R$ 4.500",
      previous: "R$ 3.800",
      change: 18,
      trend: "up",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Cabeçalho da página */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Relatórios e Análises</h1>
          <p className="text-slate-300">Insights detalhados sobre o uso dos seus produtos</p>
        </div>
        <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
          <Select value={product} onValueChange={setProduct}>
            <SelectTrigger className="w-[180px] bg-slate-800 border-slate-700 text-white">
              <SelectValue placeholder="Selecionar produto" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700 text-white">
              <SelectItem value="all">Todos os produtos</SelectItem>
              <SelectItem value="assistant">Get Assistant</SelectItem>
              <SelectItem value="files">Get Files</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-700">
            <Calendar className="mr-2 h-4 w-4" />
            Período
          </Button>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Métricas principais - Layout com altura fixa para badges */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {usageMetrics.map((metric, index) => (
          <Card key={index} className="bg-slate-800 border-slate-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-300">{metric.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold text-white">{metric.current}</div>
              <div className="text-sm text-slate-300">vs. período anterior</div>
              <div className="min-h-[24px] flex items-end">
                <Badge
                  className={`${
                    metric.trend === "up"
                      ? "bg-green-600/20 text-green-400 border-green-600/30"
                      : "bg-red-600/20 text-red-400 border-red-600/30"
                  }`}
                >
                  {metric.trend === "up" ? (
                    <TrendingUp className="mr-1 h-3 w-3" />
                  ) : (
                    <TrendingDown className="mr-1 h-3 w-3" />
                  )}
                  {metric.change}%
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Gráfico de uso */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle className="text-white">Análise de Uso</CardTitle>
            <CardDescription className="text-slate-300">Monitoramento de uso ao longo do tempo</CardDescription>
          </div>
          <Tabs defaultValue="month" value={period} onValueChange={setPeriod} className="mt-4 md:mt-0">
            <TabsList className="bg-slate-700">
              <TabsTrigger value="week" className="data-[state=active]:bg-blue-600 text-slate-300">
                Semana
              </TabsTrigger>
              <TabsTrigger value="month" className="data-[state=active]:bg-blue-600 text-slate-300">
                Mês
              </TabsTrigger>
              <TabsTrigger value="year" className="data-[state=active]:bg-blue-600 text-slate-300">
                Ano
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full overflow-hidden">
            {/* Gráfico com container que previne overflow */}
            <div className="h-full w-full flex items-end justify-between space-x-1 px-2">
              {usageData[period as keyof typeof usageData].slice(0, 28).map((value, index) => (
                <div key={index} className="flex flex-col items-center space-y-1 flex-1 min-w-0">
                  <div className="text-xs text-slate-400 mb-1 truncate">{value}%</div>
                  <div
                    className="bg-blue-500 rounded-t-md w-full min-h-[20px] relative group cursor-pointer hover:bg-blue-400 transition-colors"
                    style={{ height: `${Math.max(value * 2.5, 20)}px` }}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {value}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between text-xs text-slate-400 px-2">
              {period === "week" && (
                <>
                  <span>Seg</span>
                  <span>Ter</span>
                  <span>Qua</span>
                  <span>Qui</span>
                  <span>Sex</span>
                  <span>Sáb</span>
                  <span>Dom</span>
                </>
              )}
              {period === "month" && (
                <>
                  <span>01</span>
                  <span>05</span>
                  <span>10</span>
                  <span>15</span>
                  <span>20</span>
                  <span>25</span>
                  <span>30</span>
                </>
              )}
              {period === "year" && (
                <>
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>Mai</span>
                  <span>Jul</span>
                  <span>Set</span>
                  <span>Nov</span>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Uso por produto e distribuição de custos */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Uso por produto */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Uso por Produto</CardTitle>
            <CardDescription className="text-slate-300">Utilização de cada produto ativo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {productUsage.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-medium">{item.name}</span>
                    <span className="text-white font-bold">{item.usage}%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.usage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gráfico de pizza simulado */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 rounded-full border-8 border-blue-500"></div>
                <div
                  className="absolute inset-0 rounded-full border-8 border-transparent border-t-green-500 border-r-green-500"
                  style={{ transform: "rotate(140deg)" }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">2</div>
                    <div className="text-sm text-slate-300">Produtos</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Distribuição de custos */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Distribuição de Custos</CardTitle>
            <CardDescription className="text-slate-300">Como seus gastos estão distribuídos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {costBreakdown.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-medium">{item.name}</span>
                    <span className="text-white font-bold">R$ {item.cost.toFixed(2)}</span>
                  </div>
                  <div className="h-3 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.percentage}%` }}></div>
                  </div>
                  <div className="text-sm text-slate-300 mt-2">{item.percentage}% do total</div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-slate-700/50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-medium text-white">Total Mensal</span>
                <span className="text-xl font-bold text-blue-400">R$ 137,87</span>
              </div>
              <div className="text-sm text-slate-300 mt-1">Próxima cobrança em 15/07/2025</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Relatórios disponíveis */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Relatórios Disponíveis</CardTitle>
          <CardDescription className="text-slate-300">Baixe relatórios detalhados para análise</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-blue-500/50 transition-colors cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-600 rounded-lg flex-shrink-0">
                  <BarChart2 className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white mb-2">Relatório de Uso Detalhado</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">Análise completa de uso por produto</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-blue-500/50 transition-colors cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-600 rounded-lg flex-shrink-0">
                  <PieChart className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white mb-2">Análise de Custos</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">Distribuição detalhada de gastos</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-blue-500/50 transition-colors cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-600 rounded-lg flex-shrink-0">
                  <LineChart className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white mb-2">Tendências de Performance</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">Evolução de métricas ao longo do tempo</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Insights e recomendações */}
      <Card className="bg-gradient-to-r from-blue-900/50 to-slate-800 border-slate-700">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <Badge className="mb-4 bg-blue-600/20 text-blue-400 border-blue-600/30">Insights</Badge>
              <h2 className="text-2xl font-bold mb-4 text-white">Recomendações Baseadas em IA</h2>
              <div className="space-y-4">
                <div className="p-4 bg-slate-800/50 rounded-lg">
                  <h3 className="font-medium mb-2 text-white">💡 Oportunidade de Otimização</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Seu uso do Get Assistant aumentou 27% este mês. Considere fazer upgrade para o plano Pro para
                    desbloquear recursos avançados.
                  </p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg">
                  <h3 className="font-medium mb-2 text-white">📊 Análise de Tendência</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Com base no seu padrão de uso, você pode economizar R$ 200/mês migrando para um plano anual.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="p-6 bg-blue-900/30 rounded-full">
                <TrendingUp className="h-24 w-24 text-blue-400" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
