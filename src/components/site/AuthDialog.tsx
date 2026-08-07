import { useState } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { User, LogOut, Loader2, ShieldCheck } from 'lucide-react'
import { toast } from 'sonner'
import { getErrorMessage } from '@/lib/pocketbase/errors'

export function AuthDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const { user, isAuthenticated, signIn, signUp, signOut } = useAuth()
  const [tab, setTab] = useState<'login' | 'register'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      toast.error('Preencha e-mail e senha')
      return
    }
    setLoading(true)
    const { error } = await signIn(email, password)
    setLoading(false)
    if (error) {
      toast.error(getErrorMessage(error))
    } else {
      toast.success('Bem-vindo de volta à Animal Fitness!')
      onOpenChange(false)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      toast.error('Preencha e-mail e senha')
      return
    }
    if (password.length < 8) {
      toast.error('A senha deve ter pelo menos 8 caracteres')
      return
    }
    setLoading(true)
    const { error } = await signUp(email, password, name)
    setLoading(false)
    if (error) {
      toast.error(getErrorMessage(error))
    } else {
      toast.success('Conta criada com sucesso!')
      onOpenChange(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-animal-black border-animal-orange/20 text-white">
        <DialogTitle className="font-display text-2xl uppercase tracking-wide flex items-center gap-2">
          <User className="w-6 h-6 text-animal-orange" />
          Área do Membro
        </DialogTitle>
        <DialogDescription className="text-white/60 text-sm">
          {isAuthenticated
            ? 'Sua conta de aluno Animal Fitness Club.'
            : 'Acesse seus treinos e dados da sua matrícula.'}
        </DialogDescription>

        {isAuthenticated ? (
          <div className="py-4 space-y-6">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-animal-orange/20 border border-animal-orange flex items-center justify-center font-bold text-animal-orange text-lg">
                {user?.name?.[0] || user?.email?.[0] || 'A'}
              </div>
              <div>
                <p className="font-bold text-base text-white">{user?.name || 'Membro Animal'}</p>
                <p className="text-xs text-white/60">{user?.email}</p>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 mt-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Matrícula Ativa
                </div>
              </div>
            </div>

            <Button
              onClick={() => {
                signOut()
                toast.info('Sessão encerrada.')
                onOpenChange(false)
              }}
              variant="outline"
              className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10 hover:text-red-300"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sair da Conta
            </Button>
          </div>
        ) : (
          <Tabs
            value={tab}
            onValueChange={(v) => setTab(v as 'login' | 'register')}
            className="mt-2"
          >
            <TabsList className="grid grid-cols-2 bg-white/5 p-1 border border-white/10 rounded-lg">
              <TabsTrigger
                value="login"
                className="text-xs font-bold uppercase tracking-wider data-[state=active]:bg-animal-orange data-[state=active]:text-white"
              >
                Entrar
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="text-xs font-bold uppercase tracking-wider data-[state=active]:bg-animal-orange data-[state=active]:text-white"
              >
                Cadastrar
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="mt-4">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label className="text-xs text-white/70">E-mail</Label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="bg-white/5 border-white/15 text-white mt-1"
                  />
                </div>
                <div>
                  <Label className="text-xs text-white/70">Senha</Label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-white/5 border-white/15 text-white mt-1"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-animal-orange hover:bg-animal-orange/85 font-bold uppercase tracking-wide mt-2"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Acessar Conta'}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register" className="mt-4">
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <Label className="text-xs text-white/70">Nome Completo</Label>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="bg-white/5 border-white/15 text-white mt-1"
                  />
                </div>
                <div>
                  <Label className="text-xs text-white/70">E-mail</Label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="bg-white/5 border-white/15 text-white mt-1"
                  />
                </div>
                <div>
                  <Label className="text-xs text-white/70">Senha (mínimo 8 caracteres)</Label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-white/5 border-white/15 text-white mt-1"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-animal-orange hover:bg-animal-orange/85 font-bold uppercase tracking-wide mt-2"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Criar Minha Conta'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        )}
      </DialogContent>
    </Dialog>
  )
}
