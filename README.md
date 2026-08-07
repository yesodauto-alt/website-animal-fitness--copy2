# Animal Fitness Club — Website Institucional

Website institucional e comercial moderno, responsivo e orientado à conversão para a Animal Fitness Club.

## Arquitetura

O projeto está organizado em uma arquitetura limpa com separação de responsabilidades:

```
src/
├── components/      # Componentes visuais (UI e site)
├── pages/           # Páginas da aplicação
├── services/        # Serviços de domínio (leadService)
├── integrations/    # Adaptadores de integração externa (n8n)
├── analytics/       # Camada de tracking centralizada
├── config/          # Configuração centralizada (WhatsApp, n8n, analytics)
├── types/           # Tipos TypeScript (Lead, ConversionEvent)
├── lib/             # Utilidades e dados do site
├── contexts/        # Contextos React
└── hooks/           # Hooks customizados
```

---

## 1. Configuração do WhatsApp

**Arquivo:** `src/config/index.ts`

A URL do WhatsApp está centralizada no arquivo de configuração. Para alterar o número:

```ts
export const WHATSAPP_URL = 'https://wa.me/5511999999999'
```

### Mensagens contextuais

**Arquivo:** `src/lib/whatsapp.ts`

As mensagens do WhatsApp são geradas contextualmente com base na origem do clique (hero, planos, unidades, modalidades, CTA final, quiz, etc.). Quando o usuário completa o quiz "Descubra Seu Treino Animal", os dados do perfil são anexados automaticamente à mensagem.

Para criar uma nova mensagem contextual, use:

```ts
import { getWhatsAppUrl } from '@/lib/whatsapp'

const url = getWhatsAppUrl({
  origin: 'plans',
  plan: 'TOP',
})
```

---

## 2. Conexão com n8n

**Arquivo:** `src/integrations/n8n-adapter.ts`

O adaptador n8n envia leads via webhook POST para um endpoint configurável. Nenhuma credencial sensível é armazenada no frontend — apenas a URL do webhook (pública) é usada.

### Configuração

Defina a variável de ambiente no arquivo `.env`:

```env
VITE_N8N_WEBHOOK_URL=https://n8n.seudominio.com/webhook/animal-fitness-lead
```

Quando a variável estiver vazia, o sistema **não** envia o lead e **não** exibe mensagem de sucesso falsa — o usuário é redirecionado para o WhatsApp como fallback.

### Payload enviado

O payload é um JSON com a estrutura do tipo `Lead` (ver `src/types/index.ts`), incluindo dados do quiz, UTM params e timestamp.

---

## 3. Conexão com CRM

A integração com CRM deve ser feita através do **n8n**. O fluxo é:

1. O frontend envia o lead para o webhook do n8n (`VITE_N8N_WEBHOOK_URL`)
2. O n8n processa e encaminha para o CRM (RD Station, Pipedrive, HubSpot, etc.)
3. Nenhuma lógica de CRM existe no frontend

Para adicionar um CRM diretamente (sem n8n), crie um novo adaptador em `src/integrations/` seguindo o padrão do `n8n-adapter.ts` e chame-o dentro de `src/services/lead-service.ts`.

---

## 4. Conexão com Analytics

**Arquivo:** `src/analytics/tracker.ts`

A camada de tracking é o **único ponto** por onde todos os eventos de conversão passam. Nenhum componente visual chama provedores de analytics diretamente.

### Eventos suportados

| Evento                 | Descrição                                    |
|------------------------|----------------------------------------------|
| `page_view`            | Visualização de página                       |
| `hero_cta_clicked`     | Clique em CTA da seção hero                  |
| `whatsapp_clicked`     | Clique em botão do WhatsApp                  |
| `quiz_started`         | Início do quiz "Descubra Seu Treino Animal"  |
| `quiz_step_completed`  | Conclusão de uma etapa do quiz               |
| `quiz_completed`       | Conclusão total do quiz                      |
| `lead_created`         | Lead criado via leadService                  |
| `trial_requested`      | Solicitação de aula experimental             |
| `unit_selected`        | Seleção de unidade no quiz                   |
| `plan_clicked`         | Clique em um plano                           |
| `instagram_clicked`    | Clique em link do Instagram                  |
| `maps_clicked`         | Clique em link do Google Maps                |

### Plugar um provedor de analytics

**Arquivo:** `src/analytics/providers.ts`

Provedores prontos para Google Analytics e Facebook Pixel estão disponíveis. Para ativar:

1. Adicione os scripts do GA/Pixel no `index.html`
2. Registre os provedores na inicialização da app (em `src/App.tsx` ou `src/main.tsx`):

```ts
import { registerAnalyticsProvider } from '@/analytics/tracker'
import { googleAnalyticsProvider } from '@/analytics/providers'

registerAnalyticsProvider(googleAnalyticsProvider)
```

Para criar um provedor customizado:

```ts
import type { AnalyticsProvider } from '@/types'

const myProvider: AnalyticsProvider = {
  name: 'my-analytics',
  track: (event) => {
    // enviar event para seu provedor
  },
}
```

---

## 5. Variáveis de Ambiente

**Arquivo:** `.env` (raiz do projeto)

| Variável                   | Descrição                                          | Padrão  |
|----------------------------|----------------------------------------------------|---------|
| `VITE_N8N_WEBHOOK_URL`     | URL do webhook do n8n para envio de leads          | vazio   |
| `VITE_ANALYTICS_ENABLED`   | Habilita logs de analytics no console              | `false` |

> **Importante:** Variáveis prefixadas com `VITE_` são expostas no frontend. NUNCA armazene segredos, tokens ou chaves privadas aqui. Apenas URLs públicas de webhooks devem ser usadas.

---

## Desenvolvimento

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev

# Build de produção
pnpm build
```

## Stack

- Vite + React 19
- TypeScript
- TailwindCSS 3
- shadcn/ui
- React Router DOM
