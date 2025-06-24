"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, FileText, Bot, Brain, UsersRound, Wrench, CheckCircle, Star, ArrowRight, Mic } from "lucide-react"

export default function Marketplace() {
  const [category, setCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const products = [
    {
      id: "prod_1",
      name: "Get Assistant",
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      description: "Assistente de IA personalizado integrado à sua plataforma para suporte e automação inteligente.",
      price: "R$ 87,90/mês",
      category: "assistants",
      features: [
        "Interface conversacional natural",
        "Integração com múltiplas plataformas",
        "Aprendizado contínuo",
        "Personalização completa",
      ],
      rating: 4.8,
      reviews: 124,
      popular: true,
      status: "Ativo", // Já assinado
    },
    {
      id: "prod_2",
      name: "Get Files",
      icon: <FileText className="w-12 h-12 text-blue-500" />,
      description: "IA avançada para extrair, processar e organizar informações de documentos automaticamente.",
      price: "R$ 49,97/mês",
      category: "productivity",
      features: [
        "Extração automática de dados",
        "Suporte a múltiplos formatos",
        "OCR de alta precisão",
        "Classificação inteligente",
      ],
      rating: 4.6,
      reviews: 87,
      popular: false,
      status: "Ativo", // Já assinado
    },
    {
      id: "prod_3",
      name: "Get SDR",
      icon: <Bot className="w-12 h-12 text-blue-500" />,
      description: "IA de atendimento especializada para WhatsApp que converte leads e automatiza vendas 24/7.",
      price: "R$ 199,97/mês",
      category: "sales",
      features: [
        "Atendimento 24/7 automatizado",
        "Qualificação inteligente de leads",
        "Follow-up automático",
        "Integração com CRM",
      ],
      rating: 4.9,
      reviews: 156,
      popular: true,
      status: null, // Não assinado
    },
    {
      id: "prod_4",
      name: "Get Group",
      icon: <UsersRound className="w-12 h-12 text-blue-500" />,
      description: "IA inteligente para resumir automaticamente conversas de grupos do WhatsApp.",
      price: "R$ 4,97/semana",
      category: "communication",
      features: [
        "Resumos automáticos diários",
        "Identificação de tópicos principais",
        "Destaque de decisões importantes",
        "Filtros personalizáveis",
      ],
      rating: 4.5,
      reviews: 92,
      popular: false,
      status: null, // Não assinado
    },
    {
      id: "prod_5",
      name: "Get Build",
      icon: <Wrench className="w-12 h-12 text-blue-500" />,
      description:
        "Criação sob demanda de soluções de IA personalizadas para suas necessidades específicas de negócio.",
      price: "Reunião para decidir",
      category: "custom",
      features: [
        "Desenvolvimento personalizado",
        "Consultoria especializada",
        "Integração com sistemas existentes",
        "Treinamento da equipe",
      ],
      rating: 4.7,
      reviews: 45,
      popular: false,
      status: null, // Não assinado
    },
    {
      id: "prod_6",
      name: "Get Audio",
      icon: <Mic className="w-12 h-12 text-blue-500" />,
      description: "IA avançada para transcrever automaticamente áudios de WhatsApp com alta precisão e velocidade.",
      price: "R$ 39,90/mês",
      category: "productivity",
      features: [
        "Transcrição em tempo real",
        "Suporte a múltiplos idiomas",
        "Precisão de 98%+",
        "Integração direta com WhatsApp",
      ],
      rating: 4.4,
      reviews: 78,
      popular: false,
      status: null, // Não assinado
    },
  ]

  // Filtrar produtos por categoria e pesquisa
  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "all" || product.category === category
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="space-y-8">
      {/* Cabeçalho da página */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Marketplace</h1>
          <p className="text-slate-300">Descubra e adquira soluções de IA para seu negócio</p>
        </div>
      </div>

      {/* Filtros e pesquisa */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Buscar produtos..."
              className="pl-10 bg-slate-800 border-slate-700 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <Tabs defaultValue="all" value={category} onValueChange={setCategory} className="w-full md:w-auto">
          <TabsList className="bg-slate-800 w-full md:w-auto grid grid-cols-3 md:flex">
            <TabsTrigger value="all" className="data-[state=active]:bg-blue-600 text-slate-300">
              Todos
            </TabsTrigger>
            <TabsTrigger value="productivity" className="data-[state=active]:bg-blue-600 text-slate-300">
              Produtividade
            </TabsTrigger>
            <TabsTrigger value="assistants" className="data-[state=active]:bg-blue-600 text-slate-300">
              Assistentes
            </TabsTrigger>
            <TabsTrigger value="sales" className="data-[state=active]:bg-blue-600 text-slate-300">
              Vendas
            </TabsTrigger>
            <TabsTrigger value="communication" className="data-[state=active]:bg-blue-600 text-slate-300">
              Comunicação
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Lista de produtos - Layout melhorado */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="bg-slate-800 border-slate-700 overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-700 rounded-lg">{product.icon}</div>
                <div className="flex flex-col gap-2 min-h-[60px] justify-start">
                  {product.popular && (
                    <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30">
                      <Star className="mr-1 h-3 w-3" />
                      Popular
                    </Badge>
                  )}
                  {product.status && (
                    <Badge className="bg-green-600/20 text-green-400 border-green-600/30">{product.status}</Badge>
                  )}
                </div>
              </div>
              <CardTitle className="text-white text-lg">{product.name}</CardTitle>
              <CardDescription className="text-slate-300 leading-relaxed">{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-slate-600"}`}
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-400">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                <span className="font-bold text-blue-400">{product.price}</span>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-3 text-white">Principais recursos:</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-slate-300">
                      <CheckCircle className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="border-t border-slate-700 pt-4">
              {product.status ? (
                <Button
                  variant="outline"
                  className="w-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                >
                  Gerenciar Assinatura
                </Button>
              ) : (
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Ver Detalhes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-xl font-medium mb-2 text-white">Nenhum produto encontrado</h3>
          <p className="text-slate-300">Tente ajustar seus filtros ou termos de pesquisa</p>
        </div>
      )}

      {/* Seção de destaque */}
      <Card className="bg-gradient-to-r from-blue-900/50 to-slate-800 border-slate-700">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <Badge className="mb-4 bg-blue-600/20 text-blue-400 border-blue-600/30">Personalizado</Badge>
              <h2 className="text-2xl font-bold mb-4 text-white">Precisa de uma solução sob medida?</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Nossa equipe de especialistas pode criar uma solução de IA personalizada para atender às necessidades
                específicas do seu negócio. Agende uma consulta gratuita hoje mesmo.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Agendar Consulta</Button>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="p-8 bg-blue-900/30 rounded-full">
                <Wrench className="h-20 w-20 text-blue-400" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
