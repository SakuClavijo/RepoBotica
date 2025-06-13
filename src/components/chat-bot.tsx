import React from "react";
import { Card, CardBody, CardHeader, Button, Avatar, Input, ScrollShadow } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

interface QuickReply {
  id: string;
  text: string;
}

export const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "Bienvenido",
      text: "👋 ¡Hola! Soy Herbie, tu asistente de bienestar. ¿En qué puedo ayudarte hoy?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  
  const quickReplies: QuickReply[] = [
    { id: "products", text: "Recomendaciones de productos" },
    { id: "ingredients", text: "Información sobre los ingredientes" },
    { id: "shipping", text: "Envíos y devoluciones" },
    { id: "help", text: "Ayuda con un pedido" },
  ];

  // Scroll to bottom when messages change
  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Get bot response after a delay
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleQuickReply = (reply: QuickReply) => {
    handleSendMessage(reply.text);
  };

  const getBotResponse = (text: string): Message => {
    const lowerText = text.toLowerCase();
    let responseText = "";
    
    // Simple response logic based on keywords
    if (lowerText.includes("productos") || lowerText.includes("recommend")) {
      responseText = "Estaré encantada de recomendarte algunos productos. ¿Qué buscas? Tenemos aceites esenciales, tinturas, infusiones, bálsamos y productos para el baño.";
    } else if (lowerText.includes("aseites")) {
      responseText = "Nuestros aceites esenciales son 100% puros y de grado terapéutico. Los más populares son los de lavanda, árbol del té y eucalipto. Quieres saber más sobre alguno de ellos?";
    } else if (lowerText.includes("compras") || lowerText.includes("delivery")) {
      responseText = "Ofrecemos envío gratuito en pedidos superiores a 50 dólares. El envío estándar tarda entre 3 y 5 días laborables, y el envío exprés está disponible por un cargo adicional.";
    } else if (lowerText.includes("devoluciones") || lowerText.includes("refund")) {
      responseText = "Tenemos una garantía de satisfacción de 30 días. Si no estás satisfecho con tu compra, puedes devolverla y obtener un reembolso completo en un plazo de 30 días.";
    } else if (lowerText.includes("ingredientes") || lowerText.includes("organic")) {
      responseText = "Todos nuestros productos se elaboran con ingredientes ecológicos procedentes de proveedores de confianza. Nunca utilizamos conservantes, colorantes ni fragancias artificiales.";
    } else if (lowerText.includes("ayuda") || lowerText.includes("order")) {
      responseText = "Estaré encantada de ayudarle con su pedido. Indíqueme su número de pedido y comprobaré el estado por usted.";
    } else if (lowerText.includes("hola") || lowerText.includes("hi") || lowerText.includes("hey")) {
      responseText = "¡Hola! ¿En qué puedo ayudarle hoy con nuestros productos de botica?";
    } else if (lowerText.includes("graci")) {
      responseText = "De nada. ¿Puedo ayudarle en algo más?";
    } else {
      responseText = "No estoy seguro de entender. ¿Podría formular su pregunta de otro modo? O puede preguntar sobre nuestros productos, envíos o ingredientes.";
    }
    
    return {
      id: `bot-${Date.now()}`,
      text: responseText,
      sender: "bot",
      timestamp: new Date(),
    };
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-20 right-6 z-50 w-full max-w-sm"
        >
          <Card className="h-[500px] shadow-lg border border-divider">
            <CardHeader className="flex justify-between items-center bg-primary text-white">
              <div className="flex items-center gap-3">
                <Avatar
                  src="https://img.heroui.chat/image/avatar?w=200&h=200&u=bot"
                  size="sm"
                  className="border-2 border-white"
                />
                <div>
                  <p className="font-medium text-small">Herbie</p>
                  <p className="text-tiny opacity-80">Asistente Boticario</p>
                </div>
              </div>
              <Button
                isIconOnly
                variant="light"
                size="sm"
                onPress={onClose}
                className="text-white"
              >
                <Icon icon="lucide:minimize-2" />
              </Button>
            </CardHeader>
            <CardBody className="p-0 flex flex-col">
              <ScrollShadow className="flex-1 p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "user"
                          ? "bg-primary text-white rounded-br-none"
                          : "bg-default-100 text-foreground rounded-bl-none"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-[10px] mt-1 opacity-70 text-right">
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-default-100 rounded-lg rounded-bl-none p-3 max-w-[80%]">
                      <div className="flex gap-1 items-center">
                        <div className="w-2 h-2 rounded-full bg-default-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                        <div className="w-2 h-2 rounded-full bg-default-400 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                        <div className="w-2 h-2 rounded-full bg-default-400 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </ScrollShadow>
              
              {/* Quick replies */}
              {messages.length < 3 && (
                <div className="p-3 border-t border-divider">
                  <p className="text-tiny text-default-500 mb-2">Suggested questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply) => (
                      <Button
                        key={reply.id}
                        size="sm"
                        variant="flat"
                        color="primary"
                        onPress={() => handleQuickReply(reply)}
                      >
                        {reply.text}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Input area */}
              <div className="p-3 border-t border-divider">
                <form
                  className="flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage(inputValue);
                  }}
                >
                  <Input
                    fullWidth
                    placeholder="Type your message..."
                    value={inputValue}
                    onValueChange={setInputValue}
                    size="sm"
                    endContent={
                      <Button
                        isIconOnly
                        color="primary"
                        size="sm"
                        variant="light"
                        type="submit"
                        isDisabled={!inputValue.trim()}
                      >
                        <Icon icon="lucide:send" className="text-sm" />
                      </Button>
                    }
                  />
                </form>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};