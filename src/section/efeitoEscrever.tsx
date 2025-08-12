import { useState, useEffect } from 'react';

const EfeitoEscrever = () => {
  const phrases = [
    'String UserName = "James";',
    'Eu sou um Software Developer.',
    'Resolvo problemas por meio da tecnologia.',
    'I love to drive ideas to reality!'
  ];
  const [text, setText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100; // Velocidade mais rápida para apagar
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isTyping) {
      if (text.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Terminou de escrever, espera e começa a apagar
        setTimeout(() => setIsTyping(false), 1500);
      }
    } else {
      if (text.length > 0) {
        const timeout = setTimeout(() => {
          setText(text.substring(0, text.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Terminou de apagar, muda para a próxima frase
        setIsTyping(true);
        setCurrentPhraseIndex((prevIndex) => 
          (prevIndex + 1) % phrases.length
        );
      }
    }
  }, [text, currentPhraseIndex, isTyping, isDeleting]);

  return (
    <p className="text-sky-600 font-mono min-h-[24px]">
      {text}
      <span className="animate-pulse">|</span> {/* Cursor piscando */}
    </p>
  );
};

export default EfeitoEscrever;