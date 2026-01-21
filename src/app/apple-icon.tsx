import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 100,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: 30,
          fontWeight: 900,
        }}
      >
        <span style={{ color: '#ff00cc' }}>V</span>
        <span style={{ color: '#00ffff' }}>T</span>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
