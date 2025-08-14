import StaticGreeting from '../../components/StaticGreeting';
import ServerTime from '../../components/ServerTime';
import ClientCounter from '../../components/ClientCounter';
import BackendMessage from '../../components/BackendMessage';
import TestMessage from '../../components/TestMessage';
import SecondTest from '../../components/SecondTest';
import EffectTesting from '../../components/EffectTesting';
import StateTest from '../../components/StateTest';
import TailwindTest from '../../components/TailwindTest';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }} className='relative w-full h-screen'>
      <h1>Next.js Mixed Rendering Example</h1>
      <StaticGreeting />
      <ServerTime />
      <ClientCounter />
      <BackendMessage />
      <TestMessage />
      <SecondTest />
      <EffectTesting />
      <StateTest />
      <TailwindTest />
    </main>
  );
}
