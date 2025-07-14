"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { User, CreditCard, Bell, Shield, Key, Trash2, Upload, Save, Eye, EyeOff } from "lucide-react"

export default function ConfiguracoesPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    billing: true,
    updates: true,
  })

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Configurações</h1>
        <p className="text-slate-400">Gerencie sua conta e preferências</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-slate-800 w-full md:w-auto">
          <TabsTrigger value="profile" className="text-slate-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            <User className="mr-2 h-4 w-4" />
            Perfil
          </TabsTrigger>
          <TabsTrigger value="billing" className="text-slate-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            <CreditCard className="mr-2 h-4 w-4" />
            Cobrança
          </TabsTrigger>
          <TabsTrigger value="notifications" className="text-slate-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            <Bell className="mr-2 h-4 w-4" />
            Notificações
          </TabsTrigger>
          <TabsTrigger value="security" className="text-slate-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            <Shield className="mr-2 h-4 w-4" />
            Segurança
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Informações Pessoais</CardTitle>
              <CardDescription className="text-slate-400">
                Atualize suas informações pessoais e foto de perfil
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/images/avatar-placeholder.svg" alt="User Avatar" />
                  <AvatarFallback className="bg-slate-700">
                    <User className="h-12 w-12 text-slate-400" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Button
                    variant="outline"
                    className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Alterar Foto
                  </Button>
                  <p className="text-sm text-slate-400 mt-2">JPG, GIF ou PNG. Máximo 1MB.</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-slate-300">Nome</Label>
                  <Input id="firstName" defaultValue="Daniel" className="bg-slate-700 border-slate-600 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-slate-300">Sobrenome</Label>
                  <Input id="lastName" defaultValue="Henrique" className="bg-slate-700 border-slate-600 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300">E-mail</Label>
                  <Input id="email" type="email" defaultValue="daniel@getbrain.com.br" className="bg-slate-700 border-slate-600 text-white"/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-300">Telefone</Label>
                  <Input id="phone" defaultValue="(21) 99016-8793" className="bg-slate-700 border-slate-600 text-white"/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-slate-300">Empresa</Label>
                  <Input id="company" defaultValue="GetBrain" className="bg-slate-700 border-slate-600 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-slate-300">Cargo</Label>
                  <Input id="role" defaultValue="CEO" className="bg-slate-700 border-slate-600 text-white" />
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Save className="mr-2 h-4 w-4" />
                Salvar Alterações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Adicione outras TabsContent aqui se necessário */}
      </Tabs>
    </div>
  )
}