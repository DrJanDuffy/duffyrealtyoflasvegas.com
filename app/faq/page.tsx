import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Phone, Mail, Calendar } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ: Buying Beazer Homes in Las Vegas | Dr. Jan Duffy',
  description: 'Frequently asked questions about buying Beazer Homes in Las Vegas. Learn about the buying process, buyer\'s agents, financing, and new construction homes. Get answers from Dr. Jan Duffy, Award Winning Buyer Agent.',
  alternates: {
    canonical: 'https://www.duffyrealtyoflasvegas.com/faq',
  },
  openGraph: {
    title: 'FAQ: Buying Beazer Homes in Las Vegas | Dr. Jan Duffy',
    description: 'Answers to common questions about buying new construction homes in Las Vegas.',
    url: 'https://www.duffyrealtyoflasvegas.com/faq',
    type: 'website',
  },
}

export default function FAQPage() {
  const faqs = [
    {
      category: 'About Buyer\'s Agents',
      questions: [
        {
          q: 'What is a buyer\'s agent?',
          a: 'A buyer\'s agent is a licensed real estate professional who represents your interests throughout the home buying process. Unlike the builder\'s sales team, who work for the builder, a buyer\'s agent works exclusively for you, providing advocacy, contract review, negotiation, and expert guidance—all at no additional cost to you.',
        },
        {
          q: 'Do I need a buyer\'s agent to buy a Beazer home?',
          a: 'While not required, working with a buyer\'s agent like Dr. Jan Duffy provides significant benefits. You get professional representation, contract review, negotiation, and expert guidance—all at no additional cost to you. Beazer welcomes buyer\'s agent representation.',
        },
        {
          q: 'Do I pay extra to work with a buyer\'s agent?',
          a: 'No. The real estate commission structure means buyer\'s agent representation comes at no additional cost to you. The commission splits happen on the builder\'s side regardless of whether you work with an agent. By working with Dr. Jan Duffy, you get professional representation and advocacy at no extra expense.',
        },
        {
          q: 'What if I already started working with the builder\'s sales team?',
          a: 'In many cases, you can still bring in a buyer\'s agent even if you\'ve already been working with the builder\'s sales team. Contact Dr. Jan Duffy immediately—the sooner she\'s involved, the better she can help you. She can step in to provide representation and ensure your interests are protected.',
        },
      ],
    },
    {
      category: 'Buying Process',
      questions: [
        {
          q: 'How long does it take to build a new Beazer home?',
          a: 'Construction timelines typically range from 4-8 months, depending on whether the home is already under construction, standard build, or custom. Quick move-in homes (already under construction) can close in 30-90 days. Standard new builds take 4-6 months from contract to closing.',
        },
        {
          q: 'Can I customize a Beazer home?',
          a: 'Yes, Beazer Homes offers various customization options depending on the construction stage. You can typically select finishes, colors, and upgrades through their design center. Structural changes are usually limited to early stages of construction. Dr. Jan Duffy can help you understand what options are available for your chosen home.',
        },
        {
          q: 'What are lot premiums?',
          a: 'Lot premiums are additional fees for desirable home sites within a community. These might include corner lots, lots with better views, larger lots, or lots backing to open space. Your buyer\'s agent can help you understand which lot premiums add value and which to consider carefully.',
        },
        {
          q: 'What happens if there are delays in construction?',
          a: 'Delays can happen due to weather, supply chain issues, or other factors. Your purchase contract will outline how delays are handled. Dr. Jan Duffy will communicate with the builder about timelines and help manage expectations throughout the process.',
        },
      ],
    },
    {
      category: 'Financing & Costs',
      questions: [
        {
          q: 'How much down payment do I need?',
          a: 'Down payment requirements vary by loan type. FHA loans require 3.5% minimum, conventional loans can be as low as 3% for qualified first-time buyers, and VA loans offer 0% down for eligible veterans. Dr. Jan Duffy can connect you with lenders experienced in new construction financing.',
        },
        {
          q: 'Are there incentives available?',
          a: 'Beazer Homes regularly offers incentives such as financing assistance, upgrade credits, closing cost help, or pricing promotions. As a contracted Beazer agent, Dr. Jan Duffy has access to current incentive information and can help structure your offer to maximize available benefits.',
        },
        {
          q: 'What are closing costs?',
          a: 'Closing costs include lender fees, title insurance, appraisal, inspection, and various other fees. They typically total 2-5% of the home\'s purchase price. Some builders may offer incentives to help cover closing costs. Your buyer\'s agent will review all closing costs with you.',
        },
        {
          q: 'Do I need a different type of loan for new construction?',
          a: 'For homes already under construction or completed, standard mortgages work. For homes that haven\'t started building yet, you may need a construction-to-permanent loan. Your buyer\'s agent can connect you with lenders experienced in new construction financing options.',
        },
      ],
    },
    {
      category: 'About Beazer Homes',
      questions: [
        {
          q: 'Does Dr. Jan Duffy work with all Beazer communities?',
          a: 'Yes. As a contracted Beazer Homes top agent, Dr. Jan Duffy represents buyers across all of Beazer\'s Las Vegas area communities, including those in Henderson, Las Vegas, Boulder City, and Mesquite.',
        },
        {
          q: 'What warranties come with a new Beazer home?',
          a: 'New Beazer homes come with comprehensive builder warranties that cover the home structure and systems. Warranty coverage periods vary by component (e.g., structure, systems, finishes). Dr. Jan Duffy will review warranty information with you and ensure you understand what\'s covered.',
        },
        {
          q: 'Can I visit my home during construction?',
          a: 'Yes, you\'ll typically have scheduled walkthroughs at key stages: framing, pre-drywall, and final walkthrough. The builder will coordinate these visits. Dr. Jan Duffy will attend walkthroughs with you to ensure quality and address any concerns.',
        },
        {
          q: 'What if I find problems during the final walkthrough?',
          a: 'The final walkthrough is designed to identify any issues before closing. Any defects or incomplete items should be documented, and the builder will address them before closing. Dr. Jan Duffy will ensure all issues are properly documented and resolved.',
        },
      ],
    },
    {
      category: 'About Dr. Jan Duffy',
      questions: [
        {
          q: 'Why should I choose Dr. Jan Duffy as my buyer\'s agent?',
          a: 'Dr. Jan Duffy is an Award Winning Buyer Agent with specialized expertise in Beazer Homes. She has direct relationships with Beazer sales teams, knows all Las Vegas area communities, and provides dedicated advocacy throughout your purchase—all at no additional cost to you.',
        },
        {
          q: 'What areas does Dr. Jan Duffy serve?',
          a: 'Dr. Jan Duffy serves all Beazer Homes communities in the greater Las Vegas area, including Henderson, Las Vegas, Boulder City, and Mesquite. Her office is located at 4670 S Fort Apache Rd, Las Vegas, NV 89147.',
        },
        {
          q: 'How do I get started?',
          a: 'Simply contact Dr. Jan Duffy by phone at (702) 500-1942 or email at DrDuffySells@DuffyRealtyOfLasVegas.com to schedule a consultation. She\'ll discuss your home buying goals and help you explore available Beazer Homes communities.',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 via-background to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground text-sm"
              >
                ← Back to Home
              </Link>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Common questions about buying Beazer Homes in Las Vegas
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">{category.category}</h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <div key={index} className="bg-card p-6 rounded-lg border border-border">
                        <h3 className="text-lg font-semibold mb-3 text-foreground">
                          {faq.q}
                        </h3>
                        <p className="text-muted-foreground">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact Dr. Jan Duffy directly to get answers to your specific questions about 
              buying a Beazer home in Las Vegas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild>
                <a href="tel:7025001942">
                  <Phone className="w-5 h-5" />
                  Call (702) 500-1942
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:DrDuffySells@DuffyRealtyOfLasVegas.com">
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:DrDuffySells@DuffyRealtyOfLasVegas.com?subject=Questions About Buying Beazer Homes">
                  <Calendar className="w-5 h-5" />
                  Schedule Consultation
                </a>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Dr. Jan Duffy | Buyers Agent Beazer Homes</p>
              <p>LIC# S.0197614.LLC</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

