"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Download, BarChart2, PieChart, LineChart, TrendingUp, TrendingDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RelatoriosPage() {
  const [period, setPeriod] = useState("month")
  const [product, setProduct] = useState("all")

  // Dados simulados
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
    { name: "Consultas de IA", current: 1245, previous: 980, change: 27, trend: "up" },
    { name: "Documentos Processados", current: 387, previous: 412, change: 6, trend: "down" },
    { name: "Tempo Economizado", current: "42h", previous: "35h", change: 20, trend: "up" },
    { name: "ROI Estimado", current: "R$ 4.500", previous: "R$ 3.800", change: 18, trend: "up" },
  ]

  return (
    <div className="space-y-8">
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
                <Badge className={`${metric.trend === "up" ? "bg-green-600/20 text-green-400 border-green-600/30" : "bg-red-600/20 text-red-400 border-red-600/30"}`}>
                  {metric.trend === "up" ? <TrendingUp className="mr-1 h-3 w-3" /> : <TrendingDown className="mr-1 h-3 w-3" />}
                  {metric.change}%
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle className="text-white">Análise de Uso</CardTitle>
            <CardDescription className="text-slate-300">Monitoramento de uso ao longo do tempo</CardDescription>
          </div>
          <Tabs defaultValue="month" value={period} onValueChange={setPeriod} className="mt-4 md:mt-0">
            <TabsList className="bg-slate-800">
              <TabsTrigger value="week" className="text-slate-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white">Semana</TabsTrigger>
              <TabsTrigger value="month" className="text-slate-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white">Mês</TabsTrigger>
              <TabsTrigger value="year" className="text-slate-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white">Ano</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full overflow-hidden">
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
              {/* ... labels do eixo X do gráfico ... */}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}