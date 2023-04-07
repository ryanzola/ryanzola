export default function Darkness({ clicked, menu, setMenu }) {
  return (
    <div className="bg-red-500 fixed inset-0">
      <h1>Hello Darkness</h1>

      <div className="" style={{ height: '720px', width: '720px', overflow: 'hidden' }}>
        <video src="/videos/sunset_loop.mp4" className="border border-black"></video>
      </div>


    </div>
  )
}