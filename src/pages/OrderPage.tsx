import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle } from 'lucide-react';

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
        <div className="text-center opacity-0 animate-fade-in">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Заявка отправлена
          </h2>
          <p className="text-muted-foreground">
            Мы свяжемся с вами в ближайшее время
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center opacity-0 animate-fade-in">
          Заказать
        </h1>
        <p className="text-muted-foreground text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Расскажите о вашей идее — мы воплотим её в жизнь
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="space-y-2">
            <Label htmlFor="name">Имя</Label>
            <Input
              id="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-card border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact">Телефон или Telegram</Label>
            <Input
              id="contact"
              placeholder="+7 999 123-45-67 или @username"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              required
              className="bg-card border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Краткое описание задачи</Label>
            <Textarea
              id="description"
              placeholder="Опишите вашу идею или задачу..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              rows={5}
              className="bg-card border-border resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="captcha">8 + 8 = ?</Label>
            <Input
              id="captcha"
              placeholder="Введите ответ"
              value={formData.captcha}
              onChange={(e) => setFormData({ ...formData, captcha: e.target.value })}
              required
              className="bg-card border-border w-32"
            />
            {error && (
              <p className="text-destructive text-sm">{error}</p>
            )}
          </div>

          <Button type="submit" variant="hero" className="w-full">
            Отправить заявку
          </Button>
        </form>
      </div>
    </main>
  );
};

export default OrderPage;
