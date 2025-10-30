import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

const Index = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const products: Product[] = [
    { id: 1, name: 'Платье летнее', price: 4500, category: 'women', image: 'https://cdn.poehali.dev/projects/9059906d-c75b-47eb-9ffa-7117866752ce/files/ddcc46fa-0912-451d-867c-bf604bdcf156.jpg' },
    { id: 2, name: 'Туфли классические', price: 6500, category: 'women', image: 'https://cdn.poehali.dev/projects/9059906d-c75b-47eb-9ffa-7117866752ce/files/ddcc46fa-0912-451d-867c-bf604bdcf156.jpg' },
    { id: 3, name: 'Блуза шёлковая', price: 3800, category: 'women', image: 'https://cdn.poehali.dev/projects/9059906d-c75b-47eb-9ffa-7117866752ce/files/ddcc46fa-0912-451d-867c-bf604bdcf156.jpg' },
    { id: 4, name: 'Босоножки летние', price: 4200, category: 'women', image: 'https://cdn.poehali.dev/projects/9059906d-c75b-47eb-9ffa-7117866752ce/files/ddcc46fa-0912-451d-867c-bf604bdcf156.jpg' },
    { id: 5, name: 'Футболка детская', price: 1200, category: 'kids', image: 'https://cdn.poehali.dev/projects/9059906d-c75b-47eb-9ffa-7117866752ce/files/35a86c7c-6dc4-45de-b4a5-741da8964336.jpg' },
    { id: 6, name: 'Кроссовки детские', price: 2800, category: 'kids', image: 'https://cdn.poehali.dev/projects/9059906d-c75b-47eb-9ffa-7117866752ce/files/35a86c7c-6dc4-45de-b4a5-741da8964336.jpg' },
    { id: 7, name: 'Джинсы детские', price: 2200, category: 'kids', image: 'https://cdn.poehali.dev/projects/9059906d-c75b-47eb-9ffa-7117866752ce/files/35a86c7c-6dc4-45de-b4a5-741da8964336.jpg' },
    { id: 8, name: 'Платье детское', price: 1800, category: 'kids', image: 'https://cdn.poehali.dev/projects/9059906d-c75b-47eb-9ffa-7117866752ce/files/35a86c7c-6dc4-45de-b4a5-741da8964336.jpg' },
  ];

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hilola
            </h1>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative hover-scale">
                  <Icon name="ShoppingCart" size={24} />
                  {cart.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-accent">
                      {cart.length}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg">
                <SheetHeader>
                  <SheetTitle className="text-2xl">Корзина</SheetTitle>
                </SheetHeader>
                <div className="mt-8 space-y-4">
                  {cart.length === 0 ? (
                    <p className="text-center text-muted-foreground py-8">Корзина пуста</p>
                  ) : (
                    <>
                      {cart.map((item, index) => (
                        <Card key={index} className="animate-fade-in">
                          <CardContent className="p-4 flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold">{item.name}</h3>
                              <p className="text-primary font-bold">{item.price} ₽</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeFromCart(index)}
                              className="hover:bg-destructive/10 hover:text-destructive"
                            >
                              <Icon name="Trash2" size={20} />
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                      <div className="pt-4 border-t">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-lg font-semibold">Итого:</span>
                          <span className="text-2xl font-bold text-primary">{totalPrice} ₽</span>
                        </div>
                        <Button className="w-full" size="lg">
                          Оформить заказ
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Стиль для всей <span className="text-primary">семьи</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Модная одежда и обувь с доставкой по всей стране
              </p>
              <Button size="lg" className="text-lg hover-scale">
                Смотреть каталог
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/9059906d-c75b-47eb-9ffa-7117866752ce/files/8176d280-374c-41d7-945c-791032d9e2e9.jpg"
                alt="Fashion"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="hover-scale"
            >
              Все товары
            </Button>
            <Button
              variant={selectedCategory === 'women' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('women')}
              className="hover-scale"
            >
              <Icon name="User" size={18} className="mr-2" />
              Женщинам
            </Button>
            <Button
              variant={selectedCategory === 'kids' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('kids')}
              className="hover-scale"
            >
              <Icon name="Baby" size={18} className="mr-2" />
              Детям
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="group hover:shadow-xl transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent">
                    {product.category === 'women' ? 'Женщинам' : 'Детям'}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                    <Button
                      onClick={() => addToCart(product)}
                      size="icon"
                      className="hover-scale"
                    >
                      <Icon name="Plus" size={20} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Hilola</h3>
              <p className="opacity-90">Магазин модной одежды и обуви для всей семьи</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <div className="space-y-2 opacity-90">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@hilola.shop
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Соцсети</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="hover:bg-white/20">
                  <Icon name="Instagram" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/20">
                  <Icon name="Facebook" size={24} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
