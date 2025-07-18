"use client"

import { useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  TrendingUp,
  Users,
  Clock,
  Calendar,
  BarChart2,
  PieChart,
  ChevronRight,
  Download,
  FileText,
  Bot,
  Brain,
  UsersRound,
} from "lucide-react"

export default function Dashboard() {
  const [period, setPeriod] = useState("month")

  // Dados simulados para os gráficos
  const chartData = {
    week: [
      { day: "Seg", usage: 65 },
      { day: "Ter", usage: 75 },
      { day: "Qua", usage: 70 },
      { day: "Qui", usage: 90 },
      { day: "Sex", usage: 85 },
      { day: "Sáb", usage: 60 },
      { day: "Dom", usage: 70 },
    ],
    month: Array.from({ length: 30 }, (_, i) => ({
      day: (i + 1).toString().padStart(2, '0'),
      usage: Math.floor(Math.random() * (90 - 40 + 1)) + 40,
    })),
    year: [
      { day: "Jan", usage: 65 },
      { day: "Fev", usage: 59 },
      { day: "Mar", usage: 80 },
      { day: "Abr", usage: 81 },
      { day: "Mai", usage: 56 },
      { day: "Jun", usage: 55 },
      { day: "Jul", usage: 40 },
      { day: "Ago", usage: 65 },
      { day: "Set", usage: 59 },
      { day: "Out", usage: 80 },
      { day: "Nov", usage: 81 },
      { day: "Dez", usage: 56 },
    ],
  }

  const chartConfig = {
    usage: {
      label: "Uso (%)",
      color: "hsl(221, 83%, 53%)", // Cor do gráfico ajustada para azul
    },
  }

  const activeProducts = [
    {
      name: "Get Assistant",
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      status: "Ativo",
      price: "R$ 87,90/mês",
      nextBilling: "15/07/2025",
      usage: 78,
    },
    {
      name: "Get Files",
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      status: "Ativo",
      price: "R$ 49,97/mês",
      nextBilling: "15/07/2025",
      usage: 45,
    },
  ]

  const recommendedProducts = [
    {
      name: "Get SDR",
      icon: <Bot className="w-8 h-8 text-blue-500" />,
      description: "IA de atendimento especializada para WhatsApp que converte leads e automatiza vendas 24/7.",
      price: "R$ 199,97/mês",
    },
    {
      name: "Get Group",
      icon: <UsersRound className="w-8 h-8 text-blue-500" />,
      description: "IA inteligente para resumir automaticamente conversas de grupos do WhatsApp.",
      price: "R$ 4,97/semana",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Cabeçalho da página */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-slate-300">Bem-vindo de volta, Daniel!</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Download className="mr-2 h-4 w-4" />
            Exportar Relatório
          </Button>
        </div>
      </div>

      {/* Cards de métricas */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-300">Uso Total</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-3xl font-bold text-white">78%</div>
            <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full rounded-full" style={{ width: "78%" }}></div>
            </div>
            <div className="min-h-[24px] flex items-end">
              <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
                <TrendingUp className="mr-1 h-3 w-3" />
                +12%
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-300">Produtos Ativos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-3xl font-bold text-white">2</div>
            <div className="text-sm text-slate-300">5 produtos disponíveis no total</div>
            <div className="min-h-[24px] flex items-end">
              <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30">
                <Users className="mr-1 h-3 w-3" />
                Básico
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-300">Próxima Cobrança</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-3xl font-bold text-white">R$ 137,87</div>
            <div className="text-sm text-slate-300">15/07/2025</div>
            <div className="min-h-[24px] flex items-end">
              <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30">
                <Clock className="mr-1 h-3 w-3" />
                Em 15 dias
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-300">Economia Mensal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-3xl font-bold text-white">R$ 450,00</div>
            <div className="text-sm text-slate-300">Comparado a soluções tradicionais</div>
            <div className="min-h-[24px] flex items-end">
              <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
                <TrendingUp className="mr-1 h-3 w-3" />
                +32%
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráfico de uso - Com Recharts */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle className="text-white">Análise de Uso</CardTitle>
            <CardDescription className="text-slate-300">Monitoramento de uso dos seus produtos</CardDescription>
          </div>
          <Tabs defaultValue="month" value={period} onValueChange={setPeriod} className="mt-4 md:mt-0">
            <TabsList className="bg-slate-200 text-slate-900">
              <TabsTrigger value="week" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Semana
              </TabsTrigger>
              <TabsTrigger value="month" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Mês
              </TabsTrigger>
              <TabsTrigger value="year" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Ano
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-80 w-full">
            <BarChart
              accessibilityLayer
              data={chartData[period as keyof typeof chartData]}
              margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Bar dataKey="usage" fill="var(--color-usage)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Produtos ativos e recomendados */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Produtos Ativos</CardTitle>
            <CardDescription className="text-slate-300">Gerencie suas assinaturas atuais</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {activeProducts.map((product, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-slate-700 rounded-lg flex-shrink-0">{product.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-medium text-white">{product.name}</h3>
                        <Badge className="bg-green-600/20 text-green-400 border-green-600/30 text-xs">
                          {product.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-slate-300 mb-1">{product.price}</div>
                    </div>
                  </div>
                  <div className="pl-16">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">Próxima cobrança</span>
                      <div className="flex items-center text-slate-300">
                        <Calendar className="mr-1 h-3 w-3 text-slate-400" />
                        <span>{product.nextBilling}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
              Gerenciar Assinaturas
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Produtos Recomendados</CardTitle>
            <CardDescription className="text-slate-300">Com base no seu perfil de uso</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recommendedProducts.map((product, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-slate-700 rounded-lg flex-shrink-0">{product.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-white">{product.name}</h3>
                        <span className="font-medium text-blue-400 text-sm">{product.price}</span>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">{product.description}</p>
                    </div>
                  </div>
                  <div className="pl-16">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
              Ver Todos os Produtos
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Relatórios e Insights */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Relatórios e Insights</CardTitle>
          <CardDescription className="text-slate-300">Análises detalhadas do seu uso</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-blue-500/50 transition-colors cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-600 rounded-lg flex-shrink-0">
                  <BarChart2 className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white mb-2">Relatório de Uso</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">Análise detalhada do uso de cada produto</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-blue-500/50 transition-colors cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-600 rounded-lg flex-shrink-0">
                  <PieChart className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white mb-2">Distribuição de Custos</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Visualize como seus gastos estão distribuídos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}