
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

const Testimonial = ({ quote, author, role }: TestimonialProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg">
      <CardContent className="p-8 relative">
        <Quote className="h-10 w-10 text-purple-200 absolute top-4 left-4 opacity-50" />
        <div className="pt-4">
          <p className="text-lg text-gray-700 mb-6 relative z-10">{quote}</p>
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold">
              {author[0]}
            </div>
            <div className="ml-4">
              <h4 className="font-semibold text-gray-800">{author}</h4>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
