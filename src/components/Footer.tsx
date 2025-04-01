
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold text-purple-700 mb-6">Ella AI</h3>
            <p className="text-gray-600 mb-6 max-w-xs">
              Helping seniors navigate the digital world with dignity and independence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-purple-700">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-700">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-700">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-700">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Testimonials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">How It Works</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-purple-700">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-gray-200 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Ella AI. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-purple-700">Privacy</a>
            <a href="#" className="hover:text-purple-700">Terms</a>
            <a href="#" className="hover:text-purple-700">Cookie Policy</a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            Powered by ETH Zürich and University of St. Gallen alumni. Made with ❤️ in Switzerland.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
