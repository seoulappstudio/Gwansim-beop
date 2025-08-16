import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useForm, ValidationError } from "@formspree/react";

const EmailSignup = () => {
  const [state, handleSubmit] = useForm("manjgkza"); // Replace with your Formspree form ID
  const { toast } = useToast();

  // Handle Formspree success
  if (state.succeeded) {
    toast({
      title: "신청 완료!",
      description:
        "얼리 액세스 신청이 완료되었습니다. 서비스 출시 시 가장 먼저 알려드릴게요.",
    });
    // Optionally, you can reset the form or redirect here
    return (
      <div
        className="w-full max-w-md mx-auto animate-fade-in-up"
        style={{ animationDelay: "0.6s" }}
      >
        <p className="text-off-white/80 text-lg mb-6 text-center font-inter">
          신청해 주셔서 감사합니다!
        </p>
      </div>
    );
  }

  return (
    <div
      className="w-full max-w-md mx-auto animate-fade-in-up"
      style={{ animationDelay: "0.6s" }}
    >
      <p className="text-off-white/80 text-lg md:text-xl mb-6 text-center font-inter">
        가장 먼저 경험해 보세요.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="your-email@example.com"
            className="w-full px-6 py-4 text-base sm:text-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-xl 
                     text-white placeholder:text-white/50 focus:border-vibrant-pink focus:ring-2 
                     focus:ring-vibrant-pink/50 transition-all duration-300 font-inter"
            disabled={state.submitting}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        {/* Message field - optional for simple email signup */}
        {/*
        <div className="relative">
          <textarea
            id="message"
            name="message"
            placeholder="Your message (optional)"
            rows={4}
            className="w-full px-6 py-4 text-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-xl 
                       text-white placeholder:text-white/50 focus:border-vibrant-pink focus:ring-2 
                       focus:ring-vibrant-pink/50 transition-all duration-300 font-inter"
            disabled={state.submitting}
          ></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>
        */}

        <Button
          type="submit"
          disabled={state.submitting}
          className="w-full py-4 text-base sm:text-lg font-semibold bg-gradient-to-r from-vibrant-pink to-pink-500 
                   hover:from-vibrant-pink/90 hover:to-pink-500/90 text-white rounded-xl
                   transform hover:scale-105 transition-all duration-300 shadow-lg
                   hover:shadow-vibrant-pink/25 disabled:opacity-50 disabled:cursor-not-allowed
                   disabled:hover:scale-100 font-inter"
        >
          {state.submitting ? "신청 중..." : "AI에게 선물 추천받기 (무료)"}
        </Button>
      </form>
      <p className="text-off-white/60 text-sm mt-4 text-center font-inter">
        가장 먼저 특별한 추천을 받아보세요.
      </p>
    </div>
  );
};

export default EmailSignup;
