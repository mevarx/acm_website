'use client';

import dynamic from 'next/dynamic';

const Ribbons = dynamic(() => import('./Ribbons'), { ssr: false });

export default function RibbonsWrapper() {
  return (
    <div className="fixed inset-0 pointer-events-none z-40" style={{ width: '100vw', height: '100vh' }}>
      <Ribbons
        baseThickness={12}
        colors={['#FFC107']}
        speedMultiplier={0.47}
        maxAge={500}
        enableFade
        enableShaderEffect
      />
    </div>
  );
}
