import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Instagram, Linkedin, ArrowRight, CheckCircle2 } from "lucide-react";
import { contactSchema, type ContactInput, useSubmitContact } from "@/hooks/use-contact";

export function ContactFooter() {
  const submitMutation = useSubmitContact();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactInput) => {
    submitMutation.mutate(data, {
      onSuccess: () => {
        reset();
      }
    });
  };

  return (
    <footer id="contact" className="bg-background pt-16 pb-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
          
          {/* Left Column: Info — moves below form on mobile */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-8 font-sans text-muted-foreground text-base mt-8">
              <div>
                <p className="font-display text-foreground text-xl mb-2">LAI Design Associates</p>
                <p>9911 Corkscrew Road #202</p>
                <p>Estero, Florida 33928</p>
              </div>
              
              <div>
                <a href="tel:+12394056888" className="hover:text-primary transition-colors cursor-pointer inline-flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0" />
                  239-405-6888
                </a>
              </div>
            </div>

            <div className="flex space-x-6 mt-12">
              <a href="https://www.instagram.com/laigroupfl/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/lai-design-associates-llc/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Form — shows first on mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 bg-muted p-8 md:p-12 rounded-2xl border border-border shadow-sm"
          >
            {submitMutation.isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display text-3xl text-foreground mb-4">Inquiry Received</h3>
                <p className="font-sans text-muted-foreground">Thank you for reaching out. A member of our studio will contact you shortly to discuss your vision.</p>
                <button 
                  onClick={() => submitMutation.reset()}
                  className="mt-8 font-sans text-sm tracking-widest text-primary uppercase hover:text-foreground transition-colors border-b border-primary hover:border-foreground pb-1"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-8 font-sans"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                
                <div className="relative">
                  <input 
                    {...register("name")}
                    type="text" 
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors peer"
                  />
                  {errors.name && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.name.message}</span>}
                </div>

                <div className="relative">
                  <input 
                    {...register("email")}
                    type="email" 
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors peer"
                  />
                  {errors.email && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.email.message}</span>}
                </div>

                <div className="relative">
                  <select 
                    {...register("projectType")}
                    defaultValue=""
                    className="w-full bg-transparent border-b border-border py-4 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-card text-muted-foreground">Select Project Type...</option>
                    <option value="commercial" className="bg-card">Commercial</option>
                    <option value="education" className="bg-card">Education</option>
                    <option value="industrial" className="bg-card">Industrial / Manufacturing</option>
                    <option value="civic" className="bg-card">Civic / Community</option>
                  </select>
                  {errors.projectType && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.projectType.message}</span>}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                    <ChevronDownIcon />
                  </div>
                </div>

                <div className="relative">
                  <textarea 
                    {...register("message")}
                    placeholder="Tell us about your project vision..."
                    rows={4}
                    className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                  {errors.message && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.message.message}</span>}
                </div>

                <button 
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full bg-primary text-primary-foreground font-sans font-medium tracking-widest uppercase py-5 mt-4 hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
                >
                  {submitMutation.isPending ? (
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : "Submit Inquiry"}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-sans text-muted-foreground tracking-wider uppercase gap-4">
          <p>(c) {new Date().getFullYear()} LAI Design Associates. All Rights Reserved.</p>
          <a
            href="https://www.carmonacreations.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/50 hover:text-primary/70 transition-colors tracking-[0.15em] normal-case font-sans text-[10px]"
          >
            Crafted by Carmona Creations LLC
          </a>
        </div>
      </div>
    </footer>
  );
}

// Simple internal icon component since Lucide chevron down interacts weirdly with selects sometimes
function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
}
