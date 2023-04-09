import { Inter } from 'next/font/google';
import ChatBox from '@/components/ChatBox/ChatBox';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <ChatBox/>
  );
}
