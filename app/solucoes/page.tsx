"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Instagram, Phone, Mail, MapPin } from "lucide-react"

import {
  ArrowLeft,
  Mic,
  UsersRound,
  Bot,
  Wrench,
  Brain,
  CheckCircle,
  Zap,
  Clock,
  TrendingUp,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

export default function SolucoesPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const solutions = [
    {
      title: "Get Assistant",
      subtitle: "Assistente IA Personalizado",
      description: "Assistente de IA personalizado integrado à sua plataforma para suporte e automação inteligente.",
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      features: [
        "Interface conversacional natural",
        "Integração com múltiplas plataformas",
        "Aprendizado contínuo",
        "Personalização completa",
        "Multilíngue",
        "Analytics avançados",
      ],
      benefits: [
        "Melhore a experiência do cliente",
        "Reduza custos operacionais",
        "Disponibilidade 24/7",
        "Escalabilidade infinita",
      ],
      pricing: "R$ 87,90/mês",
    },
    {
      title: "Get Files",
      subtitle: "Transcrição Inteligente de Áudios",
      description: "IA avançada para transcrever automaticamente áudios de WhatsApp com alta precisão e velocidade.",
      icon: <Mic className="w-12 h-12 text-blue-500" />,
      features: [
        "Transcrição em tempo real",
        "Suporte a múltiplos idiomas",
        "Precisão de 98%+",
        "Integração direta com WhatsApp",
        "Processamento em lote",
        "API para desenvolvedores",
      ],
      benefits: [
        "Economize tempo na leitura de áudios longos",
        "Melhore a acessibilidade da comunicação",
        "Facilite a busca por informações específicas",
        "Automatize processos de atendimento",
      ],
      pricing: "R$ 49,97/mês",
    },
    {
      title: "Get SDR",
      subtitle: "IA de Vendas para WhatsApp",
      description: "IA de atendimento especializada para WhatsApp que converte leads e automatiza vendas 24/7.",
      icon: <Bot className="w-12 h-12 text-blue-500" />,
      features: [
        "Atendimento 24/7 automatizado",
        "Qualificação inteligente de leads",
        "Follow-up automático",
        "Integração com CRM",
        "Scripts personalizáveis",
        "Analytics de conversão",
      ],
      benefits: [
        "Aumente as vendas em até 300%",
        "Reduza tempo de resposta para segundos",
        "Qualifique leads automaticamente",
        "Libere sua equipe para vendas complexas",
      ],
      pricing: "R$ 199,97/mês",
    },
    {
      title: "Get Group",
      subtitle: "Resumos Inteligentes de Grupos",
      description:
        "IA inteligente para resumir automaticamente conversas de grupos do WhatsApp, destacando pontos importantes.",
      icon: <UsersRound className="w-12 h-12 text-blue-500" />,
      features: [
        "Resumos automáticos diários",
        "Identificação de tópicos principais",
        "Destaque de decisões importantes",
        "Filtros personalizáveis",
        "Notificações inteligentes",
        "Histórico de resumos",
      ],
      benefits: [
        "Mantenha-se atualizado sem ler tudo",
        "Identifique rapidamente informações relevantes",
        "Melhore a produtividade da equipe",
        "Nunca perca decisões importantes",
      ],
      pricing: "R$ 4,97/semana",
    },
    {
      title: "Get Build",
      subtitle: "Desenvolvimento Sob Demanda",
      description:
        "Criação sob demanda de soluções de IA personalizadas para suas necessidades específicas de negócio.",
      icon: <Wrench className="w-12 h-12 text-blue-500" />,
      features: [
        "Desenvolvimento personalizado",
        "Consultoria especializada",
        "Integração com sistemas existentes",
        "Treinamento da equipe",
        "Suporte técnico dedicado",
        "Atualizações contínuas",
      ],
      benefits: [
        "Solução 100% adequada ao seu negócio",
        "Vantagem competitiva única",
        "Escalabilidade garantida",
        "Suporte especializado contínuo",
      ],
      pricing: "Reunião para decidir",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Todo o layout e componentes da página permanecem aqui */}
    </div>
  )
}
