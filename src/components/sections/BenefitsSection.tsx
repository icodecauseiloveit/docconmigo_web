import Image from 'next/image';
import { ChevronDown, Star } from 'lucide-react';

interface StepItem {
  number?: string;
  initial?: string;
  image?: string;
  title: string;
  subtitle?: string;
  description: string;
  stars?: number;
}

interface StepSectionProps {
  id?: string;
  subtitle: string;
  title: string;
  description: string;
  items: StepItem[];
  backgroundColor?: string;
  showArrow?: boolean;
}

export default function StepSection({ 
  id = "beneficios", 
  subtitle, 
  title, 
  description, 
  items,
  backgroundColor = "bg-[#faf8f4]",
  showArrow = false
}: StepSectionProps) {
  return (
    <section id={id} className={`py-24 ${backgroundColor} relative`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          {showArrow && (
            <div className="flex justify-center mb-12">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md animate-bounce border border-[#5c7c6c]/20">
                <ChevronDown className="w-6 h-6 text-[#5c7c6c]" strokeWidth={2.5} />
              </div>
            </div>
          )}
          <h2 className="text-sm font-bold tracking-widest text-[#5c7c6c] uppercase mb-4">{subtitle}</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-[#2c3e34] mb-6 leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 text-lg">
            {description}
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[15%] right-[15%] h-px border-t border-dashed border-[#5c7c6c]/30 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {items.map((item, index) => {
              const isTestimonial = !!item.stars;
              
              return (
                <div 
                  key={index} 
                  className={`flex flex-col h-full p-8 md:p-10 transition-all duration-300 group
                    ${isTestimonial 
                      ? "bg-[#faf9f6]/80 rounded-[32px] border border-transparent hover:shadow-xl hover:bg-white hover:-translate-y-1" 
                      : "bg-white rounded-2xl shadow-sm border border-[#5c7c6c]/10 hover:shadow-md"
                    }`}
                >
                  {/* Testimonial Quote Icon */}
                  {isTestimonial && (
                    <div className="mb-6 opacity-30">
                      <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.22306 0.166992C11.6664 0.166992 13.5554 0.94477 14.8887 2.50033C16.2221 4.05588 16.8887 6.13922 16.8887 8.75033C16.8887 13.3614 14.6109 18.0559 10.0554 22.8337L7.27771 27.8337L0.888711 27.8337C3.11104 22.7225 4.38882 18.167 4.72216 14.167C5.05549 10.167 4.38882 7.72255 2.72216 6.83366L0.888711 5.72255V0.166992H9.22306ZM26.3344 0.166992C28.7777 0.166992 30.6666 0.94477 31.9999 2.50033C33.3333 4.05588 34 6.13922 34 8.75033C34 13.3614 31.7223 18.0559 27.1667 22.8337L24.3888 27.8337L18 27.8337C20.2222 22.7225 21.5 18.167 21.8333 14.167C22.1667 10.167 21.5 7.72255 19.8333 6.83366L18 5.72255V0.166992H26.3344Z" fill="#a3bfab"/>
                      </svg>
                    </div>
                  )}

                  {/* Number Circle (For Steps) */}
                  {!isTestimonial && item.number && (
                    <div className="w-14 h-14 rounded-full border-2 border-[#5c7c6c]/20 flex items-center justify-center font-bold text-[#5c7c6c] mb-6 text-xl">
                      {item.number}
                    </div>
                  )}
                  
                  {/* Description / Content */}
                  <div className={`flex-grow ${isTestimonial ? "mb-10" : "mb-0"}`}>
                    {!isTestimonial && <h4 className="text-xl font-bold text-[#2c3e34] mb-4">{item.title}</h4>}
                    <p className={`text-[#2c3e34]/80 leading-relaxed ${isTestimonial ? "text-lg font-medium" : "text-base"}`}>
                      {isTestimonial ? `"${item.description}"` : item.description}
                    </p>
                  </div>

                  {/* Footer (Testimonial Details) */}
                  {isTestimonial && (
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-[#e8f0ea] flex items-center justify-center text-[#3d5a45] font-black text-xl shadow-sm border-4 border-white relative">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        ) : (
                          item.initial
                        )}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-black text-[#2c3e34] tracking-tight">{item.title}</h4>
                        {item.subtitle && (
                          <p className="text-[12px] text-[#5c7c6c] font-medium opacity-80">{item.subtitle}</p>
                        )}
                        {item.stars && (
                          <div className="flex gap-0.5 pt-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-[#c4a265] text-[#c4a265]" />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
