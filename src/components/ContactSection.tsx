
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-business-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-business-100 text-lg mb-6">
              Join our network of premium brand partners and experience the difference 
              professional superstockist services can make for your business.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-business-300" />
                <span>contact@superstockpro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-5 h-5 text-business-300">📞</span>
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <Input 
                placeholder="Your Name" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Input 
                placeholder="Company Name" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Button className="w-full bg-white text-business-900 hover:bg-gray-100">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
