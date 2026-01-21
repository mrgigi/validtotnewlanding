import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'ValidToT - Stop Guessing. Get Real Answers.'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#fffcf2',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'black',
            padding: '40px 80px',
            borderRadius: '20px',
            transform: 'rotate(-2deg)',
            boxShadow: '12px 12px 0px 0px rgba(0,0,0,0.2)',
          }}
        >
          <span
             style={{
               fontSize: 140,
               fontWeight: 900,
               color: '#ff00cc',
               letterSpacing: '-0.05em',
             }}
          >
            Valid
          </span>
          <span
            style={{
               fontSize: 140,
               fontWeight: 900,
               color: '#00ffff',
               letterSpacing: '-0.05em',
            }}
          >
            ToT
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
