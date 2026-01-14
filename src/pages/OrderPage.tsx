import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle } from 'lucide-react';
import BlurText from '@/components/BlurText';
import RippleGrid from '@/components/RippleGrid';

const OrderPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    description: '',
    captcha: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Captcha validation
    if (formData.captcha !== '16') {
      setError('Неверный ответ на капчу');
      return;
    }

    // Here you would send to Telegram bot
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <main className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          </motion.div>
          <BlurText
            text="Заявка отправлена"
            delay={80}
            animateBy="words"
            direction="top"
            className="text-2xl md:text-3xl font-bold mb-4 justify-center"
          />
          <BlurText
            text="Мы свяжемся с вами в ближайшее время"
            delay={60}
            animateBy="words"
            direction="top"
            stepDuration={0.3}
            className="text-muted-foreground justify-center"
          />
        </div>
      </main>
    );
  }

  const formItemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    })
  };

  return (
    <main className="pt-20 md:pt-24 pb-12 md:pb-16 min-h-screen relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <RippleGrid
          enableRainbow={false}
          gridColor="#ffffff"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.3}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <BlurText
          text="Заказать"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 text-center justify-center"
        />
        <BlurText
          text="Расскажите о вашей идее — мы воплотим её в жизнь"
          delay={50}
          animateBy="words"
          direction="top"
          stepDuration={0.3}
          className="text-sm md:text-base text-muted-foreground text-center mb-8 md:mb-16 px-2 justify-center"
        />

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-4 md:space-y-6"
        >
          <motion.div
            className="space-y-2"
            variants={formItemVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <Label htmlFor="name" className="text-sm md:text-base">Имя</Label>
            <Input
              id="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-card border-border text-base"
            />
          </motion.div>

          <motion.div
            className="space-y-2"
            variants={formItemVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <Label htmlFor="contact" className="text-sm md:text-base">Телефон или Telegram</Label>
            <Input
              id="contact"
              placeholder="+7 999 123-45-67 или @username"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              required
              className="bg-card border-border text-base"
            />
          </motion.div>

          <motion.div
            className="space-y-2"
            variants={formItemVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <Label htmlFor="description" className="text-sm md:text-base">Краткое описание задачи</Label>
            <Textarea
              id="description"
              placeholder="Опишите вашу идею или задачу..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              rows={4}
              className="bg-card border-border resize-none text-base"
            />
          </motion.div>

          <motion.div
            className="space-y-2"
            variants={formItemVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <Label htmlFor="captcha" className="text-base md:text-lg">8 + 8 = ?</Label>
            <Input
              id="captcha"
              placeholder="Ответ"
              value={formData.captcha}
              onChange={(e) => setFormData({ ...formData, captcha: e.target.value })}
              required
              className="bg-card border-border w-24 md:w-32 text-base"
            />
            {error && (
              <p className="text-destructive text-xs md:text-sm">{error}</p>
            )}
          </motion.div>

          <motion.div
            variants={formItemVariants}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <Button type="submit" variant="hero" className="w-full text-sm md:text-base py-5 md:py-6">
              Отправить заявку
            </Button>
          </motion.div>
        </form>
      </div>
    </main>
  );
};

export default OrderPage;
