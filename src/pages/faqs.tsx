import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How can I contact you?",
    answer: "Drop us a message on our contact form, and we'll get back to you as soon as possible. You can also reach out to us on contact@zapware.in or call us at 9541483162 or 9541483162.",
  },
  {
    question: "What all comes in the Digital Marketing Services?",
    answer: "Why blend in when you can stand out? Our marketing campaigns pack a punch and deliver results that’ll make your competitors sweat: *Meta Ads*: Scroll-stopping campaigns that make thumbs pause. ⁠*Google Ads*: Be the first thing people see when they search. ⁠*YouTube Ads*: Turn viewers into loyal fans. ⁠*WhatsApp Ads*: Slide into DMs with style (and results).",
  },
  {
    question: "How can I get a quote for my project?",
    answer: "We offer free consultations to understand your project requirements and provide you with a quote. You can reach out to us on contact@zapware.in or call us at 9541483162 or 9541483162.",
  },
  {
    question: "What all AI services can I avail?",
    answer: "We offer a range of AI services to help you automate your business processes and improve efficiency. Our services include: *Chatbots*: Automate your customer service and marketing efforts on WhatsApp with our chatbot solutions. *Predictive Analytics*: Make data-driven decisions with our predictive analytics solutions. *Recommendation Engines*: Personalize your customer experience with our recommendation engine solutions.",
  },
  {
    question: "How can I get a website developed?",
    answer: "We offer website development services to help you build a professional online presence. Our team of experts will work with you to understand your requirements and develop a website that meets your needs. You can reach out to us on contact@zapware.in or call us at 9541483162 or 9541483162.",
  },
  {
    question: "I have a project idea. How can I get started?",
    answer: "We'd love to hear about your project idea! Drop us a message on our contact form, and we'll get back to you as soon as possible. You can also reach out to us o contact@zapware.in or call us at 9541483162 or 9541483162.",
  },
]

export function FaqSection() {
  return (
    <section className="bg-black px-4 py-20" id="faqs">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="bg-[#1a1a1a] hover:bg-[#222] rounded-lg px-6 text-white hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
        </div>
      </div>
    </section>
  )
}

