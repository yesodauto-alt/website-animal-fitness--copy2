import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Reveal } from '@/components/site/Reveal'
import { faqItems } from '@/lib/site-data'

export function FaqSection() {
  return (
    <section className="section-padding bg-animal-white relative isolate">
      <div className="container mx-auto max-w-3xl">
        <Reveal className="text-center mb-12 md:mb-14">
          <span className="text-eyebrow mb-3 inline-block">Dúvidas</span>
          <h2 className="section-title text-animal-black">Perguntas frequentes</h2>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white border border-black/[0.06] rounded-xl px-5 sm:px-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-black/[0.1]"
              >
                <AccordionTrigger className="text-left font-semibold text-animal-black hover:no-underline text-sm sm:text-base py-5 sm:py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-animal-black/60 text-sm leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
