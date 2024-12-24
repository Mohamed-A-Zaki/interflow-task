import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="flex justify-center gap-5 border-t-4 border-t-primary bg-primary/70 p-5 text-center text-white">
      عجبتك التجربة؟ انطلق بتجارتك اليوم مع سلة بسهولة و بدون أي عمولة!
      <Button className="bg-secondary p-5 text-primary hover:bg-secondary/70">
        انشئ متجرك مجانا
      </Button>
    </footer>
  );
}
