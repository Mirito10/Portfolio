import { Mail, MessageCircle, MapPin, Send, Linkedin, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { chatApi } from "../api/chatApi";


export const ContactSection = () => {

    const [mensajes, setMensajes] = useState([]);
    const [input, setInput] = useState("");

    const getCurrentTime = () =>
        new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });


    const handleSend = async () => {
        if (!input.trim()) return;

        console.log("USING API BASE URL:", chatApi.defaults.baseURL);

        const userMessage = {
            role: "user",
            content: input,
            time: getCurrentTime(),
        };

        setMensajes(prev => [...prev, userMessage]);
        setInput("");

        try {
            const history = [...mensajes, userMessage].map(({ role, content }) => ({
            role,
            content,
            }));

            const response = await chatApi.post("/chat", {
            message: input,
            history,
            });

            const botMessage = {
            role: "assistant",
            content: response.data.reply,
            time: getCurrentTime(),
            };

            setMensajes(prev => [...prev, botMessage]);
        } catch (error) {
            console.error("Error en la API:", error);
        }
    };

    return (
       <section id="contact" className="py-24 px-4 relative bg-secondary/30">

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email </h4>
                                    <a href="mailto:miritodev@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        miritodev@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MessageCircle className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> WhatsApp </h4>
                                    <a href="https://wa.me/50684609779" 
                                        target="_blank" 
                                        rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                    +506 8460-9779
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location </h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        San Jose, Costa Rica
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" target="_blank" rel="noopener noreferrer"
>
                                    <Linkedin />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    <motion.div className="flex flex-col h-[500px] max-h-[500px] w-full max-w-md rounded-xl border border-border shadow-lg overflow-hidden bg-card">
                        <div className="bg-primary text-primary-foreground p-3 font-semibold text-glow">
                            Ask me something
                        </div>

                        <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-background">
                            {mensajes.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`max-w-xs px-3 py-2 rounded-xl text-sm ${
                                    msg.role === "user"
                                        ? "ml-4 bg-primary text-primary-foreground"
                                        : "mr-4 bg-card text-foreground border border-border"

                                    }`}
                                >
                                    <div>
                                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                                    </div>
                                    <div
                                        className={`text-[8px] italic mt-1 ${
                                            msg.role === 'user' ? 'text-white text-right' : 'text-gray-500 text-left'
                                        }`}
                                    >Sent: {msg.time}</div>
                                </div>
                            ))}
                        </div>

                        <div className="p-2 border-t border-border flex items-center bg-card">
                            <input
                                type="text"
                                className="flex-1 p-2 text-sm rounded-xl
                                            bg-background border border-border
                                            text-foreground
                                            focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Message..."
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && handleSend()}
                            />
                            <button
                                onClick={handleSend}
                                className="ml-2 cosmic-button text-sm px-4"
                            >
                                Send
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
       </section> 
    )
}