import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { User2Icon } from 'lucide-react'

interface Testimonial {
  content: string
  author: string
  role: string
  rating: number
  image?: string
}

const testimonials: Testimonial[] = [
  {
    content: "I had an amazing experience working with the team at Zapware. They were able to take my vision and turn it into a reality. I would highly recommend them to anyone looking for a professional and reliable team to work with.",
    author: "Wasif Rashid",
    role: "CEO of The Asian Real Estate",
    rating: 5,
    image: ""
  },
  {
    content: "It's been four years that we have been associated with Zapware. They have been instrumental in helping with out website every year. They always deliver on time with absolute precision. We would highly recommend them to anyone!",
    author: "Manjiri Prabhu",
    role: "Chairperson of PILF",
    rating: 5,
    image: ""
  },
  {
    content: "I have been working with Zapware for over a year now and I am extremely happy with the results. They are professional, reliable and always deliver on time. I would highly recommend them to anyone looking for a digital marketing agency.",
    author: "Er Aaqib Maqbool",
    role: "CEO of Get Advice Consultancy Services",
    rating: 5,
    image: ""
  },
]

export default function TestimonialsSection() {
  return (
    <div className="bg-black p-8" id="testimonials">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Testimonials
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-zinc-900/50 border-zinc-800">
                  <CardContent className="p-6">
                    <p className="mb-6 text-gray-300">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {testimonial.image && (
                            <User2Icon className="h-8 w-8 fill-white text-white" />
                        )}
                        <div>
                          <p className="font-semibold text-white">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-gray-400" title={testimonial.role}>
                            {testimonial.role?.length > 20 ? testimonial.role.slice(0, 20) + "..." : testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <div className="h-2 w-2 rounded-full bg-zinc-800"></div>
            <div className="h-2 w-2 rounded-full bg-purple-500"></div>
            <div className="h-2 w-2 rounded-full bg-zinc-800"></div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

