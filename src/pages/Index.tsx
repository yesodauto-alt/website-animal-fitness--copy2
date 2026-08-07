import { Seo } from '@/components/seo/Seo'
import { StructuredData } from '@/components/seo/StructuredData'
import { HeroSection } from '@/components/site/HeroSection'
import { DifferentialsSection } from '@/components/site/DifferentialsSection'
import { ExperienceSection } from '@/components/site/ExperienceSection'
import { ModalitiesSection } from '@/components/site/ModalitiesSection'
import { CoachesSection } from '@/components/site/CoachesSection'
import { TestimonialsSection } from '@/components/site/TestimonialsSection'
import { PlansSection } from '@/components/site/PlansSection'
import { UnitsSection } from '@/components/site/UnitsSection'
import { SocialSection } from '@/components/site/SocialSection'
import { FaqSection } from '@/components/site/FaqSection'
import { FinalCtaSection } from '@/components/site/FinalCtaSection'
import { SectionDivider } from '@/components/site/SectionDivider'
import { KineticBand } from '@/components/site/KineticBand'

const Index = () => {
  return (
    <>
      <Seo
        title="Animal Fitness Club | Musculação e Cross com Comunidade"
        description="Treinamento de verdade, coaches especializados e uma comunidade que transforma academia em um dos melhores momentos do seu dia. Musculação e Cross em São Caetano do Sul."
        path="/"
      />
      <StructuredData />
      <HeroSection />
      <DifferentialsSection />
      <KineticBand />
      <ExperienceSection />
      <ModalitiesSection />
      <CoachesSection />
      <TestimonialsSection />
      <SectionDivider variant="light" />
      <PlansSection />
      <UnitsSection />
      <SocialSection />
      <SectionDivider variant="light" />
      <FaqSection />
      <FinalCtaSection />
    </>
  )
}

export default Index
